//https://leetcode.com/problems/product-of-array-except-self/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //  let prefix = new Array(nums.length).fill(1);
    // let suffix = new Array(nums.length).fill(1);
    // let result = new Array(nums.length);

    // // Build prefix array
    // for(let i = 1; i < nums.length; i++){
    //     prefix[i] = prefix[i - 1] * nums[i - 1];
    // }

    // // Build suffix array
    // for(let i = nums.length - 2; i >= 0; i--){
    //     suffix[i] = suffix[i + 1] * nums[i + 1];
    // }

    // // Build result
    // for(let i = 0; i < nums.length; i++){
    //     result[i] = prefix[i] * suffix[i];
    // }

    // return result;
     let result = new Array(nums.length).fill(1);

    // Store prefix products in result
    for(let i = 1; i < nums.length; i++){
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Multiply by suffix products
    let suffix = 1;

    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};