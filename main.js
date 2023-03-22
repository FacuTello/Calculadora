function suma(primerNumero, segundoNumero){
    console.log(primerNumero + segundoNumero);
};

function resta(primerNumero, segundoNumero){
    console.log(primerNumero - segundoNumero);
};

function multiplicar(primerNumero, segundoNumero){
    console.log(primerNumero * segundoNumero);
};

function dividir(primerNumero, segundoNumero){
    if (segundoNumero === 0) {
        console.log("no puedes dividir por cero");
    }else{
        console.log(primerNumero / segundoNumero);
    }
};

function operate(primerNumero, segundoNumero, operador){
    if (operador === "suma"){
        suma(primerNumero, segundoNumero);
    }else if (operador === "resta"){
        resta(primerNumero, segundoNumero);
    } else if (operador === "multiplicar"){
        multiplicar(primerNumero, segundoNumero);
    } else{
        dividir(primerNumero, segundoNumero);
    } 
};