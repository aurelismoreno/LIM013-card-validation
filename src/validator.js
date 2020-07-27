const validator = {
	isValid: function (creditCardNumber) {
		let numberArray = creditCardNumber.split('').reverse();
		for (let i = 0; i < numberArray.length; i++) {
			if (i % 2 != 0) {
				numberArray[i] = numberArray[i] * 2;
				if (numberArray[i] > 9) {
					numberArray[i] =
						parseInt(String(numberArray[i]).charAt(0)) + parseInt(String(numberArray[i]).charAt(1));
				}
			}
		}
		let sum = 0;
		for (let i = 1; i < numberArray.length; i++) {
			sum += parseInt(numberArray[i]);
		}
		sum = (sum * 9) % 10;
		if (numberArray[0] == sum) {
			return true;
		} else {
			return false;
		}
	},

	maskify: function (creditCardNumber) {
		let allButLastFour = creditCardNumber.slice(0, creditCardNumber.length - 4);
		let hashHole = [];
		let lastFour = creditCardNumber.slice(-4);

		if (creditCardNumber.length <= 4) {
			return lastFour;
		}

		for (let i = 0; i < allButLastFour.length; i++) {
			hashHole.push('#');
		}
		var conjoinedHashHole = hashHole.join('');

		return conjoinedHashHole + lastFour;
	},
};

export default validator;
