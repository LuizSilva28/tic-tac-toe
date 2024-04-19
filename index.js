

var bntIniciar = document.querySelector(".iniciarJogo");
bntIniciar.addEventListener("click", function (e){
    e.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    marcadorDeJogada(player1, player2)
    bntIniciar.setAttribute('disabled','true');
});

function jogadorDaVez(player){
    var jogador = document.querySelector("#jogadorDaVez");
    jogador.value = player;
    return jogador.value;
}

  

function marcadorDeJogada (player1, player2){
    jogadorDaVez(player1)
    var playerQueJogou = jogadorDaVez(player1)
    i=1;
    console.log(`Rodada ${i}: ` + playerQueJogou);
    

    document.querySelectorAll('.bnt').forEach(function (bntClicado){
        bntClicado.addEventListener('click', function(){
            console.log('Botão clicado com sucesso!')

            

            if (playerQueJogou === player1){

            console.log(`Rodada ${i}: ` + playerQueJogou)
            bntClicado.innerHTML = " X ";
            jogadorDaVez(player2)
            console.log('Jogador da vez agora é: '+ jogadorDaVez(player2))
            playerQueJogou = jogadorDaVez(player2)
            i++

        } else if (playerQueJogou === player2){
            console.log(`Rodada ${i}: ` + playerQueJogou)
            bntClicado.innerHTML = " O ";
            jogadorDaVez(player1)
            console.log('Jogador da vez agora é: '+ jogadorDaVez(player1))
            playerQueJogou = jogadorDaVez(player1)
            i++

        }
        bntClicado.setAttribute('disabled','true');
           
        
        }
        )
    })
    
}

