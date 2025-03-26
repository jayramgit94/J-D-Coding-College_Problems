function firstNotRepeating(str){
    let frq = {};
    for(let char of str){
        frq[char] =( frq[char] || 0 ) +1;
    }
    for(let char of str){
        if(frq[char] === 1){
            return char;
        }
    }
    return null;
}
console.log(firstNotRepeating('swiss'));