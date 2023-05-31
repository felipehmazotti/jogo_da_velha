// alert("Olá Mundo");

function blinktext() {
    var f = document.getElementById('announcement');
    setInterval(function() {
        
    }    
}








// Váriaveis 
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = false;
let Jorel = '<img src="image/jorel.png" class="jorel">'
let Jorel2 = '<img src="image/jorel2.png" class="jorel">'

// Click botão 1 
function clickBtn1() {

    if (btn1 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn1").innerHTML = Jorel
            btn1 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn1").innerHTML = Jorel2
            btn1 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 2
function clickBtn2() {

    if (btn2 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn2").innerHTML = Jorel
            btn2 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn2").innerHTML = Jorel2
            btn2 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 3
function clickBtn3() {

    if (btn3 == 0 && !finalJogo) {
        jogadas = jogadas +1;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn3").innerHTML = Jorel
            btn3 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn3").innerHTML = Jorel2
            btn3 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 4
function clickBtn4() {

    if (btn4 == 0 && !finalJogo) {
        jogadas = jogadas +1;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn4").innerHTML = Jorel
            btn4 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn4").innerHTML = Jorel2
            btn4 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 5
function clickBtn5() {

    if (btn5 == 0 && !finalJogo) {
        jogadas = jogadas +1;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn5").innerHTML = Jorel
            btn5 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn5").innerHTML = Jorel2
            btn5 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 6
function clickBtn6() {

    if (btn6 == 0 && !finalJogo) {
        jogadas = jogadas +1;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn6").innerHTML = Jorel
            btn6 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn6").innerHTML = Jorel2
            btn6 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 7
function clickBtn7() {

    if (btn7 == 0 && !finalJogo) {
        jogadas = jogadas +1;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn7").innerHTML = Jorel
            btn7 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn7").innerHTML = Jorel2
            btn7 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 8
function clickBtn8() {

    if (btn8 == 0 && !finalJogo) {
        jogadas = jogadas +1;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn8").innerHTML = Jorel
            btn8 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn8").innerHTML = Jorel2
            btn8 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 9
function clickBtn9() {

    if (btn9 == 0 && !finalJogo) {
        jogadas = jogadas +1;
        if (controle == 0) {
            controle = 1;
            document.getElementById("btn9").innerHTML = Jorel
            btn9 = "X"
        }
        else {
            controle = 0;
            document.getElementById("btn9").innerHTML = Jorel2
            btn9 = "O";
        }
    }
    verificaGanhador()
}

// Verifica ganhador
function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador")
    let lblJogadas = document.getElementById("lblJogadas")

    // Verifica se Jogador X Ganhou
    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = ""
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = ""
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = ""
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = ""
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    if (btn3 == 'X' && btn5 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = ""
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = ""
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = ""
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = ""
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "IRMÃO DO JOREL GANHOU!!!!";
        lblJogadas.innerText = "" 
        return;
        // alert("IRMÃO DO JOREL GANHOU!!!!")
    }
    
    
    // Verifica Jogador O Ganhou
    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        finalJogo = true;
        lblJogador.innerText = "O JOREL GANHOU!!";
        lblJogadas.innerText = ""
        return;
        // alert("O JOREL GANHOU!!")
    }
    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        finalJogo = true;
        lblJogador.innerText = "O JOREL GANHOU!!";
        lblJogadas.innerText = ""
        return;
        // alert("O JOREL GANHOU!!")
    }
    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = "O JOREL GANHOU!!";
        lblJogadas.innerText = ""
        return;
        // alert("O JOREL GANHOU!!")
    }
    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        finalJogo = true;
        lblJogador.innerText = "O JOREL GANHOU!!";
        lblJogadas.innerText = ""
        return;
        // alert("O JOREL GANHOU!!")
    }
    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        finalJogo = true;
        lblJogador.innerText = "O JOREL GANHOU!!";
        lblJogadas.innerText = ""  
        return;   
        // alert("O JOREL GANHOU!!")
    }
    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = "O JOREL GANHOU!!";
        lblJogadas.innerText = ""
        return;
        // alert("O JOREL GANHOU!!")
    }
    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = "JOREL GANHOU!!";
        lblJogadas.innerText = ""
        return;
        // alert("O JOREL GANHOU!!")
    }
    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        finalJogo = true;
        lblJogador.innerText = "JOREL GANHOU!!";
        lblJogadas.innerText = ""
        return;
        // alert("O JOREL GANHOU!!")
    }

    // Verifica se aconteceu empate
    if(jogadas==9){
        finalJogo = true;
        lblJogador.innerText = "VELHA!!";
        lblJogadas.innerText = "";
        return;
    }

    if(controle==0) {
        lblJogador.innerText = 'JOGADOR X';
    } else {
        lblJogador.innerText= 'JOGADOR O';
    }
    
    // Contador jogadas
    lblJogadas.innerText = '(' + ( jogadas+1) + '  jogadas)'
}

// Click do botão Reiniciar
function clickReiniciar() {
     btn1 = 0;
     btn2 = 0;
     btn3 = 0;
     btn4 = 0;
     btn5 = 0;
     btn6 = 0;
     btn7 = 0;
     btn8 = 0;
     btn9 = 0;
     controle = 0;
     jogadas = 0;
     finalJogo = false;

    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.value = ' ';
    b2.value = ' ';
    b3.value = ' ';
    b4.value = ' ';
    b5.value = ' ';
    b6.value = ' ';
    b7.value = ' ';
    b8.value = ' ';
    b9.value = ' ';

    // Reiniciar Label
    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');

    lblJogador.innerText = 'Jogador X';
    lblJogadas.innerText = '1° Jogada';
}
