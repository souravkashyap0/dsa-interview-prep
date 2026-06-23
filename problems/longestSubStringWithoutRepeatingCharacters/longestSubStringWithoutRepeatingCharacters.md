# 009 - Longest Substring Without Repeating Characters

## Problem Statement

Given a string `s`, find the length of the longest substring without repeating characters.

Return:

```txt
Length of the longest valid substring
```

A valid substring contains:

```txt
No duplicate characters
```

---

## Examples

### Example 1

Input:

```txt
"abcabcbb"
```

Output:

```txt
3
```

Explanation:

```txt
Longest substring = "abc"
Length = 3
```

---

### Example 2

Input:

```txt
"bbbbb"
```

Output:

```txt
1
```

Explanation:

```txt
Longest substring = "b"
Length = 1
```

---

### Example 3

Input:

```txt
"pwwkew"
```

Output:

```txt
3
```

Explanation:

```txt
Longest substring = "wke"
Length = 3
```

---

## Input and Output

### Input

```txt
String s
```

Example:

```txt
"abcabcbb"
```

---

### Output

```txt
Length of the longest substring
without repeating characters
```

---

## Important Concept

### What is a Substring?

A substring is a continuous sequence of characters.

Valid substrings:

```txt
"abc"
"bca"
"cab"
```

Invalid:

```txt
"acb"
```

because characters are not continuous.

---

## Observations

### Observation 1

A valid substring cannot contain duplicate characters.

Valid:

```txt
abc
```

Invalid:

```txt
abca
```

because:

```txt
a appears twice
```

---

### Observation 2

We need fast duplicate detection.

Example:

```txt
abc
```

When we see:

```txt
a
```

again, we must know immediately.

Use:

```txt
HashSet
```

---

### Observation 3

When a duplicate appears:

```txt
abca
```

Do not restart.

Instead:

```txt
Shrink from the left
```

Example:

```txt
abca

remove first a

bca
```

Valid again.

---

### Observation 4

We maintain a window.

```txt
[left .... right]
```

The window always represents the current valid substring.

---

## Pattern

Sliding Window

---

## Data Structure Used

HashSet

Used for:

```txt
O(1) duplicate lookup
```

Methods:

```js
set.add()
set.delete()
set.has()
```

---

## Brute Force Approach

### Idea

Generate every possible substring.

For each substring:

```txt
Check if duplicates exist
```

Keep track of the maximum length.

---

### Complexity

Generate substrings:

```txt
O(n²)
```

Check duplicates:

```txt
O(n)
```

Total:

```txt
O(n³)
```

Too slow.

---

## Optimized Approach

### Sliding Window

Maintain:

```txt
left
right
set
maxLength
```

---

### Expand Window

Move:

```txt
right
```

forward.

Add characters into the current window.

---

### Duplicate Found

If:

```js
set.has(s[right])
```

is true:

```txt
Window becomes invalid
```

Shrink from left:

```js
set.delete(s[left]);
left++;
```

Repeat until duplicate disappears.

---

### Add Current Character

```js
set.add(s[right]);
```

---

### Calculate Current Window Length

Formula:

```js
right - left + 1
```

Example:

```txt
left = 2
right = 4

Length =
4 - 2 + 1
=
3
```

---

### Update Answer

```js
maxLength = Math.max(maxLength, currentLength);
```

---

## Problem Solving Journey

### Step 1

Create:

```txt
HashSet
```

for duplicate detection.

---

### Step 2

Initialize:

```txt
left = 0
maxLength = 0
```

---

### Step 3

Move:

```txt
right
```

through the string.

---

### Step 4

If duplicate exists:

```txt
Shrink from left
```

until duplicate disappears.

---

### Step 5

Add current character.

---

### Step 6

Calculate window size.

```txt
right - left + 1
```

---

### Step 7

Update maximum length.

---

### Step 8

Return:

```txt
maxLength
```

---

## Dry Run

Input:

```txt
abcabcbb
```

Start:

```txt
left = 0
set = {}
maxLength = 0
```

---

right = 0

```txt
a

set = {a}

length = 1

maxLength = 1
```

---

right = 1

```txt
b

set = {a,b}

length = 2

maxLength = 2
```

---

right = 2

```txt
c

set = {a,b,c}

length = 3

maxLength = 3
```

---

right = 3

```txt
a
```

Duplicate found.

Remove from left:

```txt
remove a

left = 1

set = {b,c}
```

Add:

```txt
a
```

Now:

```txt
set = {b,c,a}
```

Window:

```txt
bca
```

Length:

```txt
3
```

Continue until end.

Answer:

```txt
3
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

---

### Why?

Each character:

```txt
Enters the window once
Leaves the window once
```

Both pointers move only forward.

---

### Space Complexity

```txt
O(n)
```

Worst case:

```txt
abcdefg
```

HashSet stores:

```txt
n characters
```

---

## Why Sliding Window?

Without Sliding Window:

```txt
Rebuild substrings repeatedly
```

With Sliding Window:

```txt
Maintain one moving window

Expand right
Shrink left
```

Avoid repeated work.

---

## Recognition Clues

Think Sliding Window when you see:

* Substring
* Subarray
* Continuous sequence
* Longest
* Shortest
* Maximum length
* Minimum length

---

## Learning

This problem introduces:

```txt
Sliding Window
HashSet
Window Expansion
Window Shrinking
Duplicate Detection
```

Core Sliding Window Rule:

```txt
Expand right

If invalid:
    Shrink left

Update answer
```

For this problem:

```txt
Invalid window =
Duplicate character exists
```
