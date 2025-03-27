// Código que executa a contagem de quantas cédulas seria necessário para o pagamento do valor digta pelo usuário

const form07 = document.getElementById('form07');
const resultado07 = document.getElementById('resultado07');

form07.addEventListener('submit', function(event){
    event.preventDefault();

    let valorUsu = parseInt(document.getElementById('celulas').value);
    let resultado = '';

    if(isNaN(valorUsu) || valorUsu <= 0){
        resultado07.innerHTML = `<p>Preencha todos os campos!!</p>`;
        return;
    }

    const celulas = [200, 100, 50, 20, 10, 5, 1];

    for(let cedula of celulas){
        const qtn_celulas = Math.floor(valorUsu / cedula);

        if(qtn_celulas > 0){
            resultado07.innerHTML += `<p>${qtn_celulas} cédulas de R$${cedula}</p>`;
        }

        valorUsu = valorUsu % cedula;
    }    
    
    document.getElementById('celulas').value = "";
})