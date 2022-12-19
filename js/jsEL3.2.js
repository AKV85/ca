
    // Get the form and table elements
    let form = document.getElementById("add-row-form");
    let table = document.getElementById("my-table");

    // Add an event listener to the form to add a new row to the table when submitted
    form.addEventListener("submit", function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the form data
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-textarea").value;

    // Create a new row element
    let newRow = document.createElement("tr");

    // Create new cell elements for the row
    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let messageCell = document.createElement("td");

    // Set the cell values to the form data
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    messageCell.innerHTML = message;

    // Add the cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(messageCell);

    // Add the row to the table
    table.appendChild(newRow);
});
