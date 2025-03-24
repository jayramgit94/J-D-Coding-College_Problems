let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Function to calculate the sum of elements in a matrix

function sumOfMatrix(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {//for each element in the matrix 
    // console.log(mat[i]); // prints the matrixs
    
    for (let j = 0; j < mat[i].length; j++) {// for each element in the matrix esme j ki valuse as coulmn ki value he 
      // console.log(mat[j]);
      sum += mat[i][j];// 
      // console.log(mat[i][j]);// prints the elements in the matrix
      
    }
  }
  return sum;
}
// console.log(mat.length);//3

console.log("Sum of elements in the given matrix: ", sumOfMatrix(mat));
console.log(mat[1][1]);//centre elemnts in the given matrix

