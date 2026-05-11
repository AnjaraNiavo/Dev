

let number1 = 100;
let number2 = Math.floor (Math.random() * 100 +1);

let isEqualTo100 = (number1 , number2) => number1 === 100 || number2 === 100 || (number1 + number2 === 100);

console.log(isEqualTo100(number1,number2));