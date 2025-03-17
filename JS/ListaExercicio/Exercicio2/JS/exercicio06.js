const form06 = document.getElementById('form06');
const resultado06 = document.getElementById('resultado06');

form06.addEventListener('submit', function(event){
    event.preventDefault();

    let horas = Number(document.getElementById('hora').value);

    minutos = horas*60;

    if(horas/)

    resultado06.innerHTML = `<p>A quantidade de minutos que tem em ${horas} é de:</p><p class="resposta">${minutos}</p>`;
})