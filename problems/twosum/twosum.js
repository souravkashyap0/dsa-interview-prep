//https://leetcode.com/problems/two-sum/description/
var twoSum = function(nums, target) {
    let twoSumMap = new Map();
    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        if(twoSumMap.has(complement)){
            return [twoSumMap.get(complement),i];
        }
        twoSumMap.set(nums[i],i);
    }
};