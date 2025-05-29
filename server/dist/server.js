"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const products_1 = require("./data/products");
const testimonilas_1 = require("./data/testimonilas");
const contacts_1 = require("./data/contacts");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const razorpay_1 = __importDefault(require("razorpay"));
const app = (0, express_1.default)();
const PORT = 5000;
const address_1 = __importDefault(require("./routes/address"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
// Path to the file where orders will be saved
const ordersFilePath = path_1.default.join(__dirname, "orders.json");
// Helper to read existing orders or create empty array
const readOrders = () => {
    try {
        const data = fs_1.default.readFileSync(ordersFilePath, "utf-8");
        return JSON.parse(data);
    }
    catch (_a) {
        return [];
    }
};
app.post("/api/orders", (req, res) => {
    const order = req.body;
    // Read existing orders
    const orders = readOrders();
    // Add new order with timestamp and id (simple example)
    const newOrder = Object.assign({ id: orders.length + 1, timestamp: new Date() }, order);
    orders.push(newOrder);
    // Save updated orders array to file
    fs_1.default.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    res.status(201).json({ message: "Order saved successfully", order: newOrder });
});
// Endpoints
app.get('/api/products', (req, res) => {
    res.json(products_1.products);
});
app.get('/api/products/:id', (req, res) => {
    const product = products_1.products.find(p => p.id === req.params.id);
    product ? res.json(product) : res.status(404).json({ message: 'Not found' });
});
app.get('/api/testimonials', (req, res) => {
    res.json(testimonilas_1.testimonials);
});
app.get('/api/contact', (req, res) => {
    res.json(contacts_1.contact);
});
app.post('/api/waitlist', (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ message: 'Email is required' });
        return;
    }
    res.json({ message: `Email ${email} added to waitlist successfully` });
});
//Razorpay Config
const razorpay = new razorpay_1.default({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
app.post("/api/payment/orders", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount } = req.body;
        const order = yield razorpay.orders.create({
            amount: amount,
            currency: "INR",
            receipt: "receipt_order_" + new Date().getTime(),
        });
        res.json(order);
    }
    catch (err) {
        res.status(500).json({ error: "Order creation failed" });
    }
}));
app.post("/api/payment/verify", (req, res) => {
    console.log("Payment Verified: ", req.body);
    res.send({ success: true });
});
// Error Handling
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.stack || err.message);
    res.status(500).json({
        message: "Something went wrong!",
    });
});
app.use("/api/address", address_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
