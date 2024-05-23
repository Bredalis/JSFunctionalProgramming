
// Funcion de suma total
const suma = (lista) => {
	let acumulado = 0;
	let i;

	for (i = 0; i < lista.length; i++) {
		acumulado += lista[i];

	}

	return acumulado;
}

const numeros = [1, 2, 3, 4, 5];
const mascotas = [
	{nombre: "Laura", edad: 12, tipo: "Perro"},
	{nombre: "Fernando", edad: 3, tipo: "Perro"},
	{nombre: "Lupita", edad: 10, tipo: "Perro"},
	{nombre: "Javier", edad: 12, tipo: "Gato"}
];

console.log("Suma total:", suma(numeros));
console.log("Multiplicacion con map:", numeros.map(x => x * 2));
console.log("Parejas:", numeros.map(x => [x, x]));

// Sacar el promedio de las edades de mascotas
const edades = mascotas.map(x => x.edad);
console.log("Promedio de las edades:", suma(edades) / edades.length);