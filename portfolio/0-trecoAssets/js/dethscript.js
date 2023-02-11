// Defina sua chave de API do OpenAI
const apiKey = ''
const alerta = document.getElementById('alerta')
const mensagemDeMorte = document.getElementById('lost')
let startTime;
const inputao = document.querySelectorAll('.letter-input');

let palavraChave = 'bola'
const createInputs = document.getElementById('letter-inputs')



// Defina a URL da API
const apiUrl = 'https://api.openai.com/v1/completions';


// Cria a função para fazer a solicitação
function generateWords() {

    // Defina o texto de entrada
    const prompt = 'gere uma palavra comum aleatória';

    // Defina as configurações opcionais
    const options = {
        temperature: .5, // Controla a criatividade da resposta
        max_tokens: 10, // Controla o tamanho da resposta
        n: 1, // Controla o número de respostas geradas
    };

    // Cria o corpo da solicitação
    const requestBody = JSON.stringify({
        prompt: prompt,
        max_tokens: options.max_tokens,
        temperature: options.temperature,
        n: options.n,
        model: "text-davinci-003"
    });

    // Configuração da solicitação

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: requestBody
    };

    let container = document.getElementById("game-form");
    let contador = 0;

    fetch(apiUrl, requestOptions)


        .then(response => response.json())
        .then(data => {

            // Trata a resposta

            const text = data.choices[0].text;

            // filtrando a palavra
            let string = text;
            let letras = string.split('').filter(function (letra) {
                return /[a-zA-Z\u00C0-\u017F]/.test(letra);
            });


            // retornando em um array
            // tornado o array e uma palavra
            palavraChave = letras.join("");



            container.innerHTML = `<button type="submit" id="submit"></button>`
            contador = 0;


            // crinado os inputs de acordo com a quantidade de letras dessa palavras
            letras.forEach(function (letra) {
                contador += 1;
                container.innerHTML += `  <input type="text" maxlength="1" pattern="[a-zA-Z\u00C0-\u017F]*" oninput="nextInput(this)"  class="letter-input" tabindex="${contador}" >`
            });


            palavraChave = palavraChave.toLowerCase();



            return palavraChave


        })




        .catch(error => {
            console.error(error);
        });

}
// criando os inputs








// MANIPULANDO OS INPUTS
let form = document.getElementById("game-form");
let zy = 4;

form.addEventListener("submit", function (e) {
    e.preventDefault();


    let inputs = document.getElementsByClassName("letter-input");

    // SE ALGUM IMPUT ESTIVER VAZIO 
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }
    }






    const array = Array.from(inputs)


    let palavras = ''



    // TRASNFORMA AS LETRAS DO INPUT  EM UMA PALAVRA
    array.forEach(function (e) {

        palavras += `${e.value}`
        e.value = '';

    });


    palavras = palavras.toLowerCase();



    // COMPARA A PALAVRA VINDA DOS INPUT COM A PALAVRA SECRETA  
    if (palavras === palavraChave) {

        nivel += 1;
        nvtext.innerHTML = nivel;
        reset();

    } else {

        resetCountdown();
        resetDeathLine();



        // TORNANDO A palavraChave EM ARRAY DE LETRAS
        let arrayDosInputs = palavras.split('');
        let arrayB = palavraChave.split('');


        // VERIFICA SE ALGUM DOS INPUTS ESTA NA PALAVRA CHAVE

        let historicalLetter = document.getElementById("historical-letter");
        if (historicalLetter) {
            let count = 0;
            arrayDosInputs.forEach((element, index) => {
                count++;
                if (arrayB.includes(element) && arrayB.indexOf(element) === index) {
                    let span = document.createElement("span");
                    span.innerHTML = element;
                    span.classList.add("blue-background");
                    historicalLetter.appendChild(span);

                } else if (arrayB.includes(element)) {

                    let span = document.createElement("span");
                    span.innerHTML = element;
                    span.classList.add("green-background");
                    historicalLetter.appendChild(span);

                } else {
                    let span = document.createElement("span");
                    span.innerHTML = element;
                    span.classList.add("red-background");
                    historicalLetter.appendChild(span);
                }
            }); if (count > 0) {
                let br = document.createElement("br");
                historicalLetter.appendChild(br);
            }
        }

        // REMOVE UMA VIDA NAS IMG 
        lostLife();
        // SE NAO ESTIVER  NA ULTIMA VIDA MORRE
    }





});
//Função para passar automaticamente para o próximo input
function nextInput(input) {
    let value = input.value;
    let isLetter = /^[a-zA-ZÀ-ſ]*$/.test(value);
    if (input.value !== "") {
        if (isLetter) {
            let nextInput = input.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
        } else {
            alert('SOMENTE LETRAS')
            input.value = "";


        }
    } else {
        let prevInput = input.previousElementSibling;
        if (prevInput) {
            prevInput.focus();
        }
    }

}

