// Código que verifica se todos os campos de um formulário foram preenchidos

const form09 = document.getElementById('form09');
const resultado09 = document.getElementById('resultado09');

form09.addEventListener('submit', function(event){
    event.preventDefault()

    let nome = document.getElementById('nome');
    let endereco = document.getElementById('endereco');
    let telefone = document.getElementById('telefone');
    let celular = document.getElementById('celular');
    let email = document.getElementById('email');
    let sexo = document.querySelector("input[name='sexo']:checked");

    if(nome.value == ""){
        resultado09.innerHTML = `Preencha o campo nome!`;
        nome.focus();
        return;
    }
    if(endereco.value == ""){
        resultado09.innerHTML = `Preencha o campo endereco!`;
        endereco.focus();
        return;
    }
    if(telefone.value == ""){
        resultado09.innerHTML = `Preencha o campo telefone!`;
        telefone.focus();
        return;
    }
    if(celular.value == ""){
        resultado09.innerHTML = `Preencha o campo celular!`;
        celular.focus();
        return;
    }
    if(email.value == ""){
        resultado09.innerHTML = `Preencha o campo email!`;
        email.focus();
        return;
    }
    if(!sexo){
        resultado09.innerHTML = `Marque uma das opções de sexo!`;
        return; 
    }

    resultado09.innerHTML = `<p>Seu cadastro foi enviado com sucesso!</p>`;

    document.getElementById('nome').value = "";
    document.getElementById('endereco').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('celular').value = "";
    document.getElementById('email').value = "";
})
