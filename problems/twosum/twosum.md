# 001 - Two Sum

## LeetCode

Easy

## Status

Solved ✅

Total Time : 6mins
## Date

2026-06-16

## Pattern

Hashing

## Data Structures

* Array
* HashMap (Map)

## Brute Force

### Approach

Check every pair using nested loops.

### Complexity

Time: O(n²)

Space: O(1)

---

## Optimized Approach

Store previously seen numbers in a HashMap.

For each number:

1. Calculate complement = target - currentNumber
2. Check if complement exists in HashMap
3. If yes, return indices
4. Otherwise store current number and index

### Complexity

Time: O(n)

Space: O(n)

---

## Recognition Clues

Use Hashing when:

* Fast lookup is needed
* Need to remember previously seen values
* Want to avoid repeated searches

---

## Learning

* HashMap lookup is O(1)
* Storing seen values avoids nested loops
* Hashing can reduce O(n²) solutions to O(n)

---

## Mistakes

None

---

## Confidence

4/5
