document.getElementById("submit-button").addEventListener("click", function() {
    // sukurkite div elementą, kuriame bus talpinama forma
    let formDiv = document.createElement("div");

    // sukurkite teksto lauką
    let textInput = document.createElement("input");
    textInput.type = "text";
    textInput.name = "textInput";
    textInput.placeholder = "Įveskite tekstą";

    // sukurkite pasirinkimo lauką
    let selectInput = document.createElement("select");
    selectInput.name = "selectInput";

    // sukurkite kelis pasirinkimo elementus
    let option1 = document.createElement("option");
    option1.value = "option1";
    option1.text = "Pasirinkimas 1";
    selectInput.add(option1);

    let option2 = document.createElement("option");
    option2.value = "option2";
    option2.text = "Pasirinkimas 2";
    selectInput.add(option2);

    // įterpkite teksto lauką ir pasirinkimo lauką į div elementą
    formDiv.appendChild(textInput);
    formDiv.appendChild(selectInput);

    // įterpkite div elementą su forma į dokumentą
    document.body.appendChild(formDiv);
});