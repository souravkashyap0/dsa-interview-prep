# 008 - Best Time to Buy and Sell Stock

## Problem Statement

You are given an array:

```txt
prices[i]
```

where:

```txt
prices[i] = stock price on day i
```

You may:

```txt
Buy once
Sell once
```

Return:

```txt
Maximum profit possible
```

Rules:

```txt
Buy before Sell

buyDay < sellDay
```

If no profit is possible:

```txt
return 0
```

---

## Examples

### Example 1

Input:

```txt
[7,1,5,3,6,4]
```

Output:

```txt
5
```

Explanation:

```txt
Buy at 1
Sell at 6

Profit = 5
```

---

### Example 2

Input:

```txt
[7,6,4,3,1]
```

Output:

```txt
0
```

Explanation:

```txt
Prices always decrease.

No profitable transaction exists.
```

---

## Input and Output

### Input

```txt
Array of stock prices
```

Example:

```txt
[7,1,5,3,6,4]
```

---

### Output

```txt
Maximum profit possible
```

Example:

```txt
5
```

---

## Observations

### Observation 1

Sell day must come after buy day.

```txt
buyDay < sellDay
```

Valid:

```txt
Buy at 1
Sell at 6
```

Invalid:

```txt
Buy at 6
Sell at 1
```

---

### Observation 2

Profit formula:

```txt
Profit = Sell Price - Buy Price
```

Example:

```txt
Buy = 1
Sell = 6

Profit = 5
```

---

### Observation 3

We only need the cheapest price seen so far.

Example:

```txt
[7,1,5,3,6,4]
```

Cheapest seen:

```txt
7
↓
1
↓
1
↓
1
↓
1
↓
1
```

---

### Observation 4

For every day:

```txt
Assume we sell today
```

Calculate:

```txt
Current Profit
=
Current Price - Cheapest Price So Far
```

---

### Observation 5

Keep track of:

```txt
Best profit seen so far
```

Example:

```txt
0
↓
4
↓
5
```

---

## Pattern

Running Minimum

Also commonly classified as:

```txt
Greedy
```

---

## Data Structure Used

Array

No extra data structure required.

Only:

```txt
minPrice
maxProfit
```

variables.

---

## Brute Force Approach

### Idea

Try every possible:

```txt
Buy Day
Sell Day
```

combination.

---

### Example

```txt
[7,1,5,3,6,4]
```

Buy at:

```txt
7
```

Try selling at:

```txt
1
5
3
6
4
```

Then:

```txt
Buy at 1
```

Try:

```txt
5
3
6
4
```

and so on.

---

### Complexity

Time:

```txt
O(n²)
```

because of nested loops.

Space:

```txt
O(1)
```

---

## Optimized Approach

### Key Insight

While traversing the array:

We only need:

```txt
1. Cheapest price seen so far

2. Maximum profit seen so far
```

---

### Variables

```txt
minPrice
maxProfit
```

---

### Initialization

```txt
minPrice = prices[0]
maxProfit = 0
```

---

### Logic

For each price:

#### Case 1

Found a cheaper price.

```txt
currentPrice < minPrice
```

Update:

```txt
minPrice = currentPrice
```

---

#### Case 2

Otherwise:

Calculate:

```txt
profit = currentPrice - minPrice
```

If:

```txt
profit > maxProfit
```

Update:

```txt
maxProfit = profit
```

---

## Problem Solving Journey

### Step 1

Store the first price as minimum.

```txt
minPrice = prices[0]
```

---

### Step 2

Store current best profit.

```txt
maxProfit = 0
```

---

### Step 3

Traverse remaining prices.

---

### Step 4

If current price is lower:

```txt
Update minPrice
```

---

### Step 5

Otherwise calculate:

```txt
profit = currentPrice - minPrice
```

---

### Step 6

Update:

```txt
maxProfit
```

if a better profit is found.

---

### Step 7

Return:

```txt
maxProfit
```

---

## Dry Run

Input:

```txt
[7,1,5,3,6,4]
```

Initial:

```txt
minPrice = 7
maxProfit = 0
```

---

Current:

```txt
1
```

```txt
1 < 7
```

Update:

```txt
minPrice = 1
```

---

Current:

```txt
5
```

Profit:

```txt
5 - 1 = 4
```

Update:

```txt
maxProfit = 4
```

---

Current:

```txt
3
```

Profit:

```txt
3 - 1 = 2
```

Ignore.

---

Current:

```txt
6
```

Profit:

```txt
6 - 1 = 5
```

Update:

```txt
maxProfit = 5
```

---

Current:

```txt
4
```

Profit:

```txt
4 - 1 = 3
```

Ignore.

---

Return:

```txt
5
```

---

## Edge Cases

### Single Day

Input:

```txt
[5]
```

Output:

```txt
0
```

Cannot sell after buying.

---

### Always Decreasing

Input:

```txt
[7,6,4,3,1]
```

Output:

```txt
0
```

No profit possible.

---

### Always Increasing

Input:

```txt
[1,2,3,4,5]
```

Output:

```txt
4
```

Buy at:

```txt
1
```

Sell at:

```txt
5
```

---

## Complexity Analysis

### Time Complexity

Single traversal.

```txt
O(n)
```

---

### Why?

Each price is visited once.

No nested loops.

---

### Space Complexity

```txt
O(1)
```

---

### Why?

Only two variables are used:

```txt
minPrice
maxProfit
```

Memory does not grow with input size.

---

## Can We Optimize Further?

### Time

Current:

```txt
O(n)
```

Optimal.

Every price must be examined at least once.

---

### Space

Current:

```txt
O(1)
```

Optimal.

Only constant extra memory is used.

---

## Interview Answer

### Why O(n)?

We traverse the array once while maintaining:

```txt
Minimum price so far
Maximum profit so far
```

---

### Why O(1) Space?

We only store:

```txt
minPrice
maxProfit
```

Regardless of input size.

---

## Recognition Clues

Think Running Minimum / Greedy when:

* Maximum profit
* Maximum difference
* Buy then sell
* Best answer so far
* Track minimum value seen so far

---

## Learning

This problem teaches:

```txt
Running Minimum
Greedy Thinking
Single Pass Optimization
```

Instead of checking every pair, we continuously track the cheapest buying opportunity and the best profit seen so far.
