/* Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1).
 */

const listaAlunos = require('./Estudantes');



const curso = {
    nomeDoCurso:'JavaScript',
    notaDeAprovacao:7,
    faltasMaximas:2,
    listaDeEstudantes: listaAlunos,
    adicionarAluno:function(name,qtdFaltas,not){
        
        return this.listaDeEstudantes.push({nome:name, qtdFaltas:qtdFaltas, notas:not,});
    },
    aprovacao:function(name,qtdFaltas,not){

              
        let soma = 0;
        let media = 0;
        for(let i=0;i<not.length;i++){
            soma += not[i];
        }
        media = soma/not.length;
        if(media>this.notaDeAprovacao && qtdFaltas<this.faltasMaximas){
            return {nome:name, aprovado:true};
        }
        else if(qtdFaltas === this.faltasMaximas && media>this.notaDeAprovacao*1.1){
            return {nome:name, aprovado:true};
        }
        else{
            return {nome:name, aprovado:false};
        }
    },
    aprovacaoAlunos:function(){
        let arrayBoleano = [];
        
        for(let i=0;i<this.listaDeEstudantes.length;i++){       

            arrayBoleano.push(this.aprovacao(this.listaDeEstudantes[i].nome,this.listaDeEstudantes[i].qtdFaltas,this.listaDeEstudantes[i].notas));  
        }
        return arrayBoleano;
    },
}

//curso.adicionarAluno('Rogerio Carvalho',4,[8,6,9,10]);

console.log(curso.aprovacaoAlunos());