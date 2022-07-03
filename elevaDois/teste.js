let lines = gets().split('\n');
var N = parseInt(lines.shift());

function retonarPar(numero) {
    let arr = [];
    if (numero <= 5 || numero >= 2000) throw "numero invalido";

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0)
            print(`${i}^2 = ${i ** 2}`);
    }
}