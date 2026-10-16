let val1 = "5"
let val2 = "23.25"

console.log(`The type of val1 is: ${typeof val1}`);
console.log(`The type of val2 is: ${typeof val2}`);

// Converting string to number
//num1 = parseInt(val1)
//num2 = parseFloat(val2)

// Unary plus operator
num1 = +val1
num2 = +val2
console.log(`The type of num1 is: ${typeof num1}, and the value is ${num1}`);
console.log(`The type of num2 is: ${typeof num2}, and the value is ${num2}`);

//Convert number to string
let str1 = num1.toString();
console.log(`The type of str1 is: ${typeof str1}, and the value is ${str1}`);
