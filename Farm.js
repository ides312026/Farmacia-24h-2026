const fraseEl = document.getElementById('Frase');
let posicao = 500; // largura inicial do container
const velocidade = 1.3; // mais devagar

function moverFrase() {
    posicao -= velocidade; // move para a esquerda

    // quando a frase saiu completamente, reinicia à direita
    if (posicao < -fraseEl.offsetWidth) {
        posicao = 500;
    }

    fraseEl.style.left = posicao + "px";

    requestAnimationFrame(moverFrase); // loop contínuo
}

moverFrase();