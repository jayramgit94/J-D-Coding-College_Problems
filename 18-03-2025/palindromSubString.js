function longestPalindrome(s) {
    if (s.length < 2) return s; // Single-character strings are palindromes.

    let start = 0, maxLength = 0; // Track longest palindrome's start and length.




    
    // Function to expand around a center (odd & even length cases)
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--; right++; // Expand outward as long as characters match
        }
        return [left + 1, right - 1]; // Return valid palindromJe range
    }

    for (let i = 0; i < s.length; i++) {
        let [l1, r1] = expandAroundCenter(i, i);     // Odd-length palindrome
        let [l2, r2] = expandAroundCenter(i, i + 1); // Even-length palindrome

        if (r1 - l1 > maxLength) [start, maxLength] = [l1, r1 - l1]; 
        if (r2 - l2 > maxLength) [start, maxLength] = [l2, r2 - l2]; 
    }

    return s.substring(start, start + maxLength + 1); // Extract longest palindrome
}

// Example Runs
console.log(longestPalindrome("babaksdjbaaaaad"));  
console.log(longestPalindrome("cbbd"));   // Output: "bb"
console.log(longestPalindrome("racecar")); // Output: "racecar"
console.log(longestPalindrome("a"));      // Output: "a"
console.log(longestPalindrome("forgeeksskeegfor")); // Output: "geeksskeeg"
