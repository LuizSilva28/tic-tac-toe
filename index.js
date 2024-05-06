const inputs = document.querySelectorAll(".player").forEach(function (input) {
  input.addEventListener('click', function(e) {
    e.preventDefault();
    input.setAttribute('maxLength', '10');
    input.style.outline = 'none';

  });
});

const bntIniciar = document.querySelector(".iniciarJogo");
bntIniciar.addEventListener("click", function (e){
    e.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    marcadorDeJogada(player1, player2)
    bntIniciar.setAttribute('disabled','true');
    bntIniciar.id= 'blockIniciarJogo';
});

function jogadorDaVez(player){
    var jogador = document.querySelector("#jogadorDaVez");
    jogador.value = player;
    return jogador.value;
}

const div = document.getElementById('telaDaJogada');

const labelTelaDaJogada = document.createElement("label");
labelTelaDaJogada.htmlFor = 'jogadorDaVez'
labelTelaDaJogada.innerHTML = "Jogador da vez: ";
labelTelaDaJogada.classList = "textJogadorDaVez";

div.appendChild(labelTelaDaJogada);

const br = document.createElement("br");
div.appendChild(br);

const inputTelaDaJogada = document.createElement("input");
inputTelaDaJogada.type = 'text';
inputTelaDaJogada.id = 'jogadorDaVez';
inputTelaDaJogada.disabled = true;
inputTelaDaJogada.placeholder = "...";
inputTelaDaJogada.classList = 'jogadorDaVez';


div.appendChild(inputTelaDaJogada);




// CONSTRUINDO A TEBELA 

const tabela = document.querySelector('#tabela');
 
let a = 0, b = 0, c = 0;    

for (i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.classList.add('linha');
    li.style.listStyleType = 'none';
    

    for (j = 0; j < 3; j++) {
        
    const area = document.createElement('button');
    area.classList.add('bnt');
    area.id = `areaDoVencedor-${a}`
    area.setAttribute('placeholder', ' X ')
    li.appendChild(area);
    a++
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

            if (playerQueJogou === player1){
            bntClicado.classList.add("colorPlayer1");
            bntClicado.innerHTML = " X ";            
            jogadorDaVez(player2)            
            playerQueJogou = jogadorDaVez(player2)
            i++
            

        } else if (playerQueJogou === player2){  
            bntClicado.classList.add("colorPlayer2");
            bntClicado.innerHTML = " O ";              
            jogadorDaVez(player1)           
            playerQueJogou = jogadorDaVez(player1)
            i++
            

        }
        bntClicado.setAttribute('disabled','true'); 
        
        derterminarVencedor(player1, player2)
        }
        )
    })
    
}

//criar uma função para determinar vencedor se baseando no valores dos botões, buscar pelos valores dos botões da tabela e a partir desses valores validar com um if ou switch as condições.

