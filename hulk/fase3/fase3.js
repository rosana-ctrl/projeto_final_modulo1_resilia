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

    console.log(elementos);

    if (compareElementos()) {
        exibir()
    } else {
        document.write("game over")
    }
}

function compareElementos() {
    return elementos.length === elementosCorretos.length && elementos.every((value, index) => value === elementosCorretos[index]);
}
var visibilidade = true;

function exibir() {
    document.getElementById("avance").style.visibility = 'visible';
}

function ocultar() {
    document.getElementById("avance").style.visibility = 'hidden';
}

function redirecione() {
    window.location.replace("../vitoria/vitoria.html");
}