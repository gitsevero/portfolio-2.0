


function portugues() {
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

    trigger.innerHTML = '<h2>Idiomas</h2>';

    languages.innerHTML = ` <li>Português-(nativo)</li>
    <li>Ingles-(basico)</li>
    <li>Espanhol-(intermediário)</li>`;


};