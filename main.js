function suma(primerNumero, segundoNumero){
    displayValue.value = (primerNumero + segundoNumero);
};

function resta(primerNumero, segundoNumero){
    displayValue.value = (primerNumero - segundoNumero);
};

function multiplicar(primerNumero, segundoNumero){
    displayValue.value = (primerNumero * segundoNumero);
};

function dividir(primerNumero, segundoNumero){
    if (segundoNumero === 0) {
        displayValue.value = "No puedes";
    }else{
        displayValue.value = (primerNumero / segundoNumero);
    }
};

function operate(primerNumero, segundoNumero, operador){
    
    if (operador === "suma"){
        suma(primerNumero, segundoNumero);
    }else if (operador === "resta"){
        resta(primerNumero, segundoNumero);
    } else if (operador === "multiplicar"){
        multiplicar(primerNumero, segundoNumero);
    } else if (operador === "dividir"){
        dividir(primerNumero, segundoNumero);
    } 

};

const displayValue = document.querySelector('#display-id');
const btn1 = document.querySelector('#button-1');
const btn2 = document.querySelector('#button-2');
const btn3 = document.querySelector('#button-3');
const btn4 = document.querySelector('#button-4');
const btn5 = document.querySelector('#button-5');
const btn6 = document.querySelector('#button-6');
const btn7 = document.querySelector('#button-7');
const btn8 = document.querySelector('#button-8');
const btn9 = document.querySelector('#button-9');
const btn0 = document.querySelector('#button-0');
const btnSuma = document.querySelector('#button-plus');
const btnResta = document.querySelector('#button-subtract');
const btnDivision = document.querySelector('#button-division');
const btnMulti = document.querySelector('#button-multiply');
const btnPunto = document.querySelector('#button-point');
const btnIgual = document.querySelector('#button-equal');
const btnClear = document.querySelector('#clear');
const btnNegative = document.querySelector('#delete');


function apretarBoton1() {
    displayValue.value = displayValue.value + "1" ;
};

function apretarBoton2() {
    displayValue.value = displayValue.value + "2" ;
};
function apretarBoton3() {
    displayValue.value = displayValue.value + "3" ;
};
function apretarBoton4() {
    displayValue.value = displayValue.value + "4" ;
};
function apretarBoton5() {
    displayValue.value = displayValue.value + "5" ;
};
function apretarBoton6() {
    displayValue.value = displayValue.value + "6" ;
};
function apretarBoton7() {
    displayValue.value = displayValue.value + "7" ;
};
function apretarBoton8() {
    displayValue.value = displayValue.value + "8" ;
};
function apretarBoton9() {
    displayValue.value = displayValue.value + "9" ;
};
function apretarBoton0() {
    displayValue.value = displayValue.value + "0" ;
};
function apretarBotonPoint() {
    displayValue.value = displayValue.value + "." ;
};
function apretarBotonPlus() {
    primerNumero = parseInt(displayValue.value);
    operador = "suma";
    displayValue.value = "";
};
function apretarBotonAbstract() {
    primerNumero = parseInt(displayValue.value);
    operador = "resta";
    displayValue.value = "";
};
function apretarBotonDivision() {
    primerNumero = parseInt(displayValue.value);
    operador = "dividir";
    displayValue.value = "";
};
function apretarBotonMultiply() {
    primerNumero = parseInt(displayValue.value);
    operador = "multiplicar";
    displayValue.value = "";
};

function apretarBotonEqual(){
 segundoNumero = parseInt(displayValue.value);
 operate(primerNumero, segundoNumero, operador);
 primerNumero = parseInt(displayValue.value);
}

function apretarBotonClear(){
    displayValue.value = "";
}

function apretarBotonNegative(){
    displayValue.value = "-" + displayValue.value;
} 

btn1.addEventListener('click', apretarBoton1);
btn2.addEventListener('click', apretarBoton2);
btn3.addEventListener('click', apretarBoton3);
btn4.addEventListener('click', apretarBoton4);
btn5.addEventListener('click', apretarBoton5);
btn6.addEventListener('click', apretarBoton6);
btn7.addEventListener('click', apretarBoton7);
btn8.addEventListener('click', apretarBoton8);
btn9.addEventListener('click', apretarBoton9);
btn0.addEventListener('click', apretarBoton0);
btnSuma.addEventListener('click', apretarBotonPlus);
btnResta.addEventListener('click', apretarBotonAbstract);
btnMulti.addEventListener('click', apretarBotonMultiply);
btnDivision.addEventListener('click', apretarBotonDivision);
btnPunto.addEventListener('click', apretarBotonPoint);
btnClear.addEventListener('click', apretarBotonClear);
btnIgual.addEventListener('click', apretarBotonEqual);
btnNegative.addEventListener('click', apretarBotonNegative);