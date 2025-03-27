// Neste arquivo esta o exercício 6 e 7

// Exercício 6 - Código que verifica se o nome que o usuário digitou esta na lista de nomes

const resultado06 = document.getElementById('resultado06');
const form06 = document.getElementById('form06');

const nomes = ["Joyce", "Ariane", "Nicolas", "Thifany", "João", "Gabriela", "Geovanna", "Resende", "Evellyn", "Lívia"];

form06.addEventListener('submit', function(event){
    event.preventDefault();

    let nome = document.getElementById('nome_06').value;

    for(let i in nomes){
        if(nomes[i] === nome){
            resultado06.innerHTML = `<p>O indice do nome é ${i}</p>`;
            return;
        }
    }
    resultado06.innerHTML = `<p>Nome não foi encontrado</p>`;

    document.getElementById('nome_06').value = '';
})

// Exercício 7 - Código que verifica se o nome que o usuário digitou esta na lista de nomes, dando 5 tentivas para o usuário
const form07 = document.getElementById('form07');
const resultado07 = document.getElementById('resultado07');
const alertUsu07 = document.getElementById('alertUsu07');

const btn_send_07 = document.getElementById('btn_send_07')
const btn_add_07 = document.getElementById('btn_add_07');


function AdicionarNomes(event){
    event.preventDefault();

    let nome_07 = document.getElementById('nome_07').value;

    if(nome_07 === ""){
        alertUsu07.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    }

    
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

document.getElementById('btn_add_07').addEventListener('click', AdicionarNomes);

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