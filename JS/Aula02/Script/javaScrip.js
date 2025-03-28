// Três comandos básicos para interação com usuário 

// Alert - quando quero forçar a atenção do usuário para determinada infomação

const buttonAlert = document.getElementById('alert');

buttonAlert.addEventListener('click', function(){
	window.alert("Olá pessoa! :)"); // Boa prática
})

// Prompt - fazer uma interação direta, pedindo algo ao usuário

const buttonPrompt = document.getElementById('prompt');
const mensagem = document.getElementById('mensagem');

buttonPrompt.addEventListener('click', function(){
	let num = window.prompt("Digite um número: "); // Boa prática
	mensagem.innerHTML = `O número que você digitou foi ${num}.`;
})

// Confirm - Da duas opções ao usuário: "Cancelar" e "Ok"

const buttonConfirm = document.getElementById('confirm');

buttonConfirm.addEventListener('click', function(){
	window.confirm("Você gosta muito de Front, né?"); // Boa prática
})

// var - Primeiro jeito de declarar uma variável
// let - O valor muda conforme a aplicação é utilizada
// const -  O valor é fixo, valor tem que ser declarado com a variável

// if - else
const buttonIfElse = document.getElementById('buttonIfElse');
const resultado = document.getElementById('resultado');

buttonIfElse.addEventListener('click', function(){
	let nota1 = Number(window.prompt("Digite sua primeira nota: ")); // Converter a string a número - Number
	let nota2 = Number(window.prompt("Digite sua segunda nota: "));
	let media = (nota1 + nota2) / 2;
	
	resultado.innerHTML = `Sua média é de ${media}.<br>`;
	
	if (media >= 6) {
		resultado.innerHTML += `Parabéns você foi aprovado!`;
	} else {
		resultado.innerHTML += `Sinto muito meu consagrado! TENTE NOVAMENTE!`;
	}
})

// for
const buttonFor = document.getElementById('buttonFor');
const exemploFor = document.getElementById('exemploFor');

buttonFor.addEventListener('click', function(){
	for (i = 0; i <= 10; i++) {
		exemploFor.innerHTML += `Número: ${i} <br>`;
	}
})

// while 
const buttonWhile = document.getElementById('buttonWhile');
const exemploWhile = document.getElementById('exemploWhile');

buttonWhile.addEventListener('click', function(){
	let contador = 10;

	while (contador <= 50) {
		exemploWhile.innerHTML += `Valor ${contador} <br>`;
		contador += 10;
	}
})

// do while 
const buttonDowhile = document.getElementById('buttonDowhile');
const exemploDowhile = document.getElementById('exemploDowhile');

buttonDowhile.addEventListener('click', function(){
	let a = 1;
	do {
		if (a%2 == 0){
			exemploDowhile.innerHTML += 'É par <br>';
		} else {
			exemploDowhile.innerHTML += 'É impar <br>';
		}
		a ++
	} while (a < 20);
})

// fazer calculadora