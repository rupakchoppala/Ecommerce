import { Router } from "express";
import { Address } from "../types/Address";

const router = Router();

let address: Address = {
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
  const newAddress = req.body as Address;
  address = { ...address, ...newAddress };
  res.json({ message: "Address updated", address });
});

export default router;
