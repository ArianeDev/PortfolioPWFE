// Código que simula um financiamento

const form13 = document.getElementById('form13');
const resultado13 = document.getElementById('resultado13');

form13.addEventListener('submit', function(event){
	event.preventDefault();

	let valorFinanciado = parseFloat(document.getElementById('valorFinanciamento').value);
    let taxaJuro = parseFloat(document.getElementById('taxaJurosfinan').value) / 100; 
    let numParcelas = parseInt(document.getElementById('numPar').value);

	console.log(valorFinanciado, taxaJuro, numParcelas);
	

	let i = taxaJuro / 12;
    let parcelas = (valorFinanciado * i) / (1 - Math.pow(1 + i, -numParcelas));

	resultado13.innerHTML = `<p>O valor do financiamento será de ${parcelas.toFixed(2)}</p>`;
})