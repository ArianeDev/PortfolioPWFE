const form09 = document.getElementById('form09');
const resultado09 = document.getElementById('resultado09');

form09.addEventListener("submit", function(event){
    event.preventDefault();

    let valor = Number(document.getElementById('taxa').value);
    let taxa = 10;

    console.log(valor)

    valorTaxado = valor + taxa;

    resultado09.innerHTML = `<p>O valor total da sua compra ficará: ${valorTaxado}</p>`;
})