const form12 = document.getElementById('form12');
const resultado12 = document.getElementById('resultado12');

form12.addEventListener('submit', function(event) {
	event.preventDefault();

	const jurosCompostos = (capitalInicial, taxaJuro, tempo) => capitalInicial * Math.pow(1 + (taxaJuro/100), tempo);

	let capitalInicial = document.getElementById('capitalInicial').value;
	let taxaJuro = document.getElementById('taxaJuros').value;
	let tempo = document.getElementById('tempo').value;

	const resultado = jurosCompostos(capitalInicial, taxaJuro, tempo);
	
	resultado12.innerHTML = `<p>O resultado do juros composto é ${resultado.toFixed(2)}</p>`;
})