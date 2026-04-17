let nombreCompleto = "" ;
let edad = 0 ;
let tipoDocumento = "" ;
let numeroDocumento = "" ;

if ( edad < 18 ) { 
  console.log ("No se puede calcular");
} else if ( edad >= 18 && edad < 25 ) {
    console.log ("Usuario beneficiario por cotizante");
} else if ( edad >= 25 && edad < 60 ) {
    console.log ("Se calcularà la pensiòn");
} else { 
    console.log ("Podrà continuar con el siguiente paso del proceso");
}


let salario = 0 ;
let comisiones = 0 ;
let horasExtra = 0 ;
let nivelRiesgo = "" ;

const salarioMinimoLegal = 1750905 ;
const salarioMinimoIntegral = 22761765 ;
const subsidioTransporte = 249095 ;
const valorTributario = 52.37 ;
const porcentajeIBC = 0.7 ;
const porcentajeSalud = 0.04 ;
const porcentajePension = 0.04 ;
const riesgo = [0.522, 1.044, 2.436, 4.350, 6.960]

let salarioTotal = salario + comisiones + horasExtra ;
let IBC = calcularPorcentaje(SalarioTotal, porcentajeIBC);
let salud = calcularPorcentaje(IBC, porcentajeSalud);
let pension = calcularPorcentaje(IBC, porcentajePension); 

function calcularPorcentaje (base, porcentaje) {
  return base * porcentaje;
}

let fondoSolidaridad = calcularPorcentaje(IBC, porcentFondoSolidaridad);
IBC>=4*SMLV ? fondoSolidaridad : fondoSolidaridad = 0;
