// Digitar o ataque, com o prompt
// validar o ataque
// se o ataque for certo, deverá mostrar um alerta e mostrar o botao de proxima fase
// se estiver errado, deverá retornar e pedir para perguntar de novo
// o máximo de tentativas sao 3 vezes
// exibir a mensagem de game over
// voltar para a tela inicial

var vidaTotalInimigo = 50;
var ataque1 = 20;
var ataque2 = 10;
var ataque3 = 10;


function mostraFrase(frase) {
    alert(frase);
}

function mostraVidaInimigo() {
    alert("Vida do Inimigo: " + vidaTotalInimigo);
}

function escolhaAtaque() {
    var contador = 1

    while (contador <= 3) {
        var ataque = parseInt(prompt("Digite o número equivalente do seu ataque"));

        if (ataque > 3) {
            mostraFrase("digite somente as letras das opções apresentadas");
            continue;
        }

        if (ataque == 1) {
            vidaTotalInimigo -= ataque1;
        } else if (ataque == 2) {
            vidaTotalInimigo -= ataque2;
        } else {
            vidaTotalInimigo -= ataque3;
        }

        contador++;
        mostraVidaInimigo();
    }

    if (vidaTotalInimigo > 0) {
        alert('PERDEMOS =/');
        window.location('./fase2_hulk.html');
    } else {
        alert('GANHAMOS!!!');
    }
}

escolhaAtaque();