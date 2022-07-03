array = [1,2,3,4,5,6,7,8,9,10];

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(array, thisArg){
    return array.map(function(item){
        return item *this.value;
    }, thisArg)
}

console.log(array.map((item) => item * 2));

console.log(array.filter((item) => item % 2 === 0));

const nums = [1,2];

console.log('this -> maca',mapComThis(nums, maca));
console.log('this -> laranja',mapComThis(nums, laranja));

function somaNumero(arr){
   return arr.reduce(function(prev, current){
       console.log({ prev })
       console.log({ current })
        return prev + current;
    });
}

const arr =[1,2]

console.log(somaNumero(arr));

const lista = [{
    name: 'sabao em po',
    preco: 30
},
{
    name: 'cereal',
    preco: 12
},
{
    name: 'toalha',
    preco: 30
}
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (prev, current, index){
        console.log('rodada', index +1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));