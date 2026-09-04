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

// 02. Move Zeroes
var moveZeroes = function(nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    for (let i = insertPos; i < nums.length; i++) {
        nums[i] = 0;
    }
};
// Test Case: 
// let arr = [0, 1, 0, 3, 12]; moveZeroes(arr);
// console.log(arr); 
// Expected Output: [1, 3, 12, 0, 0]


// 03. Valid Anagram
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
};
// Test Case: 
// console.log(isAnagram("anagram", "nagaram")); 
// Expected Output: true

// 04. Ransom Note
var canConstruct = function(ransomNote, magazine) {
    let count = {};
    for (let char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of ransomNote) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
};
// Test Case: 
// console.log(canConstruct("aa", "aab"));
// Expected Output: true

// 05. Majority Element
var majorityElement = function(nums) {
    let count = {};
    let majorityCount = Math.floor(nums.length / 2);
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > majorityCount) {
            return num;
        }
    }
};
// Test Case:
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); 
// Expected Output: 2
