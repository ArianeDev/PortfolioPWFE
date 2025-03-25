const form05 = document.getElementById('form05');
const resultado05 = document.getElementById('resultado05');

form05.addEventListener('submit', function(event){
    event.preventDefault()

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);

    list = [num1, num2, num3];

    list = list.sort()

    resultado05.innerHTML = `<p>A lista em ordem crescente:</p><p class="resposta">${list}</p>`
})