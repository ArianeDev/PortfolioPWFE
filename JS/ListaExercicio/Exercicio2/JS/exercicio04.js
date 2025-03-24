const form04 = document.getElementById('form04');
const resultado04 = document.getElementById('resultado04');

form04.addEventListener('submit', function(event){
	event.preventDefault();

	let idade = parseInt(document.getElementById('idade').value);

	if(idade >= 18){
		resultado04.innerHTML = `<p>Você pode tirar a carteira de motorista.</p>`;
	}else{
		resultado04.innerHTML = `<p>Voce NÃO pode tirar a carteira de motorista.</p>`;
	}
})