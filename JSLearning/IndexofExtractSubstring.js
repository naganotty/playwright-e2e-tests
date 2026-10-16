let data = "Hello Naga {23454} Good Morning"
let startIndex = data.indexOf("{")
console.log(startIndex);
let endIndex = data.indexOf("}")
console.log(endIndex);
let extractedSubstring = data.slice(startIndex + 1, endIndex);
console.log(extractedSubstring);