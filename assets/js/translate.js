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

        document.getElementById('sobremim').innerHTML = `<p class="about"> Hi, my name is Thierry Severo front-end developer focused on developing and optimizing website and app interfaces and improving user experience. I am a Systems Analysis and Development student at Cruzeiro do Sul University. I started studying to be a front-end developer in October 2022 and am committed to acquiring the necessary skills to become a qualified professional in the field.
        </p><p class="about">Although I don't have professional experience yet, I developed some academic projects that allowed me to practice my coding skills and improve my understanding of web development concepts. I am always looking for new challenges and opportunities to learn and grow as a developer.
        </p> <p class="about">I currently live in Uruguaiana, Rio Grande do Sul and am 23 years old. I am willing to work as a team, seeking to develop creative and innovative projects, and helping the company achieve its goals.
        </p><p class="about"> Thank you for your consideration and I am eager to discuss how I can contribute to your development team. </p>`;

        document.getElementById("ola").innerHTML = `
        <div class="word">
            <p class="letter2">H</p>
            <p class="letter2">i</p>
            <p class="letter2">,</p>
        </div>
        <div class="word">
            <p class="letter2">m</p>
            <p class="letter2">y</p>
            <p class="letter2 space"> </p>
            <p class="letter2">n</p>
            <p class="letter2">a</p>
            <p class="letter2">m</p>
            <p class="letter2">e</p>
            
            <p class="letter2 space">i</p>
            <p class="letter2">s</p>
        </div>
        <div class="word">
            <p class="letter2">S</p>
            <p class="letter2">e</p>
            <p class="letter2">v</p>
            <p class="letter2">e</p>
            <p class="letter2">r</p>
            <p class="letter2">o</p>
        </div>
    `;
        let textNode = document.querySelector('section.tools h3');
        textNode.textContent = 'Tools:';
        let textNode2 = document.querySelector('section.acordeon button h2');
        textNode2.textContent = 'About';



    } else {
        document.getElementById('sobremim').innerHTML = `   <p class="about">
        Olá, meu nome é Thierry Severo desenvolvedor front-end trabalho focado no desenvolvimento e
        otimização de interface de Websites e Aplicativos e melhorias na experiençia do usuário
        .Sou estudante
        de Análise e
        Desenvolvimento de Sistemas na
        Universidade Cruzeiro do Sul. Comecei a estudar para ser um desenvolvedor front-end em
        outubro de 2022 e estou empenhado em adquirir as habilidades necessárias para se tornar um
        profissional qualificado na área.
    </p>
    <p class="about">
        Embora eu ainda não tenha experiência profissional, desenvolvi alguns
        projetos acadêmicos que me permitiram praticar minhas habilidades de codificação e melhorar
        minha compreensão dos conceitos de desenvolvimento de Web. Estou sempre buscando novos
        desafios e oportunidades para aprender e crescer como desenvolvedor.
    </p>
    <p class="about">
        Atualmente moro em Uruguaiana, no Rio Grande do Sul e tenho 23 anos.
        Estou disposto a trabalhar
        em equipe, buscando desenvolver projetos criativos e inovadores, e ajudando a empresa a alcançar
        seus objetivos.
    </p>
    <p class="about">
        Agradeço pela consideração e estou ansioso para discutir como posso contribuir para sua equipe de
        desenvolvimento.
    </p>

`;
        document.getElementById('ola').innerHTML = `<div class="word">
        <p class="letter2">O</p>
        <p class="letter2">l</p>
        <p class="letter2">a</p>
        <p class="letter2">,</p>
          </div>
        <div class="word">
        <p class="letter2">m</p>
        <p class="letter2">e</p>
        <p class="letter2 ">u</p>
                  <p class="letter2 space">n</p>
        <p class="letter2">o</p>
        <p class="letter2">m</p>
        <p class="letter2">e</p>
        <p class="letter2 space">é</p>
        </div>
        <div class="word">
        <p class="letter2">S</p>
        <p class="letter2">e</p>
        <p class="letter2">v</p>
        <p class="letter2">e</p>
        <p class="letter2">r</p>
        <p class="letter2">o</p>
        </div>`;

        let textNode = document.querySelector('section.tools h3');
        textNode.textContent = 'Ferramentas:';
        let textNode2 = document.querySelector('section.acordeon button h2');
        textNode2.textContent = 'Sobre';


    }
}

