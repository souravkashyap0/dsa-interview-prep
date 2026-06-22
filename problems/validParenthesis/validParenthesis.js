//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stackAr = [];
    for(let i=0;i<s.length;i++){
        let charEl =s[i];
        if(charEl === '[' || charEl ==='(' ||  charEl==='{'){
            stackAr.push(s[i]);
        }
        else{
            let top = stackAr[stackAr.length-1];
            if(stackAr.length ===0){
                return false;
            }
            stackAr.pop();
            if((top=== '[' &&  charEl !== ']')|| (top=== '{' &&  charEl !== '}') || (top=== '(' &&  charEl !== ')') ){
                return false;
            }
        }

    }
            return stackAr.length===0;

};