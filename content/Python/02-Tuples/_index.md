+++
date = '2026-05-07T11:57:24+07:00'
draft = false
title = '02-Tuples'
weight = 3
+++

## 1. Overview

> [!IMPORTANT]
> - A Tuple is rather similar to a list, but is defined using round brackets, ().
> - Tuples can contain multiple elements, and the elements may not share the same type. The key difference is that tuples are `immutable`, so that once a tuple is created it cannot subsequently be changed. `(It can be extended - but this is effectively the creation of a new, larger tuple!)`.
> - As a lists, the indivisual elements of a tuple can be accessed using `[index]` after the tuple name.

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> a = (1, 2, 3, 'x', (1, 2, 3), [5, 6, 7])
>>> print(a)
(1, 2, 3, 'x', (1, 2, 3), [5, 6, 7])
>>> type(a)
<class 'tuple'>
>>> 
```
{{% /notice %}}

## 2. Convert to list and vice versa

> [!NOTE]
> A tuple can be converted into a list and vice versa

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> a = [3, 4, 5]
>>> type(a)
<class 'list'>
>>> b = (6, 7, 8)
>>> type(b)
<class 'tuple'>
>>> 
>>> ta = tuple(a)
>>> print(ta)
(3, 4, 5)
>>> type(ta)
<class 'tuple'>
>>> 
>>> lb = list(b)
>>> print(b)
(6, 7, 8)
>>> print(lb)
[6, 7, 8]
>>> type(lb)
<class 'list'>
```
{{% /notice %}}