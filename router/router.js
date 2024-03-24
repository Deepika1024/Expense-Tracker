const Router = require("express").Router();
const expense = require("../controller/expense");
Router.route("/expensecal").post(expense.createExpense).get(expense.getExpense);
module.exports = Router;
