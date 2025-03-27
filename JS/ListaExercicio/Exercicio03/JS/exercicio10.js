// Código que calcula o imposto de renda baseado no salário que o usuário digitar

const form10 = document.getElementById('form10');
const resultado10 = document.getElementById('resultado10');

form10.addEventListener('submit', function(event){
    event.preventDefault();

    let salario = Number(document.getElementById('salario').value);
    let imposto = 0;

    if(isNaN(salario) || salario <= 0){
        resultado10.innerHTML = `<p>Preencha o campo!!</p>`;
        return;
    }

    console.log(salario <= 2112);
    if(salario <= 2112) {
        resultado10.innerHTML = `<p>Você não paga!</p>`;
        return;
    } else if(salario <= 3000) {
        imposto = (salario - 2112.01) * 0.075;
    } else if(salario <= 4000) {
        imposto = (salario - 2112.01) * 0.075 + (salario - 3000.01) * 0.15;
    } else if(salario <= 5000) {
        imposto = (salario - 2112.01) * 0.075 + (salario - 3000.01) * 0.15 + (salario - 4000.01) * 0.225;
    } else if(salario > 5000) {
        imposto = (salario - 2112.01) * 0.075 + (salario - 3000.01) * 0.15 + (salario - 4000.01) * 0.225 +  + (salario - 5000.01) * 0.275;
    } else {
        resultado10.innerHTML = `<p>Preencha um número válido!</p>`;
    }
    
    resultado10.innerHTML = `<p>Você paga R$${imposto.toFixed(2)} de imposto de renda.</p>`;
    document.getElementById('salario').value = "";
})