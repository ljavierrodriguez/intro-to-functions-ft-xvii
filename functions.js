/* 

Function de Nombre

function nombreFuncion(){
    sentencias
}

const nombreVariable = function(){
    sentencias
}

const nombreVariable2 = () => {
    sentencias
}

const nombreVariable3 = () => sentencia;


*/

/* saludo();


const saludo2 = () => {

    nombre = "";
    return saludo3()


    function saludo3(){

    }
}

saludo2(); */




/* const suma = function(num1, num2){ // parametros
    return num1 + num2
}


suma(10, 10) // argumentos */


/* function saludo(){ // hoinsting

} */


function sumar(num1 = 1, num2 = 1){
    return num1 + num2
}

function restar(num1, num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}


function operaciones(operacion, num1, num2){
    return operacion(num1, num2)
}

console.log(operaciones(sumar, 10, 10)) // callback



function agregarUsuario(usuario, nombre = "", apellido = ""){
    return `${nombre} ${apellido} ${usuario}`;
}


console.log(agregarUsuario("lrodriguez"))



function saludo(){

}