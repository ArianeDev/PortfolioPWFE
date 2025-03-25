const form03 = document.getElementById('form03');

form03.addEventListener('submit', function(event){
    event.preventDefault();

    numMul1 = document.getElementById('numMultiplo1').value;
    numMul2 = document.getElementById('numMultiplo2').value;

    numMul1 = parseInt(numMul1);
    numMul2 = parseInt(numMul2);

    let multiplo = numMul2 / numMul1;

    if (numMul1%numMul2 == 0){
        document.getElementById('resultado03').innerHTML = `</p>O número ${numMul1} é múltiplo do número ${numMul2}</p>`;
    } else {
        document.getElementById('resultado03').innerHTML = `</p>O número ${numMul1} não é múltiplo do número ${numMul2}</p>`;
    }

})