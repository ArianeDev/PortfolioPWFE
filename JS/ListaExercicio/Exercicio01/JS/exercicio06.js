const form06 = document.getElementById('form06');

form06.addEventListener('submit', function(event){
	event.preventDefault();

	const resultado06 = document.getElementById('resultado06');

	let nota1 = document.getElementById('nota1').value;
	let nota2 = document.getElementById('nota2').value;

	nota1 = parseFloat(nota1)
	nota2 = parseFloat(nota2)

	let media = (nota1 + nota2) / 2

	console.log(media, nota1, nota2)

	if (media > 6){
		resultado06.innerHTML = `<p>O aluno está a cima da média.</p>`;
	} else {
		resultado06.innerHTML = `<p>O aluno está a baixo da média.</p>`;
	}
	
	if (media%2 == 0){
		resultado06.innerHTML += `<p>A média do aluno é par.</p>`;
	} else {
		resultado06.innerHTML += `<p>A média do aluno é impar.</p>`;
	}
})