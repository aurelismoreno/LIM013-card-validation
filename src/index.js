import validator from './validator.js';
/* ------------------------PRINCIPAL  */
const btnregistrar = document.getElementById('btnregistrar');

btnregistrar.addEventListener('click', () => {
	document.getElementById('principal').classList.add('ocultar');
	document.getElementById('datospersonales').classList.remove('ocultar');
});
/* ----------------------DATOS */   
const btncontinuar = document.getElementById('btncontinuar');

btncontinuar.addEventListener('click', () => {
	document.getElementById('datospersonales').classList.add('ocultar');
	document.getElementById('formulario-tarjeta').classList.remove('ocultar');
});

/* ----------------------VALIDACION DE TARJETA */  
const btnvalidar = document.getElementById('btnvalidar');
const form = document.getElementById('formulario-tarjeta');

const numero = document.getElementById('numero'); 
btnvalidar.addEventListener('click', () => {
	document.getElementById('formulario-tarjeta').classList.add('ocultar');
	document.getElementById('gracias').classList.remove('ocultar');
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
});

function getUserInput() {
	return numero.value;
}

numero.addEventListener('change', (e) => {
	e.preventDefault();
	if (validator.isValid(getUserInput())) {
		alert('Tarjeta Valida');
	} else {
		alert('Tarjeta Invalida');
	}
	if (validator.maskify(getUserInput())) {
		return numero;
	}
});