// alert("Olá Mundo");

// Váriaveis 
let bnt1 = 0;
let bnt2 = 0;
let bnt3 = 0;
let bnt4 = 0;
let bnt5 = 0;
let bnt6 = 0;
let bnt7 = 0;
let bnt8 = 0;
let bnt9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = false;

// Click botão 1 
function clickBnt1(){
    let btn = document.getElementById('btn1')

    if (btn.value == " " && !finalJogo){
        if (controle == 0){
            controle == 1;
            btn.value = "X";
            bnt1 = "X"
        } 
        else {
            controle = 0;
            btn.value = "0";
            btn1 = "O";
        }        
    }
}