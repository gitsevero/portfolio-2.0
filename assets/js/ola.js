function ola() {
    document.getElementById('messagem-ola-ghost').style.opacity = '1';

    setTimeout(function () {
        document.getElementById('messagem-ola-ghost').style.opacity = '0';
    }, 5000);
}