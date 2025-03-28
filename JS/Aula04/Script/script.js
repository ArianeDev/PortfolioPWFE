// variáveis: espaço em memória para guardar valores
// variáveis: let, const, var e array
// let: tudo que varia, valores flexiveis para armazenar 1 dado
// const: valores fixos, "crachado"
// var: primeira forma de declarar uma variável no javacript. Já está absoleta, de forma que só vemos em sistemas legados.
// array: é uma váriável que armazena vários valores em um conjunto. Esse conjunto recebe um indice começando em 0

// array é determinado usando os []
let numeros = [5, 10, 15, 20, 25, 30];
let nomes = ["Nico", "Gabi", "Livia", "Ge", "Ari", "Joyce", "Thifs", "Jão"]

const btn_exemplo1 = document.getElementById('btn_exemplo1');
const p_exemplo1 = document.getElementById('p_exemplo1');

btn_exemplo1.addEventListener('click', function(){
    // exibição dos indices de um Array
    p_exemplo1.innerHTML =  `Os indices da array são:`;
    for(let indice in numeros){
        p_exemplo1.innerHTML +=  ` ${indice} `;
    }
})

const btn_exemplo2 = document.getElementById('btn_exemplo2');
const p_exemplo2 = document.getElementById('p_exemplo2');

btn_exemplo2.addEventListener('click', function(){
    // exibição dos valores guardados na Array
    p_exemplo2.innerHTML =  `Os valores da array são:`;
    for(let valor of nomes){
        p_exemplo2.innerHTML +=  ` ${valor} `;
    }
})

const btn_exemplo3 = document.getElementById('btn_exemplo3');
const p_exemplo3 = document.getElementById('p_exemplo3');

btn_exemplo3.addEventListener('click', function(){
    // percorrer o Array eu posso usar o foreach
    p_exemplo3.innerHTML =  `Os valores da array são:`;
    numeros.forEach(function(valor){
        p_exemplo3.innerHTML +=  ` ${valor} `;
    })
})

// inserindo no final do array
ex_adc_exc.innerHTML = `<p class="text">Lista original: ${numeros} </p>`
// já devo colocar o valor que quero no final da fila
numeros.push(60)
ex_adc_exc.innerHTML += '<p class="text"> numeros.push(60)</p>';
ex_adc_exc.innerHTML += `<p class="text">Após adicionar: ${numeros} </p>`

// inserindo no inicio do array

ex_adc_exc.innerHTML += `<p class="text">numeros.unshift(0)</p>`
numeros.unshift(0)
ex_adc_exc.innerHTML += `<p class="text">Após adicionar: ${numeros} </p>`

// excluindo o último
ex_adc_exc.innerHTML += `<p class="text">numeros.pop()</p>`
numeros.pop()
ex_adc_exc.innerHTML += `<p class="text">Após excluir: ${numeros} </p>`


// excluindo o primeiro elemento da lista
ex_adc_exc.innerHTML += `<p class="text">numeros.shift()</p>`
numeros.shift()
ex_adc_exc.innerHTML += `<p class="text">Após excluir: ${numeros} </p>`

// funções callback: que criam novos arrays como responstas de uma tratativa de manipulação do array original, não editando o original

const mapEx = document.getElementById('mapEx');
// Map navegação por todos os elementos
let numerosQudrados = numeros.map(n => n ** 2 )
mapEx.innerHTML = `<p class="text">${numerosQudrados}</p>`;

let nomesGrandes = nomes.map(nomes => nomes.toUpperCase())
mapEx.innerHTML += `<p class="text">${nomesGrandes}</p>`

const filterEx = document.getElementById('filterEx');
// Filter: ele gera um outra array de retorno com os valores que satisfazem uma condição

let numerosPares = numeros.filter(function(numero){
    return numero%2 === 0;
})
filterEx.innerHTML = `${numerosPares}`;

const findEx = document.getElementById('findEx');
// find: ele percorre um array original e assim que acha um valor que atenda uma condição ele para de percorrer e retorna esse valor encontrado
let primeiroPar = numeros.find(function(numero){
    return numero % 2 === 0;
})
findEx.innerHTML = `O primeiro par é ${primeiroPar} <br>`;

// spread
// como eu junto dois arrays
let livrosP = ['ler um café e tomar uma poesia', ' para você que teve um dia ruim', ' extraordinário']
let livrosC = [' Diário de um banana', ' It a coisa', ' harry potter']

catalogo = [...livrosP, ...livrosC]

const juntarArrays = document.getElementById('juntarArrays');
juntarArrays.innerHTML = `${catalogo}`;