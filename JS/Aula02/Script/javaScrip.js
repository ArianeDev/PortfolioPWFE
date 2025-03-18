// Três comandos básicos para interação com usuário 

// Alert - quando quero forçar a atenção do usuário para determinada infomação

// window.alert("Olá pessoa! :)"); // Boa prática

// Prompt - fazer uma interação direta, pedindo algo ao usuário

// let num = window.prompt("Digite um número: "); // Boa prática
// document.write(`O número que você digitou foi ${num}.`);

// Confirm - Da duas opções ao usuário: "Cancelar" e "Ok"

// window.confirm("Você gosta muito de Front, né?"); // Boa prática

// var - Primeiro jeito de declarar uma variável
// let - O valor muda conforme a aplicação é utilizada
// const -  O valor é fixo, valor tem que ser declarado com a variável

// let num1 = Number(window.prompt("Digite sua primeira nota: ")); // Converter a string a número - Number
// let num2 = Number(window.prompt("Digite sua segunda nota: "));
// let media = (nota1 + nota2) / 2;

// document.write(`Sua média é de ${media}.`);

// if - else

// if (media >= 6) {
//     document.write(`Parabéns você foi aprovado!`);
// } else {
//     document.write(`Sinto muito meu consagrado! TENTE NOVAMENTE!`);
// }

// for

// for (i = 0; i <= 10; i++) {
//     document.write(`Número: ${i} <br>`);
// }

// while 

// let contador = 10;
// while (contador <= 50) {
//     document.write(`Valor ${contador} <br>`);
//     contador += 10;    
// }

// let a = 1;

// do {

//     if (a%2 == 0){
//         document.write('É par');
//     } else {
//         document.write('É impar');
//     }

//     a ++
// } while (a < 20);

// fazer calculadora