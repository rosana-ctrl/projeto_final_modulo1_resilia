// Digitar o ataque, com o prompt
// validar o ataque
// se o ataque for certo, deverá mostrar um alerta e mostrar o botao de proxima fase
// se estiver errado, deverá retornar e pedir para perguntar de novo
// o máximo de tentativas sao 3 vezes
// exibir a mensagem de game over
// voltar para a tela inicial

function mostra(frase) {
    //document.write(frase);
    alert(frase);
}

function escolhaAtaque() {
    var contador = 1

    while (contador <= 3) {

        var ataque = parseInt(prompt("Digite o número equivalente do seu ataque"));

        if (ataque == 1) {
            mostra("Parabéns, você venceu essa luta, siga para a próxima fase!");
            break;
        } else if (ataque == 2 || ataque == 3) {
            mostra("Você recebeu um ataque mais forte, tente novamente");

        } else {
            mostra("digite somente as letras das opções apresentadas")
        }

        contador = contador + 1;
        
    }

}

escolhaAtaque();