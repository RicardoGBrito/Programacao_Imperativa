/*A. Acessar elementos específicos de um array.
B. Modificar cada um dos elementos de um array e imprimi-los no console.
C. Adicionar elementos a um array.
D. Extrair elementos de um array.
E. Comparar elementos de um array com os elementos de outro.*/


/*let numbers = [22, 33, 54, 66, 72, 69]
console.log(numbers[numbers.length])

console.log(numbers.length)*/


/*let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
"Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])*/

/*let str = 'una string qualquer'
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
"123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])*/



let vet = [3, 4, 5]

const imprimirInverso = (vet) => {
    
    
    //vet2=[vet[2], vet[1], vet[0]]

    return vet.reverse()
}

let invertido = imprimirInverso(vet)

console.log(invertido)

//Neste exercício, você criará uma função somarArray() que aceita um array de números
//e retorna a soma de todos eles.

let arry = [3, 5, 7, 9, 14];
let soma = 0;

function somarArray(arr){
    for(let i=0; i<arr.length; i++){
        soma += arr[i]}
    return soma
}

console.log(somarArray(arry))

//Neste exercício, você criará uma função chamada join que recebe um array e simula o
//comportamento do método Array.join().

let str = ['h', 'e', 'l', 'l', 'o', ' ', ';)'];
let frase = ' ';

function juntarCaractere(vetor){
    for(let i=0; i<vetor.length; i++){
        frase += vetor[i]}
    return frase
}
console.log(juntarCaractere(str))

/*O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para
isso, devemos:
1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
"star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela" */

let strg = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

console.log(strg[3]);

novaStrg = [];
function letraMaiuscula(vetor){
    for(let i=0; i<vetor.length; i++){
        novaStrg.push(vetor[i].toUpperCase())}
    return novaStrg
}

console.log(letraMaiuscula(strg));


/* Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de
animação:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para
poder adicionar os elementos contidos no segundo array, dentro do primeiro, a
fim de retornar um único array com todos os filmes como seus elementos.
 */

let strg1 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let arr3=[];

function twoArrays(arr1,arr2){
    return arr3=[arr1,arr2]
}

console.log(twoArrays(strg,strg1))

/* Durante o processo, percebemos que o último elemento na série de filmes
animados é, na verdade, um game. Agora devemos editar nosso código e
modificá-lo para que possamos remover o último elemento antes de migrar o
conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.
 */

let game = strg1.pop();

console.log(game);

//Crie uma função que compare as notas e nos diga se elas são iguais ou
//diferentes.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let result =[];

function comparacaoDeNotas(not1,not2){
    for(let i=0;i<not1.length;i++){
        if (not1[i]==not2[i]){
            result.push(true)
        }
        else {
            result.push(false)
        }
    }
    return result
}

console.log(comparacaoDeNotas(asiaScores, euroScores))