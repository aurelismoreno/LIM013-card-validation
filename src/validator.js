const validator = {
    isValid: function (creditCardNumber) {
        let numberArray = creditCardNumber.split('').reverse();
        for (let i = 0; i < numberArray.length; i++) {
            if (i % 2 != 0) {
                numberArray[i] = numberArray[i] * 2;
                if (numberArray[i] > 9) {
                    numberArray[i] = parseInt(String(numberArray[i]).charAt(0)) + parseInt(String(numberArray[i]).charAt(1))
                }
            }
        }
        let sum = 0;
        for (let i = 1; i < numberArray.length; i++) {
            sum += parseInt(numberArray[i]);
        }
        sum = sum * 9 % 10;
        if (numberArray[0] == sum) {
            return true
        } else {
            return false
        }
    },

    maskify: function (creditCardNumber) {
        /* if (creditCardNumber.length < 6) return creditCardNumber;
        const last4Characters = creditCardNumber.substr(-4);
        const firstCharacter = creditCardNumber.substr(0, 1);
        const maskingCharacters = creditCardNumber.substr(1, creditCardNumber.length - 5).replace(/\d/g, '#');
        return `${firstCharacter}${maskingCharacters}${last4Characters}`; */
        return creditCardNumber.split('').map((letter, idx) => idx < creditCardNumber.length - 4 ? '#' : letter).join('');

    }


};

export default validator;