const trigger = document.querySelector('#abaidiomas .trigger');
const languages = document.querySelector('#abaidiomas div .languages');
const personal = document.getElementById('pernonal-item');
const trecoText = document.querySelector('p.description-item-grade');
const pokedexText = document.querySelector('#pokedex-grade div p');
const climaText = document.querySelector('#clima-grade div p');
const climaTitleText = document.querySelector('#clima-grade h2');
const calculadoraText = document.querySelector('#calculadora-grade');
const jogoDaVelhaText = document.querySelector('#jogoDaVelha-grade');
const GitFindText = document.querySelector('#GitFind-grade');
const conversorText = document.querySelector('#converdor-coin-grade');
const instagramText = document.querySelector('#instagram-clone-grade');
const portfolioBasicText = document.querySelector('#basic-portfolio-grade');
const messageTextGhostTranslate = document.getElementById('message-text-ghost');

let pessoaString = localStorage.getItem('lngs1');
const lngs1 = { ingles: 'off' };
if (JSON.parse(pessoaString)) {
    lngs1.ingles = JSON.parse(pessoaString);
}





function langugeChange() {
    var optionsList = document.getElementById("optionsList");
    if (optionsList.style.display === "none") {
        optionsList.style.display = "block";
    } else {
        optionsList.style.display = "none";
    }
}

document.getElementById("optionsList").addEventListener("change", function () {
    let lingua = this.getAttribute("data-value");
    languageChanged(lingua);

});

var options = document.getElementById("optionsList").getElementsByTagName("li");

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
        document.getElementById("selectedOption").innerHTML = this.innerHTML;
        var selectedValue = this.getAttribute("value");
        optionsList.setAttribute("data-value", selectedValue);
        optionsList.setAttribute("data-text", this.innerHTML);
        optionsList.dispatchEvent(new Event("change"));

    });
}





function languageChanged(lingua) {


    if (lingua == 'ingles') {
        ingles()
        lngs1.ingles = 'on'
        localStorage.setItem('lngs1', JSON.stringify(lngs1));



    } else {
        portugues()
        lngs1.ingles = 'off';
        localStorage.setItem('lngs1', JSON.stringify(lngs1));

    }
}



function startLanguage() {



    if (lngs1.ingles === 'on') {
        ingles();


    } else {
        portugues();
    }




}


