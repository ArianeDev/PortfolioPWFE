const form05 = document.getElementById('form05');

form05.addEventListener('submit', function(event){
	event.preventDefault();

	let base = document.getElementById('base').value;
	let altura = document.getElementById('altura').value;

	let area = base*altura;

	document.getElementById('resultado05').innerHTML = `<p>A área do quadrado é ${area}</p>`;
})