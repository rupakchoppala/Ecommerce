"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let address = {
    firstName: "Rupak",
    lastName: "Choppala",
    street: "123 Main St",
    aptNumber: "A1",
    state: "Andhra Pradesh",
    zip: "521201"
};
// GET - fetch address
router.get("/", (req, res) => {
    res.json(address);
});
// PUT - update address
router.put("/", (req, res) => {
    const newAddress = req.body;
    address = Object.assign(Object.assign({}, address), newAddress);
    res.json({ message: "Address updated", address });
});
exports.default = router;
