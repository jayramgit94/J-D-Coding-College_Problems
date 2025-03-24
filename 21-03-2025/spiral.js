function spiralOrder(matrix) {
    if (matrix.length === 0) return [];

    let result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Left to Right
        for (let i = left; i <= right; i++) 
            result.push(matrix[top][i]);
        top++; // Move down

        // Top to Bottom
        for (let i = top; i <= bottom; i++) 
            result.push(matrix[i][right]);
        right--; // Move left

        // Right to Left (if there's a row left)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) 
                result.push(matrix[bottom][i]);
            bottom--; // Move up
        }

        // Bottom to Top (if there's a column left)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) 
                result.push(matrix[i][left]);
            left++; // Move right
        }
    }

    return result;
}

// Example usage:
let matrix = [
   [
        1, 2, 3
     ],
     [
        4, 5, 6
     ],
     [
        7, 8, 9
   ]
];

console.log("Spiral Order:", spiralOrder(matrix));
