function sum(num1, num2, ...numN) {
    // Implementation for REST primitives
    let total = num1 + num2;
    for (let i = 0; i < numN.length; i++) {
        total += numN[i];
    }
    return total;
}
let values = [10, 20, 30, 40, 50];
let result = sum(...values);
console.log(result); // Output: 150