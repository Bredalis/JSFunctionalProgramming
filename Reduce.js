
// Funcion reducer
function reducer(lista) {
	return lista.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

const numeros = [1, 2, 3, 4, 5];
const anidado = [1, [2, 3], 4, [5]];
const mascotas = [
	{nombre: "Laura", edad: 12, tipo: "Perro"},
	{nombre: "Fernando", edad: 3, tipo: "Perro"},
	{nombre: "Lupita", edad: 10, tipo: "Perro"},
	{nombre: "Javier", edad: 12, tipo: "Gato"}
];

console.log(reducer(numeros));

const indexado = mascotas.reduce((acumulador, elemento) => ({
	...acumulador, [elemento.nombre]: elemento}), {});

console.log(indexado);

// Pasar de array anidado a 1d
console.log(anidado.reduce((acumulador, elemento) => acumulador.concat(elemento), []));