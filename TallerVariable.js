document.getElementById("button").addEventListener("click", function () {

let nombreCompleto = document.getElementById("nombreCompleto").value;
let edad = parseInt(document.getElementById("edad").value);
let tipoDoc = document.getElementById("tipoDoc").value;
let numeroDoc = document.getElementById("numeroDoc").value;

let salario = parseFloat(document.getElementById("salario").value) || 0;
let comisiones = parseFloat(document.getElementById("comisiones").value) || 0;
let horasExtras = parseFloat(document.getElementById("horasExtras").value) || 0;
let nivelRiesgo = parseInt(document.getElementById("nivelRiesgo").value);

const SMLV = 1750905;

const porcentajeIBC = 0.7;
const porcentajeSalud = 0.04;
const porcentajePension = 0.04;
const porcentFondoSolidaridad = 0.01;

function calcularPorcentaje(base, porcentaje) {
    return base * porcentaje;
}

let mensaje = "";


if(nombreCompleto === ""){
    mensaje = "Debe ingresar su nombre";
}
else if(isNaN(edad)){
    mensaje = "Debe ingresar una edad válida";
}
else if(edad < 18){
    mensaje = "No tiene permitido entrar";
}
else if(edad >= 18 && edad <= 25){
    mensaje = "Usuario beneficiario por cotizante, no puede entrar";
}
else{

    let salarioTotal = salario + comisiones + horasExtras;

    let IBC = calcularPorcentaje(salarioTotal, porcentajeIBC);

    let salud = calcularPorcentaje(IBC, porcentajeSalud);

    let pension = calcularPorcentaje(IBC, porcentajePension);

    let fondoSolidaridad = 0;

    if(IBC >= 4 * SMLV){
        fondoSolidaridad = calcularPorcentaje(IBC, porcentFondoSolidaridad);
    }

    mensaje = `
    Bienvenido ${nombreCompleto}<br>
    Documento: ${tipoDoc} ${numeroDoc}<br><br>

    Salario Total: $${salarioTotal}<br>
    IBC: $${IBC}<br>
    Salud: $${salud}<br>
    Pensión: $${pension}<br>
    Fondo Solidaridad: $${fondoSolidaridad}
    `;

    if(edad >= 60){
        mensaje += "<br><br>Se calculará la pensión";
    }
}

document.getElementById("resultado").innerHTML = mensaje;

});