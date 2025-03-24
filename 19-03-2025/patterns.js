// let n = 4;
// for (let i = 1; i <= n ; i++)
// {
//     let str = "*";
//     // console.log(str.repeat(n));
//     console.log(str.repeat(i));
//     }



// let n = 3;
// for(let i = n; i >= 1 ; i--){
//     let str = "";

//     for(let j = 0; j < i ; j++){
//         str += "* "

//         }
//     console.log(str);
//       }




// let n = 3;
// for(let i = 0; i < n ; i++){
//     let str = "";

//     for(let j = 0; j < n ; j++){
//         str += "* "

//         }
//     console.log(str);
//       }




// let n = 5;
// for (let i = 1; i < n; i++) {
//   let row = "";
//   for (let j = i; j < n; j++) {
//     //j = 0  and j < i  inc tringle
//     //j = 1 and j < n  square 
//     //j = i and j < n dec triangle
//     row += "* ";
//   }

//   console.log(row.trim());
// }






let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";

  // Printing spaces
  for (let j = i; j < n; j++) {
    //j=1;j<=i;j++
    //other one
    //j = i; j<=n; j++
    row += " ";
  }

  // Printing stars
  for (let j = 1; j <= (2 * i - 1); j++) {
    //j =i; j<=n; j++
    //and other 
    //j =1; j<=i; j++




    row += String.fromCharCode(64 + (i));


    // row += String.fromCharCode(64 + (j));
    // row += String.fromCharCode(69 + (i - j));
    
  }

  console.log(row);
}
