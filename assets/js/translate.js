const trigger = document.querySelector('#abaidiomas .trigger');
const languages = document.querySelector('#abaidiomas div .languages');


document.getElementById("selector").addEventListener("click", function () {
    var optionsList = document.getElementById("optionsList");
    if (optionsList.style.display === "none") {
        optionsList.style.display = "block";
    } else {
        optionsList.style.display = "none";
    }
});

var options = document.getElementById("optionsList").getElementsByTagName("li");

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {

        document.getElementById("selectedOption").innerHTML = this.innerHTML;
        document.getElementById("optionsList").style.display = "none";

        var selectedValue = this.getAttribute("value");
        optionsList.setAttribute("data-value", selectedValue);
        optionsList.setAttribute("data-text", this.innerHTML);
        optionsList.dispatchEvent(new Event("change"));
    });
}

document.getElementById("optionsList").addEventListener("change", function () {
    let lingua = this.getAttribute("data-value");
    languageChanged(lingua);
    console.log("Texto selecionado: " + this.getAttribute("data-text"));
});



function languageChanged(lingua) {


    if (lingua == 'ingles') {
        ingles()

    } else {
        portugues()

    }
}


