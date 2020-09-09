const SalOrdinario = 80000;
var hora = 2000;
var cantidadOrdinario = 40;
var totalOrdinario = hora * cantidadOrdinario;
var horaExtra = 3000;
var cantidadExtra = 5;
var totalExtra = horaExtra * cantidadExtra;
var salarioTotal = totalOrdinario + totalExtra;

console.log("Salario Ordinario: " + totalOrdinario);
console.log("Valor Horas Extras: " + totalExtra);
console.log("Total devengago: " + salarioTotal);