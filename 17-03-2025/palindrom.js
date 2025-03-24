// create a palindrome componen
let str = "123321";

    let reversedStr = str.split('').reverse().join('');
    let palindrom = str === reversedStr;
    // console.log(palindrom); 
    if(palindrom){
        console.log("it is a palindrome");
        
    }else{
        console.log("not a palindrome");
        
    }
    
    
    
    
    
    
    
    
    
    
    // true
    // return reversedStr === str;
    // return reversedStr;
// console.log(reversedStr);


// console.log(palindrom(str)); // true