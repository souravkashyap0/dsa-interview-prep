# 007 - Valid Parentheses

## Problem Statement

Given a string containing only:

```txt
(
)
[
]
{
}
```

Determine whether the input string is valid.

A string is valid if:

1. Every opening bracket has a matching closing bracket.
2. Brackets are closed in the correct order.

Return:

```txt
true  -> valid
false -> invalid
```

---

## Examples

### Example 1

Input:

```txt
()
```

Output:

```txt
true
```

---

### Example 2

Input:

```txt
()[]{}
```

Output:

```txt
true
```

---

### Example 3

Input:

```txt
(]
```

Output:

```txt
false
```

Reason:

```txt
( expects )
but found ]
```

---

### Example 4

Input:

```txt
([)]
```

Output:

```txt
false
```

Reason:

```txt
Open (
Open [

Most recent opening bracket is [

But found )
```

---

### Example 5

Input:

```txt
{[]}
```

Output:

```txt
true
```

---

## Observations

### Observation 1

Every opening bracket must be closed by the correct closing bracket.

```txt
( -> )
[ -> ]
{ -> }
```

---

### Observation 2

The most recently opened bracket must be closed first.

Example:

```txt
([])
```

Process:

```txt
Open (
Open [

Close ]
Close )
```

Valid.

---

### Observation 3

When a closing bracket appears, it must match the bracket currently on top.

Example:

```txt
([)]
```

Process:

```txt
Open (
Open [

Found )
```

Top:

```txt
[
```

Expected:

```txt
]
```

Mismatch.

Return:

```txt
false
```

---

### Observation 4

At the end of processing, all opening brackets must be closed.

Example:

```txt
(
```

Process:

```txt
Push (
```

End of string.

Still waiting to be closed.

Return:

```txt
false
```

---

## Pattern

Stack

---

## Data Structure Used

Stack

Implemented using:

```js
let stack = [];
```

---

## Why Stack?

Stack follows:

```txt
LIFO
Last In First Out
```

Brackets behave the same way.

Example:

```txt
([])
```

Process:

```txt
Open (
Open [

Close ]
Close )
```

The most recently opened bracket:

```txt
[
```

must close first.

This is exactly Stack behavior.

---

## Problem Solving Journey

### Step 1

Create a stack.

```js
let stack = [];
```

---

### Step 2

Loop through every character.

```js
for(let i = 0; i < s.length; i++)
```

---

### Step 3

If opening bracket:

```txt
(
[
{
```

Push into stack.

---

### Step 4

If closing bracket:

```txt
)
]
}
```

Check:

#### Case 1

Stack is empty.

Example:

```txt
)
```

No matching opening bracket exists.

Return:

```txt
false
```

---

#### Case 2

Pop top element.

```js
let top = stack.pop();
```

---

#### Case 3

Verify matching pair.

Examples:

```txt
( -> )
[ -> ]
{ -> }
```

If mismatch:

```txt
false
```

---

### Step 5

After loop finishes:

If stack is empty:

```txt
true
```

Otherwise:

```txt
false
```

---

## Dry Run

Input:

```txt
([])
```

Initial:

```txt
stack = []
```

Read:

```txt
(
```

Push.

```txt
stack = ['(']
```

---

Read:

```txt
[
```

Push.

```txt
stack = ['(', '[']
```

---

Read:

```txt
]
```

Pop:

```txt
[
```

Valid match.

```txt
stack = ['(']
```

---

Read:

```txt
)
```

Pop:

```txt
(
```

Valid match.

```txt
stack = []
```

---

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

Reason:

```txt
Nothing to validate.
```

---

### Single Opening Bracket

Input:

```txt
(
```

Output:

```txt
false
```

---

### Single Closing Bracket

Input:

```txt
)
```

Output:

```txt
false
```

---

### Incorrect Order

Input:

```txt
([)]
```

Output:

```txt
false
```

---

## Complexity Analysis

### Time Complexity

Loop visits each character once.

```txt
O(n)
```

---

### Why?

Each bracket is:

```txt
Pushed once
Popped once
```

Maximum work per character:

```txt
O(1)
```

Total:

```txt
O(n)
```

---

### Space Complexity

Worst case:

```txt
((((((((
```

Every bracket gets pushed.

Stack size:

```txt
n
```

Therefore:

```txt
O(n)
```

---

## Can We Optimize?

### Time

Current:

```txt
O(n)
```

Optimal.

Every character must be examined at least once.

Cannot do better.

---

### Space

Current:

```txt
O(n)
```

Optimal.

Example:

```txt
((((((((
```

We must remember all unclosed brackets.

Therefore:

```txt
O(n)
```

is required.

---

## Interview Answer

### Why Stack?

Because the most recently opened bracket must be closed first.

This is:

```txt
LIFO
Last In First Out
```

which is exactly Stack behavior.

---

### Why return stack.length === 0?

The stack stores brackets waiting to be closed.

If:

```txt
stack.length === 0
```

every opening bracket found a matching closing bracket.

If stack still contains elements:

```txt
Some opening brackets were never closed.
```

Therefore the string is invalid.

---

## Recognition Clues

Think Stack when:

* Matching brackets
* Nested structures
* Balanced symbols
* Undo operations
* Most recent item matters

---

## Learning

This problem introduces:

```txt
Stack
LIFO
push()
pop()
peek()
```

and is one of the most common interview questions used to teach Stack fundamentals.
