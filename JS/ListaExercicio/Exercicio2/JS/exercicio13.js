// Arrumar

const form13 = document.getElementById('form13');
const resultado13 = document.getElementById('resultado13');

form13.addEventListener('submit', function(event){
	event.preventDefault();

	let valorFinanciado = Number(document.getElementById('valorFinanciamento').value);
	let taxaJuro = parseFloat(document.getElementById('taxaJurosfinan').value);
	let numParcelas = Number(document.getElementById('tempo').value);
	
	let i = taxaJuro/100;

	const parcelas = (valorFinanciado * i * Math.pow(1 + i, numParcelas)) / (Math.pow(1 + i, numParcelas) - 1);

	resultado13.innerHTML = `<p>O valor do financiamento será de ${parcelas}</p>`;
})