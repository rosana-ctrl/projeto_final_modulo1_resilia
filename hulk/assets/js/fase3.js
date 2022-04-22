var elementos = ['água', 'terra', 'cobalto', 'cesio', 'iodo'];
var elementosCorretos = ['água', 'terra'];

function retireElemento() {
    var contador = 0

    while (contador < 3) {
        var remove = prompt("Digite o elemento que você deseja retirar");

        elementos = elementos.filter(function (i) {
            return i != remove;
        });

        contador++;
    }

    if (compareElementos()) {
        exibir('avance')
    } else {
        redirecione('../../gameOver.html');
    }
}

function compareElementos() {
    return elementos.length === elementosCorretos.length && elementos.every((value, index) => value === elementosCorretos[index]);
}