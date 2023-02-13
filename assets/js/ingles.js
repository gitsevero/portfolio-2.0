function ingles() {
    console.log('ta chamando')
    document.getElementById('sobremim').innerHTML = `<p class="about"> Hi, my name is Thierry Severo front-end developer focused on developing and optimizing website and app interfaces and improving user experience. I am a Systems Analysis and Development student at Cruzeiro do Sul University. I started studying to be a front-end developer in august 2022 and am committed to acquiring the necessary skills to become a qualified professional in the field.
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

    trigger.innerHTML = '<h2>Languages</h2>';
    languages.innerHTML = ` <li>Portuguese-(native)</li> <li>English-(basic)</li> <li>Spanish-(intermediate)</li>`;

    personal.innerHTML = `<ul class="p1"><li>Punctuality</li><li>Easy learning</li><li>Communication ease</li>
    </ul><ul class="p2"><li>Organization</li><li>Teamwork</li><li>Flexibility</li></ul>`;

    trecoText.innerHTML = `Word guessing game in JavaScript 
    consuming the API of <a href="https://openai.com/api/">CHATGPT3</a>to generate random words and hints about the words.`;

    pokedexText.innerHTML = 'Pokedex: a Pokemon search website using HTML, CSS, and JavaScript consuming the PokeAPI.';

    climaTitleText.innerHTML = `Weather information.`;
    climaText.innerHTML = `Weather information website, built to inform the weather of the searched city, using three APIs, one for the weather, 
    another for the city image background, and a third for the flags.`;

    calculadoraText.children[0].innerHTML = `Calculator`;
    calculadoraText.children[2].innerHTML = `A simple and responsive calculator made with react`;

    jogoDaVelhaText.children[0].innerHTML = `game of tic-tac-toe`
    jogoDaVelhaText.children[2].innerHTML = `Academic project developing Tic-tac-toe with JavaScript, Html and CSS`

    GitFindText.children[2].innerHTML = `A profile finder and GitHub repository made with React consuming the GitHub API`;

    conversorText.children[0].innerHTML = `Currency converter`;
    conversorText.children[2].innerHTML = `A basic currency converter consuming the Fast Forex API`;

    instagramText.children[2].innerHTML = `A clone of the instagram login and registration pages`;

    portfolioBasicText.children[0].innerHTML = `portfolio`;
    portfolioBasicText.children[2].innerHTML = `A basic portfolio made only with Html and CSS`;

    messageTextGhostTranslate.innerHTML = 'Hello, I hope you like my portfolio';
    document.getElementById("selectedOption").innerHTML = `<img src="/assets/img/flags/united-states.png" alt="bandeira do estados unidos"> ENG`;









}