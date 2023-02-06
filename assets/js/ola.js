const messagemContainergGhost = document.getElementById('messagem-ola-ghost')
const ContainerGhost = document.querySelector('div.container');

setTimeout(function ghost() {
    ContainerGhost.style.opacity = '1';
    ola();
}, 3000);




function ola() {
    if (messagemContainergGhost.style.opacity == '0') {
        document.getElementById('message-text-ghost').innerHTML = 'Ola!';
    }
    messagemContainergGhost.style.opacity = '1';
    setTimeout(function () {
        messagemContainergGhost.style.opacity = '0';

    }, 5000);
}