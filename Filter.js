
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mascotas = [
	{nombre: "Laura", edad: 12, raza: "Perro"},
	{nombre: "Fernando", edad: 3, raza: "Perro"},
	{nombre: "Lupita", edad: 10, raza: "Perro"},
	{nombre: "Javier", edad: 16, raza: "Gato"}
];

console.log(mascotas, numeros);

const numerosFiltrados = numeros.filter(x => x < 5);
console.log(numerosFiltrados);

const gatos = mascotas.filter(x => x.raza == "Gato");
console.log(gatos);