// Programa que converte horas para minutos

const form06 = document.getElementById('form06');
const resultado06 = document.getElementById('resultado06');

form06.addEventListener('submit', function(event){
    event.preventDefault();

    let horas = document.getElementById('hora').value;

    if(horas == ""){
        resultado06.innerHTML = `<p>Preencha o campo!!</p>`;
        return;
    }

    horas = Number(horas);
    minutos = horas*60;

    resultado06.innerHTML = `<p>A quantidade de minutos que tem em ${horas} é de:</p><p class="resposta">${minutos}</p>`;
    
    document.getElementById('celulas').value = "";
})