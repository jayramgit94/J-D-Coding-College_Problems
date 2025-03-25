let arr = "HelloWorld";



let temp = arr.split("");
let first = temp[0];
temp[0] = temp[temp.length - 1];
temp[temp.length - 1] = first;
let newStr = temp.join("");
console.log(newStr);

