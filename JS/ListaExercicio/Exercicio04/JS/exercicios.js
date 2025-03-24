// Exercício 01
const resposta01 = document.getElementById('resposta01');

const numeros = [2, 4, 6, 8, 10];
resposta01.innerHTML = `<p>Antes = ${numeros}</p>`;

let nuemrosDobro = numeros.map(n => n * 2);

resposta01.innerHTML += `<p>Depois = ${nuemrosDobro}</p>`

// Exercício 02
const resposta02 = document.getElementById('resposta02');

const notas = [9.5, 8, 7, 6, 10, 8.5, 9, 7];
let soma = 0;

for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}

let media = soma / (notas.length);

resposta02.innerHTML = `<p>O valor da média é ${media.toFixed(2)}</p>`;

// Exercício 05
const resposta05 = document.getElementById('responsta05');

const nomes = ["Joyce", "Ariane", "Nicolas", "Thifany", "João", "Gabriela", "Geovanna", "Resende", "Evellyn", "Lívia"];
const nome = document.getElementById('nome');

for(nome in nomes){
    resposta05.innerHTML= `<p>O indice do nome é</p>`
}