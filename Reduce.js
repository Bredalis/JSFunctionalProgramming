
// Función para sumar los números de una lista usando reduce
function sumarNumeros(lista) {
	return lista.reduce((acumulador, numero) => acumulador + numero, 0);
}

const numeros = [1, 2, 3, 4, 5];
const anidado = [1, [2, 3], 4, [5]];
const mascotas = [
	{ nombre: "Laura", edad: 12, tipo: "Perro" },
	{ nombre: "Fernando", edad: 3, tipo: "Perro" },
	{ nombre: "Lupita", edad: 10, tipo: "Perro" },
	{ nombre: "Javier", edad: 12, tipo: "Gato" }
];

// Sumar los números de una lista
console.log(`Suma de números: ${sumarNumeros(numeros)}`);

// Crear un objeto indexado por el nombre de cada mascota
const indexadoPorNombre = mascotas.reduce((acumulador, mascota) => ({
	...acumulador, [mascota.nombre]: mascota
}), {});

console.log("Mascotas indexadas por nombre:", indexadoPorNombre);

// Convertir un array anidado a un array unidimensional
const arrayUnidimensional = anidado.flat();
console.log("Array unidimensional:", arrayUnidimensional);