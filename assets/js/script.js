const acordeonTriggers = document.querySelectorAll(".acordeon .trigger");
acordeonTriggers.forEach(n => {
    n.addEventListener("click", e => {
        const o = n.parentElement;
        o.classList.contains("open") ? o.classList.remove("open") : o.classList.add("open")
    })
});



const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if (currentSlide === slider.length - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if (currentSlide === 0) {
        currentSlide = slider.length - 1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

currentSlide = currentSlide + 1
currentSlide = currentSlide - 1


function carregar() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/grade-portfolio.css";
    link.defer = true;
    document.head.appendChild(link);

    link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";
    link.integrity = "sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";
    link.defer = true;
    document.head.appendChild(link);

    const nameSite = document.getElementsByClassName('name-site')
    const h1 = document.getElementsByClassName('h1')

    h1[0].innerHTML = '\n                <div class="word">\n                    <p class="letter2">O</p>\n                    <p class="letter2">l</p>\n                    <p class="letter2">a</p>\n     <p class="letter2">,</p>\n                      </div>\n                <div class="word">\n                    <p class="letter2">m</p>\n                    <p class="letter2">e</p>\n                    <p class="letter2 ">u</p>\n                              <p class="letter2 space">n</p>\n                    <p class="letter2">o</p>\n                    <p class="letter2">m</p>\n                    <p class="letter2">e</p>\n                    <p class="letter2 space">é</p>\n                </div>\n                <div class="word">\n                    <p class="letter2">S</p>\n                    <p class="letter2">e</p>\n                    <p class="letter2">v</p>\n                    <p class="letter2">e</p>\n                    <p class="letter2">r</p>\n                    <p class="letter2">o</p>\n                </div>\n            ';
    nameSite[0].innerHTML = '\n        <p class="letter">S</p>\n        <p class="letter">e</p>\n        <p class="letter">v</p>\n        <p class="letter">e</p>\n        <p class="letter">r</p>\n        <p class="letter espaço">o</p>\n        <p class="letter">d</p>\n        <p class="letter">e</p>\n        <p class="letter">v</p>\n    '
}


function loadImage() {
    var images = document.getElementsByClassName('imgpj');
    var images2 = document.getElementsByClassName('thumb');

    var imageSources = ['./assets/img/img-projects/0-treco.png', './assets/img/img-projects/pokedex.webp', './assets/img/img-projects/clima.webp', './assets/img/img-projects/calculadora.webp',
        './assets/img/img-projects/jogo-da-velha.webp', './assets/img/img-projects/gitFind.webp', './assets/img/img-projects/conversor.webp', './assets/img/img-projects/intagra-clone.webp',
        './assets/img/img-projects/portfolio.webp'];

    for (var i = 0; i < images.length; i++) {
        images[i].src = imageSources[i];

    }
    for (var i = 0; i < images2.length; i++) {
        images2[i].src = imageSources[i];

    }


}
