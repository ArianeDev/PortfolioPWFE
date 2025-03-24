const form11 = document.getElementById('form11');
const resultado11 = document.getElementById('resultado11');

form11.addEventListener('submit', function(event){
	event.preventDefault();

	const salarioDes = (salario, aliquota) => salario * (aliquota/100);
	
	let salario = document.getElementById('salarioInss').value;
	let aliquota = document.getElementById('aliquota').value;

	const resultado = salarioDes(salario, aliquota)

	resultado11.innerHTML = `<p>O valor do INSS é de ${resultado}</p>`;
})