# 001 - Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the target.

Assume exactly one solution exists and the same element cannot be used twice.

---

## Examples

Input:

```txt
nums = [2,7,11,15]
target = 9
```

Output:

```txt
[0,1]
```

---

## Observations

* Need two numbers whose sum equals the target.
* Brute force would check every pair.
* Repeated searching suggests a lookup structure may help.

---

## Pattern

Hashing

### Why?

We need fast lookup of previously seen values.

---

## Data Structures Used

* Array
* HashMap (Map)

---

## Brute Force Approach

Check every possible pair using nested loops.

### Complexity

Time: O(n²)

Space: O(1)

---

## Optimized Approach

Store previously seen values in a HashMap.

For each number:

1. Calculate complement = target - currentNumber
2. Check if complement exists in the map
3. If found, return indices
4. Otherwise store current value and index

### Complexity

Time: O(n)

Space: O(n)

---

## Dry Run

Input:

```txt
nums = [2,7,11,15]
target = 9
```

Iteration 1:

```txt
num = 2
complement = 7

map = {}
```

Store:

```txt
2 -> 0
```

Iteration 2:

```txt
num = 7
complement = 2

map = {2 -> 0}
```

Complement found.

Return:

```txt
[0,1]
```

---

## Edge Cases

### Minimum Input

```txt
nums = [1,2]
target = 3
```

Output:

```txt
[0,1]
```

---

### Negative Numbers

```txt
nums = [-3,4,3,90]
target = 0
```

Output:

```txt
[0,2]
```

---

### Duplicate Values

```txt
nums = [3,3]
target = 6
```

Output:

```txt
[0,1]
```

---

## Learning

HashMap can reduce repeated searching from O(n²) to O(n).

Store values that have already been processed and check for complements in constant time.

---

## Recognition Clues

Think Hashing when:

* Fast lookup is required
* Previously seen values matter
* Repeated searching can be avoided

---

## Related Problems

* Contains Duplicate
* Valid Anagram
* Group Anagrams

---

## Final Complexity

Time: O(n)

Space: O(n)
