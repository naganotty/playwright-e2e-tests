let filename = "Welcome to Playwright Learning";
let query = 'Select * from {{Table_name}}'
let date = "2026-10-12";

let repfilename = filename.replace("Playwright" , "NagaPlaywright")
console.log(repfilename);

let orgquery = query.replace("{{Table_name}}","Playwright")
console.log(orgquery);

let moddt = date.replace(/-/g,"")
console.log(moddt);