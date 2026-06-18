# 005 - Two Sum II (Input Array Is Sorted)

## Problem Statement

Given a 1-indexed array of integers `numbers` that is sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed).

The solution must use only constant extra space.

---

## Observations

### Observation 1

The array is already sorted.

Example:

```txt
[2,7,11,15]
```

This is the most important clue in the problem.

---

### Observation 2

Because the array is sorted:

* Moving the left pointer right increases the sum.
* Moving the right pointer left decreases the sum.

Example:

```txt
2 + 15 = 17

Move right:
2 + 11 = 13

Sum becomes smaller.
```

---

### Observation 3

The problem requires O(1) extra space.

This means:

```txt
HashMap ❌
Set ❌
```

because they require O(n) space.

---

### Observation 4

The problem is asking for a pair of numbers whose sum equals the target.

This suggests a Two Pointer solution.

---

## Pattern

Two Pointers

---

## Data Structures

Array

---

## Brute Force Approach

Check every possible pair.

Example:

```txt
2 + 7
2 + 11
2 + 15
7 + 11
7 + 15
11 + 15
```

Time Complexity:

```txt
O(n²)
```

Space Complexity:

```txt
O(1)
```

---

## Key Insight

Since the array is sorted:

```txt
Smallest number is on the left.
Largest number is on the right.
```

Start with:

```txt
left = 0
right = n - 1
```

Calculate:

```txt
sum = numbers[left] + numbers[right]
```

If:

```txt
sum > target
```

Move:

```txt
right--
```

because we need a smaller number.

If:

```txt
sum < target
```

Move:

```txt
left++
```

because we need a larger number.

If:

```txt
sum === target
```

Return the answer.

---

## Problem Solving Journey

### Step 1

Notice the array is sorted.

### Step 2

Realize that moving pointers changes the sum predictably.

### Step 3

Start from both ends.

### Step 4

If sum is too large:

```txt
right--
```

### Step 5

If sum is too small:

```txt
left++
```

### Step 6

Continue until target is found.

---

## Dry Run

Input:

```txt
numbers = [2,7,11,15]
target = 9
```

### Iteration 1

```txt
left = 0
right = 3

2 + 15 = 17
```

Too large.

```txt
right--
```

### Iteration 2

```txt
left = 0
right = 2

2 + 11 = 13
```

Too large.

```txt
right--
```

### Iteration 3

```txt
left = 0
right = 1

2 + 7 = 9
```

Target found.

Return:

```txt
[1,2]
```

---

## Edge Cases

### Smallest Valid Input

```txt
[2,7]
target = 9
```

### Negative Numbers

```txt
[-5,-3,2,8]
```

### Large Values

```txt
[1,2,3,4,100000]
```

---

## Learning

Sorted arrays often eliminate the need for extra memory.

When a problem asks for:

```txt
Pair
+
Sorted Array
```

always consider Two Pointers before Hashing.

---

## Recognition Clues

Think Two Pointers when:

* Array is sorted.
* Looking for a pair.
* Need O(1) space.
* Need opposite-end comparisons.

---

## Complexity Analysis (ELI5)

### Time Complexity

Each iteration moves one pointer.

```txt
left:
0 → 1 → 2 → ...

right:
n-1 → n-2 → ...
```

A pointer never moves backward.

Therefore:

```txt
O(n)
```

---

### Space Complexity

Only storing:

```txt
left
right
sum
```

No additional data structures.

Therefore:

```txt
O(1)
```

---

## Interview Answer

Time Complexity:

```txt
O(n)
```

because each pointer traverses the array at most once.

Space Complexity:

```txt
O(1)
```

because only a few variables are used.
