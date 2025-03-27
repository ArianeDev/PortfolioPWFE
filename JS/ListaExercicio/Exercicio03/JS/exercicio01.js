// Código que realiza as operalções básicas

const form01 = document.getElementById('form01');
const resultado01 = document.getElementById('resultado01');

const select = document.getElementById('operacao');

form01.addEventListener('submit', function(event){
	event.preventDefault();
	
	const valorSele = select.options[select.selectedIndex].value;
	
	let num1 = document.getElementById('cal_num_1').value;
	let num2 = document.getElementById('cal_num_2').value;
	let resultado = 0;

	console.log(valorSele);
	if(num1 == "" || num2 == "" || valorSele == ""){
		resultado01.innerHTML = "<p>Preencha todos os campos!!</p>";
		return;
	} else {
		num1 = Number(num1);
		num2 = Number(num2);

		if(valorSele == 'soma'){
			resultado = num1 + num2;
		} else if(valorSele === 'substração'){
			resultado = num1 - num2;
		} else if(valorSele === 'multiplicação'){
			resultado = num1 * num2;
		} else if(valorSele === 'divisão'){
			if(num2 == 0){
				resultado01.innerHTML= "<p>Não é possível realizar essa operação, pois, o denominador tem que ser diferente de 0.</p>";
				return;
			} else {
				resultado = num1 / num2
			}
		}
	}

	resultado01.innerHTML = `<p>O valor da ${valorSele} é ${resultado}.</p>`;
	document.getElementById('cal_num_1').value = "";
	document.getElementById('cal_num_2').value = "";
	select.selectedIndex = 0;
})