const form04 = document.getElementById('form04');

form04.addEventListener('submit', function(event){
	event.preventDefault();

	celsius = document.getElementById('celsius').value;

	celsius = parseInt(celsius);

	let fahrenheit = (celsius*9/5)+32;

	document.getElementById('resultado04').innerHTML = `<p>A temperatura ${celsius}°C em Fahrenheit fica ${fahrenheit}F.</p>`;
})