let form03 = document.getElementById('form03');

form03.addEventListener('submit', function(event){
    event.defaultPrevented()

    numMul1 = document.getElementById('numMultiplo1').valeu;
    numMul2 = document.getElementById('numMultiplo2').valeu;

    numMul1 = parseInt(numMul1);
    numMul2 = parseInt(numMul2);

    let multiplo = numMul1 / numMul2;

    if (multiplo == 0){
        document.getElementById('resultado03').innerHTML = `</p>O número ${numMul1} é múltiplo do número ${numMul2}</p>`;
    } else {
        document.getElementById('resultado03').innerHTML = `</p>O número ${numMul1} não é múltiplo do número ${numMul2}</p>`;
    }

})