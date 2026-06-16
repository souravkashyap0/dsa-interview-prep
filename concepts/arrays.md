What is an Array?

Characteristics

Time Complexities

Access → O(1)

Search → O(n)

Insert End → O(1)

Insert Beginning → O(n)

Delete End → O(1)

Delete Beginning → O(n)

Advantages# Arrays

## Definition

An Array is a linear data structure that stores elements in contiguous memory locations.

Elements are accessed using an index.

Example:

```js
const arr = [10, 20, 30, 40];
```

---

# Characteristics

* Ordered collection of elements
* Indexed starting from 0
* Can store duplicate values
* Fast random access

---

# Common Operations

## Access

```js
arr[2];
```

Time Complexity: O(1)

---

## Update

```js
arr[2] = 100;
```

Time Complexity: O(1)

---

## Search

```js
arr.includes(30);
```

Time Complexity: O(n)

---

## Insert at End

```js
arr.push(50);
```

Time Complexity: O(1)

---

## Remove from End

```js
arr.pop();
```

Time Complexity: O(1)

---

## Insert at Beginning

```js
arr.unshift(5);
```

Time Complexity: O(n)

---

## Remove from Beginning

```js
arr.shift();
```

Time Complexity: O(n)

---

# Complexity Table

| Operation | Complexity |
| --------- | ---------- |
| Access    | O(1)       |
| Update    | O(1)       |
| Search    | O(n)       |
| Push      | O(1)       |
| Pop       | O(1)       |
| Unshift   | O(n)       |
| Shift     | O(n)       |

---

# Common Interview Patterns

* Two Pointers
* Sliding Window
* Prefix Sum
* Binary Search
* Hashing

---

# Common Problems

* Two Sum
* Best Time to Buy and Sell Stock
* Product of Array Except Self
* Maximum Subarray

---

# Advantages

* Fast access by index
* Simple to use
* Cache friendly

---

# Disadvantages

* Slow insertion at beginning
* Slow deletion at beginning
* Search is O(n)

---

# Key Takeaways

* Accessing elements is O(1)
* Searching is O(n)
* Push and Pop are O(1)
* Frequently used in interview problems


Disadvantages

Common Interview Questions