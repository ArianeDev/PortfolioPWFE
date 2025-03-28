// Funções: Bloco de código que pode ser reutilizavel, normalmente contem a rolução ou parte dela para solucionar um problema
// A palavra reservada para função no JS é - function
// Normalmente por boa prática as funções ficam no topo da página

// Function o nome do que eu quero fazer a passagem de parametros e {} para o bloco de código

function Saudar(){
    alert("Parabéns, vocês voltaram a vida normal")
}

function soma(a = 0, b = 0){
    return a + b;
}

function converteMaiuscula(texto){
    return texto.toUpperCase();
}

const buttonFuncao = document.getElementById('buttonFuncao');
const resultadoFuncao = document.getElementById('resultadoFuncao');

buttonFuncao.addEventListener('click', function(){
    texto = prompt("Informe um texto: ");
    convertido = converteMaiuscula(texto);
    resultadoFuncao.innerHTML = `Resultado do texto: ${convertido}`;
})


// Arrow function é a nova estrutura de funções para resoluções mais simplorias. Ele é declarado como uma constante, fazendo a tratativa como uma variável.
// A ideia é que seja sempre a execução de um código específico 
// Constante nome da variavel recebe parametros e depois o que quero que seja executado

const buttonArrow = document.getElementById('buttonArrowFunction');
const resultadoArrow = document.getElementById('exemploArrowFuncion');

buttonArrow.addEventListener('click', function(){
    const divir = (v1,v2) => v1/v2;

    a = Number(prompt("Informe um número: "))
    b = Number(prompt("Informe outro número: "))

    resultado = soma(a,b);
    resultadoArrow.innerHTML = `A soma dos números digitado é ${resultado}`;
})

// Number: ele vai intepretar os valores, sendo float ou int
// ParseInt || ParseFloat: é obrigatório o dado enviado

Saudar();

// alert(`Essa é uma execução de Arrow Function ${divir(10,5)}`);