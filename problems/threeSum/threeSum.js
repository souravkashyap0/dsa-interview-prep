//https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate fixed elements
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let currentSum = nums[left] + nums[right];

            if (currentSum === target) {
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                left++;
                right--;

                // Skip duplicate left values
                while (
                    left < right &&
                    nums[left] === nums[left - 1]
                ) {
                    left++;
                }

                // Skip duplicate right values
                while (
                    left < right &&
                    nums[right] === nums[right + 1]
                ) {
                    right--;
                }

            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};