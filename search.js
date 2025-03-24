let arr = [1,2,3,3,45,6];
let x = 6;
function search(arr, x) {
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] === x)
        return i;
        
    }
    return -1;
}
// console.log();

let search = search(arr, x);
console.log(`search: ${search} ${x}`);
