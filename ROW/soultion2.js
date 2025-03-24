function countPosNeg(arr) {
    let neg = 0;
    let pos = 0;
    let negArr = [];
    let posArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            neg++;
            negArr.push(arr[i]);
        } else {
            pos++;
            posArr.push(arr[i]);
        }
    }

    return {  neg, pos };
}

let alternatearr = [];

// Create an alternate array with negative numbers first followed by positive numbers

for (let i = 0; i < negArr.length; i++) {
    alternatearr.push(negArr[i]);
    alternatearr.push(posArr[i]);
}

console.log(alternatearr);
console.log("Negative Count:", result.neg);
