// Requisitos:
//....1. Declara una constante con un valor en Celsius (ej: 25).
//....2. Calcula Fahrenheit con: F = (C*9/5) + 32
//....3. Muestra por consola: "25C equivale a 77F"
//....4. Haz la conversión inversa: de Fahrenheit a Celsius.
//.......Fórmula: C = (F - 32) * 5/9
//
//....... const = valores fijos, let = valores que cambian.
//***********************************************************

const celsius = 25;

let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "C equivale a " + fahrenheit + "F");

let celsiusInverso = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + "F equivale a " + celsiusInverso + "C");