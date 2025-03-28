// Exercício 9 - Código que leia 10 números guardando metade em lista diferentes e depois juntando em uma lista só
const form09 = document.getElementById('form09');
const resultado09 = document.getElementById('resultado09');
const alertUsu09 = document.getElementById('alertUsu09');

const btn_send_09 = document.getElementById('btn_send_09');
const btn_add1_09 = document.getElementById('btn_add1_09');
const btn_add2_09 = document.getElementById('btn_add2_09');

const list_num1_09 = [];
const list_num2_09 = [];
const arrayC = [];

function adicionarNumero(event, lista, btnAtivar, btnDesativar) {
    event.preventDefault();

    const num_09 = document.getElementById('num_09').value;

    if (num_09 === "") {
        alertUsu09.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    }

    lista.push(Number(num_09));

    if (lista.length < 5) {
        alertUsu09.innerHTML = `<p>Você já digitou ${lista.length} números.</p>`;
    } else if (lista.length === 5) {
        document.getElementById('num_09').value = "";
        alertUsu09.innerHTML = `<p>Você já digitou 5 números!</p>`;

		btnAtivar.disabled = false;
		btnAtivar.classList.remove("desativado");
		btnAtivar.classList.add("ativado");

		btnDesativar.disabled = true;
		btnDesativar.classList.remove("ativado");
		btnDesativar.classList.add("desativado");
    }

    document.getElementById('num_09').value = "";
    alertUsu09.innerHTML = "";
}

document.getElementById('btn_add1_09').addEventListener('click', (event) => {adicionarNumero(event, list_num1_09, btn_add2_09, btn_add1_09);});

document.getElementById('btn_add2_09').addEventListener('click', (event) => {adicionarNumero(event, list_num2_09, btn_send_09, btn_add2_09);})

form09.addEventListener('submit', function (event) {
    event.preventDefault();

    for (let i = 0; i < list_num1_09.length; i++) {
        arrayC.push(list_num1_09[i]);
        arrayC.push(list_num2_09[i]);
    }

    resultado09.innerHTML = `<p>A lista final é: ${arrayC}</p>`;

    alertUsu09.innerHTML = '';

    document.getElementById("btn_add1_09").disabled = false;
    document.getElementById("btn_send_09").disabled = true;
    btn_send_09.classList.remove("ativado");
    btn_send_09.classList.add("desativado");

    btn_add1_09.classList.add("ativado");
    btn_add1_09.classList.remove("desativado");
});