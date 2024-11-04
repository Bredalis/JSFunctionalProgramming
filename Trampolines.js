
// Función trampolín para manejar recursividad sin límite de pila
const trampolin = (fn) => (...args) => {
	let resultado = fn(...args);

	while (typeof resultado === "function") {
		resultado = resultado();
	}	
	return resultado;
}

// Función recursiva de suma que usa el trampolín
const operacionSuma = (numero, suma = 0) =>
	numero !== 0 ? () => operacionSuma(numero - 1, suma + numero) : suma;

// Aplicación del trampolín a la operación de suma
const trampolinSuma = trampolin(operacionSuma);
const resultado = trampolinSuma(1000000);
console.log(`Resultado de la suma: ${resultado}`);