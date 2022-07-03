const meuArray = [30,30,40,5, 223, 2049, 223, 3034, 5]

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; //converte o set em array usando spread operator
}