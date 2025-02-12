let form = document.getElementById('form01');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById("num2").value;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let diferenca;
    
    diferenca = num1 - num2;
    console.log(diferenca, num1, num2)
    
    document.getElementById("resultado01").innerHTML = `<p>A diferença é ${diferenca}</p>`;
})