const sumar = (num1,num2)=>{
    return parseInt (num1) + parseInt (num2);
}
const restar = (num1,num2)=>{
    return parseInt (num1) - parseInt (num2);
}
const dividir = (num1,num2)=>{
    return parseInt (num1) / parseInt (num2);
}
const multiplcar = (num1,num2)=>{
    return parseInt (num1) * parseInt (num2);
} 

alert ("Que operacion queres hacer, vieja?");
operacion = prompt ("1: suma, 2: resta, 3: división; 4: multiplicación");

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt ("Segundo numero para sumar");
    resultado = sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion ==2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt ("Segundo numero para restar");
    resultado = restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion ==3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt ("Segundo numero para dividir");
    resultado = dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion ==4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt ("Segundo numero para multiplicar");
    resultado = multiplcar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else {
    alert("no se ha encontrado la operación")
} 