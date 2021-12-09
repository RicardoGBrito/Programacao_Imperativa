/* Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */

const aluno = {
    nome:'',
    qtdFaltas:null,
    notas:[],
    listaAlunos:[],

    adicionarAlunos:function(nome,faltas,notas){
        this.nome = nome;
        this.qtdFaltas = faltas;
        this.notas = notas;

        dadosAlunos = {
            nome:this.nome,
            qtdFaltas:this.qtdFaltas,
            notas:this.notas,
        }

        this.listaAlunos.push(dadosAlunos);
    },
  

    calcularMedia:function(aluno){
        let soma = 0;
        let media = 0;
        for(let i = 0; i < aluno.notas.length;i++){
            soma += aluno.notas[i];
        }
        return media = soma/aluno.notas.length;

    },

    faltas: function(aluno){
        return aluno.qtdFaltas + 1;
    },
}


module.exports = aluno;





