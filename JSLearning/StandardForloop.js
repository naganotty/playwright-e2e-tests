let arr = ["Naga" , 10 , "Learning" , 20 , "JavaScript" , 30];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (typeof arr[i] === "number") {
        sum += arr[i];
        
    }
    
}
console.log("Sum of numbers in the array is: " + sum);