# 006 - Valid Palindrome

## Problem Statement

Given a string `s`, determine if it is a palindrome after:

1. Converting all uppercase letters to lowercase.
2. Removing all non-alphanumeric characters.

Return:

```txt
true  -> if palindrome
false -> otherwise
```

---

## Examples

### Example 1

Input:

```txt
"A man, a plan, a canal: Panama"
```

Output:

```txt
true
```

Explanation:

```txt
amanaplanacanalpanama
```

reads the same forward and backward.

---

### Example 2

Input:

```txt
"race a car"
```

Output:

```txt
false
```

---

## Observations

### Observation 1

A palindrome reads the same forward and backward.

Examples:

```txt
racecar
madam
abba
```

---

### Observation 2

The problem explicitly states:

* Convert uppercase letters to lowercase.
* Remove all non-alphanumeric characters.

Example:

```txt
"A man, a plan, a canal: Panama"

↓

"amanaplanacanalpanama"
```

---

### Observation 3

To verify a palindrome, we compare characters from opposite ends of the string.

Example:

```txt
amanaplanacanalpanama

a == a
m == m
a == a
...
```

---

## Pattern

Two Pointers

---

## Data Structures Used

* String
* Two Pointer Technique

---

## Brute Force Approach

### Idea

1. Clean the string.
2. Reverse the cleaned string.
3. Compare both strings.

Example:

```txt
racecar

↓

racecar
```

If equal:

```txt
Palindrome
```

### Complexity

Time:

```txt
O(n)
```

Space:

```txt
O(n)
```

because a reversed string must be created.

---

## Optimized Approach

### Key Insight

After cleaning the string:

```txt
amanaplanacanalpanama
```

we do not need to compare every pair.

Use:

```txt
left
right
```

pointers.

---

### Rules

If:

```txt
cleaned[left] !== cleaned[right]
```

Return:

```txt
false
```

If:

```txt
cleaned[left] === cleaned[right]
```

Move:

```txt
left++
right--
```

Continue until:

```txt
left >= right
```

---

## Problem Solving Journey

### Step 1

Convert the input string to lowercase.

---

### Step 2

Remove all non-alphanumeric characters.

Example:

```txt
"A man, a plan, a canal: Panama"

↓

"amanaplanacanalpanama"
```

---

### Step 3

Initialize two pointers.

```txt
left = 0
right = cleanedString.length - 1
```

---

### Step 4

Compare both ends.

If characters mismatch:

```txt
return false
```

---

### Step 5

If characters match:

```txt
left++
right--
```

---

### Step 6

If all comparisons succeed:

```txt
return true
```

---

## Dry Run

Input:

```txt
racecar
```

Initial:

```txt
left = 0
right = 6
```

Comparison 1:

```txt
r == r
```

Move:

```txt
left = 1
right = 5
```

Comparison 2:

```txt
a == a
```

Move:

```txt
left = 2
right = 4
```

Comparison 3:

```txt
c == c
```

Move:

```txt
left = 3
right = 3
```

Loop ends.

Return:

```txt
true
```

---

## Edge Cases

### Empty String

Input:

```txt
""
```

Output:

```txt
true
```

---

### Single Character

Input:

```txt
"a"
```

Output:

```txt
true
```

---

### Only Special Characters

Input:

```txt
"!!!"
```

After cleaning:

```txt
""
```

Output:

```txt
true
```

---

### Mixed Case

Input:

```txt
"Madam"
```

After lowercase:

```txt
"madam"
```

Output:

```txt
true
```

---

## Learning

This problem teaches:

```txt
Two Pointers
+
String Processing
```

Instead of comparing every possible character pair, we compare only opposite ends and move inward.

---

## Recognition Clues

Think Two Pointers when:

* Palindrome checking
* Compare beginning and end
* Reverse-like behavior
* Opposite-end comparisons

---

## Complexity Analysis (ELI5)

### Time Complexity

Cleaning the string:

```txt
O(n)
```

Palindrome check:

```txt
O(n)
```

Total:

```txt
O(n)
```

---

### Why?

Each character is visited a constant number of times.

The pointers only move inward and never move backward.

---

### Space Complexity

Current Solution:

```txt
O(n)
```

because a new string is created:

```txt
cleanedString
```

---

## Optimization

Current Solution:

```txt
Time  = O(n)
Space = O(n)
```

Reason:

```txt
cleanedString
```

stores a cleaned copy of the input.

### Better Approach

Use two pointers directly on the original string.

Skip:

```txt
spaces
commas
special characters
```

while traversing.

No cleaned string required.

Optimized Complexity:

```txt
Time  = O(n)
Space = O(1)
```

---

## Interview Answer

Current Solution:

```txt
Time Complexity  = O(n)
Space Complexity = O(n)
```

because we create a cleaned version of the string and then use Two Pointers to compare characters from opposite ends.

Possible Optimization:

```txt
O(1) Space
```

by skipping invalid characters during traversal instead of creating a new string.
