var num = 15;
// condiciones compuestas
if (num >= 10 && num <= 20){ // si el número es mayor o igual a 10 (y &&) es menor o igual a 20)
    console.log("El número està entre 10 y 20");
}

var color = "negro";

if (color === "rojo" || color === "negro"){
    console.log("Excelente elección");
}

// operador condicional (ternario)
var num = 18;
num >= 15 ? console.log('Es mayor o igual a 15') : console.log('Es menor que 15');
