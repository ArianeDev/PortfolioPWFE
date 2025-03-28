// Neste arquivo irá guardar três números digitados pelo usuário e coloca-los em ordem crescente

const form05 = document.getElementById('form05');
const resultado05 = document.getElementById('resultado05');
const alertUsu = document.getElementById('alert');

const btn_send = document.getElementById('btn_send');
const btn_add = document.getElementById('btn_add');

list_num = []

function AdicionarNumero(event){
    event.preventDefault();

    let num = document.getElementById('num1').value;

    // Verifica se o campo esta vazio
    if(num === ""){
        alertUsu.innerHTML = `<p>Preencha o campo!</p>`;
        return;
    }

    // Adiciona o número a lista
    num = Number(num);
    list_num.push(num);

    if(list_num.length === 3){
        // Parte que informa ao usuário que chegou na quantidade limite de inserções
        document.getElementById('num1').value = "";
        alertUsu.innerHTML = `<p>Já escreveu 3 números</p><p>Clique no botão organizar</p>`;
        document.getElementById('num1').setAttribute('readonly', true);
        
        // Ativar o botão para o usuário organizar a lista
        btn_send.classList.remove("desativado");
        btn_send.classList.add("ativado");

        // Desativar o botão que adiciona números na lista
        document.getElementById("btn_add").disabled = true;
        btn_add.classList.remove("ativado");
        btn_add.classList.add("desativado");
        return;
    }

    // Mostra quantos números o usuário já digitou
    if(list_num.length < 3){
        alertUsu.innerHTML = `<p>Você digitou ${list_num.length} números.</p>`;
    }

    document.getElementById('num1').value = "";

}

document.getElementById('btn_add').addEventListener('click', AdicionarNumero);

form05.addEventListener('submit', function(event){
    event.preventDefault();

    // Se o input estiver somente na opção leitura irá executar o seguinte bloco de código
    if(document.getElementById('num1').readOnly){
        resultado05.innerHTML = `<p>Números digitados: </p><p class="resposta">${list_num}</p>\n`;
        
        // Organiza a lista
        list_num = list_num.sort((a,b) => a - b);

        resultado05.innerHTML += `<p>Números organizados: </p><p class="resposta">${list_num}</p>`;

        list_num = []
        alertUsu.innerHTML = '';
        document.getElementById('num1').removeAttribute('readonly');

        document.getElementById("btn_add").disabled = false;
        document.getElementById("btn_send").disabled = true;
        btn_send.classList.remove("ativado");
        btn_send.classList.add("desativado");

        btn_add.classList.add("ativado");
        btn_add.classList.remove("desativado");
    }
})