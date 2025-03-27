// Código que lê 20 idades, calcula a média e exibe todas as idades maiores que a média
const form03 = document.getElementById('form03');
const resultado03 = document.getElementById('resultado03');
const alertUsu03 = document.getElementById('alertUsu03');

const btn_send_03 = document.getElementById('btn_send_03')
const btn_add_03 = document.getElementById('btn_add_03');

let list_idades = [];

function AdicionarIdade(event){
    event.preventDefault();

    let idade = document.getElementById('idade').value;

    if(idade === ""){
        alertUsu03.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    }

    idade = parseInt(idade);
    list_idades.push(idade);
    
    if(list_idades.length === 20){
        document.getElementById('idade').value = "";
        alertUsu03.innerHTML = `<p>Já escreveu 20 idades</p>`;
        document.getElementById('idade').setAttribute('readonly', true);
    
        btn_send_03.classList.remove("desativado");
        btn_send_03.classList.add("ativado");

        document.getElementById("btn_add_03").disabled = true;
        btn_add_03.classList.remove("ativado");
        btn_add_03.classList.add("desativado");
        return;
    }

    if(list_idades.length < 20){
        alertUsu03.innerHTML = `<p>Você digitou ${list_idades.length} idades</p>`;
    }

    document.getElementById('idade').value = "";
}

document.getElementById('btn_add_03').addEventListener('click', AdicionarIdade);

form03.addEventListener('submit', function(event){
    event.preventDefault();

    if(document.getElementById('idade').readOnly){
        let soma = 0;
        let resultado = '';

        for(let i of list_idades){
            soma = soma + i;
        }

        resultado03.innerHTML = `<p>As idades maiores que a média são: </p>`
        for(let i of list_idades){
            if(i >= (soma/list_idades.length)){
                resultado += `<p>${i}</p>`;
            }
        }

        resultado03.innerHTML += `<p>${resultado}</p>`;

        list_idades = []
        alertUsu03.innerHTML = '';
        document.getElementById('idade').removeAttribute('readonly');
    }

    document.getElementById("btn_send_03").disabled = true;
    btn_send_03.classList.remove("ativado");
    btn_send_03.classList.add("desativado");

    btn_add_03.classList.add("ativado");
    btn_add_03.classList.remove("desativado");
})