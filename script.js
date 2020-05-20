
var btn = document.getElementById("btn_id")
btn.addEventListener('click', make_row)
var table = document.getElementById("table_id")
var obj = {
    income: [],
    expense: []
}
var total = document.getElementById("total")
function make_row() {
    var row = table.insertRow()
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    cell1.innerHTML = document.getElementById("date_entry").value
    cell2.innerHTML = document.getElementById("selc_type").value
    cell3.innerHTML = document.getElementById("detail_id").value



    if (document.getElementById("selc_type").value == "Income") {
        cell4.innerHTML = "+" + document.getElementById("amount_id").value
        cell4.style.cssText = "color: teal; "
        obj["income"].push(Number(document.getElementById("amount_id").value))

    }
    else if (document.getElementById("selc_type").value == "Expense") {
        cell4.innerHTML = "-" + document.getElementById("amount_id").value
        cell4.style.cssText = "color: #e00808; "
        obj["expense"].push(Number(document.getElementById("amount_id").value))
    }

    var sum_income = obj["income"].reduce(function (a, b) {
        return a + b;
    }, 0);

    var sum_expense = obj["expense"].reduce(function (a, b) {
        return a + b;
    }, 0);

    if (sum_income - sum_expense > 0) {
        total.style.cssText = "background-color: teal; "
    }
    else {
        total.style.cssText = "background-color: #e00808; "

    }
    total.textContent = "Total : " + (sum_income - sum_expense)
}

