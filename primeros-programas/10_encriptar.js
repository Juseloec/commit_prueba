/*
abcdefghijklmnopqrstuvwxyz
Entrada:
Hola mundo
Salida:
["g","n","k","z","l","t","m","c","n"]
*/
const parametros = process.argv;
const datos = parametros.splice(2,parametros.length-2)
const palabra =datos.join("");
const palabra_miniscula = palabra.toLowercase();

const abecedario = "abcdefghijklmnopqrstuvwxyz";