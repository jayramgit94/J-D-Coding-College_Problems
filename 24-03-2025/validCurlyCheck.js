// conditions:

// we have to find the valid string of the prantheses 
// opening brackets must be closed in the correct order
// same no. of string must be closed in the correct order
// ({})  valid
// ([)}])  invalid string 

function isValid(s) {
    let stack = [];
    let mapping = { ')': '(', '}': '{', ']': '[' }; // matches the opening bracket with the closing bracket

    for (let char of s) {
        if (mapping[char]) { 
            // If it's a closing bracket, check the stack
            let topElement = stack.pop(); // pop the last element from the stack
            if (topElement !== mapping[char]) { // if the last element is not the matching opening bracket
                return false;
            }
        } else { 
            // If it's an opening bracket, push it to the stack
            stack.push(char); // push the last element to the stack 
        }
        console.log(stack); // it will show how the satck it working 
        
    }
    
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false
console.log(isValid(""));     // true




// How the Code Works:
// Use a Stack (a storage like a basket) 
// The stack helps keep track of open brackets (, {, [.
// When we see an open bracket, we put it in the stack.
// When we see a closing bracket, we check if it matches the last open bracket.
// Loop Through the String 

// Read each character one by one.
// If it’s an opening bracket ((, {, [), push it into the stack.
// If it’s a closing bracket (), }, ]), check if it matches the last item in the stack.
// If it matches, remove (pop) the last item from the stack.
// If it doesn’t match or the stack is empty, return false.

// Check the Stack at the End 
// If the stack is empty, that means all brackets were matched properly → return true.
// If the stack is not empty, that means some opening brackets were never closed → return false.