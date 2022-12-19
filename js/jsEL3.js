document.getElementById("addRowButton").addEventListener("click", function(event) {
    // Nutraukia formos pateikimo veiksmą
    event.preventDefault();

    // Gauna įvestus duomenis iš formos laukų
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;

    // Sukuria naują lentelės eilutę
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = input1;
    cell2.innerHTML = input2;
    cell3.innerHTML = input3;
});
