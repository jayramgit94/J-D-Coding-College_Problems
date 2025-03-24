function lengthOfLongestSubstring(s) {
    let charSet = new Set();  // To store unique characters
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If a repeating character is found, shrink the window from the left
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        charSet.add(s[right]);  // Add new character to the window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3 ("vdf")
