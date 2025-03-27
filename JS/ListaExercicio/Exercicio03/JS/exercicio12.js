// Código que calcula os juros compostos de um produto

const form12 = document.getElementById('form12');
const resultado12 = document.getElementById('resultado12');

form12.addEventListener('submit', function(event) {
	event.preventDefault();

	const jurosCompostos = (capitalInicial, taxaJuro, tempo) => capitalInicial * Math.pow(1 + (taxaJuro/100), tempo);

	let capitalInicial = document.getElementById('capitalInicial').value;
	let taxaJuro = document.getElementById('taxaJuros').value;
	let tempo = document.getElementById('tempo').value;

	if(isNaN(capitalInicial) || capitalInicial <= 0 || isNaN(taxaJuro) || taxaJuro <= 0 || isNaN(tempo) || tempo <= 0){
        resultado12.innerHTML = `<p>Preencha os campos!!</p>`;
        return;
    }

	const resultado = jurosCompostos(capitalInicial, taxaJuro, tempo);
	
	resultado12.innerHTML = `<p>O resultado do juros composto é ${resultado.toFixed(2)}</p>`;

	document.getElementById('capitalInicial').value = "";
	document.getElementById('taxaJuros').value = "";
	document.getElementById('tempo').value = "";
})