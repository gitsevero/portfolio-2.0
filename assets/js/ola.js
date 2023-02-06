const messagemContainergGhost = document.getElementById('messagem-ola-ghost')
const ContainerGhost = document.querySelector('div.container');

setTimeout(function () {
    ContainerGhost.style.opacity = '1';
    ola();
}, 3000);




function ola() {

    messagemContainergGhost.style.opacity = '1';
    setTimeout(function () {
        messagemContainergGhost.style.opacity = '0';


        setTimeout(function () {
            messagemContainergGhost.innerHTML = '';
            if (lngs1.ingles == 'on') {
                messagemContainergGhost.innerHTML = 'Hello!';
            } else {
                messagemContainergGhost.innerHTML = 'Ola!';
            }


        }, 500);

    }, 5000);
}