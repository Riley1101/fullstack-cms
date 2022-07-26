const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  customerName: {
    required: true,
    type: String,
  },
  salesPerson: {
    required: true,
    type: String,
  },
  note: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  soldProducts: [
    {
      name: String,
      amount: Number,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Data", dataSchema);
