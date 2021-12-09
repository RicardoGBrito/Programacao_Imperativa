/* Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */


const aluno = require('./Aluno');

//console.log(aluno);

aluno.adicionarAlunos('Rafael Souza', 4, [6,8,6,9]);
aluno.adicionarAlunos('Rafael Carvalho', 2, [7,8,3,9]);
aluno.adicionarAlunos('Ana Santos', 1, [6,8,9,9]);
aluno.adicionarAlunos('Bruno Arthur', 0, [9,8,6,9]);
aluno.adicionarAlunos('Paula Fernandes', 2, [6,4,10,9]);
aluno.adicionarAlunos('Bruna Alencar', 1, [6,10,5,10]);
aluno.adicionarAlunos('Diana Ruby', 3, [10,7,6,9]);
aluno.adicionarAlunos('Rodrigo Souza', 1, [4,10,6,9]);
aluno.adicionarAlunos('Carol Almeida', 0, [6,8,9,9]);
aluno.adicionarAlunos('Lívia Araújo', 3, [6,8,10,10]);
aluno.adicionarAlunos('Beatriz Silva', 1, [10,8,7,9]);
aluno.adicionarAlunos('José Alencar', 0, [9,10,7,9]);

//console.log(aluno);

module.exports = aluno.listaAlunos;


//console.log(aluno.faltas(aluno.listaAlunos[1]));
//console.log(aluno.calcularMedia(aluno.listaAlunos[1]));



