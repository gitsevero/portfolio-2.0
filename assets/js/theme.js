function themme() {
    if (document.getElementById('themeWite').checked == true) {

        document.getElementById('theme').href = "/assets/css/themeWite.css";
    } else if (document.getElementById('themeBlack').checked == true) {

        document.getElementById('theme').href = "/assets/css/themeBlack.css";
    } else {
        document.getElementById('theme').href = "/assets/css/themeDefault.css";

    }
}

function aba() {
    if (document.querySelector('.themeDiv').style.display == 'flex') {
        document.querySelector('.themeDiv').style.display = 'none'
    } else {

        document.querySelector('.themeDiv').style.display = 'flex'
    }
};