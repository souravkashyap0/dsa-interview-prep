# 011 - 3Sum

## Problem Statement

Given an integer array `nums`, return all unique triplets:

```txt
[a, b, c]
```

such that:

```txt
a + b + c = 0
```

The solution set must not contain duplicate triplets.

---

## Example

### Example 1

Input:

```txt
[-1,0,1,2,-1,-4]
```

Output:

```txt
[
 [-1,-1,2],
 [-1,0,1]
]
```

Explanation:

```txt
-1 + (-1) + 2 = 0

-1 + 0 + 1 = 0
```

---

## Input and Output

### Input

```txt
Array of integers
```

Example:

```txt
[-1,0,1,2,-1,-4]
```

---

### Output

```txt
Array of triplets
```

Example:

```txt
[
 [-1,-1,2],
 [-1,0,1]
]
```

---

## Observations

### Observation 1

We need:

```txt
3 numbers
```

whose sum equals:

```txt
0
```

---

### Observation 2

Brute Force

Generate every triplet.

```js
for(i)
    for(j)
        for(k)
```

Check:

```txt
nums[i] + nums[j] + nums[k] === 0
```

---

### Complexity

```txt
Time: O(n³)

Space: O(1)
```

Too slow.

---

## Key Insight

Instead of finding:

```txt
3 numbers
```

at once,

Fix one number.

Example:

```txt
fixed = -1
```

Now:

```txt
-1 + ? + ? = 0
```

becomes:

```txt
? + ? = 1
```

This becomes a:

```txt
Two Sum problem
```

---

## Pattern

Two Pointers

---

## Step 1 - Sort Array

Sort the array first.

Input:

```txt
[-1,0,1,2,-1,-4]
```

Sorted:

```txt
[-4,-1,-1,0,1,2]
```

Sorting allows us to use:

```txt
left pointer
right pointer
```

---

## Step 2 - Fix One Element

Loop through the array.

```js
for(let i = 0; i < nums.length - 2; i++)
```

Current fixed value:

```js
nums[i]
```

---

## Step 3 - Convert To Two Sum

We want:

```txt
nums[i] + left + right = 0
```

Rearrange:

```txt
left + right = -nums[i]
```

Target:

```js
target = -nums[i]
```

---

## Step 4 - Initialize Two Pointers

```js
left = i + 1
right = nums.length - 1
```

Why?

```txt
i is already used
```

So search only in the remaining array.

---

## Step 5 - Compare Sum

Calculate:

```js
currentSum = nums[left] + nums[right]
```

### Case 1

```txt
currentSum === target
```

Triplet found.

Add:

```js
[
 nums[i],
 nums[left],
 nums[right]
]
```

Move:

```js
left++
right--
```

---

### Case 2

```txt
currentSum < target
```

Need a larger value.

Move:

```js
left++
```

---

### Case 3

```txt
currentSum > target
```

Need a smaller value.

Move:

```js
right--
```

---

## Handling Duplicates

### Duplicate Fixed Element

Example:

```txt
[-4,-1,-1,0,1,2]
```

If:

```txt
i = 1 -> -1
```

is already processed,

skip:

```txt
i = 2 -> -1
```

Rule:

```js
if(i > 0 && nums[i] === nums[i - 1]){
    continue;
}
```

---

### Duplicate Left Values

After finding a triplet:

```js
while(
 left < right &&
 nums[left] === nums[left - 1]
){
 left++;
}
```

---

### Duplicate Right Values

```js
while(
 left < right &&
 nums[right] === nums[right + 1]
){
 right--;
}
```

---

## Dry Run

Input:

```txt
[-1,0,1,2,-1,-4]
```

Sorted:

```txt
[-4,-1,-1,0,1,2]
```

---

### i = 1

Fixed:

```txt
-1
```

Target:

```txt
1
```

Pointers:

```txt
left = 2 -> -1
right = 5 -> 2
```

Current Sum:

```txt
-1 + 2 = 1
```

Target matched.

Triplet:

```txt
[-1,-1,2]
```

Store result.

---

Move:

```txt
left++
right--
```

---

Next:

```txt
left = 3 -> 0
right = 4 -> 1
```

Current Sum:

```txt
0 + 1 = 1
```

Target matched.

Triplet:

```txt
[-1,0,1]
```

Store result.

---

Final Answer:

```txt
[
 [-1,-1,2],
 [-1,0,1]
]
```

---

## Pseudo Code

```txt
Sort array

Create result array

For every i

    Skip duplicate fixed values

    target = -nums[i]

    left = i + 1
    right = n - 1

    While left < right

        currentSum =
        nums[left] + nums[right]

        If currentSum == target

            Add triplet

            left++
            right--

            Skip duplicates

        Else if currentSum < target

            left++

        Else

            right--
```

---

## Final Code

```js
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {

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

                while (
                    left < right &&
                    nums[left] === nums[left - 1]
                ) {
                    left++;
                }

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
```

---

## Complexity Analysis

### Time Complexity

```txt
Sorting: O(n log n)

Outer Loop: O(n)

Two Pointers: O(n)

Total: O(n²)
```

---

### Space Complexity

```txt
O(1)
```

Ignoring output array.

---

## Recognition Clues

Think of this pattern when you see:

```txt
Find triplets

Find quadruplets

Find k numbers

Target sum

Unique combinations
```

Common approach:

```txt
Sort

Fix one element

Use Two Pointers
```

---

## Learning

This problem teaches:

```txt
Two Pointers
Sorting
Duplicate Handling
Target Transformation
Nested Two Pointer Search
```

Important Interview Insight:

```txt
3Sum

Fix one element

↓

Convert into Two Sum

↓

Use Two Pointers
```
