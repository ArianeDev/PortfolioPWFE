const form07 = document.getElementById('form07');

form07.addEventListener('submit', function(event){
    event.preventDefault();

    const resultado07 = document.getElementById('resultado07');

    let peso = Number(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('alt').value);

    let IMC = peso/(altura*altura);

    console.log(IMC, altura, peso);

    resultado07.innerHTML = `<p>O IMC é ${IMC.toFixed(2)}</p>`;
})