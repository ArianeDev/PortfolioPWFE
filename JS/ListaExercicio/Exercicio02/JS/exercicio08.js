const form08 = document.getElementById('form08');

form08.addEventListener('submit', function(event){
    event.preventDefault();

    const resultado08 = document.getElementById('resultado08');

    let ano = document.getElementById('ano').value;

    ano = parseInt(ano);

    if (ano%4 == 0){
        resultado08.innerHTML = `<p>O ano ${ano} é bissexto</p>`
    } else {
        resultado08.innerHTML = `<p>O ano ${ano} não é bissexto</p>`
    }
})