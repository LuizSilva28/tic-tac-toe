

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

const div = document.getElementById('telaDaJogada');

var labelTelaDaJogada = document.createElement("label");
labelTelaDaJogada.htmlFor = 'jogadorDaVez'
labelTelaDaJogada.innerHTML = "Jogador da vez: ";

div.appendChild(labelTelaDaJogada);

var inputTelaDaJogada = document.createElement("input");
inputTelaDaJogada.type = 'text';
inputTelaDaJogada.id = 'jogadorDaVez';
inputTelaDaJogada.disabled = true;

div.appendChild(inputTelaDaJogada);




// CONSTRUINDO A TEBELA 

const tabela = document.querySelector('#tabela');
 
    
for (i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.classList.add('linha');
    li.style.listStyleType = 'none';
    

    for (j = 0; j < 3; j++) {
        
    const area = document.createElement('button');
    area.classList.add('bnt');
    area.setAttribute('placeholder', ' X ')
    li.appendChild(area);
    }
    tabela.appendChild(li);
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

//criar uma função para determinar vencedor se baseando no valores dos botões, buscar pelos valores dos botões da tabela e a partir desses valores validar com um if ou switch as condições.

function derterminarVencedor (player1, player2){
 
}
