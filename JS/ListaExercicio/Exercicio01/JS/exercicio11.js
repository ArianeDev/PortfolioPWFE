const form11 = document.getElementById('form11');
const resultado11 = document.getElementById('resultado11');
const jogadas = ['pedra', 'tesoura', 'papel'];

form11.addEventListener('submit', function(event){
    event.preventDefault();

    let selectvalor = document.getElementById('jogo');
    let random = jogadas[Math.floor(Math.random() * jogadas.length)]

    const jogada_usu = selectvalor.value;

    console.log(jogada_usu)

    if (jogada_usu == random){
        resultado11.innerHTML = `<p>Deu empate</p>`;
    } else {
        if (jogada_usu == 'pedra' && random == 'tesoura' || jogada_usu == 'papel' && random == 'pedra' || jogada_usu == 'tesoura' && random == 'papel'){
            resultado11.innerHTML = `<p>Você ganhou 😄</p>`;
        } else {
            resultado11.innerHTML = `<p>Você perdeu 😢</p>`;
        }
    }
    resultado11.innerHTML += `<p>Jogada da máquina: ${random}</p>`;

})