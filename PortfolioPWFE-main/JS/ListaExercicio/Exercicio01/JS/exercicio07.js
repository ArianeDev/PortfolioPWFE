const form07 = document.getElementById('form07');

form07.addEventListener('submit', function(event){
    event.preventDefault();

    const resultado07 = document.getElementById('resultado07');

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    let IMC = peso/altura*altura;

    console.log(IMC, altura, peso);

    resultado07.innerHTML = `<p>O IMC é ${IMC}</p>`;
})