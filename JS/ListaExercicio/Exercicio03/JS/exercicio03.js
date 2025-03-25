const form03 = document.getElementById('form03');
const resultado03 = document.getElementById('resultado03');

form03.addEventListener('submit', function(event){
    event.preventDefault();
 
    let frase = document.getElementById('frase03').value.split("");

    resultado03.innerHTML = `<p>A frase separada fica assim: </p><p class="resposta">${frase}</p>`;
})