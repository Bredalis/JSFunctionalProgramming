
// Ejecutar la funcion recursiva 
// una y otra vez sin limite 

const trampolin = fn => (...args) => {
	let resultado = fn(...args);

	while (typeof resultado == "function") {
		resultado = resultado();
	}

	return resultado;
}

const operacionSuma = (numero, suma = 0) => {
	if (numero === 0) {
		return suma;
	} else {
		return () => operacionSuma(numero - 1, suma + numero);
	}		 
} 

const trampolinSuma = trampolin(operacionSuma);
const resultado = trampolinSuma(1000000);
console.log(resultado);