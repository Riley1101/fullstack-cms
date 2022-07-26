const express = require("express");
const rootRouter = express.Router();
const invoiceRoutes = require("./invoices");
const productRoutes = require("./products");

rootRouter.use("/invoices", invoiceRoutes);
rootRouter.use("/products", productRoutes);
module.exports = rootRouter;
