+++
date = '2026-05-05T14:27:38+07:00'
draft = false
title = '01-Lists'
weight = 3
+++


## Một số chú ý về Lists trong Python

### 1. List có phải là array không?

- Trước đây mình hay cho rằng `list` trong Python chính là `array`, nhưng thực ra không phải như vậy.

- Các phần tử trong `list` có kiểu dữ liệu `data type` có thể không giống nhau.

```c
>>> a = [3.2, 'hello', [4, 7, 17.1]]
>>> print(a)
[3.2, 'hello', [4, 7, 17.1]]
>>> type(a)
<class 'list'>
>>> 
```

### 2. Copy một list

```c
>>> a = [1, 2, 3]
>>> b = a
>>> print(a, b)
[1, 2, 3] [1, 2, 3]
>>> b.sort(reverse = True)
>>> print(a, b)
[3, 2, 1] [3, 2, 1]
>>> 
```

- Thật thú vị, gán biến b = a, thì Python không clone data ra mà trỏ luôn vùng nhớ của a cho b.

- Sau khi search google thì mình mới biết đến `shallow copy` và `deep copy`

#### 2.1 Shallow copy

```c
>>> a = [1, 2, 3]
>>> b = a.copy()
>>> print(a, b)
[1, 2, 3] [1, 2, 3]
>>> b.sort(reverse = True)
>>> print(a, b)
[1, 2, 3] [3, 2, 1]
>>> 
```

> Chỉ đơn giản là dùng hàm `copy` để clone data
> Cách khác là dùng `slicing` để copy data

```c
>>> c = a[0:1]
>>> print(a, c)
[1, 2, 3] [1]
>>> a.sort(reverse = True)
>>> print(a, c)
[3, 2, 1] [1]
>>> 
```

#### 2.2 Deep copy

> Dùng cho `nested lists` để chắc chắc rằng tất cả các phần tử trong các đối tượng bên trong list đều được copy và độc lập

```c
>>> a = [1, 2, 3, [5, 6, 7], [11, 12, 15]]
>>> print(a)
[1, 2, 3, [5, 6, 7], [11, 12, 15]]
>>> import copy
>>> deep_copy = copy.deepcopy(a)
>>> print(deep_copy)
[1, 2, 3, [5, 6, 7], [11, 12, 15]]
>>> a[1] = 100
>>> print(a)
[1, 100, 3, [5, 6, 7], [11, 12, 15]]
>>> print(deep_copy)
[1, 2, 3, [5, 6, 7], [11, 12, 15]]
>>> 
```

