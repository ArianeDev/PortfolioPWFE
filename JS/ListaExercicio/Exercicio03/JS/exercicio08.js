const form08 = document.getElementById('form08');
const resultado08 = document.getElementById('resultado08');

form08.addEventListener('submit', function(event){
    event.preventDefault();

    let num = Number(document.getElementById('raizQuad').value);

    raizQuad = Math.sqrt(num);

    resultado08.innerHTML = `<p>A raiz quadrada de ${num} é:</p><p class="resposta">${raizQuad.toFixed(2)}</p>`;
})