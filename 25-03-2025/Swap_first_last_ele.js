let arr = "HelloWorld";



let temp = arr.split("");
let first = temp[0];
temp[0] = temp[temp.length - 1];
temp[temp.length - 1] = first;
let newStr = temp.join("");
console.log(newStr);



// other solutions 
// function swapFirstLast(arr) {
//     if (arr.length < 2) return arr; 

//     let newArr = [...arr]; // Clone array to avoid modifying original
//     [newArr[0], newArr[newArr.length - 1]] = [newArr[newArr.length - 1], newArr[0]];

//     return newArr;
// }

// let originalArray = [1, 2, 3, 4, 5];
// console.log(swapFirstLast(originalArray));  
// // Output: [5, 2, 3, 4, 1]

// console.log(originalArray); 
// // Output: [1, 2, 3, 4, 5] (Remains unchanged)