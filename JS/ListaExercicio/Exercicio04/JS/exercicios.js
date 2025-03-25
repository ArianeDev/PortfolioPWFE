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

// Exercício 03 
const resposta03 = document.getElementById('resposta03');
let idades = [];

function Adicionar(){
    let idade = parseInt(document.getElementById('idade').value);
    
    if(!isNaN(idade)){
        idades.push(idade);
        console.log(idades);

        atualizarLista();
        idade = document.getElementById('idade').value = '';

        if(numeros.length === 20){
            alert("oi")
        }
    }
}

// Exercício 05
const resposta05 = document.getElementById('resposta05');
const form05 = document.getElementById('form05');

const nomes = ["Joyce", "Ariane", "Nicolas", "Thifany", "João", "Gabriela", "Geovanna", "Resende", "Evellyn", "Lívia"];
let text = '';

form05.addEventListener('submit', function(event){
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;

    for(let i in nomes){
        if(nomes[i] === nome){
            resposta05.innerHTML = `<p>O indice do nome é ${i}</p>`;
            break;
        } else {
            resposta05.innerHTML = `<p>Nome não encontrado</p>`;
        }
    }
})

// Exercício 07
const input = document.getElementById('exercicio07');
const resposta07 = document.getElementById('resposta07');

const btn_add = document.getElementById('btn_add');

function InputNomes(){
    



}

