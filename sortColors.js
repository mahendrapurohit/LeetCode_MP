// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]


let sortColors = function(nums) {

     return nums.sort(function (a,b){return a-b });  
};

let a = sortColors([2,3,3,8,6,9,5,0,4]);
console.log(a);