const form09 = document.getElementById('form09');
const resultado09 = document.getElementById('resultado09');

form09.addEventListener('submit', function(event){
    event.preventDefault()

    let nome = document.getElementById('nome');
    let endereco = document.getElementById('endereco');
    let telefone = document.getElementById('telefone');
    let celular = document.getElementById('celular');
    let email = document.getElementById('email');

    if(nome.value == ""){
        window.alert("Preencha o campo nome!");
        nome.focus();
    }
    if(endereco.value == ""){
        window.alert("Preencha o campo endereço!");
        endereco.focus();
    }
    if(telefone.value == ""){
        window.alert("Preencha o campo telefone!");
        telefone.focus();
    }
    if(celular.value == ""){
        window.alert("Preencha o campo celular!");
        celular.focus();
    }
    if(email.value == ""){
        window.alert("Preencha o campo email!");
        email.focus();
    }
    if(!$("input[name='sexo']:checked").length){
        window.alert("Marque umas das opções!");
    }
})
