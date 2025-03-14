const form12 = document.getElementById('form12');
const resultado12 = document.getElementById('resultado12');

form12.addEventListener('submit', function(event){
    event.preventDefault();

    let numFat = Number(document.getElementById('fatorial').value);
    let result = 1;

    while (numFat > 1) {
        result *= numFat;
        numFat --;
    }

    resultado12.innerHTML = `<p>O resultado é ${result}</p>`;
})
