function calculaIdade(anos) {
    return `Daquia ${anos} anos, ${this.nome} terá ${this.idade + anos} de idade`;
}

const pessoa1 ={
    nome: 'João',
    idade: 20
};

const pessoa2={
    nome: 'Maria',
    idade: 25
};


const animal={
    nome: 'Cachorro',
    idade: 5,
    raça: 'Labrador'    
};

console.log(calculaIdade.call(pessoa2, 20));

console.log(calculaIdade.apply(pessoa2, [20]));
