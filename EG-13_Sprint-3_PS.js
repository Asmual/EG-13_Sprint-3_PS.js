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

// 06. 3Sum
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
// Test Case: 
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
// Expected Output: [[-1,-1,2],[-1,0,1]]

// 07. Subarray Sum Equals K
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = { 0: 1 };
    for (let num of nums) {
        sum += num;
        if (map[sum - k]) {
            count += map[sum - k];
        }
        map[sum] = (map[sum] || 0) + 1;
    }
    return count;
};
// Test Case: 
// console.log(subarraySum([1, 1, 1], 2)); 
// Expected Output: 2

// 08. Top K Frequent Elements
var topKFrequent = function(nums, k) {
    let count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    let sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Number(sorted[i]));
    }
    return result;
};
// Test Case: 
// console.log(topKFrequent([1,1,1,2,2,3], 2)); 
// Expected Output: [1,2]

// 09. Longest Consecutive Sequence
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let set = new Set(nums);
    let maxLength = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
};
// Test Case:
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); 
// Expected Output: 4

// 10. Sort Colors
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            let temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high--;
        }
    }
};
// Test Case: 
// let colors = [2, 0, 2, 1, 1, 0]; sortColors(colors); 
// console.log(colors); 
// Expected Output: [0, 0, 1, 1, 2, 2]

