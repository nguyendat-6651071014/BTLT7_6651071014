function insert_Row() {
    var table = document.getElementById("sampleTable");
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var rowCount = table.rows.length;
    cell1.innerHTML = "Row" + rowCount + " cell1";
    cell2.innerHTML = "Row" + rowCount + " cell2";
}
