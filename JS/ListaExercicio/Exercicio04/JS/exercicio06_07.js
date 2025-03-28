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

let cont = 1;

function AdicionarNomes(event){
    event.preventDefault();

    console.log("OI")

    let nome_07 = document.getElementById('nome_07').value;

    // Analisar se o campo esta vazio
    if(nome_07 === ""){
        alertUsu07.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    }

    // Ver se a quantidade de tentativas é menor que 5
    if(cont < 5){
        for(let i in nomes){
            if(nomes[i] === nome_07){
                alertUsu07.innerHTML = `<p>O indice do nome é ${i}. Parabéns você acertou!</p>`;
                return;
            }
        }
        alertUsu07.innerHTML = `<p>Você tem mais ${5 - cont} tenativas.</p>`;

    } else if(cont === 5){ // Finalizar tentativas do usuário
        document.getElementById('nome_07').value = "";
        alertUsu07.innerHTML = `<p>Você já fez 8 tentaivas! Não foi dessa vez, tente de novo!</p>`;
        
        btn_send_07.classList.remove("desativado");
        btn_send_07.classList.add("ativado");

        document.getElementById("btn_add_07").disabled = true;
        btn_add_07.classList.remove("ativado");
        btn_add_07.classList.add("desativado");
        return;
    }
    
    cont += 1;
    document.getElementById('nome_07').value = "";
}

function Reiniciar(){
    cont = 0;
    alertUsu07.innerHTML = '';
    document.getElementById('nome_07').removeAttribute('readonly');
    
    document.getElementById("btn_add_07").disabled = false;
    document.getElementById("btn_send_07").disabled = true;
    btn_send_07.classList.remove("ativado");
    btn_send_07.classList.add("desativado");

    btn_add_07.classList.add("ativado");
    btn_add_07.classList.remove("desativado");
}

document.getElementById('btn_add_07').addEventListener('click', AdicionarNomes);
document.getElementById('btn_send_07').addEventListener('click', Reiniciar);