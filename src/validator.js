const validator = {
	isValid: function (creditCardNumber) {
		//4817238647023382
		//convirtiendo creditCardNumber en array con split e invirtiendolo con reverse
		let numberArray = creditCardNumber.split('').reverse();

		//recorriendo array invertido
		for (let i = 0; i < numberArray.length; i++) {
			//obtenido numeros de posiciones par
			if (i % 2 != 0) {
				numberArray[i] = numberArray[i] * 2;
				if (numberArray[i] > 9) {
					//sumando los digitos
					// division entera https://www.it-swarm.dev/es/javascript/division-entera-con-resto-en-javascript/970450856/
					numberArray[i] = (numberArray[i] % 10) + ((numberArray[i] / 10) >> 0);
					/* parseInt(String(numberArray[i]).charAt(0)) + parseInt(String(numberArray[i]).charAt(1)); */
				}
			}
		}
		let sum = 0;
		//obteniendo numeros de posiciones impar
		for (let i = 0; i < numberArray.length; i++) {
			//sumando numeros posiciones par e impar
			sum = sum + parseInt(numberArray[i]);
		}
		//si el total de la suma modulo de 10 resulta 0 retorna true caso contarrio false
		/* sum = (sum * 9) % 10;
		if (numberArray[0] == sum) {
			return true;
		} else {
			return false;
		} */
		if (sum % 10 == 0) {
			return true;
		} else {
			return false;
		}
	},

	maskify: function (creditCardNumber) {
		let newString = '';
		for (let i = 0; i < creditCardNumber.length; i++) {
			let offset = creditCardNumber.length - 4;
			// console.log(offset);
			if (i < offset) {
				newString += '#';
			} else {
				newString += creditCardNumber[i];
			}
		}
		return newString;

		/* let allButLastFour = creditCardNumber.slice(0, creditCardNumber.length - 4);
		let hashHole = [];
		let lastFour = creditCardNumber.slice(-4);

		if (creditCardNumber.length <= 4) {
			return lastFour;
		}

		for (let i = 0; i < allButLastFour.length; i++) {
			hashHole.push('#');
		}
		var conjoinedHashHole = hashHole.join('');

		return conjoinedHashHole + lastFour; */
	},
};

export default validator;
