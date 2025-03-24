// let str = "jayram sang";

// let reveser1 = str.split('').reverse().join("");
// // return reveser;

// console.log(reveser1);


const readlineSync = require('readline-sync');
let name = readlineSync.question("Enter your name: ");


let reversedName = name.split('').reverse().join("");
 if( name === reversedName){
    console.log("Palindrome")
 }else (
    console.log("not palindrom ")
    
 )
console.log(reversedName);
