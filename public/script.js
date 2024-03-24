async function fechdata() {
  try {
    const URL = `http://localhost:5000/api/expensecal`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      cache: "default",
    });
    const getData = await response.json();
    // console.log("get success");
    // console.log(getData);
    getData.forEach((element) => {
      // console.log(element);
      var table = document.getElementById("expenseTableBody");
      var newRow = table.insertRow(-1);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      cell1.innerHTML = element.serialNumber;
      cell2.innerHTML = element.date;
      cell3.innerHTML = element.amount;
      cell4.innerHTML = element.description;
      // var table = document.getElementById("expenseTableBody");
      var total = 0;
      for (var i = 0; i < table.rows.length; i++) {
        total += parseInt(table.rows[i].cells[2].innerHTML.replace("$", ""));
      }
      document.getElementById("totalAmount").innerHTML = "$" + total;
      // }
    });
    // addExpense(alldata);
    return getData;
  } catch (error) {
    console.log("get Error");
    console.error(error);
  }
}

fechdata();

document
  .getElementById("expenseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    var description = document.getElementById("description").value;
    // var serialNumber =
    //   document.getElementById("expenseTableBody").rows.length + 1;
    // Reset form fields
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    const allExpense = {
      date: date,
      amount: amount,
      description: description,
      // serialNumber: serialNumber,
    };
    const URL = `http://localhost:5000/api/expensecal`;
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allExpense),
    })
      .then((res) => {
        console.log("Data  posted successfully!");
        // console.log(res);
      })
      .catch((err) => {
        console.log("Error in posting data");
        // console.log(err);
      });
  });
