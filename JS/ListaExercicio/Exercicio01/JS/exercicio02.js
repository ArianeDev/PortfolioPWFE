let form02 = document.getElementById('form02');

form02.addEventListener('submit', function(event){
    event.preventDefault()

    num = document.getElementById('numPar').value;

    num = parseInt(num);

    if (num%2 == 0){
        document.getElementById('resultado02').innerHTML = `O número ${num} é par`;
    } else {
        document.getElementById('resultado02').innerHTML = `O número ${num} é impar`;
    }
})