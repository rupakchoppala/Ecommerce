import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { products } from './data/products.js';
import { testimonials } from './data/testimonilas.js';
import { contact } from './data/contacts.js';
import path from 'path';
import fs from 'fs';
import Razorpay from 'razorpay';
const app = express();
const PORT = 5000;
import addressRouter from "./routes/address.js";
app.use(cors({
    origin: 'https://ecommerce-3-q5sl.onrender.com'
}));
;
app.use(express.json());
//const __dirname = path.resolve();
//app.use('/uploads', express.static(path.join(__dirname, 'dist/uploads')));
// Path to the file where orders will be saved
const ordersFilePath = path.join(__dirname, "orders.json");
// Helper to read existing orders or create empty array
const readOrders = () => {
    try {
        const data = fs.readFileSync(ordersFilePath, "utf-8");
        return JSON.parse(data);
    }
    catch {
        return [];
    }
};
app.post("/api/orders", (req, res) => {
    const order = req.body;
    // Read existing orders
    const orders = readOrders();
    // Add new order with timestamp and id (simple example)
    const newOrder = { id: orders.length + 1, timestamp: new Date(), ...order };
    orders.push(newOrder);
    // Save updated orders array to file
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    res.status(201).json({ message: "Order saved successfully", order: newOrder });
});
// Endpoints
app.get('/api/products', (req, res) => {
    res.json(products);
});
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    product ? res.json(product) : res.status(404).json({ message: 'Not found' });
});
app.get('/api/testimonials', (req, res) => {
    res.json(testimonials);
});
app.get('/api/contact', (req, res) => {
    res.json(contact);
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
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
app.post("/api/payment/orders", async (req, res) => {
    try {
        const { amount } = req.body;
        const order = await razorpay.orders.create({
            amount: amount,
            currency: "INR",
            receipt: "receipt_order_" + new Date().getTime(),
        });
        res.json(order);
    }
    catch (err) {
        res.status(500).json({ error: "Order creation failed" });
    }
});
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
app.use("/api/address", addressRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
