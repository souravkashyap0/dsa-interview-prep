What is HashMap?

Why lookup is O(1)

Operations

Insert O(1)

Search O(1)# HashMap

## Definition

A HashMap is a data structure that stores data as key-value pairs.

In JavaScript, HashMap is implemented using the Map object.

Example:

```js
const map = new Map();
```

---

# Why Use a HashMap?

Use HashMap when you need:

* Fast lookup
* Frequency counting
* Caching
* Key-value storage

---

# Common Operations

## Insert

```js
map.set("a", 1);
```

Time Complexity: O(1)

---

## Lookup

```js
map.get("a");
```

Time Complexity: O(1)

---

## Existence Check

```js
map.has("a");
```

Time Complexity: O(1)

---

## Delete

```js
map.delete("a");
```

Time Complexity: O(1)

---

# Complexity Table

| Operation | Complexity |
| --------- | ---------- |
| Insert    | O(1)       |
| Lookup    | O(1)       |
| Has       | O(1)       |
| Delete    | O(1)       |

---

# Frequency Counting

Example:

```js
const freq = new Map();

for (const ch of "aabbc") {
  freq.set(ch, (freq.get(ch) || 0) + 1);
}
```

Result:

```txt
a → 2
b → 2
c → 1
```

---

# Common Use Cases

## Fast Lookup

```js
map.has(target);
```

---

## Counting

```js
frequency counting
```

---

## Caching

```js
memoization
```

---

# Common Interview Problems

* Two Sum
* Valid Anagram
* Group Anagrams
* Top K Frequent Elements

---

# HashMap vs Object

Prefer Map when:

* Keys are dynamic
* Frequent insertions/deletions
* Better API support

---

# Advantages

* O(1) lookup
* O(1) insertion
* O(1) deletion

---

# Disadvantages

* Uses extra memory
* Not ordered by insertion logic requirements

---

# Key Takeaways

* Stores key-value pairs
* Lookup is O(1)
* Excellent for frequency counting
* Excellent for fast searches
* One of the most important interview data structures


Delete O(1)

Use Cases

Frequency Counting

Caching

Fast Lookup

Interview Problems