function ingles() {
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





    trigger.innerHTML = '<h2>Languages</h2>';
    languages.innerHTML = ` <li>Portuguese-(native)</li>
    <li>English-(basic)</li>
    <li>Spanish-(intermediate)</li>`;

}