
// Función para calcular la suma total de los elementos de una lista
const sumaTotal = (lista) => {
	return lista.reduce((acumulado, numero) => acumulado + numero, 0);
}

// Datos de entrada
const numeros = [1, 2, 3, 4, 5];
const mascotas = [
	{ nombre: "Laura", edad: 12, tipo: "Perro" },
	{ nombre: "Fernando", edad: 3, tipo: "Perro" },
	{ nombre: "Lupita", edad: 10, tipo: "Perro" },
	{ nombre: "Javier", edad: 12, tipo: "Gato" }
];

// Resultados
console.log(`Suma total:, ${sumaTotal(numeros)}`);
console.log("Multiplicación por 2:", numeros.map(numero => numero * 2));
console.log("Parejas de números:", numeros.map(numero => [numero, numero]));

// Calcular el promedio de las edades de las mascotas
const edades = mascotas.map(mascota => mascota.edad);
const promedioEdades = sumaTotal(edades) / edades.length; 
console.log(`Promedio de las edades de mascotas: ${promedioEdades}`);