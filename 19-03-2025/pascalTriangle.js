// Function to calculate binomial coefficient C(n, k)
function pascal(n, k) {
    if (k === 0 || k === n) {
      return 1;
    }
    return pascal(n - 1, k - 1) + pascal(n - 1, k);
  }
  
  // Function to print Pascal's Tree
  function printPascalTree(rows) {
    for (let i = 0; i < rows; i++) {
      let row = " ";
  
      // Printing spaces for alignment (Tree-like structure)
      for (let j = 0; j < rows - i; j++) {
        row += " ";
      }
  
      // Printing Pascal's Triangle values
      for (let j = 0; j <= i; j++) {
        row += pascal(i, j) + " ";
      }
  
      console.log(row);
    }
  }
  
  // Print Pascal's Tree with 6 rows
  printPascalTree(6);
  