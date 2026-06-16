# Big O Notation

## Definition

Big O Notation is a way to describe how the runtime or memory usage of an algorithm grows as the input size increases.

It measures the growth rate of an algorithm, not the actual execution time.

---

## Why Big O Matters

- Compare algorithms
- Predict performance for large inputs
- Identify inefficient solutions
- Optimize interview solutions

Example:

Algorithm A -> O(n²)

Algorithm B -> O(n)

As input size grows, O(n) performs significantly better than O(n²).

---

# Time Complexity

Time Complexity measures how the number of operations performed by an algorithm grows as the input size increases.

---

## O(1) - Constant Time

Definition:
The number of operations remains constant regardless of input size.

Example:

```js
const first = arr[0];
```

Time Complexity: O(1)

---

## O(log n) - Logarithmic Time

Definition:
The input size is reduced by a constant factor in each step.

Common Example:
Binary Search

Example:

1000 → 500 → 250 → 125 → ...

Time Complexity: O(log n)

---

## O(n) - Linear Time

Definition:
The number of operations grows directly with the input size.

Example:

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Time Complexity: O(n)

---

## O(n log n)

Definition:
The algorithm performs n operations and each operation involves a logarithmic process.

Examples:

- Merge Sort
- Heap Sort
- Quick Sort (average case)

Time Complexity: O(n log n)

---

## O(n²) - Quadratic Time

Definition:
The number of operations grows proportional to the square of the input size.

Usually caused by nested loops.

Example:

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

Time Complexity: O(n²)

---

# Space Complexity

Space Complexity measures the amount of extra memory used by an algorithm.

---

## O(1) Space

Example:

```js
let total = 0;
```

Uses a constant amount of memory.

Space Complexity: O(1)

---

## O(n) Space

Example:

```js
const result = [];

for (let i = 0; i < n; i++) {
  result.push(i);
}
```

Memory usage grows with input size.

Space Complexity: O(n)

---

# Common Complexity Order

Best → Worst

O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(2ⁿ)
O(n!)

---

# Common Data Structure Operations

| Operation            | Time Complexity |
| -------------------- | --------------- |
| Array Access         | O(1)            |
| Array Search         | O(n)            |
| Array Insert End     | O(1)            |
| Array Insert Start   | O(n)            |
| HashMap Search       | O(1)            |
| HashMap Insert       | O(1)            |
| HashMap Delete       | O(1)            |
| Binary Search        | O(log n)        |

---

# Interview Checklist

For every problem ask:

1. What is the brute-force solution?
2. What is its time complexity?
3. What is its space complexity?
4. Can the time complexity be improved?
5. Can the space complexity be reduced?
6. Which data structure helps achieve the optimization?

---

# Key Takeaways

- Big O measures growth, not actual time.
- Time complexity measures operations performed.
- Space complexity measures extra memory used.
- Lower complexity generally scales better.
- Always analyze both time and space in interviews.