// Exercício 8 e 9

// Exercício 8 - Código que leia 6 números guardando em uma array para depois guardar a metade em outra
const form08 = document.getElementById('form08');
const resultado08 = document.getElementById('resultado08');
const alertUsu08 = document.getElementById('alertUsu08');

const btn_send_08 = document.getElementById('btn_send_08')
const btn_add_08 = document.getElementById('btn_add_08');

const list_num_08 = [];

function AdicionarNum_dobro(event){
    event.preventDefault();

    let num_08 = document.getElementById('num_08').value;

    if(num_08 === ""){
        alertUsu08.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    }

    console.log(num_08)
    list_num_08.push(Number(num_08));

    if(list_num_08.length < 6){
        alertUsu08.innerHTML = `<p>Você já digitou ${list_num_08.length}.</p>`;

    } else if(list_num_08.length === 6){
        document.getElementById('num_08').value = "";
        alertUsu08.innerHTML = `<p>Você já digitou 6 números!</p>`;
        
        btn_send_08.classList.remove("desativado");
        btn_send_08.classList.add("ativado");

        document.getElementById("btn_add_08").disabled = true;
        btn_add_08.classList.remove("ativado");
        btn_add_08.classList.add("desativado");
        return;
    }
    
    document.getElementById('num_08').value = "";
}

document.getElementById('btn_add_08').addEventListener('click', AdicionarNum_dobro);

form08.addEventListener('submit', function(event){
    event.preventDefault();

    let metade_list_num = list_num_08.map(num => num / 2);

    resultado08.innerHTML = `<p>Os números digitados foram: ${list_num_08}</p><p>A metade dos números é: ${metade_list_num.join(', ')}</p>`;

    alertUsu08.innerHTML = '';
    document.getElementById('num_08').removeAttribute('readonly');
    
    document.getElementById("btn_add_08").disabled = false;
    document.getElementById("btn_send_08").disabled = true;
    btn_send_08.classList.remove("ativado");
    btn_send_08.classList.add("desativado");

    btn_add_08.classList.add("ativado");
    btn_add_08.classList.remove("desativado");
})
