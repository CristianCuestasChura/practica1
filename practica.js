console.log(`****************pregunta 1***********`);
let nombre = "cristian cuesats chura";
let edad = 19;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

console.log(`****************pregunta 2***********`);
let base = 5, altura = 3;
let area = base * altura;
console.log(`El área del rectángulo es: ${area}`);

console.log(`****************pregunta 3***********`);
let numero = 4;
if (numero % 2 === 0) {
    console.log(`${numero} es par`);
} else {
    console.log(`${numero} es impar`);
}

console.log(`****************pregunta 4***********`);
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log(`****************pregunta 5***********`);
function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 7));

console.log(`****************pregunta 6***********`);
let frutas = ["manzana", "banana", "pera"];
frutas.push("uva");
console.log(frutas);

console.log(`****************pregunta 7***********`);
let usuario = { nombre: "Juan", edad: 30 };
for (let clave in usuario) {
    console.log(`${clave}: ${usuario[clave]}`);
}

console.log(`****************pregunta 8***********`);
let numeros = [1, 2, 3, 4];
let numerosMultiplicados = numeros.map(n => n * 2);
console.log(numerosMultiplicados);

console.log(`****************pregunta 9***********`);
const restar = (a, b) => a - b;
console.log(restar(10, 4));

console.log(`****************pregunta 10***********`);
const filtrarPares = arr => arr.filter(n => n % 2 === 0);
console.log(filtrarPares([1, 2, 3, 4]));





/*
Pregunta 1:
Respuesta :
    git init


Pregunta 2:
 Respuesta:
        git clone https://github.com/user/repo.git


Pregunta 3:
 Respuesta:
git add index.js   # Añadir el archivo al área de preparación  
git commit -m "Mensaje descriptivo del cambio"   # Confirmar los cambios


Pregunta 4:
Respuesta :
    git init  
git checkout - b feature - login


Pregunta 5:
 Respuesta :
    git push origin main*/