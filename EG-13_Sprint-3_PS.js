// 01. Contains Duplicate
var containsDuplicate = function(nums) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            return true;
        }
        seen[nums[i]] = true;
    }
    return false;
};
// Test Case: 
// console.log(containsDuplicate([1, 2, 3, 1])); 
// Expected Output: true