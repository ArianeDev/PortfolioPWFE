// Arrumar

const form01 = document.getElementById('form01');
const resultado01 = document.getElementById('resultado01');

const select = document.getElementById('operacao');
const valorSele = select.options[select.selectedIndex].value;

form01.addEventListener('submit', function(event){
	event.preventDefault();

	let num1 = Number(document.getElementById('cal_num_1').value);
	let num2 = Number(document.getElementById('cal_num_2').value);
	let resultado = 0;

	console.log(valorSele)
	if(valorSele == 'soma'){
		resultado = num1 + num2;
	} else if(valorSele === 'substração'){
		resultado = num1 - num2;
	} else if(valorSele === 'multiplicação'){
		resultado = num1 * num2;
	} else if(valorSele === 'divição'){
		if(num2 == 0){
			resultado01.innerHTML= "Não é possível realizar essa operação, pois, o denominador tem que ser diferente de 0."
		} else {
			resultado = num1 / num2
		}
	}

	resultado01.innerHTML = `O valor da ${valorSele} é ${resultado}`;
})