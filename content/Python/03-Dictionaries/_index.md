+++
date = '2026-05-07T18:29:22+07:00'
draft = false
title = '03-Dictionaries'
weight = 3
+++

## 1. Overview

- Dictionaries provide a mechanism for storing data labelled with a keyword or other information.
- Use curly brackets to create a dictionary, and associate each piece of data with a label.

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> a = {'mass': 17.3, 'length': 0.7}
>>> print(a)
{'mass': 17.3, 'length': 0.7}
>>> type(a)
<class 'dict'>
```
{{% /notice %}}

Or another syntax

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> b = dict(name='Trung', age=38)
>>> print(b)
{'name': 'Trung', 'age': 38}
>>> type(b)
<class 'dict'>
```
{{% /notice %}}

## 2. Some methods particular to dictionaries

- `a.keys()`

- `a.values()`

- `a.items()`

{{% notice color="green" style="code" title="Shell" icon="fa-solid fa-terminal" %}}
```python
>>> a = dict(name='Trung', age=38, hair='black')
>>> print(a)
{'name': 'Trung', 'age': 38, 'hair': 'black'}
>>> a.keys()
dict_keys(['name', 'age', 'hair'])
>>> a.values()
dict_values(['Trung', 38, 'black'])
>>> a.items()
dict_items([('name', 'Trung'), ('age', 38), ('hair', 'black')])
>>> 
>>> len(a)
3
>>> a['eyes']='black'
>>> len(a)
4
>>> print(a)
{'name': 'Trung', 'age': 38, 'hair': 'black', 'eyes': 'black'}
>>> print(a.pop('eyes'))
black
```
{{% /notice %}}
