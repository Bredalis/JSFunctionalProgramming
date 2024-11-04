
// Definición de arrays y objectos con formato consistente
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mascotas = [
	{ nombre: "Laura", edad: 12, raza: "Perro" },
	{ nombre: "Fernando", edad: 3, raza: "Perro" },
	{ nombre: "Lupita", edad: 10, raza: "Perro" },
	{ nombre: "Javier", edad: 16, raza: "Gato" }
];

// Mostrar arrays originales
console.log("Mascotas:", mascotas);
console.log("Números:", numeros);

// Filtrar números menores a 5
const numerosFiltrados = numeros.filter(numero => numero < 5);
console.log("Números filtrados (<5):", numerosFiltrados);

// Filtrar mascotas de raza 'Gato'
const gatos = mascotas.filter(mascota => mascota.raza === "Gato");
console.log("Gatos:", gatos);