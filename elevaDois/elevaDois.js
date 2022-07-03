function retonarPar(numero) {
    let arr = [];
    if (numero <= 5 || numero >= 2000) throw "numero invalido";

    for (var i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            arr.push(i);
            console.log(`${i}^2 = ${i ** 2}`);
        }

    }
    return arr;
}


input = prompt("Digite um numero: ")

const newarray = retonarPar(input);
console.log(newarray.map((item) => item ** 2));