function mostra(frase) {
    alert(frase);
}

function escolhaHeroi() {
    var contador = 1

    while (contador <= 3) {
        var heroi = parseInt(prompt("Digite o número equivalente do super Herói!"));

        if (heroi == 3) {
            mostra("Parabéns, você acertou, escolha a sala!");
            exibir();
            break;
        } else if (heroi == 2 || heroi == 1) {
            mostra("Você não acertou, tente novamente");

        } else if (contador <= 3) {
            mostra("digite somente as letras das opções apresentadas")
        }

        contador = contador + 1;
    }
    if (contador >= 4) {
        window.location.replace('../../index/gameOver.html');
    }
}

function exibir() {
    document.getElementById("divBotoesSalas").style.visibility = 'visible';
}

function ocultar() {
    document.getElementById("divBotoesSalas").style.visibility = 'hidden';
}