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
        })
    })
}
function derterminarVencedor (player1, player2){
    const dadosTabela = [];
    const bnts = document.querySelectorAll('.bnt');
    bnts.forEach(function(bnt){
            dadosTabela.push(bnt.innerHTML);
    });
    const vencedor = document.querySelector("#vencedor"); 
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
            vencedor.value = player1;  
            areaDestacada1.classList.add("vencedorPlayer1");
            areaDestacada2.classList.add("vencedorPlayer1");
            areaDestacada3.classList.add("vencedorPlayer1");
        } 
        else if (dadosTabela[a] === " O " && dadosTabela[b] === " O " && dadosTabela[c] === " O ")
        {
            vencedor.value = player2;
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
            vencedor.value =player1;  
            areaDestacada1.classList.add("vencedorPlayer1");
            areaDestacada2.classList.add("vencedorPlayer1");
            areaDestacada3.classList.add("vencedorPlayer1");
        } 
        else if (dadosTabela[a] === " O " && dadosTabela[b] === " O " && dadosTabela[c] === " O ")
        {
            vencedor.value = player2; 
            areaDestacada1.classList.add("vencedorPlayer2");
            areaDestacada2.classList.add("vencedorPlayer2");
            areaDestacada3.classList.add("vencedorPlayer2")
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
            vencedor.value = player1;  
            areaDestacada1.classList.add("vencedorPlayer1");
            areaDestacada2.classList.add("vencedorPlayer1");
            areaDestacada3.classList.add("vencedorPlayer1");
            bloquearTabela(player1)
        } 
        else if (dadosTabela[a] === " O " && dadosTabela[b] === " O " && dadosTabela[c] === " O ")
        {
            vencedor.value = player2;  
            areaDestacada1.classList.add("vencedorPlayer2");
            areaDestacada2.classList.add("vencedorPlayer2");
            areaDestacada3.classList.add("vencedorPlayer2");
            bloquearTabela(player2)
        }  
    }    
    // Bloqueia tabela se houver vencedor
    if(vencedor.value === player2 ||  vencedor.value === player1)
    {
        bloquearTabela(dadosTabela);
    }
    // Declara empate e bloqueia a tabela
    const bntsRestantesVazios = dadosTabela.filter(function(bntVazio)
        {
        return  bntVazio ===  '';}
    ).length;
    console.log(bntsRestantesVazios);

    if (bntsRestantesVazios === 2 && vencedor.value === "")
    {
        vencedor.value = "Empate";
        bloquearTabela()
    }
}
// Bloquea a tabela quando um jogador vencer
    function bloquearTabela (dadosTabela)
    {
           const block = document.querySelectorAll(".bnt");
            block.forEach(function(bnt){
                bnt.setAttribute('disabled','true');
            })
    }
