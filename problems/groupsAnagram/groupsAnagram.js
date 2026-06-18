//https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagramMap = new Map();
    let group = [];
    for(let i=0;i<strs.length;i++)
    {
     let wrd = strs[i].split("").sort().join(",");
     if(!anagramMap.has(wrd)){
        anagramMap.set(wrd,[strs[i]]);
     }
     else{
        group= anagramMap.get(wrd);
        group.push(strs[i]);
     }
    }
    return [...anagramMap.values()];
};