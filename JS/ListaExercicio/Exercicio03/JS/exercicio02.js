// Código que inverte a frase digitada pelo usuário

const form02 = document.getElementById('form02');
const resultado02 = document.getElementById('resultado02');

form02.addEventListener('submit', function(event){
    event.preventDefault();

    let frase = document.getElementById('frase').value.split("");

    if(frase == ""){
        resultado02.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    } else {
        let fraseInvertida = frase.reverse();
        let frasePronta = fraseInvertida.join("");
        resultado02.innerHTML = `<p>A frase invertida fica da seguinte forma: </p> <p class="resposta">${frasePronta}</p>`;
    }

    document.getElementById('frase').value = "";
})