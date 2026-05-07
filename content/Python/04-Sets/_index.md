+++
date = '2026-05-07T18:30:25+07:00'
draft = false
title = '04 Sets'
weight = 4
+++

## 1. Overview

- Set: is an unordered collection of unique objects.
- A set can be created from a tuple or list

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> a = [3, 4, 5]
>>> s = set(a)
>>> print(s)
{3, 4, 5}
>>> type(s)
<class 'set'>
```
{{% /notice %}}

## 2. Some notes

### 2.1 Duplicates

> [!IMPORTANT]
> Duplicates are ignored

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> a = [3, 4, 5]
>>> s = set(a)
>>> print(s)
{3, 4, 5}
>>> type(s)
<class 'set'>
>>> 
>>> a = [3, 3, 5]
>>> s = set(a)
>>> print(s)
{3, 5}
>>> 
```
{{% /notice %}}

### 2.2 The `|` operator and the `&` operator

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> a = set([3, 4, 5])
>>> b = set([4, 5, 6])
>>> print(a)
{3, 4, 5}
>>> print(b)
{4, 5, 6}
>>> print(a | b)
{3, 4, 5, 6}
>>> print(a & b)
{4, 5}
>>> 
```
{{% /notice %}}

### 2.3 The `-` operator and the `^` operator

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> print(a)
{3, 4, 5}
>>> print(b)
{4, 5, 6}
>>> print(b - a)
{6}
>>> print(b ^ a)
{3, 6}
>>> 
```
{{% /notice %}}
