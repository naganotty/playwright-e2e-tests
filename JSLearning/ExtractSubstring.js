let dt = "2023-10-01";
let year = dt.slice(0, 4);
let month = dt.slice(5, 7);
let day = dt.slice(8, 10);
let day1 = dt.slice(-2); // This will return the last two characters of the string, which is "01"
console.log(`Year: ${year}, Month: ${month}, Day: ${day}, Day1: ${day1}`);