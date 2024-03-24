const Expense = require("../model/expense");
exports.createExpense = async (req, res) => {
  await Expense.find({})
    .sort({ _id: -1 })
    .limit(1)
    .then(async (filterno) => {
      function nextnum(num) {
        num += 1;
        return num;
      }
      await Expense.create({
        date: req.body.date,
        amount: req.body.amount,
        description: req.body.description,
        serialNumber:
          filterno.length <= 0 ? "001" : nextnum(filterno[0].serialNumber),
      })
        .then(async (response) => {
          // console.log("Data Added Successfully!");
          await res.status(200).send("Data Added Successfully!");
        })
        .catch(async (err) => {
          // console.log("Data Not Added");
          await res.status(404).send("Data Not Added");
          console.log(err);
        });
    });
};
exports.getExpense = async (req, res) => {
  await Expense.find({}, {})
    .then((get) => {
      // console.log("get all documents");
      res.status(200).send(get);
    })
    .catch((err) => {
      // console.log("erro in get");
      res.status(404).send("Data not Found");
      console.log(err);
    });
};
