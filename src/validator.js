const validator = {
  isValid: function (creditCardNumber) {
    // verificar antes que 'creditCardNumber', no tenga espacios
   let numbers = creditCardNumber.split('');
   let reverseNumbers = numbers.reverse();
   let resultNumbers = [];
    
    for (let i = 0; i < numbers.length; i += 1) {
        let positionArray = i + 1;
        // Solo se multiplican los números en posiciones pares
        if (positionArray % 2 === 0) {
            let multiplication = reverseNumbers[i] * 2;
            resultNumbers += multiplication;
        } else {
            /* Los números en posiciones impares se agregan
            para posteriormente ser sumados entre con los
            pares que se multiplicaron */
               resultNumbers += reverseNumbers[i];
        }
    }
    /* Total es un array con los números multiplicados
    y los impares sin multiplicar, se alternan */
    let total = resultNumbers.split('');
    // Se suman todos los valores del array
    total = total.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });
    return(true);
    console.log(total);
},

};

export default validator;
