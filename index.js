//Resgatando os nomes dos jogadores

const btn = document.querySelector('.salvarNamePlayers');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const player1 = document.querySelector('#player1').value;
    const player2 = document.getElementById('player2').value;
    console.log(player1, player2)

    jogadorDaVez(player1);

})


// Imprimindo na tela o nome do jogador da vez 

function jogadorDaVez (player){
    const jogadorDaVez = document.getElementById('jogadorDaVez');

    jogadorDaVez.value = player;

    console.log(jogadorDaVez.value);
}

document.querySelectorAll('.bnt').forEach(function (bntClicado) {
    bntClicado.addEventListener('click', function () {
        console.log(bntClicado.value);
    })})