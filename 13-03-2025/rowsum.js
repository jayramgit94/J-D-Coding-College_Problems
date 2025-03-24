let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rowsum(mat) {
  let totalsumofrow = 0;
  let totalsumofcol = 0;
  let difonalsum = 0;
  let SEcdogsum = 0;

  for (let i = 0; i < mat.length; i++) {
    let rowSum = 0;
    let colmSum = 0;
    difonalsum += mat[i][i]; // Main diagonal
    SEcdogsum += mat[i][mat.length - i - 1]; // Secondary diagonal

    for (let j = 0; j < mat[i].length; j++) {
      rowSum += mat[i][j]; // Row sum //
      colmSum += mat[j][i]; // Column sum
    }

    console.log(`Row ${i} sum: ${rowSum}`);
    console.log(`Column ${i} sum: ${colmSum}`);

    totalsumofrow += rowSum;
    totalsumofcol += colmSum;
  }

 

  console.log("\nTotal rows sum is " + totalsumofrow);
  console.log("Total cols sum is " + totalsumofcol);
  console.log("Middle element is: " + mat[1][1]);
  console.log("First diagonal sum: " + difonalsum);
  console.log("Second diagonal sum: " + SEcdogsum);
}


rowsum(mat);
