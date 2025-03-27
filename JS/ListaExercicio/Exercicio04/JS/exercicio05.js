// Código que lê 8 números e verifica se estão entre 100 e 200

const form05 = document.getElementById('form05');
const resultado05 = document.getElementById('resultado05');
const alertUsu05 = document.getElementById('alertUsu05');

const btn_send_05 = document.getElementById('btn_send_05')
const btn_add_05 = document.getElementById('btn_add_05');

let list_num_05 = [];

function AdicionarNum_05(event){
    event.preventDefault();

    let num = document.getElementById('num05').value;

    if(num === ""){
        alertUsu05.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    }

    num = parseInt(num);
    
    console.log(num >= 100 && num <= 200)
    if(num >= 100 && num <= 200){

        list_num_05.push(num);

        if(list_num_05.length === 8){
            document.getElementById('num05').value = "";
            alertUsu05.innerHTML = `<p>Já escreveu 8 números</p>`;
            document.getElementById('num05').setAttribute('readonly', true);
        
            btn_send_05.classList.remove("desativado");
            btn_send_05.classList.add("ativado");
    
            document.getElementById("btn_add_05").disabled = true;
            btn_add_05.classList.remove("ativado");
            btn_add_05.classList.add("desativado");
            return;
        }
    
        if(list_num_05.length < 8){
            alertUsu05.innerHTML = `<p>Você digitou ${list_num_05.length} números.</p>`;
        }
    } else {
        alertUsu05.innerHTML = `<p>Valor inválido</p>`;
        return;
    }
    

    document.getElementById('num05').value = "";
}

document.getElementById('btn_add_05').addEventListener('click', AdicionarNum_05);

form05.addEventListener('submit', function(event){
    event.preventDefault();
    
    // Exibição do resultado
    resultado05.innerHTML = `<p>Preenchido corretamente! Números digitados:</p>`;

    for(let i of list_num_05){
        resultado05.innerHTML += `<p>${i}</p>`;
    }

    // Formatação para reiniciar o formulário
    list_num_05 = []
    alertUsu05.innerHTML = '';
    document.getElementById('num05').removeAttribute('readonly');
    
    document.getElementById("btn_send_05").disabled = true;
    btn_send_05.classList.remove("ativado");
    btn_send_05.classList.add("desativado");

    btn_add_05.classList.add("ativado");
    btn_add_05.classList.remove("desativado");
})