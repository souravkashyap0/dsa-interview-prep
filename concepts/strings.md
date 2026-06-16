# Strings

## Definition

A String is a sequence of characters used to represent text.

Example:

```js
const name = "Sourav";
```

---

# Characteristics

* Ordered sequence of characters
* Indexed starting from 0
* Immutable in JavaScript

Example:

```js
let str = "hello";

str[0] = "H";

console.log(str);
```

Output:

```txt
hello
```

---

# Common Operations

## Access Character

```js
str[0];
```

Time Complexity: O(1)

---

## Length

```js
str.length;
```

Time Complexity: O(1)

---

## Traversal

```js
for (const ch of str) {
  console.log(ch);
}
```

Time Complexity: O(n)

---

## Split

```js
str.split("");
```

Time Complexity: O(n)

---

## Join

```js
arr.join("");
```

Time Complexity: O(n)

---

## Substring

```js
str.substring(0, 3);
```

Time Complexity: O(n)

---

# Complexity Table

| Operation | Complexity |
| --------- | ---------- |
| Access    | O(1)       |
| Length    | O(1)       |
| Traversal | O(n)       |
| Split     | O(n)       |
| Join      | O(n)       |
| Substring | O(n)       |

---

# Common Interview Patterns

* Frequency Counting
* Two Pointers
* Sliding Window

---

# Common Problems

* Valid Anagram
* Valid Palindrome
* Group Anagrams
* Longest Substring Without Repeating Characters

---

# Advantages

* Easy text manipulation
* Supports many built-in methods

---

# Disadvantages

* Immutable in JavaScript
* Modifications create new strings

---

# Key Takeaways

* Strings are immutable
* Character access is O(1)
* Traversal is O(n)
* HashMap and Two Pointers are common techniques
