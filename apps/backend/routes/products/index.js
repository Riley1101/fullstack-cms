const express = require("express");
const router = express.Router();
const sampleProducts = require("../../models/products");
/*
  GET ALL PRODUCTS
*/
router.get("/", (req, res) => {
  res.json(sampleProducts);
});

/*
  POST ALL PRODUCTS
*/
router.post("/", (req, res) => {
  res.status(405).json({ message: "Method Not Allowed" });
});

/*
  GET INVOICE BY ID PRODUCTS
*/
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let item = sampleProducts.filter((itm) => itm.id === Number(id));
  res.json(item);
});

/*
  PUT PRODUCT BY ID
*/
router.patch("/:id", (req, res) => {
  res.status(405).json({ message: "Method Not Allowed" });
});

/*
  DELETE PRODUCT BY ID
*/
router.delete("/:id", (req, res) => {
  res.status(405).json({ message: "Method Not Allowed" });
});
module.exports = router;
