function escolhaHeroi() {
    var contador = 1

    while (contador <= 3) {
        var heroi = parseInt(prompt("Digite o número equivalente do super Herói!"));

        if (heroi == 3) {
            mostra("Parabéns, você acertou, escolha a sala!");
            exibir('divBotoesSalas');
            break;
        } else if (heroi == 2 || heroi == 1) {
            mostra("Você não acertou, tente novamente");

        } else if (contador <= 3) {
            mostra("digite somente as letras das opções apresentadas")
        }

        contador = contador + 1;
    }
    if (contador >= 4) {
        redirecione('../../gameOver.html');
    }
}