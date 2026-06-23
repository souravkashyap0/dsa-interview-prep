//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longSubStringSet = new Set();
    let maxLength= 0;
    let left = 0;
    for(let right=0;right<s.length;right++){
        while(longSubStringSet.has(s[right])){
            longSubStringSet.delete(s[left]);
            left++;
        }
        longSubStringSet.add(s[right]);
        let currLen = right-left+1;
        maxLength = Math.max(maxLength,currLen);
        }
        return maxLength;
    }