function derterminarVencedor (player1, player2){

    const dadosTabela = [];
    const bnts = document.querySelectorAll('.bnt');
    bnts.forEach(function(bnt){
            dadosTabela.push(bnt.innerHTML);
    });
    const vencedor = document.querySelector("#vencedor"); 
/*DOIS PROBLEMAS : 
    1 - mudar forEach para for, 
    pois forEach chama a função de comparação 9 vezes para a mesma compraração, 
    toda vez que um botão é clicado, preciso que seja feita uma única vez.

    2- mudar o indice que está sendo comparado,
    atualmente estou escrevendo indice por indice para as comparações,
    isso tem de ser feito de forma dinâmica sempre que eu chamar a função ela faz a comparação para todos os indices 
*/

    
/*  O que está fazendo: A cada botão que é clicado na tabela, 
    faz um push do conteúdo do botão para dentro de um array

    O que preciso que faça para determinar o vencedor: 
        1 - Todos os meu valores de referência vão estar
            sendo adicionados um a um á medida que os botões vão sendo clicados, 
            no Array dadosTabela;
        2 - Preciso acessar os valores do array;
        3 - Tendo o acesso, preciso utilizar destes valores para verificar/validar
            possíveis sequências/combinações ou padrões, 
            para determinar o vencedor, ou seja, há a necessidade comparar valores de indices específicos do meu array, 
            para identificar as sequências/ padrões;
        4 - determinar as sequências e padrões que determinam o vencedor 
*/    


    // Para vitórias em linhas
for ( a = 0; a < dadosTabela.length; a += 3)
{
    
    b = a + 1;
    c = a + 2;
    const areaDestacada1 = document.querySelector(`#areaDoVencedor-${a}`)
    const areaDestacada2 = document.querySelector(`#areaDoVencedor-${b}`)
    const areaDestacada3 = document.querySelector(`#areaDoVencedor-${c}`);
    

    if (dadosTabela[a] === " X " && dadosTabela[b] === " X " && dadosTabela[c] === " X ")
    {
        vencedor.value =`${player1} Venceu a partida!`;  
        areaDestacada1.classList.add("vencedorPlayer1");
        areaDestacada2.classList.add("vencedorPlayer1");
        areaDestacada3.classList.add("vencedorPlayer1");
        
    } 
    else if (dadosTabela[a] === " O " && dadosTabela[b] === " O " && dadosTabela[c] === " O ")
    {
        vencedor.value =`${player2} Venceu a partida!`;
        areaDestacada1.classList.add("vencedorPlayer2");
        areaDestacada2.classList.add("vencedorPlayer2");
        areaDestacada3.classList.add("vencedorPlayer2");


    }   
}
    // Para vitórias em colunas  
for ( a = 0; a < dadosTabela.length; a++)
{        
    b = a + 3; 
    c = a + 6; 
    const areaDestacada1 = document.querySelector(`#areaDoVencedor-${a}`)
    const areaDestacada2 = document.querySelector(`#areaDoVencedor-${b}`)
    const areaDestacada3 = document.querySelector(`#areaDoVencedor-${c}`);

    if (dadosTabela[a] === " X " && dadosTabela[b] === " X " && dadosTabela[c] === " X ")
    {
       
        vencedor.value =`${player1} Venceu a partida!`;  
        areaDestacada1.classList.add("vencedorPlayer1");
        areaDestacada2.classList.add("vencedorPlayer1");
        areaDestacada3.classList.add("vencedorPlayer1");
    } 
    else if (dadosTabela[a] === " O " && dadosTabela[b] === " O " && dadosTabela[c] === " O ")
    {
        vencedor.value =`${player2} Venceu a partida!`; 
        areaDestacada1.classList.add("vencedorPlayer2");
        areaDestacada2.classList.add("vencedorPlayer2");
        areaDestacada3.classList.add("vencedorPlayer2");
        
    }  
}
    // Para vitórias em diagonias
for ( a = 0; a <= 2; a+=2)
{
    a != 2 ?  a = 0 : a = 2;
    b = 4;
    c != 8 ?  c = 8 : c = 6;

    const areaDestacada1 = document.querySelector(`#areaDoVencedor-${a}`)
    const areaDestacada2 = document.querySelector(`#areaDoVencedor-${b}`)
    const areaDestacada3 = document.querySelector(`#areaDoVencedor-${c}`);

    if (dadosTabela[a] === " X " && dadosTabela[b] === " X " && dadosTabela[c] === " X ")
    {
        vencedor.value =`${player1} Venceu a partida!`;  
        areaDestacada1.classList.add("vencedorPlayer1");
        areaDestacada2.classList.add("vencedorPlayer1");
        areaDestacada3.classList.add("vencedorPlayer1");
        
    } 
    else if (dadosTabela[a] === " O " && dadosTabela[b] === " O " && dadosTabela[c] === " O ")
    {
        vencedor.value =`${player2} Venceu a partida!`;  
        areaDestacada1.classList.add("vencedorPlayer2");
        areaDestacada2.classList.add("vencedorPlayer2");
        areaDestacada3.classList.add("vencedorPlayer2");
        
    }  
}    

// Bloquea a tabela quando um jogador vencer
console.log(dadosTabela);
    
    if(vencedor.value === `${player1} Venceu a partida!` || vencedor.value === `${player2} Venceu a partida!` ){
        const dados = dadosTabela.filter(function(dados){
            dados = ""
            console.log('estou funcionando!')
        });

        document.querySelectorAll(".bnt").innerHTML = dados;

        
    }
/*
     if (dadosTabela[3] === " X " && dadosTabela[4] === " X " && dadosTabela[5] === " X " )
    {       
        vencedor.value = `${player1} Venceu a partida!`;
    }
    else if (dadosTabela[6] === " X " && dadosTabela[7] === " X " && dadosTabela[8] === " X " )
    {       
        vencedor.value = `${player1} Venceu a partida!`;
    } 
    else if (dadosTabela[0] === " X " && dadosTabela[3] === " X " && dadosTabela[6] === " X " )
    {       
        vencedor.value = `${player1} Venceu a partida!`;
    }
     else if (dadosTabela[1] === " X " && dadosTabela[4] === " X " && dadosTabela[7] === " X " )
    {       
        vencedor.value = `${player1} Venceu a partida!`;
    } 
    else if (dadosTabela[2] === " X " && dadosTabela[5] === " X " && dadosTabela[8] === " X " )
    {       
        vencedor.value = `${player1} Venceu a partida!`;
    } 
    else if (dadosTabela[0] === " X " && dadosTabela[4] === " X " && dadosTabela[8] === " X " )
    {       
        vencedor.value = `${player1} Venceu a partida!`;
    } 
    else if (dadosTabela[2] === " X " && dadosTabela[4] === " X " && dadosTabela[6] === " X " )
    {       
        vencedor.value = `${player1} Venceu a partida!`;
    } 

     if (dadosTabela[0] === " O " && dadosTabela[1] === " O " && dadosTabela[2] === " O " )
    {
        vencedor.value = `${player2} Venceu a partida!`;
    }
    else if (dadosTabela[3] === " O " && dadosTabela[4] === " O " && dadosTabela[5] === " O " )
    {       
        vencedor.value = `${player2} Venceu a partida!`;
    } 
    else if (dadosTabela[6] === " O " && dadosTabela[7] === " O " && dadosTabela[8] === " O " )
    {
        vencedor.value = `${player2} Venceu a partida!`;
    }
    else if (dadosTabela[0] === " O " && dadosTabela[3] === " O " && dadosTabela[6] === " O " )
    {       
        vencedor.value = `${player2} Venceu a partida!`;
    }
     else if (dadosTabela[1] === " O " && dadosTabela[4] === " O " && dadosTabela[7] === " O " )
    {       
        vencedor.value = `${player2} Venceu a partida!`;
    } 
    else if (dadosTabela[2] === " O " && dadosTabela[5] === " O " && dadosTabela[8] === " O " )
    {       
        vencedor.value = `${player2} Venceu a partida!`;
    } 
    else if (dadosTabela[0] === " O " && dadosTabela[4] === " O " && dadosTabela[8] === " O " )
    {       
        vencedor.value = `${player2} Venceu a partida!`;
    } 
    else if (dadosTabela[2] === " O " && dadosTabela[4] === " O " && dadosTabela[6] === " O " )
    {       
        vencedor.value = `${player2} Venceu a partida!`;
    }
*/

}
