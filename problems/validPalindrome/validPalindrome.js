//https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerCase = s.toLowerCase();
    let cleanedString='';
    for(let i=0;i<lowerCase.length;i++){
        if(/[a-z0-9]/.test(lowerCase[i])){
            cleanedString += lowerCase[i];
        }
    }
    let left=0;
    let right =cleanedString.length-1;
    while(left<right){
        if(cleanedString[left] !== cleanedString[right]){
            return false;
        }
        
        if(cleanedString[left]===cleanedString[right]){
            left++;
            right--;
        }
    }
        
    return true;
};