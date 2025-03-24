let arr = [-1, -4, -8, 5, -6,0, 8, 6, -69];

function countPosNeg(arr) {
    let neg = 0;
    let pos = 0;
    let negArr = [];
    let posArr = [];
    let sumNeg = 0;
    let sumPos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            neg++;
            negArr.push(arr[i]);
            sumNeg += arr[i];  
        } else {
            pos++;
            posArr.push(arr[i]);
            sumPos += arr[i];  
        }
    }
    
    return { negArr, posArr, neg, pos, sumNeg, sumPos };
}

function alternateArray(negArr, posArr) {
    let alternate = [];
    let i = 0;
    let j = 0;

    while (i < negArr.length && j < posArr.length) {
        alternate.push(negArr[i++]);
        alternate.push(posArr[j++]);
    }

    // Append remaining elements (if any)
    while (i < negArr.length) {
        alternate.push(negArr[i++]);
    }
    while (j < posArr.length) {
        alternate.push(posArr[j++]);
    }

    return alternate;
}

let result = countPosNeg(arr);
let alternateArr = alternateArray(result.negArr, result.posArr);

let newArray = result.negArr.concat(result.posArr);

console.log("Merged Array:", newArray);
console.log("Negative Count:", result.neg);
console.log("Positive Count:", result.pos);
console.log("Negative Numbers:", result.negArr);
console.log("Positive Numbers:", result.posArr);
console.log("Sum of Negative Numbers:", result.sumNeg);
console.log("Sum of Positive Numbers:", result.sumPos);
console.log("Alternate Array:", alternateArr);