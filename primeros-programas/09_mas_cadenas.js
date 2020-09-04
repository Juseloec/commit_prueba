const datos ="Jesus,Estrada,36,M";
const arreglo = datos.split(",");
console.log(arreglo[0]); //jesus
console.log(arreglo[1]); //Estrada
console.log(arreglo[2]); //36
console.log(arreglo[3]) //M
//longitud de arreglo
console.log(arreglo.length);
console.log(arreglo[1]. length);
console.log(arreglo[3]. length);

const nombre =["Juan" , "Lopera"].join(" ");
console.log(nombre);
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());

console.log("Jesus Estrada". startsWith("J"));
console.log("Jesus Estrada". startsWith("E"));


//substring (subcadena)
console.log("Juan Lopera".substr(0,3));

const iniciales = nombre.split(" ");
console.log(`${iniciales[0].substr(0,1)}.${iniciales[1].substr(0,1)}.`);
//replace 
console.log("¡Hola Mundo¡".replace("Mundo", "Juan"));
//includes buscar una subcadena en una subcadena
console.log("Juan Lopera".includes("H"));
console.log("Juan Lopera".includes("p"));