## Problem Solving Journey

### Step 1: Understand the Problem

Input:

```txt
["eat","tea","tan","ate","nat","bat"]
```

Output:

```txt
[
 ["eat","tea","ate"],
 ["tan","nat"],
 ["bat"]
]
```

Observation:

Words that are anagrams must end up in the same group.

---

### Step 2: Identify What Anagrams Have in Common

Consider:

```txt
eat
tea
ate
```

Sort each word:

```txt
eat -> aet
tea -> aet
ate -> aet
```

All anagrams generate the same sorted representation.

This becomes the key insight.

---

### Step 3: Choose a Data Structure

Need:

```txt
key -> list of matching words
```

Example:

```txt
aet -> ["eat","tea","ate"]
ant -> ["tan","nat"]
```

A Map is a natural fit.

---

### Step 4: Design the Key

Question:

How can different anagrams produce the same key?

Answer:

Use the sorted version of the word.

Example:

```txt
eat -> aet
tea -> aet
ate -> aet
```

Key:

```txt
aet
```

---

### Step 5: Build Groups

For every word:

1. Generate sorted key.
2. If key does not exist:

   * Create new group.
3. If key exists:

   * Add word to existing group.

Example:

```txt
aet -> ["eat"]

aet -> ["eat","tea"]

aet -> ["eat","tea","ate"]
```

---

### Step 6: Generate Result

Map contains:

```txt
aet -> ["eat","tea","ate"]
ant -> ["tan","nat"]
abt -> ["bat"]
```

The problem only wants the grouped arrays.

Return all Map values.

---

### Key Learning

When a problem requires grouping similar items, think:

```txt
Can I transform each item into a common key?
```

If yes:

```txt
HashMap
Key -> transformed representation
Value -> grouped items
```

This is a common interview pattern.
