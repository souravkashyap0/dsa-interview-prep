# 010 - Container With Most Water

## Problem Statement

Given an integer array `height`, where each element represents the height of a vertical line, find two lines that together with the x-axis form a container that holds the maximum amount of water.

Return the maximum water area.

---

## Example

### Example 1

Input:

```txt
[1,8,6,2,5,4,8,3,7]
```

Output:

```txt
49
```

Explanation:

Choose:

```txt
8 and 7
```

Width:

```txt
8 - 1 = 7
```

Container Height:

```txt
min(8,7) = 7
```

Area:

```txt
7 × 7 = 49
```

---

## Input and Output

### Input

```txt
Array of heights
```

Example:

```txt
[1,8,6,2,5,4,8,3,7]
```

---

### Output

```txt
Maximum water area
```

---

## Observations

### Observation 1

A container requires:

```txt
Two walls
```

One wall cannot store water.

---

### Observation 2

Container width:

```txt
rightIndex - leftIndex
```

Example:

```txt
left = 1
right = 8

width = 7
```

---

### Observation 3

Container height is limited by the shorter wall.

Example:

```txt
leftHeight = 8
rightHeight = 7
```

Water height:

```txt
min(8,7)
=
7
```

---

### Observation 4

Area Formula

```txt
Area =
Container Height × Width
```

Which becomes:

```js
Math.min(height[left], height[right])
*
(right - left)
```

---

## Brute Force Approach

### Idea

Try every possible pair of lines.

For each pair:

```txt
Calculate area

Keep maximum area
```

---

### Pseudo Code

```txt
for every i

    for every j

        calculate area

        update maxArea
```

---

### Complexity

Time:

```txt
O(n²)
```

Space:

```txt
O(1)
```

Too slow.

---

## Key Insight

Start with:

```txt
Maximum width
```

by choosing:

```txt
left = 0
right = n - 1
```

---

### Why Move The Shorter Wall?

Suppose:

```txt
leftHeight = 3
rightHeight = 8
```

Current area is limited by:

```txt
3
```

Moving the taller wall:

```txt
Width decreases

Limiting height remains 3
```

Not useful.

---

Moving the shorter wall:

```txt
3 may become 4
3 may become 7
3 may become 8
```

Area may increase.

---

## Rule

```txt
Move the shorter wall.
```

If:

```txt
height[left] < height[right]
```

Move:

```txt
left++
```

Otherwise:

```txt
right--
```

---

## Pattern

Two Pointers

---

## Variables

```js
left = 0;
right = height.length - 1;
maxArea = 0;
```

---

## Algorithm

### Step 1

Place pointers at both ends.

```txt
left = 0
right = n - 1
```

---

### Step 2

Calculate:

```txt
width
```

```js
right - left
```

---

### Step 3

Calculate:

```txt
container height
```

```js
Math.min(height[left], height[right])
```

---

### Step 4

Calculate area.

```js
area = width * containerHeight
```

---

### Step 5

Update answer.

```js
maxArea = Math.max(maxArea, area)
```

---

### Step 6

Move the shorter wall.

```js
if(height[left] < height[right])
    left++;
else
    right--;
```

---

### Step 7

Repeat until:

```txt
left >= right
```

---

### Step 8

Return:

```txt
maxArea
```

---

## Dry Run

Input:

```txt
[3,8,6]
```

Initial:

```txt
left = 0
right = 2
```

---

Width:

```txt
2
```

Height:

```txt
min(3,6)
=
3
```

Area:

```txt
2 × 3
=
6
```

maxArea:

```txt
6
```

---

Move shorter wall:

```txt
3 < 6
```

Move:

```txt
left++
```

---

Now:

```txt
left = 1
right = 2
```

Width:

```txt
1
```

Height:

```txt
min(8,6)
=
6
```

Area:

```txt
6
```

maxArea remains:

```txt
6
```

---

Pointers meet.

Return:

```txt
6
```

---

## Final Code

```js
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let contH = Math.min(height[left], height[right]);
        let area = contH * width;

        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

Reason:

```txt
Each pointer moves at most n times.
```

---

### Space Complexity

```txt
O(1)
```

No extra data structures are used.

---

## Learning

This problem teaches:

```txt
Two Pointers
Greedy Thinking
Area Calculation
Pointer Movement Logic
```

Important Interview Rule:

```txt
Move the shorter wall,
because the shorter wall limits the area.
```
