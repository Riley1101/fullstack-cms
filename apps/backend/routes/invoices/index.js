const express = require("express");
const router = express.Router();
const Model = require("../../models/invoices");
const sampleProduct = require("../../models/products");
/*
  GET ALL INVOICES
*/
router.get("/", async (req, res) => {
  let limit = 7;
  if (req.query.per_page) {
    limit = req.query.per_page;
  }
  try {
    const data = await Model.find().sort({ date: "desc" }).limit(limit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*
  POST AN INVOICES
*/
router.post("/", (req, res) => {
  let newData = {
    customerName: req.body.customerName,
    salesPerson: req.body.salesPerson,
    notes: req.body.notes,
  };
  let product = req.body.product;
  let amount = req.body.amount;
  if (product && amount) {
    let order = sampleProduct.find((item) => item.id === Number(product));
    newData["soldProducts"] = {
      name: order.name,
      price: order.price,
      amount: amount,
    };
  }
  try {
    const data = new Model(newData);
    data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*
  GET INVOICE BY ID INVOICES
*/
router.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*
  PUT INVOICE BY ID
*/
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*
  DELETE INVOICE BY ID
*/
router.delete("/:id", async (req, res) => {
  res.send("Delete by ID API");
});
module.exports = router;
