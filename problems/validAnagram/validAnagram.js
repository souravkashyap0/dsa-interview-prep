//https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let anaMap=new Map();
    for (let i = 0; i < s.length; i++) {
        anaMap.set(s[i], (anaMap.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if(!anaMap.has(t[i])){
            return false;
        }
        anaMap.set(t[i], (anaMap.get(t[i])-1));
    }

    for (let value of anaMap.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
};