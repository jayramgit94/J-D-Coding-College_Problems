function missingnum(arr){
    let n = arr.length+1;  // assuming arr is sorted in ascending order and contains unique numbers from 1 to n
    let total = (n*(n+1))/2;
    let sum = arr.reduce((a,b)=>a+b, 0);
    return total - sum;
}


console.log(missingnum([1,2,3,4,5,6,7,9,10])); // 8
