/* Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/


// Criando variáveis:

let alimento = 'Brigadeiro';

let tempoPadrao = 18;

//Definindo função para o tempo de preparo dos alimentos:

let tempoPreparo = (alimento) =>{
    switch(alimento){
        case 'Pipoca':
            return 10
        break;
        case 'Macarrão':
            return 8
        break;
        case 'Carne':
            return 15
        break;
        case 'Feijão':
            return 12
        break;
        case 'Brigadeiro':
            return 8
        break;
        default:
            return 'erro'
        break;
    }
}

//Definindo código:

if (tempoPadrao > 2*tempoPreparo(alimento) && tempoPadrao <= 3*tempoPreparo(alimento)){
    console.log('A comida queimou')
} 
else if (tempoPadrao < tempoPreparo(alimento)){
    console.log('Tempo insuficiente')
}
else if(tempoPreparo(alimento) == 'erro'){
    console.log('Prato inexistente')
}
else if(tempoPadrao > 3*tempoPreparo(alimento)){
    console.log('Kabumm')
}
else
    console.log('Prato pronto, bom apetite!!!')



