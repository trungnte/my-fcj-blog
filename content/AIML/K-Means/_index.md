+++
date = '2026-06-10T18:36:41+07:00'
draft = false
title = 'K-Means'
weight = 1
+++


## 1. Clustering là gì?

**Clustering trong K-Means** là **thuật toán phân cụm không giám sát (Unsupervised Learning) phổ biến nhất trong Trí tuệ Nhân tạo (AI)**. Thuật toán này tự động nhóm các điểm dữ liệu chưa được gán nhãn thành k cụm độc lập dựa trên các đặc điểm tương đồng. 

## 2. K-Means hoạt động như thế nào?

K-Means hoạt động theo một vòng lặp gồm 4 bước:

- Step 1: Chọn K ngẫu nhiên (sẽ có K cụm, hay K clusters) làm tâm cụm ban đầu (Centroid)
- Step 2: Tính khoảng cách từ mọi điểm dữ liệu đến K centroid. Sau đó gán điểm data đó vào cụm có tâm gần nó nhất.
- Step 3: Cập nhật centroid. Tính trung bình vị trí tất cả các điểm trong từng cụm. Vị trí trung bình này trở thành tâm centroid mới của cụm.
- Step 4: lặp lại các bước 2 và 3 cho đến khi tâm của các cụm không còn di chuyển.

## 3. Công thức Euclid tính khoảng cách giữa 2 điểm:

Khoảng cách giữa hai điểm A và B được tính bằng công thức:


$$
d(A, B) = \sqrt{\sum_{i=1}^{n}(A_{i} - B_{i})^{2}}
$$


Ví dụ n = 2, không gian 2 chiều

Toạ độ A(1, 3) và B(4, 7)

$$
d(A,B) = \sqrt{(1 - 3)^{2} + (4 - 7)^{2}} = \sqrt{25} = 5
$$

## 3. Phương pháp chọn số K tối ưu

Vì K là tham số phải nhập vào trước, có thể sử dụng phương pháp **Elbow (Khuỷu tay)** để tìm giá trị tối ưu. Bằng cách vẽ đồ thị **WCSS** (Tổng bình phương khoảng cách giữa các điểm và tâm cụm) theo các giá trị K khác nhau, điểm mà đồ thị bắt đầu uốn cong (giống hình khuỷu tay) chính là số cụm K tốt nhất cần chọn.

### 3.1 Nguyên lý phương pháp Elbow

**WCSS là gì?** (Within-Cluster Sum of Squares) hay Tổng bình phương khoảng cách trong cụm, là tổng khoảng cách bình phương từ mỗi điểm dữ liệu đến tâm cụm (centroid) gần nhất. WCSS càng nhỏ, các điểm trong cụm càng gắn kết chặt chẽ.

**Quy luật:** Khi số lượng cụm K tăng lên, các cụm sẽ nhỏ hơn và khoảng cách đến tâm cụm giảm dần. Khi K bằng số lượng điểm dữ liệu trong tập, WCSS sẽ bằng 0

**Điểm khuỷu tay (Elbow Point):** Ban đầu, WCSS giảm rất nhanh khi K tăng. Tuy nhiên, đến một giá trị K nhất định, mức độ giảm này sẽ chậm lại đáng kể và đồ thị bắt đầu đi ngang. Điểm uốn cong trên đồ thị trông giống như khuỷu tay chính là điểm K tối ưu

### 3.2 Các bước hiện thực Elbow

- Step 1: Chạy thuật toán K-Means với nhiều giá trị K khác nhau (ví dụ: K = 1, 2, 3, 4, ..., 10).
- Step 2: Tính toán giá trị WCSS (hoặc quán tính - inertia) cho từng mô hình.
- Step 3: Vẽ đồ thị đường thẳng với trục hoành là số cụm K và trục tung là giá trị WCSS.
- Step 4: Xác định điểm "khuỷu tay" trên đồ thị—điểm mà tại đó đường cong bắt đầu phẳng ra. Số cụm tại điểm này được chọn là số cụm hợp lý nhất.

### 3.3 Visualization

![Elbow.png](/images/AIML/K-Means/elbow.png)

![Link visualization](/aiml-assets/k-means/elbow.html)

