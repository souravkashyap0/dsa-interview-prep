# HashSet

## Definition

A HashSet is a data structure that stores unique values and provides fast insertion, deletion, and lookup operations.

Unlike a HashMap, a HashSet stores only values and does not store key-value pairs.

In JavaScript, HashSet is implemented using the `Set` object.

---

# Why Use a HashSet?

Use a HashSet when you need:

* Duplicate detection
* Fast existence checking
* Unique values
* Membership testing

---

# Creating a HashSet

```js
const set = new Set();
```

---

# Common Operations

## Add

```js
set.add(10);
```

Time Complexity: O(1)

---

## Check Existence

```js
set.has(10);
```

Time Complexity: O(1)

Returns:

```txt
true
false
```

---

## Delete

```js
set.delete(10);
```

Time Complexity: O(1)

---

## Size

```js
set.size;
```

Time Complexity: O(1)

---

## Clear

```js
set.clear();
```

Time Complexity: O(n)

---

# Example

```js
const set = new Set();

set.add(1);
set.add(1);
set.add(1);

console.log(set);
```

Output:

```txt
Set(1) { 1 }
```

Duplicate values are automatically ignored.

---

# Complexity Table

| Operation | Complexity |
| --------- | ---------- |
| Add       | O(1)       |
| Has       | O(1)       |
| Delete    | O(1)       |
| Size      | O(1)       |
| Clear     | O(n)       |

---

# HashSet vs Array

## Array Lookup

```js
const arr = [1, 2, 3, 4];

arr.includes(4);
```

Time Complexity:

```txt
O(n)
```

---

## HashSet Lookup

```js
const set = new Set([1, 2, 3, 4]);

set.has(4);
```

Time Complexity:

```txt
O(1)
```

HashSet is significantly faster for frequent lookups.

---

# Common Use Cases

## Duplicate Detection

```js
const nums = [1, 2, 3, 1];

const set = new Set();

for (const num of nums) {
  if (set.has(num)) {
    return true;
  }

  set.add(num);
}
```

---

## Unique Elements

```js
const nums = [1, 1, 2, 2, 3];

const unique = [...new Set(nums)];
```

Output:

```txt
[1, 2, 3]
```

---

## Visited Tracking

Frequently used in:

* Graph Traversal
* Breadth First Search (BFS)
* Depth First Search (DFS)

Example:

```js
const visited = new Set();
```

---

# Common Interview Problems

## Easy

* Contains Duplicate
* Happy Number

## Medium

* Longest Consecutive Sequence
* Number of Provinces

## Advanced

* Graph Traversal Problems
* BFS Problems
* DFS Problems

---

# HashMap vs HashSet

| HashMap                  | HashSet                      |
| ------------------------ | ---------------------------- |
| Stores key-value pairs   | Stores only values           |
| Used for counting        | Used for existence checks    |
| Supports value retrieval | Supports membership checking |
| Example: Frequency Count | Example: Duplicate Detection |

---

## HashMap Example

```js
const map = new Map();

map.set("a", 1);
map.set("b", 2);
```

Stores:

```txt
a → 1
b → 2
```

---

## HashSet Example

```js
const set = new Set();

set.add("a");
set.add("b");
```

Stores:

```txt
a
b
```

---

# Interview Checklist

When solving a problem ask:

1. Do I need to detect duplicates?
2. Do I only care whether a value exists?
3. Do I need unique values?
4. Am I repeatedly searching through an array?
5. Can a HashSet reduce lookup time from O(n) to O(1)?

---

# Key Takeaways

* HashSet stores unique values.
* Duplicate values are ignored.
* Add, Search, and Delete are O(1).
* Excellent for duplicate detection.
* Excellent for fast membership checks.
* Commonly used in Graph, BFS, DFS, and Array problems.
