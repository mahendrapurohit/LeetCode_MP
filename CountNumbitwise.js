function countMaxOrSubsets(nums) {
    // Step 1: Find the maximum bitwise OR
    let maxOr = 0;
    for (const num of nums) {
        maxOr |= num;
    }
    
    // Step 2: Count subsets with maximum bitwise OR
    let count = 0;
    const n = nums.length;
    
    // Iterate through all possible subsets
    const totalSubsets = 1 << n; // 2^n subsets
    for (let i = 0; i < totalSubsets; i++) {
        let subsetOr = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) { // Check if j-th element is included
                subsetOr |= nums[j];
            }
        }
        if (subsetOr === maxOr) {
            count++;
        }
    }
    
    return count;
}

// Example usage
const nums = [3, 1];
console.log(countMaxOrSubsets(nums)); // Output: 2
