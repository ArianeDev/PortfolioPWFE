// Código que calcula o INSS a partir do salário inserido pelo usuário

const form11 = document.getElementById('form11');
const resultado11 = document.getElementById('resultado11');

form11.addEventListener('submit', function(event){
	event.preventDefault();

	let salario = document.getElementById('salarioInss').value;
	let aliquota = '';
	let resultado = '';

	if(isNaN(salario) || salario <= 0){
        resultado11.innerHTML = `<p>Preencha o campo!!</p>`;
        return;
    }

	if(salario <= 1302){
        aliquota = 7.5; 
    } else if(salario <= 2571.29){
        aliquota = 9;  
    } else if(salario <= 3856.94){
        aliquota = 12;
    } else {
        aliquota = 14;
    }

	resultado = salario * (aliquota / 100);

	resultado11.innerHTML = `<p>O valor do INSS é de ${resultado}</p>`;

	document.getElementById('salarioInss').value = "";
})