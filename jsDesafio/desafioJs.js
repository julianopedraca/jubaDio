//criar uma função que recebe o array 'aluno' e um numero que irá representar a média final
//percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a media final
//utilize a técnica object destructuring para manipular as propriedades desejadas de cada aluno

let Alunos = []

let aprovado = []

function recebeAlunos(Alunos) {
    while (true) {
        console.log('digite o nome do aluno: ');
        let nome = prompt('digite o nome do aluno: ');
        if (nome == 'fim') {
            break;
        }
        console.log('digite a nota do aluno: ');
        let nota = prompt('digite a nota final do aluno: ');
        Alunos.push({ nome: nome, nota: nota });
    }
}

function alunosAprovados(Alunos) {
    let alunosAprovados = [];
    const MEDIA = 6;
    for (let i in Alunos) {
        if (Alunos[i].nota >= MEDIA) {
            alunosAprovados.push(Alunos[i].nome);
        }
    }
    return alunosAprovados;
}


recebeAlunos(Alunos);

aprovados = alunosAprovados(Alunos);

console.log(Alunos);

console.log(aprovados);