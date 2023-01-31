---
title: 'Searching Algorithms in AI'
description: 'A summary from my lecture in Artificial Intelligence'
dateString: 30 Jan 2023 | 📖 10 minute read
draft: false
tags: []
weight: 101
cover:
  image: '/blog/ai-searching/cover.jpg'
---

I'm currently enrolled in the Artificial Intelligence course at Allegheny College. Everyday, I learn something new that involves things that I have worked with before; today was no different. Today's lesson was on searching algorithms in AI. Now where have I seen that before? Aha! My CS 101 course on data abstraction covered sorting algorithms in Python. _Converting this knowledge to AI couldn't be **too** difficult, right?_ I thought to myself. As it turns out, there's a lot more to searching algorithms in AI than there are in regular programming.

## Agents That Plan Ahead

We learned that in order to solve problems via search, we have to build goal-based agents that can plan ahead to solve problems. These are called **planning agents**. Planning agents:

- Ask "**what if**" questions.
- Makes decisions based on the (hypothesized) consequences if its actions.
- Must have a **model** of **how the world evolves** in response to its actions.
- Must **formulate a goal** (test).
- Consider how the world WOULD BE.

These types of agents can be used to solve **search problems**.

## Search Problems

A search problem consists of four essential pieces:

- A state space
- A successor function (with actions, costs, etc.)
- A start state and a goal test
- A solution which is a sequence of actions (a plan) which transforms the start state to a goal state.

In order to visualize a search problem, we use something known as a **Search Tree**. A search tree is a "what if" tree of plans and their outcomes.

![Search Tree](/blog/ai-searching/search-tree-1.jpg)

Each search tree has a root node, which is the **start state** for the search problem. In this case, the root node is `7`. Search trees also contain children which correspond to successor functions. In this case, the children of `7` are `5` and `12`. Further, nodes in a search tree show states, but correspond to PLANS that achieve those states. For most problems, I learned, we can never build the whole tree.

## General-purpose Search Methods

There are two general-purpose search methods that I will go over in class: **Uninformed** and **informed** algorithms. I only went over a couple uninformed algorithms in the lecture today.

## Uninformed Search Algorithms

An uninformed search algorithm is a search algorithm which explores the search space without having any information about the problem other than its definition. There are four uninformed algorithms that will be covered:

- Breadth-first search
- Depth-first search
- Depth limited search
- Iterative deepening search

In order to give context to the definitions of each algorithm, I need to define one term: **fringe**. A fringe is a data structure used to store all of the possible states (nodes) that you can go to from the current state.

### Breadth-First Search

Breadth-First Search (BFS) is an AI algorithm used to solve search problems by exploring all the nearest neighbor nodes first before moving on to the next level. It visits all nodes at the current depth level before moving on to the next level, searching for the solution in a "breadth-first" manner. BFS uses a queue to store nodes to visit and ensures that it visits all neighbors before moving on to the next level. BFS is guaranteed to find the optimal solution in an unweighted graph, but its time complexity can be large for large graphs.

### Depth-First Search

Depth-First Search (DFS) is another AI algorithm used to solve search problems. Instead of visiting all neighbor nodes at the current level before moving on, DFS visits one neighbor node and continues to traverse down that path as deep as possible before backtracking and visiting the next neighbor. DFS uses a stack to store nodes to visit and prioritizes visiting deeper levels of the graph. DFS can be faster than BFS for some problems, but it does not necessarily guarantee finding the optimal solution in all cases, especially in graphs with cycles.

### Depth Limited Search

Depth Limited Search (DLS) is an AI search algorithm that is a variant of DFS that limits the search to a certain depth. It sets a maximum depth level, beyond which it will not search. This can help prevent the algorithm from getting stuck in infinite loops in certain types of graphs and can also control the time and space complexity. DLS is useful for finding solutions that are closer to the root node, but it may not find the optimal solution if it is beyond the set depth limit. The depth limit can be increased until the optimal solution is found, but this may result in increased time complexity.

### Iterative Deepening Search

Iterative Deepening Search (IDS) is an AI algorithm that combines aspects of BFS and DFS by using iterative deepening depth-first search. It starts with a small depth limit, then repeatedly increases the limit in increments and performs DFS with the updated limit until a solution is found. IDS balances the completeness of BFS with the speed of DFS by only visiting nodes at deeper levels as necessary. It is complete and optimal, like BFS, but has a time complexity closer to DFS.

## Conclusion

In conclusion, the AI course at Allegheny College introduced me to the concept of goal-based agents, or planning agents, and how they can be used to solve search problems. I learned that a search problem consists of four essential elements: state space, successor function, start state, and goal test. To visualize a search problem, we use a Search Tree. The class also introduced me to two general-purpose search methods: Uninformed and informed algorithms. Among the uninformed algorithms discussed were Breadth-First Search (BFS), Depth-First Search (DFS), Depth Limited Search (DLS), and Iterative Deepening Search (IDS). BFS is guaranteed to find the optimal solution in an unweighted graph, but its time complexity can be large. DFS can be faster for some problems, but does not guarantee finding the optimal solution. DLS limits the search to a certain depth and is useful for finding solutions closer to the root node, but may not find the optimal solution. IDS balances the completeness of BFS with the speed of DFS and is complete and optimal with a time complexity closer to DFS.
