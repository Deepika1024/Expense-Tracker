const mongoose = require("mongoose");
const Expense = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Expense", Expense);