const gameForm = document.getElementById("game-form");
gameForm.addEventListener("keydown", function (event) {
    let currentInput = document.activeElement;
    if (event.keyCode === 37) {
        let prevInput = currentInput.previousElementSibling;
        if (prevInput) {
            prevInput.focus();
        }
    } else if (event.keyCode === 39) {
        let nextInput = currentInput.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
});







// ----------------------------------------------------------------------
// !!! FUNCAO DAS DICAS !!!!


let dica = ''
let palavradica = 'nao deu'
const numberDica = document.getElementById('numberDica')
const dicacase = document.getElementById('dica');

numberDica.innerHTML = 2;

let numberDicaInterno = 2;
function criandoDica() {
    if (numberDicaInterno > 1) {
        numberDicaInterno -= 1;

        numberDica.innerHTML -= 1;

        let palavraChavedica = palavraChave.split('');
        let letraDaDica = palavraChavedica[1];
        letraDaDica = letraDaDica.toUpperCase();

        let dicaPrimeiraLetra = `a segunda letra é "${letraDaDica}"`;

        const str = dicaPrimeiraLetra.split('');

        (function animate() {
            str.length > 0 ? dicacase.innerHTML += str.shift() : clearTimeout(running);
            var running = setTimeout(animate, 90);

        })();




    } else if (numberDicaInterno > 0) {
        numberDicaInterno -= 1;

        numberDica.innerHTML -= 1;

        let palavraDica1 = palavraChave

        const prompt = `diga o que é com poucas  palavras  a palavra '${palavraDica1}' `;

        // Defina as configurações opcionais
        const options = {
            temperature: 1, // Controla a criatividade da resposta
            max_tokens: 30, // Controla o tamanho da resposta
            n: 1, // Controla o número de respostas geradas
        };

        // Cria o corpo da solicitação
        const requestBody = JSON.stringify({
            prompt: prompt,
            max_tokens: options.max_tokens,
            temperature: options.temperature,
            n: options.n,
            model: "text-davinci-001"
        });

        // Configuração da solicitação
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: requestBody
        };



        // Executa a solicitação
        fetch(apiUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                // Trata a resposta


                const text1 = data.choices[0].text;

                palavradica = text1

                let frase = palavradica;
                let palavrafiltro = `${palavraDica1}`;


                frase = frase.replace(new RegExp(palavrafiltro, "gi"), function replacer(match) {
                    return match.replace(/./g, "x");
                });
                // "Este é um xxxxxx de string com uma palavra a ser filtrada"



                const str = frase.split('');
                dicacase.innerHTML += '<br></br>';

                (function animate() {
                    str.length > 0 ? dicacase.innerHTML += str.shift() : clearTimeout(running);
                    var running = setTimeout(animate, 90);
                })();



            })




            .catch(error => {
                console.error(error);
            });
    } else {
        alert('VOÇÊ NÃO TEM MAIS DICAS!')
    }



}



function alert(Alert) {
    alerta.innerHTML = `${Alert}`
    setInterval(function () {
        alerta.innerHTML = '';
    }, 5000);


}
function reset() {
    mensagemCounter();
    deleteHistorico();
    deathDisplay();
    generateWords();
    setTimeout(function () {
        deathDisplay();
        resetCountdown()
        deleteMensagemCounter();
        startHistorico();



    }, 10000);


}
function lostLife() {
    if (zy === 1) {

        resetMorreu();
        clearInterval(intervalId);
    } else {
        clearInterval(intervalId);
        resetCountdown();
        let imgElements = document.querySelectorAll("#vidas img");
        let imgArray = Array.from(imgElements);
        let vidas = document.querySelector("#vidas");
        imgArray.pop();
        let imgToRemove = imgArray[imgArray.length - 1];
        vidas.removeChild(imgToRemove);
        zy -= 1;
    }



};
function resetMorreu() {
    clearInterval(intervalId);
    div.style.display = 'none'
    stopCountdown();
    deleteHistorico();
    clearInputs();
    detahMessage()

};
function resetDeathLine() {

    let dea = document.getElementById('deadline')
    let dio = dea.innerHTML;
    dea.innerHTML = '';
    dea.innerHTML = dio;

};

function clearInputs() {
    let container = document.getElementById("game-form");
    container.innerHTML = ''

}
var cronus = 0;
let cronId;

function startTimer() {
    cronus = 0;
    cronId;

    cronId = setInterval(function () {

        cronus++;

    }, 1000);
}

function detahMessage() {
    display.style.display = ''
    clearInterval(intervalId);
    dicacase.innerHTML = '';
    let crons = cronus - (nivel * 10);
    clearInterval(cronId);
    mensagemDeMorte.innerHTML = `    <div id="lost-message">
    <p> Parabens você foi até o nivel:${nivel}</p>
    <p>a palavra secreta era "${palavraChave}"</p>
</div>
<div id="details">
    <p>voce jogou durante ${crons} segundos</p>
</div>

<button id="reset-game" onclick="startIntroGame()" class="custom-btn btn-3"><span>recomeçar</span></button>

`
    mensagemDeMorte.style.display = 'flex'


}

function clearDeathMMessage() {
    mensagemDeMorte.innerHTML = ''
    mensagemDeMorte.style.display = 'none'

}
const form1 = document.querySelector("form");
form1.addEventListener("keydown", function (event) {
    if (event.target.tagName === "INPUT" && (event.key === "Delete" || event.key === "Backspace")) {
        if (event.target.value === "") {
            event.target.previousElementSibling.focus();
        } else {
            event.target.value = "";
        }
    }
});







