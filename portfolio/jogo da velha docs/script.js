function verificacao(prm1, prm2, prm3) {
    var jogada = false;
    if (prm1.innerHTML !== '-' && prm1.innerHTML === prm2.innerHTML && prm2.innerHTML === prm3.innerHTML) {
        jogada = true;
    }

    return jogada;
}

function cor(prm1, prm2, prm3) {
    prm1.style.background = 'rgb(76, 0, 255)';
    prm2.style.background = 'rgb(76, 0, 255)';
    prm3.style.background = 'rgb(76, 0, 255)';
}


function alternar(valor) {
    player = valor;
    player_start.innerHTML = player;
}

function verifica_win() {
    let bola1 = document.getElementById(1);
    let bola2 = document.getElementById(2);
    let bola3 = document.getElementById(3);
    let bola4 = document.getElementById(4);
    let bola5 = document.getElementById(5);
    let bola6 = document.getElementById(6);
    let bola7 = document.getElementById(7);
    let bola8 = document.getElementById(8);
    let bola9 = document.getElementById(9);
    if (verificacao(bola1, bola2, bola3)) {
       
        cor(bola1, bola2, bola3);
        mostra_winner(bola1);
        
        return;
    }
    if (verificacao(bola4, bola5, bola6)) {
        cor(bola4, bola5, bola6);
        mostra_winner(bola4);
        return;
    }
    if (verificacao(bola7, bola8, bola9)) {
        cor(bola7, bola8, bola9);
        mostra_winner(bola7);
        return;
    }
    if (verificacao(bola1, bola4, bola7)) {
        cor(bola1, bola4, bola7);
        mostra_winner(bola1);
        return;
    }
    if (verificacao(bola2, bola5, bola8)) {
        cor(bola2, bola5, bola8);
        mostra_winner(bola2);
        return;
    }
    if (verificacao(bola3, bola6, bola9)) {
        cor(bola3, bola6, bola9);
        mostra_winner(bola3);
        return;
    }
    if (verificacao(bola1, bola5, bola9)) {
        cor(bola1, bola5, bola9);
        mostra_winner(bola1);
        return;
    }
    if (verificacao(bola3, bola5, bola7)) {
        cor(bola3, bola5, bola7);
        mostra_winner(bola3);
    }
}


function alternar(valor) {
    player = valor;
    player_start.innerHTML = player;
}


function select_bolinha(id) {
    if (winner !== null) {
        return;
    }

    var tabuleiro = document.getElementById(id);
    if (tabuleiro.innerHTML !== '-') {
        return;
    }

    tabuleiro.innerHTML = player;
    tabuleiro.style.color = '#000';

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    alternar(player);
    verifica_win();
}

let player = null;
let winner = null;
let player_start = document.getElementById('jogador-selecionado');
let winnerStart = document.getElementById('vencedor-selecionado');
alternar('X');

function mostra_winner(prm) {
    winner = prm.innerHTML;
    winnerStart.innerHTML = winner;
}