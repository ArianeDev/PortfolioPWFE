const form10 = document.getElementById("form10");
const resultado10 = document.getElementById("resultado10"); 

form10.addEventListener('submit', function(event){
    event.preventDefault();
    
    resultado10.innerHTML = `<p></p>`;
    let numTab = parseInt(document.getElementById('numTab').value);
   
    for (let i = 0; i<=10; i++){
        resultado10.innerHTML += `<p>${i} X ${numTab} = ${i*numTab}</p>`;
        console.log(i, numTab, (i*numTab))
    }
})