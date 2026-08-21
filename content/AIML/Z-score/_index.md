+++
date = '2026-08-21T17:37:03+07:00'
draft = false
title = 'Z Score'
+++

Chuẩn hóa dữ liệu theo từng cột

## 1. Khái niệm z-score

Chuẩn hoá z-core (hay điểm chuẩn hoá) là phương pháp chuyển đổi các giá trị dữ liệu sao cho tập dữ liệu có giá trị trung bình bằng 0 và độ lệch chuẩn bằng 1. Kỹ thuật này giúp loại bỏ sự khác biệt về đơn vị đo lường và đưa các biến về chung một thang đo. [[1](https://zim.vn/z-score), [2](https://scholarhub.vn/topic/z-score)]

## 2. Công thức tính:

Công thức tính cho một giá trị x bất kì:

$$
z = \frac{x - μ}{σ}
$$

Trong đó:

* **x: Giá trị dữ liệu cần chuẩn hóa.**
* **μ: Giá trị trung bình của tập dữ liệu.**
* **σ: Độ lệch chuẩn của tập dữ liệu.**

### Ý nghĩa của giá trị Z-score

* **z = 0** **: Giá trị bằng đúng mức trung bình.**
* **z > 0** **: Giá trị lớn hơn mức trung bình.**
* **z < 0** **: Giá trị nhỏ hơn mức trung bình.**
* **Số nguyên của z biểu thị khoảng cách từ điểm dữ liệu đó đến giá trị trung bình tính theo số lần độ lệch chuẩn.**

## 3. Code python numpy

> [!TIP] Chuẩn hóa dữ liệu theo từng cột

> Ta tính trung bình và độ lệch chuẩn theo axis=0 để có một giá trị cho mỗi cột, sau đó
> dùng broadcasting để áp công thức lên toàn bộ ma trận chỉ trong một dòng lệnh.


```Python
data = np.array([[1, 2],
                 [3, 4],
                 [5, 6]])
print(data)
mean = data.mean(axis = 0)
print("mean:", mean)
std = data.std(axis = 0)
print("std:", std)
out = (data - mean) / std
print("out:", out)
```

Output

```Shell
[[1 2]
 [3 4]
 [5 6]]
mean: [3. 4.]
std: [1.63299316 1.63299316]
out: [[-1.22474487 -1.22474487]
 [ 0.          0.        ]
 [ 1.22474487  1.22474487]]
```
