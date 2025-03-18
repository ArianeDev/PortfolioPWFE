// variáveis: espaço em memória para guardar valores
// variáveis: let, const, var e array
// let: tudo que varia, valores flexiveis para armazenar 1 dado
// const: valores fixos, "crachado"
// var: primeira forma de declarar uma variável no javacript. Já está absoleta, de forma que só vemos em sistemas legados.
// array: é uma váriável que armazena vários valores em um conjunto. Esse conjunto recebe um indice começando em 0

// array é determinado usando os []
let numeros = [5, 10, 15, 20, 25, 30];
let nomes = ["Nico", "Gabi", "Livia", "Ge", "Ari", "Joyce", "Thifs", "Jão"]

// exibição dos indices de um Array
// for(let indice in numeros){
//     alert(indice)
// }

// exibição dos valores guardados na Array
// for(let valor of nomes){
//     alert(valor)
// }

// percorrer o Array eu posso usar o foreach
// numeros.forEach(function(valor){
//     document.write(`${valor} <br>`);
// })

// inserindo no final do array
document.write(`${numeros} <br>`)
// já devo colocar o valor que quero no final da fila
numeros.push(60)
document.write(`${numeros} <br>`)

// inserindo no inicio do array
numeros.unshift(0)
document.write(`${numeros} <br>`)

// excluindo o último
numeros.pop()
document.write(`${numeros} <br>`)

// excluindo o primeiro elemento da lista
numeros.shift()
document.write(`${numeros} <br>`)

// funções callback: que criam novos arrays como responstas de uma tratativa de manipulação do array original, não editando o original

// Map navegação por todos os elementos
let numerosQudrados = numeros.map(n => n ** 2 )
document.write(`${numerosQudrados} <br>`)

let nomesGrandes = nomes.map(nomes => nomes.toUpperCase())
document.write(`${nomesGrandes} <br>`)

// Filter: ele gera um outra array de retorno com os valores que satisfazem uma condição
let numerosPares = numeros.filter(function(numero){
    return numero%2 === 0;
})
document.write(`${numerosPares} <br>`)

// find: ele percorre um array original e assim que acha um valor que atenda uma condição ele para de percorrer e retorna esse valor encontrado
let primeiroPar = numeros.find(function(numero){
    return numero % 2 === 0;
})
document.write(`O primeiro par é ${primeiroPar} <br>`);

// spread
// como eu junto dois arrays
let livrosP = ['ler um café e tomar uma poesia', 'para você que teve um dia ruim', 'extraordinário']
let livrosC = ['Diário de um banana', 'It a coisa', 'harry potter']

catalogo = [...livrosP, ...livrosC]
document.write(`${catalogo}`)