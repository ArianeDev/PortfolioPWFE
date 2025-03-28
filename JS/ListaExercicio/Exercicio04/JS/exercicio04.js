// Código que lê 20 idades, calcula a média e exibe todas as idades maiores que a média

const form04 = document.getElementById('form04');
const resultado04 = document.getElementById('resultado04');
const alertUsu04 = document.getElementById('alertUsu04');

const btn_send_04 = document.getElementById('btn_send_04')
const btn_add_04 = document.getElementById('btn_add_04');

let list_num = [];

function AdicionarNum(event){
    event.preventDefault();

    let num = document.getElementById('numPar04').value;

    if(num === ""){
        alertUsu04.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    }

    num = parseInt(num);
    list_num.push(num);
    
    if(list_num.length === 10){
        document.getElementById('numPar04').value = "";
        alertUsu04.innerHTML = `<p>Já escreveu 10 números</p>`;
        document.getElementById('numPar04').setAttribute('readonly', true);
    
        btn_send_04.classList.remove("desativado");
        btn_send_04.classList.add("ativado");

        document.getElementById("btn_add_04").disabled = true;
        btn_add_04.classList.remove("ativado");
        btn_add_04.classList.add("desativado");
        return;
    }

    if(list_num.length < 10){
        alertUsu04.innerHTML = `<p>Você digitou ${list_num.length} números.</p>`;
    }

    document.getElementById('numPar04').value = "";
}

document.getElementById('btn_add_04').addEventListener('click', AdicionarNum);

form04.addEventListener('submit', function(event){
    event.preventDefault();

    if(document.getElementById('numPar04').readOnly){
        let resultado = '';

        for(let i of list_num){
            if(i%2 == 0){
                resultado += `<p>${i}</p>`;
            }
        }

        if(resultado == ""){
            resultado04.innerHTML = `<p>Todos os números são ímpares</p>`;
            return;
        } else {
            resultado04.innerHTML = `<p>Os números pares são: </p>`
            resultado04.innerHTML += `<p>${resultado}</p>`;
        }

        list_num = []
        alertUsu04.innerHTML = '';
        document.getElementById('numPar04').removeAttribute('readonly');
    }

    document.getElementById("btn_add_04").disabled = false;
    document.getElementById("btn_send_04").disabled = true;
    btn_send_04.classList.remove("ativado");
    btn_send_04.classList.add("desativado");

    btn_add_04.classList.add("ativado");
    btn_add_04.classList.remove("desativado");
})