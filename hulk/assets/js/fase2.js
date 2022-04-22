var vidaTotalInimigo = 50;
var ataque1 = 20;
var ataque2 = 10;
var ataque3 = 10;

function mostraVidaInimigo() {
    alert("Vida do Inimigo: " + vidaTotalInimigo);
}

function escolhaAtaque() {
    var contador = 1

    while (contador <= 3) {
        var ataque = parseInt(prompt("Digite o número equivalente do seu ataque"));

        if (ataque == 1) {
            vidaTotalInimigo -= ataque1;
        } else if (ataque == 2) {
            vidaTotalInimigo -= ataque2;
        } else if (ataque == 3) {
            vidaTotalInimigo -= ataque3;
        } else {
            mostraFrase("digite somente as letras das opções apresentadas");
            continue;
        }

        contador++;
        mostraVidaInimigo();
    }

    if (vidaTotalInimigo > 0) {
        alert('PERDEMOS =/');
        redirecione('../../gameOver.html');
    } else {
        alert('GANHAMOS!!!');
        exibir('avance');
    }
}