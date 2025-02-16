const form02 = document.getElementById('form02');

form02.addEventListener('submit', function(event){
    event.preventDefault();

    num = document.getElementById('numPar').value;

    num = parseInt(num);

    if (num%2 == 0){
        document.getElementById('resultado02').innerHTML = `<p>O número ${num} é par.</p>`;
    } else {
        document.getElementById('resultado02').innerHTML = `<p>O número ${num} é impar.</p>`;
    }
})