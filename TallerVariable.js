document.getElementById("button").addEventListener("click", function(){

let nombreCompleto = document.getElementById("nombreCompleto").value 
console.log(nombreCompleto);

let edad = parseInt(document.getElementById("edad").value)
console.log(edad);

let tipoDoc = document.getElementById("tipoDoc").value
console.log(tipoDoc);

let numeroDoc = document.getElementById("numeroDoc").value
console.log(numeroDoc);

let salario = parseFloat(document.getElementById("salario").value)
let comisiones = parseFloat(document.getElementById("comisiones").value)
let horasExtras = parseFloat(document.getElementById("horasExtras").value)
let nivelRiesgo = parseInt(document.getElementById("nivelRiesgo").value)

let errores = "";


if (
nombreCompleto == "" ||
isNaN(edad) ||
tipoDoc == "" ||
numeroDoc == "" ||
isNaN(salario) ||
isNaN(comisiones) ||
isNaN(horasExtras) ||
isNaN(nivelRiesgo)
) {

errores += "Complete todos los campos <br>";

}


if (edad > 120) {

errores += "La edad no puede ser mayor a 120 años <br>";

}


if (edad < 0) {

errores += "La edad no puede ser negativa <br>";

}


if (salario < 0) {

errores += "El salario no puede ser negativo <br>";

}


if (salario > 50000000) {

errores += "El salario es demasiado alto <br>";

}


if (comisiones > salario) {

errores += "Las comisiones no pueden ser mayores al salario <br>";

}


if (horasExtras > 2000000) {

errores += "Valor inválido en horas extras <br>";

}


if (nivelRiesgo < 1 || nivelRiesgo > 5) {

errores += "Nivel de riesgo inválido <br>";

}


if (errores != "") {

document.getElementById("resultado").innerHTML = errores;

return;

}


if (edad < 18 ) {

console.log ("No tiene permitido entrar");

document.getElementById("resultado").innerHTML = "No tiene permitido entrar";

}

else if (edad >=18 && edad <= 25) { 

console.log("Usuario beneficiario por cotizante, no puede entrar");

document.getElementById("resultado").innerHTML = "Usuario beneficiario por cotizante, no puede entrar";

}

else if (edad >= 60){

console.log("Se calculara la pensión");

document.getElementById("resultado").innerHTML = "Se calculará la pensión";

}

else {

console.log("Puede entrar");

document.getElementById("resultado").innerHTML = "Puede entrar";

}


const SMLV = 1750905;
const SMIV = 22761765;
const SubTransporte = 249095;
const undValorTributario = 52.37;  

const riesgo = [0.522, 1.044, 2.436, 4.350, 6.960];


const porcentajeIBC = 0.7;
const porcentajeSalud = 0.04;
const porcentajePension = 0.04;
const porcentFondoSolidaridad = 0.01;


function calcularPorcentaje (base, porcentaje) {

return base * porcentaje;

}


let SalarioTotal = salario + comisiones + horasExtras;

let IBC = calcularPorcentaje(SalarioTotal, porcentajeIBC);

let fondoSolidaridad = calcularPorcentaje(IBC, porcentFondoSolidaridad);


if (IBC < 4 * SMLV) {

fondoSolidaridad = 0;

}


let salud = calcularPorcentaje(IBC, porcentajeSalud);

let pension = calcularPorcentaje(IBC, porcentajePension);


console.log("Salario Total:", SalarioTotal);
console.log("IBC:", IBC);
console.log("Salud:", salud);
console.log("Pensión:", pension);
console.log("Fondo Solidaridad:", fondoSolidaridad);

});