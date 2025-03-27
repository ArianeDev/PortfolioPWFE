// Código que verifica se a idade digitada já pode dirigir

const form04 = document.getElementById('form04');
const resultado04 = document.getElementById('resultado04');

form04.addEventListener('submit', function(event){
	event.preventDefault();

	let idade = document.getElementById('idade').value;

	console.log(idade);

	if(idade == ""){
        resultado04.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    } 

	idade = parseInt(idade);

	if(idade < 0){
		resultado04.innerHTML = `<p>Digite um número válido!</p>`;
		return;
	} else {
		if(idade >= 18){
			resultado04.innerHTML = `<p>Você pode tirar a carteira de motorista.</p>`;
		}else{
			resultado04.innerHTML = `<p>Voce NÃO pode tirar a carteira de motorista.</p>`;
		}
	}


	document.getElementById('idade').value = "";
})