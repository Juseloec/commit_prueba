const SMLV =877803;
var precio = 2000;
var cantidad = 45;
var totalVenta = precio * cantidad;
let valorFinalVenta;
if (totalVenta>SMLV){
    var descuento = totalVenta * 0.2;
    valorFinalVenta = totalVenta - descuento;
} else{
    descuento= 0;
    valorFinalVenta = totalVenta;
}

console.log("Total antes de descuento: " + totalVenta);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + valorFinalVenta);
