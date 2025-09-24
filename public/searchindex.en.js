var relearn_searchindex = [
  {
    "breadcrumb": "My First Cloud Journey",
    "content": "Example content from Admin of FCJ",
    "description": "Example content from Admin of FCJ",
    "tags": [],
    "title": "Example Content",
    "uri": "/example-content/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs \u003e Update IAM Role",
    "content": "Để các EC2 instance của chúng ta có thể gửi session log tới S3 bucket , chúng ta sẽ cần cập nhật IAM Role đã gán vào EC2 instance bằng cách thêm vào policy cho phép quyền truy cập vào S3.\nCập nhật IAM Role Truy cập vào giao diện quản trị dịch vụ IAM Click Roles. Tại ô tìm kiếm , điền SSM. Click vào role SSM-Role. Click Attach policies. Tại ô Search điền S3. Click chọn policy AmazonS3FullAccess. Click Attach policy. Tip Trong thực tế chúng ta sẽ cấp quyền chặt chẽ hơn tới S3 bucket chỉ định. Trong khuôn khổ bài lab này chúng ta sử dụng policy AmazonS3FullAccess cho tiện dụng.\nTiếp theo chúng ta sẽ tiến hành tạo S3 bucket để lưu trữ session logs.",
    "description": "Để các EC2 instance của chúng ta có thể gửi session log tới S3 bucket , chúng ta sẽ cần cập nhật IAM Role đã gán vào EC2 instance bằng cách thêm vào policy cho phép quyền truy cập vào S3.\nCập nhật IAM Role Truy cập vào giao diện quản trị dịch vụ IAM Click Roles. Tại ô tìm kiếm , điền SSM. Click vào role SSM-Role.",
    "tags": [],
    "title": "Cập nhật IAM Role",
    "uri": "/example-content/4-s3log/4.1-updateiamrole/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2",
    "content": "Trong bước này, chúng ta sẽ cần tạo một VPC có 2 subnet public / private. Sau đó tạo 1 EC2 Instance Linux nằm trong public subnet, 1 EC2 Instance Windows nằm trong private subnet.\nTổng quan kiến trúc sau khi các bạn hoàn tất bước này sẽ như sau:\nĐể tìm hiểu cách tạo các EC2 instance và VPC với public/private subnet các bạn có thể tham khảo bài lab :\nGiới thiệu về Amazon EC2 Làm việc với Amazon VPC Nội dung Tạo VPC Tạo Public subnet Tạo Private subnet Tạo security group Tạo máy chủ Linux public Tạo máy chủ Windows private",
    "description": "Trong bước này, chúng ta sẽ cần tạo một VPC có 2 subnet public / private. Sau đó tạo 1 EC2 Instance Linux nằm trong public subnet, 1 EC2 Instance Windows nằm trong private subnet.\nTổng quan kiến trúc sau khi các bạn hoàn tất bước này sẽ như sau:\nĐể tìm hiểu cách tạo các EC2 instance và VPC với public/private subnet các bạn có thể tham khảo bài lab :",
    "tags": [],
    "title": "Chuẩn bị VPC và EC2",
    "uri": "/example-content/2-prerequiste/2.1-createec2/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers",
    "content": "Go to EC2 service management console. Click on Public Linux Instance. Click Actions. Click Security. Click Modify IAM role. At the Modify IAM role page. Click to select SSM-Role. Click Save. Note You will need to wait about 10 minutes before performing the next step. This time our EC2 instance will automatically register with the Session Manager.\nGo to the AWS Systems Manager service management console Drag the left menu slider down. Click Session Manager. Click Start Session. Then select Public Linux Instance and click Start session to access the instance. Terminal will appear on the browser. Testing with the command sudo tcpdump -nn port 22 and sudo tcpdump we will see no SSH traffic but only HTTPS traffic. Note Above, we have created a connection to the public instance without opening SSH port 22, for better security, avoiding any attack to the SSH port.\nOne disadvantage of the above method is that we have to open the Security Group outbound at port 443 to the internet. Since it’s a public instance, it probably won’t be a problem, but if you want extra security, you can block port 443 to the internet and still use the Session Manager. We will go through this in the private instance section below.\nYou can click terminate to end the currently connected session before proceeding to the next step.",
    "description": "Go to EC2 service management console. Click on Public Linux Instance. Click Actions. Click Security. Click Modify IAM role. At the Modify IAM role page. Click to select SSM-Role. Click Save. Note You will need to wait about 10 minutes before performing the next step. This time our EC2 instance will automatically register with the Session Manager.",
    "tags": [],
    "title": "Connect to Public Instance",
    "uri": "/example-content/3-accessibilitytoinstances/3.1-public-instance/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Create VPC Endpoint",
    "content": "Create VPC Endpoint SSM Go to VPC service management console Click Endpoints. Click Create endpoint. At the Create endpoint page. In the Name tag field, enter SSM. In the Service Category section, select AWS Services. In the Service Name section, In the Service category section, select: AWS services In the Service Name section enter: SSM then select Service Name: com.amazonaws.ap-southeast-1.ssm. In the Service Name column, click com.amazonaws.ap-southeast-1.ssm. In the VPC section, select Lab VPC. Select the first AZ, then select the Lab Private Subnet subnet. Scroll down. In the Security Group section, select the Security group SG VPC Endpoint that we created earlier. In the Policy section, select Full access. Scroll down. Click Create endpoint. We have created the VPC Interface Endpoint for SSM.",
    "description": "Create VPC Endpoint SSM Go to VPC service management console Click Endpoints. Click Create endpoint. At the Create endpoint page. In the Name tag field, enter SSM. In the Service Category section, select AWS Services. In the Service Name section, In the Service category section, select: AWS services In the Service Name section enter: SSM then select Service Name: com.amazonaws.ap-southeast-1.ssm.",
    "tags": [],
    "title": "Create Endpoint ssm",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.2-createvpcendpoint/3.2.2.1-endpointssm/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2",
    "content": "Create VPC Lab VPC Go to VPC service management console Click Your VPC. Click Create VPC. At the Create VPC page. In the Name tag field, enter Lab VPC. In the IPv4 CIDR field, enter: 10.10.0.0/16. Click Create VPC.",
    "description": "Create VPC Lab VPC Go to VPC service management console Click Your VPC. Click Create VPC. At the Create VPC page. In the Name tag field, enter Lab VPC. In the IPv4 CIDR field, enter: 10.10.0.0/16. Click Create VPC.",
    "tags": [],
    "title": "Create VPC",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.1-createvpc/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance",
    "content": "Enable DNS hostnames on VPC. To create VPC Endpoint we will need to enable DNS hostnames feature on VPC. Go to VPC service management console\nClick Your VPCs.\nSelect Lab VPC.\nClick Actions.\nClick Edit DNS hostnames.\nClick Endpoint, then click Create Endpoint.\nAt the Edit DNS hostnames page. Click to select Enable. Click Save changes.",
    "description": "Enable DNS hostnames on VPC. To create VPC Endpoint we will need to enable DNS hostnames feature on VPC. Go to VPC service management console\nClick Your VPCs.\nSelect Lab VPC.\nClick Actions.\nClick Edit DNS hostnames.\nClick Endpoint, then click Create Endpoint.\nAt the Edit DNS hostnames page. Click to select Enable. Click Save changes.",
    "tags": [],
    "title": "Enable DNS hostnames",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.1-enablevpcdns/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Introduction",
    "content": "Session Manager là một chức năng nằm trong dịch vụ System Manager của AWS, Session Manager cung cấp khả năng quản lý các máy chủ một cách an toàn mà không cần mở port SSH, không cần Bastion Host hoặc quản lý SSH key. Session Manager cũng giúp dễ dàng tuân thủ các chính sách của công ty yêu cầu quyền truy cập có kiểm soát, đảm bảo việc bảo mật nghiêm ngặt và ghi log truy việc truy cập trong khi vẫn cung cấp cho người dùng cuối quyền truy cập đa nền tảng.\nVới việc sử dụng Session Manager, bạn sẽ có được những ưu điểm sau:\nKhông cần phải mở cổng 22 cho giao thức SSH. Có thể cấu hình để kết nối không cần đi ra ngoài internet. Không cần quản lý private key của server để kết nối SSH. Quản lý tập trung được user bằng việc sử dụng AWS IAM. Truy cập tới server một cách dễ dàng và đơn giản bằng một cú click chuột. Thời gian truy cập nhanh chóng hơn các phương thức truyền thống như SSH. Hỗ trợ nhiều hệ điều hành khác nhau như Linux, Windows, MacOS. Log lại được các phiên kết nối và các câu lệnh đã thực thi trong lúc kết nối tới server. Với những ưu điểm trên, bạn có thể sử dụng Session Manager thay vì sử dụng kỹ thuật Bastion host giúp chúng ta tiết kiệm được thời gian và chi phí khi quản lý server Bastion.",
    "description": "Session Manager là một chức năng nằm trong dịch vụ System Manager của AWS, Session Manager cung cấp khả năng quản lý các máy chủ một cách an toàn mà không cần mở port SSH, không cần Bastion Host hoặc quản lý SSH key. Session Manager cũng giúp dễ dàng tuân thủ các chính sách của công ty yêu cầu quyền truy cập có kiểm soát, đảm bảo việc bảo mật nghiêm ngặt và ghi log truy việc truy cập trong khi vẫn cung cấp cho người dùng cuối quyền truy cập đa nền tảng.",
    "tags": [],
    "title": "Giới thiệu",
    "uri": "/example-content/1-introduce/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content",
    "content": "Session Manager is a function within the AWS System Manager service, SSM provides verifiable and secure version management without opening incoming ports, without Bastion Host or SSH key management. Session Manager also makes it easy to comply with corporate policies that require controlled access to instances, strict security practices, and fully auditable logs with instance access details, while still providing end-users with one-click cross-platform access to your managed instances.\nBy using Session Manager, you get the following advantages that traditional methods do not have:\nNo need to open port 22 for SSH protocol, so it is more secure. Can be configured so that the connection does not need to go outside the internet, so it is more secure. No need to manage the server’s private key to connect to SSH. Centralized management of users using AWS IAM. Access to the server easily and simply with one click. Faster access time than traditional methods like SSH Support many different operating systems such as Linux, Windows, MacOS Log the connection sessions and commands executed while connecting to the server. With the above advantages, you can use Session Manager instead of using Bastion host technique to save us time and money when managing Bastion server.",
    "description": "Session Manager is a function within the AWS System Manager service, SSM provides verifiable and secure version management without opening incoming ports, without Bastion Host or SSH key management. Session Manager also makes it easy to comply with corporate policies that require controlled access to instances, strict security practices, and fully auditable logs with instance access details, while still providing end-users with one-click cross-platform access to your managed instances.\nBy using Session Manager, you get the following advantages that traditional methods do not have:",
    "tags": [],
    "title": "Introduction",
    "uri": "/example-content/1-introduce/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Public Instance",
    "content": "Truy cập vào giao diện quản trị của dịch vụ EC2. Click chọn Public Linux Instance. Click Actions. Click Security. Click Modify IAM role. Tại trang Modify IAM role. Click chọn SSM-Role. Click Save. Note Bạn sẽ cần chờ khoảng 10 phút trước khi thực hiện bước tiếp theo. Thời gian này EC2 instance của chúng ta sẽ tự động đăng ký với Session Manager.\nTruy cập vào giao diện quản trị của dịch vụ AWS Systems Manager Kéo thanh trượt menu bên trái xuống dưới. Click Session Manager. Click Start Session. Sau đó chọn Public Linux Instance và click Start session để truy cập vào instance. Terminal sẽ xuất hiện trên trình duyệt. Kiểm tra với câu lệnh sudo tcpdump -nn port 22 và sudo tcpdump chúng ta sẽ thấy không có traffic của SSH mà chỉ có traffic HTTPS. Note Ở trên, chúng ta đã tạo kết nối vào public instance mà không cần mở cổng SSH 22, giúp cho việc bảo mật tốt hơn, tránh mọi sự tấn công tới cổng SSH.\nMột nhược điểm của cách làm trên là ta phải mở Security Group outbound ở cổng 443 ra ngoài internet. Vì là public instance nên có thể sẽ không vấn đề gì nhưng nếu bạn muốn bảo mật hơn nữa, bạn có thể khoá cổng 443 ra ngoài internet mà vẫn sử dụng được Session Manager. Chúng ta sẽ đi qua cách làm này ở phần private instance dưới đây.\nBạn có thể terminate để kết thúc session đang kết nối trước khi qua bước tiếp theo.",
    "description": "Truy cập vào giao diện quản trị của dịch vụ EC2. Click chọn Public Linux Instance. Click Actions. Click Security. Click Modify IAM role. Tại trang Modify IAM role. Click chọn SSM-Role. Click Save. Note Bạn sẽ cần chờ khoảng 10 phút trước khi thực hiện bước tiếp theo. Thời gian này EC2 instance của chúng ta sẽ tự động đăng ký với Session Manager.",
    "tags": [],
    "title": "Kết nối đến máy chủ Public",
    "uri": "/example-content/3-accessibilitytoinstances/3.1-public-instance/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Enable DNS hostnames",
    "content": "Kích hoạt tính năng DNS hostnames trên VPC. Để tạo được VPC Endpoint chúng ta sẽ cần bật tính năng DNS hostnames trên VPC. Truy cập đến giao diện quản trị của dịch vụ VPC\nClick Your VPCs.\nChọn Lab VPC.\nClick Actions.\nClick Edit DNS hostnames.\nClick Endpoint, sau đó click Create Endpoint.\nTại trang Edit DNS hostnames. Click chọn Enable. Click Save changes.",
    "description": "Kích hoạt tính năng DNS hostnames trên VPC. Để tạo được VPC Endpoint chúng ta sẽ cần bật tính năng DNS hostnames trên VPC. Truy cập đến giao diện quản trị của dịch vụ VPC\nClick Your VPCs.\nChọn Lab VPC.\nClick Actions.\nClick Edit DNS hostnames.\nClick Endpoint, sau đó click Create Endpoint.\nTại trang Edit DNS hostnames. Click chọn Enable. Click Save changes.",
    "tags": [],
    "title": "Kích hoạt DNS hostnames",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.1-enablevpcdns/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation",
    "content": "In this step, we will need to create a VPC with 2 public / private subnets. Then create 1 EC2 Instance Linux located in the public subnet, 1 EC2 Instance Windows located in the private subnet.\nThe architecture overview after you complete this step will be as follows:\nTo learn how to create EC2 instances and VPCs with public/private subnets, you can refer to the lab:\nAbout Amazon EC2 Works with Amazon VPC Content Create VPC Create Public Subnet Create Private Subnet Create security group Create public Linux server Create private Windows server",
    "description": "In this step, we will need to create a VPC with 2 public / private subnets. Then create 1 EC2 Instance Linux located in the public subnet, 1 EC2 Instance Windows located in the private subnet.\nThe architecture overview after you complete this step will be as follows:\nTo learn how to create EC2 instances and VPCs with public/private subnets, you can refer to the lab:",
    "tags": [],
    "title": "Preparing VPC and EC2",
    "uri": "/example-content/2-prerequiste/2.1-createec2/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Create VPC Endpoint \u003e Create Endpoint ssm",
    "content": "Tạo VPC Endpoint SSM Truy cập đến giao diện quản trị của dịch vụ VPC Click Endpoints. Click Create endpoint. Tại trang Create endpoint. Tại mục Name tag điền SSM. Tại mục Service Category chọn AWS Services. Tại mục Service Name, Tại mục Service category chọn: AWS services Tại mục Service Name nhập: SSM sau đó chọn Service Name: com.amazonaws.ap-southeast-1.ssm. Tại cột Service Name, click chọn com.amazonaws.ap-southeast-1.ssm. Tại mục VPC, chọn Lab VPC. Chọn AZ đầu tiên, sau đó chọn subnet Lab Private Subnet. Kéo chuột xuống dưới. Tại mục Security Group, chọn Security group SG VPC Endpoint mà chúng ta đã tạo trước đó. Tại mục Policy, chọn Full access Kéo chuột xuống dưới cùng. Click Create endpoint. Chúng ta đã tạo xong VPC Interface Endpoint cho SSM.",
    "description": "Tạo VPC Endpoint SSM Truy cập đến giao diện quản trị của dịch vụ VPC Click Endpoints. Click Create endpoint. Tại trang Create endpoint. Tại mục Name tag điền SSM. Tại mục Service Category chọn AWS Services. Tại mục Service Name, Tại mục Service category chọn: AWS services Tại mục Service Name nhập: SSM sau đó chọn Service Name: com.amazonaws.ap-southeast-1.ssm.",
    "tags": [],
    "title": "Tạo Endpoint ssm",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.2-createvpcendpoint/3.2.2.1-endpointssm/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2 \u003e Create VPC",
    "content": "Tạo VPC Lab VPC Truy cập giao diện quản trị dịch vụ VPC Click Your VPC. Click Create VPC. Tại trang Create VPC. Tại mục Name tag điền Lab VPC. Tại mục IPv4 CIDR điền : 10.10.0.0/16. Click Create VPC.",
    "description": "Tạo VPC Lab VPC Truy cập giao diện quản trị dịch vụ VPC Click Your VPC. Click Create VPC. Tại trang Create VPC. Tại mục Name tag điền Lab VPC. Tại mục IPv4 CIDR điền : 10.10.0.0/16. Click Create VPC.",
    "tags": [],
    "title": "Tạo VPC ",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.1-createvpc/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs",
    "content": "For our EC2 instances to be able to send session logs to the S3 bucket, we will need to update the IAM Role assigned to the EC2 instance by adding a policy that allows access to S3.\nUpdate IAM Role Go to IAM service management console Click Roles. In the search box, enter SSM. Click on the SSM-Role role. Click Attach policies. In the Search box enter S3. Click the policy AmazonS3FullAccess. Click Attach policy. Tip In the production environment, we will grant stricter permissions to the specified S3 bucket. In the framework of this lab, we use the policy AmazonS3FullAccess for convenience.\nNext, we will proceed to create an S3 bucket to store session logs.",
    "description": "For our EC2 instances to be able to send session logs to the S3 bucket, we will need to update the IAM Role assigned to the EC2 instance by adding a policy that allows access to S3.\nUpdate IAM Role Go to IAM service management console Click Roles. In the search box, enter SSM. Click on the SSM-Role role. Click Attach policies.",
    "tags": [],
    "title": "Update IAM Role",
    "uri": "/example-content/4-s3log/4.1-updateiamrole/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation",
    "content": "Info Bạn cần tạo sẵn 1 Linux instance thuộc public subnet và 1 Window instance thuộc private subnet để thực hiện bài thực hành này.\nĐể tìm hiểu cách tạo các EC2 instance và VPC với public/private subnet các bạn có thể tham khảo bài lab :\nGiới thiệu về Amazon EC2 Làm việc với Amazon VPC Để sử dụng System Manager để quản lý window instance nói riêng và các instance nói chung của chúng ta trên AWS, ta cần phải cung cấp quyền cho các instance của chúng ta có thể làm việc với System Manager.Trong phần chuẩn bị này, chúng ta cũng sẽ tiến hành tạo IAM Role để cấp quyền cho các instance có thể làm việc với System Manager.\nNội dung Chuẩn bị VPC và EC2 Instance Tạo IAM Role",
    "description": "Info Bạn cần tạo sẵn 1 Linux instance thuộc public subnet và 1 Window instance thuộc private subnet để thực hiện bài thực hành này.\nĐể tìm hiểu cách tạo các EC2 instance và VPC với public/private subnet các bạn có thể tham khảo bài lab :\nGiới thiệu về Amazon EC2 Làm việc với Amazon VPC Để sử dụng System Manager để quản lý window instance nói riêng và các instance nói chung của chúng ta trên AWS, ta cần phải cung cấp quyền cho các instance của chúng ta có thể làm việc với System Manager.Trong phần chuẩn bị này, chúng ta cũng sẽ tiến hành tạo IAM Role để cấp quyền cho các instance có thể làm việc với System Manager.",
    "tags": [],
    "title": "Các bước chuẩn bị",
    "uri": "/example-content/2-prerequiste/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers",
    "content": "For Windows instance located in private subnet, there is no public IP, no internet gateway so it cannot go out internet.\nWith this type of instance, the traditional way is to use Bastion host technique which is expensive and laborious, but here we will use Session Manager with this type.\nBasically, the private instance still has to open the TCP 443 port to System Manager, but we don’t want to allow connection go out to the internet, but only in its VPC, to enhance our security posture.\nTo do that, we have to include the System Manager endpoint in the VPC, that is, using the VPC interface endpoint:\nVPC interface endpoint is attached to the subnet, so this method can be done not only with private subnet but also with public subnet, meaning that with public subnet, you can completely prohibit TCP 443 go out to the internet.\nContent: Enable DNS hostnames Create VPC Endpoint Connect Private Instance",
    "description": "For Windows instance located in private subnet, there is no public IP, no internet gateway so it cannot go out internet.\nWith this type of instance, the traditional way is to use Bastion host technique which is expensive and laborious, but here we will use Session Manager with this type.\nBasically, the private instance still has to open the TCP 443 port to System Manager, but we don’t want to allow connection go out to the internet, but only in its VPC, to enhance our security posture.\nTo do that, we have to include the System Manager endpoint in the VPC, that is, using the VPC interface endpoint:",
    "tags": [],
    "title": "Connect to Private instance",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Create VPC Endpoint",
    "content": "Create VPC Endpoint SSMMESSAGES Go to VPC service management console Click Endpoints. Click Create endpoint. At the Create endpoint page. In the Name tag field, enter SSMMESSAGES. In the Service Category section, select AWS Services. In the Service Name section, In the Service category select: AWS services In the Service Name field enter: ssmmessages then select Service Name: com.amazonaws.ap-southeast-1.ssmmessages. In the Service Name column, click com.amazonaws.ap-southeast-1.ssmmessages. In the VPC section, select Lab VPC. Select the first AZ, then select the Lab Private Subnet subnet. Scroll down. In the Security Group section, select the Security group SG VPC Endpoint that we created earlier. In the Policy section, select Full access Scroll down. Click Create endpoint. We have created the VPC Interface Endpoint SSMMESSAGES.",
    "description": "Create VPC Endpoint SSMMESSAGES Go to VPC service management console Click Endpoints. Click Create endpoint. At the Create endpoint page. In the Name tag field, enter SSMMESSAGES. In the Service Category section, select AWS Services. In the Service Name section, In the Service category select: AWS services In the Service Name field enter: ssmmessages then select Service Name: com.amazonaws.ap-southeast-1.ssmmessages. In the Service Name column, click com.amazonaws.ap-southeast-1.ssmmessages. In the VPC section, select Lab VPC. Select the first AZ, then select the Lab Private Subnet subnet.",
    "tags": [],
    "title": "Create Endpoint ssmmessages",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.2-createvpcendpoint/3.2.2.2-endpointssmmessages/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation",
    "content": "Create IAM Role In this step, we will proceed to create IAM Role. In this IAM Role, the policy AmazonSSMManagedInstanceCore will be assigned, this is the policy that allows the EC2 server to communicate with the Session Manager.\nGo to IAM service administration interface In the left navigation bar, click Roles. Click Create role. Click AWS service and click EC2. Click Next: Permissions. In the Search box, enter AmazonSSMManagedInstanceCore and press Enter to search for this policy. Click the policy AmazonSSMManagedInstanceCore. Click Next: Tags. Click Next: Review. Name the Role SSM-Role in Role Name Click Create Role . Next, we will make the connection to the EC2 servers we created with Session Manager.",
    "description": "Create IAM Role In this step, we will proceed to create IAM Role. In this IAM Role, the policy AmazonSSMManagedInstanceCore will be assigned, this is the policy that allows the EC2 server to communicate with the Session Manager.\nGo to IAM service administration interface In the left navigation bar, click Roles. Click Create role.",
    "tags": [],
    "title": "Create IAM Role",
    "uri": "/example-content/2-prerequiste/2.2-createiamrole/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2",
    "content": "Create Public Subnet Click Subnets. Click Create subnet. At the Create subnet page. In the VPC ID section, click Lab VPC. In the Subnet name field, enter Lab Public Subnet. In the Availability Zone section, select the first Availability zone. In the field IPv4 CIRD block enter 10.10.1.0/24. Scroll to the bottom of the page, click Create subnet.\nClick Lab Public Subnet.\nClick Actions. Click Edit subnet settings. Click Enable auto-assign public IPv4 address. Click Save. Click Internet Gateways. Click Create internet gateway. At the Create internet gateway page. In the Name tag field, enter Lab IGW. Click Create internet gateway. After successful creation, click Actions. Click Attach to VPC. At the Attach to VPC page. In the Available VPCs section, select Lab VPC. Click Attach internet gateway. Check the successful attaching process as shown below. Next we will create a custom route table to assign to Lab Public Subnet. Click Route Tables. Click Create route table. At the Create route table page. In the Name field, enter Lab Publicrtb. In the VPC section, select Lab VPC. Click Create route table. After creating the route table successfully. Click Edit routes. At the Edit routes page. Click Add route. In the Destination field, enter 0.0.0.0/0 In the Target section, select Internet Gateway and then select Lab IGW. Click Save changes. Click the Subnet associations tab. Click Edit subnet associations to proceed with the associate custom route table we just created in Lab Public Subnet. At the Edit subnet associations page. Click on Lab Public Subnet. Click Save associations. Check that the route table information has been associated with Lab Public Subnet and the internet route information has been pointed to the Internet Gateway as shown below.",
    "description": "Create Public Subnet Click Subnets. Click Create subnet. At the Create subnet page. In the VPC ID section, click Lab VPC. In the Subnet name field, enter Lab Public Subnet. In the Availability Zone section, select the first Availability zone. In the field IPv4 CIRD block enter 10.10.1.0/24. Scroll to the bottom of the page, click Create subnet.",
    "tags": [],
    "title": "Create Public Subnet",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.2-createpublicsubnet/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs",
    "content": "In this step, we will create an S3 bucket to store session logs sent from EC2 instances.\nCreate S3 Bucket Access S3 service management console Click Create bucket. At the Create bucket page. In the Bucket name field, enter the bucket name lab-yourname-bucket-0001 In the Region section, select Region you are doing the current lab. Tip The name of the S3 bucket must not be the same as all other S3 buckets in the system. You can substitute your name and enter a random number when generating the S3 bucket name.\nScroll down and click Create bucket. Tip When we created the S3 bucket we did Block all public access so our EC2 instances won’t be able to connect to S3 via the internet. In the next step, we will configure the S3 Gateway Endpoint feature to allow EC2 instances to connect to the S3 bucket via the VPC’s internal network.",
    "description": "In this step, we will create an S3 bucket to store session logs sent from EC2 instances.\nCreate S3 Bucket Access S3 service management console Click Create bucket. At the Create bucket page. In the Bucket name field, enter the bucket name lab-yourname-bucket-0001 In the Region section, select Region you are doing the current lab.",
    "tags": [],
    "title": "Create S3 Bucket",
    "uri": "/example-content/4-s3log/4.2-creates3bucket/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance",
    "content": "Create VPC Endpoint SSM We will create 3 interface endpoints required by the Session Manager:\nInterface endpoints: com.amazonaws.region.ssm com.amazonaws.region.ec2messages com.amazonaws.region.ssmmessages You can refer to more here\nContent: Create Endpoint ssm Create Endpoint ssmmessages Create Endpoint ec2messages",
    "description": "Create VPC Endpoint SSM We will create 3 interface endpoints required by the Session Manager:\nInterface endpoints: com.amazonaws.region.ssm com.amazonaws.region.ec2messages com.amazonaws.region.ssmmessages You can refer to more here\nContent: Create Endpoint ssm Create Endpoint ssmmessages Create Endpoint ec2messages",
    "tags": [],
    "title": "Create VPC Endpoint",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.2-createvpcendpoint/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content",
    "content": "Info You need to create 1 Linux instance on the public subnet and 1 Window instance on the private subnet to perform this lab.\nTo learn how to create EC2 instances and VPCs with public/private subnets, you can refer to the lab:\nAbout Amazon EC2 Works with Amazon VPC In order to use System Manager to manage our window instances in particular and our instances in general on AWS, we need to give permission to our instances to be able to work with System Manager. In this preparation, we will also proceed to create an IAM Role to grant permissions to instances that can work with System Manager.\nContent Prepare VPC and EC2 Create IAM Role",
    "description": "Info You need to create 1 Linux instance on the public subnet and 1 Window instance on the private subnet to perform this lab.\nTo learn how to create EC2 instances and VPCs with public/private subnets, you can refer to the lab:\nAbout Amazon EC2 Works with Amazon VPC In order to use System Manager to manage our window instances in particular and our instances in general on AWS, we need to give permission to our instances to be able to work with System Manager. In this preparation, we will also proceed to create an IAM Role to grant permissions to instances that can work with System Manager.",
    "tags": [],
    "title": "Preparation ",
    "uri": "/example-content/2-prerequiste/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Create VPC Endpoint \u003e Create Endpoint ssmmessages",
    "content": "Tạo VPC Endpoint SSMMESSAGES Truy cập đến giao diện quản trị của dịch vụ VPC Click Endpoints. Click Create endpoint. Tại trang Create endpoint. Tại mục Name tag điền SSMMESSAGES. Tại mục Service Category chọn AWS Services. Tại mục Service Name, Tại mục Service category chọn: AWS services Tại mục Service Name nhập: ssmmessages sau đó chọn Service Name: com.amazonaws.ap-southeast-1.ssmmessages. Tại cột Service Name, click chọn com.amazonaws.ap-southeast-1.ssmmessages. Tại mục VPC, chọn Lab VPC. Chọn AZ đầu tiên, sau đó chọn subnet Lab Private Subnet. Kéo chuột xuống dưới. Tại mục Security Group, chọn Security group SG VPC Endpoint mà chúng ta đã tạo trước đó. Tại mục Policy, chọn Full access Kéo chuột xuống dưới cùng. Click Create endpoint. Chúng ta đã tạo xong VPC Interface Endpoint SSMMESSAGES.",
    "description": "Tạo VPC Endpoint SSMMESSAGES Truy cập đến giao diện quản trị của dịch vụ VPC Click Endpoints. Click Create endpoint. Tại trang Create endpoint. Tại mục Name tag điền SSMMESSAGES. Tại mục Service Category chọn AWS Services. Tại mục Service Name, Tại mục Service category chọn: AWS services Tại mục Service Name nhập: ssmmessages sau đó chọn Service Name: com.amazonaws.ap-southeast-1.ssmmessages. Tại cột Service Name, click chọn com.amazonaws.ap-southeast-1.ssmmessages. Tại mục VPC, chọn Lab VPC. Chọn AZ đầu tiên, sau đó chọn subnet Lab Private Subnet.",
    "tags": [],
    "title": "Tạo Endpoint ssmmessages",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.2-createvpcendpoint/3.2.2.2-endpointssmmessages/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Create IAM Role",
    "content": "Tạo IAM Role Trong bước này chúng ta sẽ tiến hành tạo IAM Role. Trong IAM Role này sẽ được gán policy AmazonSSMManagedInstanceCore, đây là policy cho phép máy chủ EC2 có thể giao tiếp với Session Manager.\nTruy cập vào giao diện quản trị dịch vụ IAM Ở thanh điều hướng bên trái, click Roles. Click Create role. Click AWS service và click EC2. Click Next: Permissions. Trong ô Search, điền AmazonSSMManagedInstanceCore và ấn phím Enter để tìm kiếm policy này. Click chọn policy AmazonSSMManagedInstanceCore. Click Next: Tags. Click Next: Review. Đặt tên cho Role là SSM-Role ở Role Name Click Create Role . Tiếp theo chúng ta sẽ thực hiện kết nối đến các máy chủ EC2 chúng ta đã tạo bằng Session Manager.",
    "description": "Tạo IAM Role Trong bước này chúng ta sẽ tiến hành tạo IAM Role. Trong IAM Role này sẽ được gán policy AmazonSSMManagedInstanceCore, đây là policy cho phép máy chủ EC2 có thể giao tiếp với Session Manager.\nTruy cập vào giao diện quản trị dịch vụ IAM Ở thanh điều hướng bên trái, click Roles. Click Create role.",
    "tags": [],
    "title": "Tạo IAM Role",
    "uri": "/example-content/2-prerequiste/2.2-createiamrole/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance",
    "content": "Đối với Windows instance nằm trong private subnet, không có public IP, không có internet gateway nên không thể đi ra ngoài internet.\nVới loại instance này, cách làm truyền thống là ta sẽ sử dụng kỹ thuật Bastion host tốn nhiều chi phí và công sức, nhưng ở đây chúng ta sẽ sử dụng Session Manager với loại này.\nCơ bản là private instance vẫn phải mở cổng TCP 443 tới System Manager, nhưng không cho kết nối đó đi ra ngoài internet mà chỉ cho đi trong chính VPC của mình, nên đảm bảo được vấn đề bảo mật.\nĐể làm được điều đó, ta phải đưa endpoint của System Manager vào trong VPC, nghĩa là sử dụng VPC interface endpoint:\nVPC interface endpoint được gắn với subnet nên cách làm này không những với private subnet mà còn có thể làm với public subnet, nghĩa là với public subnet, bạn hoàn toàn có thể không cho TCP 443 đi ra ngoài internet.\nNội dung: Kích hoạt DNS hostnames Tạo VPC Endpoint Kết nối Private Instance",
    "description": "Đối với Windows instance nằm trong private subnet, không có public IP, không có internet gateway nên không thể đi ra ngoài internet.\nVới loại instance này, cách làm truyền thống là ta sẽ sử dụng kỹ thuật Bastion host tốn nhiều chi phí và công sức, nhưng ở đây chúng ta sẽ sử dụng Session Manager với loại này.\nCơ bản là private instance vẫn phải mở cổng TCP 443 tới System Manager, nhưng không cho kết nối đó đi ra ngoài internet mà chỉ cho đi trong chính VPC của mình, nên đảm bảo được vấn đề bảo mật.\nĐể làm được điều đó, ta phải đưa endpoint của System Manager vào trong VPC, nghĩa là sử dụng VPC interface endpoint:",
    "tags": [],
    "title": "Tạo kết nối đến máy chủ EC2 Private",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2 \u003e Create Public Subnet",
    "content": "Tạo Public subnet Click Subnets. Click Create subnet. Tại trang Create subnet. Tại mục VPC ID click chọn Lab VPC. Tại mục Subnet name điền Lab Public Subnet. Tại mục Availability Zone chọn Availability zone đầu tiên. Tại mục IPv4 CIRD block điền 10.10.1.0/24. Kéo xuống cuối trang , click Create subnet.\nClick chọn Lab Public Subnet.\nClick Actions. Click Edit subnet settings. Click chọn Enable auto-assign public IPv4 address. Click Save. Click Internet Gateways. Click Create internet gateway. Tại trang Create internet gateway. Tại mục Name tag điền Lab IGW. Click Create internet gateway. Sau khi tạo thành công, click Actions. Click Attach to VPC. Tại trang Attach to VPC. Tại mục Available VPCs chọn Lab VPC. Click Attach internet gateway. Kiểm tra quá trình attach thành công như hình dưới. Tiếp theo chúng ta sẽ tạo một custom route table để gán vào Lab Public Subnet. Click Route Tables. Click Create route table. Tại trang Create route table. Tại mục Name, điền Lab Publicrtb. Tại mục VPC, chọn Lab VPC. Click Create route table. Sau khi tạo route table thành công. Click Edit routes. Tại trang Edit routes. Click Add route. Tại mục Destination điền 0.0.0.0/0 Tại mục Target chọn Internet Gateway sau đó chọn Lab IGW. Click Save changes. Click tab Subnet associations. Click Edit subnet associations để tiến hành associate custom routable chúng ta vừa tạo vào Lab Public Subnet. Tại trang Edit subnet associations. Click chọn Lab Public Subnet. Click Save associations. Kiểm tra thông tin route table đã được associate với Lab Public Subnet và thông tin route đi internet đã được trỏ đến Internet Gateway như hình dưới.",
    "description": "Tạo Public subnet Click Subnets. Click Create subnet. Tại trang Create subnet. Tại mục VPC ID click chọn Lab VPC. Tại mục Subnet name điền Lab Public Subnet. Tại mục Availability Zone chọn Availability zone đầu tiên. Tại mục IPv4 CIRD block điền 10.10.1.0/24. Kéo xuống cuối trang , click Create subnet.",
    "tags": [],
    "title": "Tạo Public subnet",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.2-createpublicsubnet/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs \u003e Create S3 Bucket",
    "content": "Trong bước này, chúng ta sẽ tạo 1 S3 bucket để lưu trữ các session logs được gửi từ các EC2 instance.\nTạo S3 Bucket Truy cập giao diện quản trị dịch vụ S3 Click Create bucket. Tại trang Create bucket. Tại mục Bucket name điền tên bucket lab-yourname-bucket-0001 Tại mục Region chọn Region bạn đang làm lab hiện tại. Tip Tên S3 bucket phải đảm bảo không trùng với toàn bộ S3 bucket khác trong hệ thống. Bạn có thể thay thế tên mình và điền số ngẫu nhiên khi tạo tên S3 bucket.\nKéo chuột xuống phía dưới và click Create bucket. Tip Khi tạo S3 bucket chúng ta đã thực hiện Block all public access nên các EC2 instance của chúng ta sẽ không thể kết nối tới S3 thông qua mạng internet. Trong bước tiếp theo chúng ta sẽ cấu hình tính năng S3 Gateway Endpoint để cho phép các EC2 instance có thể kết nối tới S3 bucket thông qua mạng nội bộ của VPC.",
    "description": "Trong bước này, chúng ta sẽ tạo 1 S3 bucket để lưu trữ các session logs được gửi từ các EC2 instance.\nTạo S3 Bucket Truy cập giao diện quản trị dịch vụ S3 Click Create bucket. Tại trang Create bucket. Tại mục Bucket name điền tên bucket lab-yourname-bucket-0001 Tại mục Region chọn Region bạn đang làm lab hiện tại.",
    "tags": [],
    "title": "Tạo S3 Bucket",
    "uri": "/example-content/4-s3log/4.2-creates3bucket/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Create VPC Endpoint",
    "content": "Tạo VPC Endpoint SSM Chúng ta sẽ tạo 3 interface endpoint yêu cầu bởi Session Manager: Interface endpoint: com.amazonaws.region.ssm com.amazonaws.region.ec2messages com.amazonaws.region.ssmmessages Bạn có thể tham khảo thêm tại đây\nNội dung: Tạo Endpoint ssm Tạo Endpoint ssmmessages Tạo Endpoint ec2messages",
    "description": "Tạo VPC Endpoint SSM Chúng ta sẽ tạo 3 interface endpoint yêu cầu bởi Session Manager: Interface endpoint: com.amazonaws.region.ssm com.amazonaws.region.ec2messages com.amazonaws.region.ssmmessages Bạn có thể tham khảo thêm tại đây\nNội dung: Tạo Endpoint ssm Tạo Endpoint ssmmessages Tạo Endpoint ec2messages",
    "tags": [],
    "title": "Tạo VPC Endpoint",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.2-createvpcendpoint/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content",
    "content": "In this step, we will connect to our EC2 servers, located in both the public and private subnets.\nContent 3.1. Connect to EC2 Public Server 3.2. Cconnect to EC2 Private Server",
    "description": "In this step, we will connect to our EC2 servers, located in both the public and private subnets.\nContent 3.1. Connect to EC2 Public Server 3.2. Cconnect to EC2 Private Server",
    "tags": [],
    "title": "Connect to EC2 servers",
    "uri": "/example-content/3-accessibilitytoinstances/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance",
    "content": "Assign IAM role and restart EC2 instance. Go to EC2 service management console Click Private Windows Instance. Click Actions. Click Security. Click Modify IAM Role. At the Modify IAM Role page. In the IAM role section, select SSM-Role. Click Save. Click Private Windows Instance. Click Instance state. Click Reboot instance to restart, then click Reboot to confirm. Note Please wait 5 minutes before doing the next step.\nConnect to the private EC2 instance. Go to System Manager - Session Manager service management console Click Start session. Click Private Windows Instance. Click Start session. Type ipconfig command to check the IP address information of Private Windows Instance as shown below.",
    "description": "Assign IAM role and restart EC2 instance. Go to EC2 service management console Click Private Windows Instance. Click Actions. Click Security. Click Modify IAM Role. At the Modify IAM Role page. In the IAM role section, select SSM-Role. Click Save. Click Private Windows Instance. Click Instance state. Click Reboot instance to restart, then click Reboot to confirm.",
    "tags": [],
    "title": "Connect to instance",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.3-connectec2/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Create VPC Endpoint",
    "content": "Create VPC Endpoint EC2MESSAGES Go to VPC service management console Click Endpoints. Click Create endpoint. At the Create endpoint page. In the Name tag field, enter SSMMESSAGES. In the Service Category section, select AWS Services. In the Service Name section, In the Service category select: AWS services In the field Service Name enter: ec2 then select Service Name: com.amazonaws.ap-southeast-1.ec2messages. In the Service Name column, click com.amazonaws.ap-southeast-1.ec2messages. In the VPC section, select Lab VPC. Select the first AZ, then select the Lab Private Subnet subnet. Scroll down. In the Security Group section, select the Security group SG VPC Endpoint that we created earlier. In the Policy section, select Full access Scroll down. Click Create endpoint. We have created the VPC Interface Endpoint EC2MESSAGES.\nMake sure the 3 required endpoints have been created as shown below.",
    "description": "Create VPC Endpoint EC2MESSAGES Go to VPC service management console Click Endpoints. Click Create endpoint. At the Create endpoint page. In the Name tag field, enter SSMMESSAGES. In the Service Category section, select AWS Services. In the Service Name section, In the Service category select: AWS services In the field Service Name enter: ec2 then select Service Name: com.amazonaws.ap-southeast-1.ec2messages. In the Service Name column, click com.amazonaws.ap-southeast-1.ec2messages. In the VPC section, select Lab VPC. Select the first AZ, then select the Lab Private Subnet subnet.",
    "tags": [],
    "title": "Create Endpoint ec2messages",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.2-createvpcendpoint/3.2.2.3-endpointec2messages/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2",
    "content": "Create Private Subnet Click Subnets. Click Create subnet. At the Create subnet page. In the VPC ID section, click Lab VPC. In the Subnet name field, enter Lab Private Subnet. In the Availability Zone section, select the first Availability zone. In the field IPv4 CIRD block enter 10.10.2.0/24. Scroll to the bottom of the page, click Create subnet. The next step is to create the necessary security groups for the lab.",
    "description": "Create Private Subnet Click Subnets. Click Create subnet. At the Create subnet page. In the VPC ID section, click Lab VPC. In the Subnet name field, enter Lab Private Subnet. In the Availability Zone section, select the first Availability zone. In the field IPv4 CIRD block enter 10.10.2.0/24. Scroll to the bottom of the page, click Create subnet. The next step is to create the necessary security groups for the lab.",
    "tags": [],
    "title": "Create Private Subnet",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.3-createprivatesubnet/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs",
    "content": "Go to VPC service management console Click Endpoints. Click Create endpoint. At the Create endpoint page. In the Name tag field, enter S3GW. In the Service Category section, click AWS services. In the search box enter S3, then select com.amazonaws.[region].s3 In the Services section, select com.amazonaws.[region].s3 with the Type of Gateway. In the VPC section, select Lab VPC. In the Route tables section, select both route tables. Scroll down, click Create endpoint. The next step is to configure Session Manager to store session logs to the S3 bucket we created.",
    "description": "Go to VPC service management console Click Endpoints. Click Create endpoint. At the Create endpoint page. In the Name tag field, enter S3GW. In the Service Category section, click AWS services. In the search box enter S3, then select com.amazonaws.[region].s3 In the Services section, select com.amazonaws.[region].s3 with the Type of Gateway. In the VPC section, select Lab VPC. In the Route tables section, select both route tables.",
    "tags": [],
    "title": "Create S3 Gateway endpoint",
    "uri": "/example-content/4-s3log/4.3-creategwes3/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Connect to instance",
    "content": "Gán IAM role và restart EC2 instance. Truy cập giao diện quản trị dịch vụ EC2 Click chọn Private Windows Instance. Click Actions. Click Security. Click Modify IAM Role. Tại trang Modify IAM Role. Tại mục IAM role, chọn SSM-Role. Click Save. Click chọn Private Windows Instance. Click Instance state. Click Reboot instance để thực hiện restart, sau đó click Reboot để xác nhận. Note Bạn hãy đợi 5 phút trước khi làm bước tiếp theo nhé.\nKết nối tới máy chủ private EC2 instance. Truy cập vào giao diện quản trị dịch vụ System Manager - Session Manager Click Start session. Click chọn Private Windows Instance. Click Start session. Gõ lệnh ipconfig để kiểm tra thông tin địa chỉ IP của Private Windows Instance như dưới đây.",
    "description": "Gán IAM role và restart EC2 instance. Truy cập giao diện quản trị dịch vụ EC2 Click chọn Private Windows Instance. Click Actions. Click Security. Click Modify IAM Role. Tại trang Modify IAM Role. Tại mục IAM role, chọn SSM-Role. Click Save. Click chọn Private Windows Instance. Click Instance state. Click Reboot instance để thực hiện restart, sau đó click Reboot để xác nhận.",
    "tags": [],
    "title": "Kết nối EC2 Private",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.3-connectec2/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers \u003e Connect to Private instance \u003e Create VPC Endpoint \u003e Create Endpoint ec2messages",
    "content": "Tạo VPC Endpoint EC2MESSAGES Truy cập đến giao diện quản trị của dịch vụ VPC Click Endpoints. Click Create endpoint. Tại trang Create endpoint. Tại mục Name tag điền SSMMESSAGES. Tại mục Service Category chọn AWS Services. Tại mục Service Name, Tại mục Service category chọn: AWS services Tại mục Service Name nhập: ec2 sau đó chọn Service Name: com.amazonaws.ap-southeast-1.ec2messages. Tại cột Service Name, click chọn com.amazonaws.ap-southeast-1.ec2messages. Tại mục VPC, chọn Lab VPC. Chọn AZ đầu tiên, sau đó chọn subnet Lab Private Subnet. Kéo chuột xuống dưới. Tại mục Security Group, chọn Security group SG VPC Endpoint mà chúng ta đã tạo trước đó. Tại mục Policy, chọn Full access Kéo chuột xuống dưới cùng. Click Create endpoint. Chúng ta đã tạo xong VPC Interface Endpoint EC2MESSAGES.\nĐảm bảo 3 endpoint cần thiết đã được tạo như hình dưới.",
    "description": "Tạo VPC Endpoint EC2MESSAGES Truy cập đến giao diện quản trị của dịch vụ VPC Click Endpoints. Click Create endpoint. Tại trang Create endpoint. Tại mục Name tag điền SSMMESSAGES. Tại mục Service Category chọn AWS Services. Tại mục Service Name, Tại mục Service category chọn: AWS services Tại mục Service Name nhập: ec2 sau đó chọn Service Name: com.amazonaws.ap-southeast-1.ec2messages. Tại cột Service Name, click chọn com.amazonaws.ap-southeast-1.ec2messages. Tại mục VPC, chọn Lab VPC. Chọn AZ đầu tiên, sau đó chọn subnet Lab Private Subnet.",
    "tags": [],
    "title": "Tạo Endpoint ec2messages",
    "uri": "/example-content/3-accessibilitytoinstances/3.2-private-instance/3.2.2-createvpcendpoint/3.2.2.3-endpointec2messages/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Connect to EC2 servers",
    "content": "Trong bước này, chúng ta sẽ thực hiện tạo kết nối đến các máy chủ EC2 của chúng ta, nằm trong cả public và private subnet.\nNội dung 3.1. Tạo Kết nối đến máy chủ EC2 Public 3.2. Tạo Kết nối đến máy chủ EC2 Private",
    "description": "Trong bước này, chúng ta sẽ thực hiện tạo kết nối đến các máy chủ EC2 của chúng ta, nằm trong cả public và private subnet.\nNội dung 3.1. Tạo Kết nối đến máy chủ EC2 Public 3.2. Tạo Kết nối đến máy chủ EC2 Private",
    "tags": [],
    "title": "Tạo kết nối đến máy chủ EC2",
    "uri": "/example-content/3-accessibilitytoinstances/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2 \u003e Create Private Subnet",
    "content": "Tạo Private subnet Click Subnets. Click Create subnet. Tại trang Create subnet. Tại mục VPC ID click chọn Lab VPC. Tại mục Subnet name điền Lab Private Subnet. Tại mục Availability Zone chọn Availability zone đầu tiên. Tại mục IPv4 CIRD block điền 10.10.2.0/24. Kéo xuống cuối trang , click Create subnet. Bước tiếp theo chúng ta sẽ tạo các security group cần thiết cho bài lab.",
    "description": "Tạo Private subnet Click Subnets. Click Create subnet. Tại trang Create subnet. Tại mục VPC ID click chọn Lab VPC. Tại mục Subnet name điền Lab Private Subnet. Tại mục Availability Zone chọn Availability zone đầu tiên. Tại mục IPv4 CIRD block điền 10.10.2.0/24. Kéo xuống cuối trang , click Create subnet. Bước tiếp theo chúng ta sẽ tạo các security group cần thiết cho bài lab.",
    "tags": [],
    "title": "Tạo Private subnet",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.3-createprivatesubnet/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs \u003e Create S3 Gateway endpoint",
    "content": "Truy cập vào giao diện quản trị dịch vụ VPC Click Endpoints. Click Create endpoint. Tại trang Create endpoint. Tại mục Name tag điền S3GW. Tại mục Service Category click chọn AWS services. Tại ô tìm kiếm điền S3, sau đó chọn com.amazonaws.[region].s3 Tại mục Services chọn com.amazonaws.[region].s3 có Type là Gateway. Tại mục VPC , chọn Lab VPC. Tại mục Route tables, chọn cả 2 route table. Kéo chuột xuống dưới cùng, click Create endpoint. Bước tiếp theo chúng ta sẽ tiến hành cấu hình Session Manager để có thể lưu trữ các session logs tới S3 bucket chúng ta đã tạo.",
    "description": "Truy cập vào giao diện quản trị dịch vụ VPC Click Endpoints. Click Create endpoint. Tại trang Create endpoint. Tại mục Name tag điền S3GW. Tại mục Service Category click chọn AWS services. Tại ô tìm kiếm điền S3, sau đó chọn com.amazonaws.[region].s3 Tại mục Services chọn com.amazonaws.[region].s3 có Type là Gateway. Tại mục VPC , chọn Lab VPC. Tại mục Route tables, chọn cả 2 route table.",
    "tags": [],
    "title": "Tạo S3 Gateway endpoint",
    "uri": "/example-content/4-s3log/4.3-creategwes3/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2",
    "content": "Create security groups In this step, we will proceed to create the security groups used for our instances. As you can see, these security groups will not need to open traditional ports to ssh like port 22 or remote desktop through port 3389.\nCreate security group for Linux instance located in public subnet Go to VPC service management console Click Security Group. Click Create security group. In the Security group name field, enter SG Public Linux Instance. In the Description section, enter SG Public Linux Instance. In the VPC section, click the X to reselect the Lab VPC you created for this lab. Keep Outbound rule, drag the mouse to the bottom. Click Create security group. Tip As you can see, the security group we created to use for Linux public instances will not need to open traditional ports to ssh like port 22.\nCreate a security group for a Windows instance located in a private subnet After successfully creating a security group for the Linux instance located in the public subnet, click the Security Groups link to return to the Security groups list. Click Create security group.\nIn the Security group name field, enter SG Private Windows Instance.\nIn the Description section, enter SG Private Windows Instance. In the VPC section, click the X to reselect the Lab VPC you created for this lab. Scroll down. Add Outbound rule to allow TCP 443 connection to 10.10.0.0/16 ( CIDR of Lab VPC we created) Click Create security group. Tip For the Instance in the private subnet, we will connect to the Session Manager endpoint over a TLS encrypted connection, so we need to allow outbound connection from our instance to VPC CIDR through port 443.\nCreate security group for VPC Endpoint In this step, we will create security group for VPC Endpoint of Session Manager. After successfully creating the security group for the Windows instance in the private subnet, click the Security Groups link to return to the Security groups list. Click Create security group. In the Security group name field, enter SG VPC Endpoint. In the Description section, enter SG VPC Endpoint. In the VPC section, click the X to reselect the Lab VPC you created for this lab. Scroll down. Delete Outbound rule. Add Inbound rule allowing TCP 443 to come from 10.10.0.0/16 ( CIDR of Lab VPC we created ). Click Create security group. So we are done creating the necessary security groups for EC2 instances and VPC Endpoints.",
    "description": "Create security groups In this step, we will proceed to create the security groups used for our instances. As you can see, these security groups will not need to open traditional ports to ssh like port 22 or remote desktop through port 3389.\nCreate security group for Linux instance located in public subnet Go to VPC service management console Click Security Group. Click Create security group.",
    "tags": [],
    "title": "Create security groups",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.4-createsecgroup/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content",
    "content": "With Session Manager, we can view the history of connections to instances through Session history. However, we have not seen the details of the commands used in a session.\nIn this section, we will proceed to create an S3 bucket and configure the session logs feature to see the details of the commands used in the session.\nContent: Update IAM Role Create S3 Bucket Create S3 Gateway endpoint Configure Session logs",
    "description": "With Session Manager, we can view the history of connections to instances through Session history. However, we have not seen the details of the commands used in a session.\nIn this section, we will proceed to create an S3 bucket and configure the session logs feature to see the details of the commands used in the session.",
    "tags": [],
    "title": "Manage session logs",
    "uri": "/example-content/4-s3log/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs",
    "content": "Monitor session logs Access System Manager - Session Manager service management console Click the Preferences tab. Click Edit. Scroll down, at S3 logging, click Enable. Uncheck Allow only encrypted S3 buckets. Click Choose a bucket name from the list. Select the S3 bucket you created. Scroll down, click Save to save the configuration.\nAccess System Manager - Session Manager service management console\nClick Start session. Click Private Windows Instance. Click Start session. Type the command ipconfig. Type the command hostname. Click Terminate to exit the session, click Terminate again to confirm. Check Session logs in S3 Go to S3 service management console Click on the name of the S3 bucket we created for the lab. Click on the object name sessions log On the objects detail page, click Open. Object logs will be opened in a new tab in the browser. You can view the stored commands in session logs.",
    "description": "Monitor session logs Access System Manager - Session Manager service management console Click the Preferences tab. Click Edit. Scroll down, at S3 logging, click Enable. Uncheck Allow only encrypted S3 buckets. Click Choose a bucket name from the list. Select the S3 bucket you created. Scroll down, click Save to save the configuration.",
    "tags": [],
    "title": "Monitor session logs",
    "uri": "/example-content/4-s3log/4.4-configsessionlogs/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs",
    "content": "Với Session Manager chúng ta có thể xem được lịch sử các kết nối tới các instance thông qua Session history. Tuy nhiên chúng ta chưa xem được chi tiết các câu lệnh được sử dụng.\nTrong phần này chúng ta sẽ tiến hành tạo S3 bucket và thực hiện cấu hình lưu trữ các session logs để xem được chi tiết các câu lệnh được sử dụng trong session.\nNội dung: Cập nhật IAM Role Tạo S3 Bucket Tạo S3 Gateway endpoint Cấu hình Session logs",
    "description": "Với Session Manager chúng ta có thể xem được lịch sử các kết nối tới các instance thông qua Session history. Tuy nhiên chúng ta chưa xem được chi tiết các câu lệnh được sử dụng.\nTrong phần này chúng ta sẽ tiến hành tạo S3 bucket và thực hiện cấu hình lưu trữ các session logs để xem được chi tiết các câu lệnh được sử dụng trong session.",
    "tags": [],
    "title": "Quản lý session logs",
    "uri": "/example-content/4-s3log/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2 \u003e Create security groups",
    "content": "Tạo các security group Trong bước này chúng ta sẽ tiến hành tạo các security group được sử dụng cho các instance của chúng ta. Các bạn có thể thấy, các securiy group này sẽ không cần phải mở các port truyền thống để ssh như port 22 hoặc remote desktop thông qua port 3389.\nTạo security group cho Linux instance nằm trong public subnet Truy cập giao diện quản trị dịch vụ VPC Click Security Group. Click Create security group. Tại mục Security group name, điền SG Public Linux Instance. Tại mục Description, điền SG Public Linux Instance. Tại mục VPC, click dấu X để chọn lại Lab VPC bạn đã tạo cho bài lab này. Giữ nguyên Outbound rule, kéo chuột xuống phía dưới. Click Create security group. Tip Các bạn có thể thấy, security group chúng ta tạo sử dụng cho Linux public instance sẽ không cần phải mở các port truyền thống để ssh như port 22.\nTạo security group cho Windows instance nằm trong private subnet Sau khi tạo thành công security group cho Linux instance nằm trong public subnet, click vào link Security Groups để quay trở lại danh sách Security groups. Click Create security group.\nTại mục Security group name, điền SG Private Windows Instance.\nTại mục Description, điền SG Private Windows Instance. Tại mục VPC, click dấu X để chọn lại Lab VPC bạn đã tạo cho bài lab này. Kéo chuột xuống phía dưới. Thêm Outbound rule cho phép kết nối TCP 443 tới 10.10.0.0/16 ( CIDR của Lab VPC chúng ta đã tạo) Click Create security group. Tip Đối với Instance trong private subnet, chúng ta sẽ kết nối tới endpoint của Session Manager qua kết nối đã được mã hóa TLS. vì thế chúng ta cần cho phép kết nối chiều ra từ instance của mình tới VPC CIDR thông qua port 443.\nTạo security group cho VPC Endpoint Trong bước này, chúng ta sẽ tạo security group cho VPC Endpoint của Session Manager. Sau khi tạo thành công security group cho Windows instance trong private subnet, click vào link Security Groups để quay trở lại danh sách Security groups. Click Create security group. Tại mục Security group name, điền SG VPC Endpoint. Tại mục Description, điền SG VPC Endpoint. Tại mục VPC, click dấu X để chọn lại Lab VPC bạn đã tạo cho bài lab này. Kéo chuột xuống phía dưới. Xóa Outbound rule. Thêm Inbound rule cho phép TCP 443 đến từ 10.10.0.0/16 ( CIDR của Lab VPC chúng ta đã tạo ). Click Create security group. Như vậy chúng ta đã tiến hành xong việc tạo các security group cần thiết cho các EC2 instance và VPC Endpoint.",
    "description": "Tạo các security group Trong bước này chúng ta sẽ tiến hành tạo các security group được sử dụng cho các instance của chúng ta. Các bạn có thể thấy, các securiy group này sẽ không cần phải mở các port truyền thống để ssh như port 22 hoặc remote desktop thông qua port 3389.\nTạo security group cho Linux instance nằm trong public subnet Truy cập giao diện quản trị dịch vụ VPC Click Security Group. Click Create security group.",
    "tags": [],
    "title": "Tạo các security group",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.4-createsecgroup/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Manage session logs \u003e Monitor session logs",
    "content": "Theo dõi session logs Truy cập giao diện quản trị dịch vụ System Manager - Session Manager Click tab Preferences. Click Edit. Kéo chuột xuống phía dưới, tại mục S3 logging, click chọn Enable. Bỏ chọn Allow only encrypted S3 buckets. Click chọn Choose a bucket name from the list. Chọn S3 bucket bạn đã tạo. Kéo chuột xuống phía dưới, click Save để lưu cấu hình.\nTruy cập giao diện quản trị dịch vụ System Manager - Session Manager\nClick Start session. Click chọn Private Windows Instance. Click Start session. Gõ lệnh ipconfig. Gõ lệnh hostname. Click Terminate để thoát session, click Terminate 1 lần nữa để xác nhận. Kiểm tra Session logs trong S3 Truy cập vào giao diện quản trị dịch vụ S3 Click vào tên S3 bucket chúng ta đã tạo cho bài lab. Click vào tên file sessions log Tại trang chi tiết objects , click Open. File logs sẽ được mở ở 1 tab mới trên trình duyệt.Bạn có thể xem các câu lệnh đã được lưu trữ lại trong session logs.",
    "description": "Theo dõi session logs Truy cập giao diện quản trị dịch vụ System Manager - Session Manager Click tab Preferences. Click Edit. Kéo chuột xuống phía dưới, tại mục S3 logging, click chọn Enable. Bỏ chọn Allow only encrypted S3 buckets. Click chọn Choose a bucket name from the list. Chọn S3 bucket bạn đã tạo.",
    "tags": [],
    "title": "Theo dõi session logs",
    "uri": "/example-content/4-s3log/4.4-configsessionlogs/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2",
    "content": "Go to EC2 service management console Click Instances. Click Launch instances. On the Step 1: Choose an Amazon Machine Image (AMI) page. Click Select to select AMI Amazon Linux 2 AMI. On the Step 2: Choose an Instance Type page. Click on Instance type t2.micro. Click Next: Configure Instance Details. At Step 3: Configure Instance Details page In the Network section, select Lab VPC. In the Subnet section, select Lab Public Subnet. In the Auto-assign Public IP section, select Use subnet setting (Enable) Click Next: Add Storage. Click Next: Add Tags to move to the next step. Click Next: Configure Security Group to move to the next step. On page Step 6: Configure Security Group. Select Select an existing security group. Select security group SG Public Linux Instance. Click Review and Launch. The warning dialog box appears because we do not configure the firewall to allow connections to port 22, Click Continue to continue.\nAt page Step 7: Review Instance Launch.\nClick Launch. In the Select an existing key pair or create a new key pair dialog box. Click to select Create a new key pair. In the Key pair name field, enter LabKeypair. Click Download Key Pair and save it to your computer. Click Launch Instances to create EC2 server. Click View Instances to return to the list of EC2 instances.\nClick the edit icon under the Name column.\nIn the Edit Name dialog box, enter Public Linux Instance. Click Save. Next, we will do the same to create an EC2 Instance Windows running in the Private subnet.",
    "description": "Go to EC2 service management console Click Instances. Click Launch instances. On the Step 1: Choose an Amazon Machine Image (AMI) page. Click Select to select AMI Amazon Linux 2 AMI. On the Step 2: Choose an Instance Type page. Click on Instance type t2.micro. Click Next: Configure Instance Details.",
    "tags": [],
    "title": "Create Public instance",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.5-createec2linux/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content",
    "content": "Info Port Forwarding is a useful way to redirect network traffic from one IP address - Port to another IP address - Port. With Port Forwarding we can access an EC2 instance located in the private subnet from our workstation.\nWe will configure Port Forwarding for the RDP connection between our machine and Private Windows Instance located in the private subnet we created for this exercise.\nCreate IAM user with permission to connect SSM Go to IAM service management console Click Users , then click Add users. At the Add user page. In the User name field, enter Portfwd. Click on Access key - Programmatic access. Click Next: Permissions. Click Attach existing policies directly.\nIn the search box, enter ssm. Click on AmazonSSMFullAccess. Click Next: Tags, click Next: Reviews. Click Create user. Save Access key ID and Secret access key information to perform AWS CLI configuration.\nInstall and Configure AWS CLI and Session Manager Plugin To perform this hands-on, make sure your workstation has AWS CLI and Session Manager Plugin installed -manager-working-with-install-plugin.html)\nMore hands-on tutorials on installing and configuring the AWS CLI can be found here.\nTip With Windows, when extracting the Session Manager Plugin installation folder, run the install.bat file with Administrator permission to perform the installation.\nImplement Portforwarding Run the command below in Command Prompt on your machine to configure Port Forwarding. aws ssm start-session --target (your ID windows instance) --document-name AWS-StartPortForwardingSession --parameters portNumber=\"3389\",localPortNumber=\"9999\" --region (your region) Tip Windows Private Instance Instance ID information can be found when you view the EC2 Windows Private Instance server details.\nExample command: C:\\Windows\\system32\u003eaws ssm start-session --target i-06343d7377486760c --document-name AWS-StartPortForwardingSession --parameters portNumber=\"3389\",localPortNumber=\"9999\" --region ap-southeast-1 Warning If your command gives an error like below: SessionManagerPlugin is not found. Please refer to SessionManager Documentation here: http://docs.aws.amazon.com/console/systems-manager/session-manager-plugin-not-found\nProve that you have not successfully installed the Session Manager Plugin. You may need to relaunch Command Prompt after installing Session Manager Plugin.\nConnect to the Private Windows Instance you created using the Remote Desktop tool on your workstation. In the Computer section: enter localhost:9999. Return to the administration interface of the System Manager - Session Manager service. Click tab Session history. We will see session logs with Document name AWS-StartPortForwardingSession. Congratulations on completing the lab on how to use Session Manager to connect and store session logs in S3 bucket. Remember to perform resource cleanup to avoid unintended costs.",
    "description": "Info Port Forwarding is a useful way to redirect network traffic from one IP address - Port to another IP address - Port. With Port Forwarding we can access an EC2 instance located in the private subnet from our workstation.\nWe will configure Port Forwarding for the RDP connection between our machine and Private Windows Instance located in the private subnet we created for this exercise.",
    "tags": [],
    "title": "Port Forwarding",
    "uri": "/example-content/5-portfwd/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Port Forwarding",
    "content": "Info Port Forwarding là mốt cách thức hữu ích để chuyển hướng lưu lượng mạng từ 1 địa chỉ IP - Port này sang 1 địa chỉ IP - Port khác. Với Port Forwarding chúng ta có thể truy cập một EC2 instance nằm trong private subnet từ máy trạm của chúng ta.\nChúng ta sẽ cấu hình Port Forwarding cho kết nối RDP giữa máy của mình với Private Windows Instance nằm trong private subnet mà chúng ta đã tạo cho bài thực hành này.\nTạo IAM User có quyền kết nối SSM Truy cập vào giao diện quản trị dịch vụ IAM Click Users , sau đó click Add users. Tại trang Add user. Tại mục User name, điền Portfwd. Click chọn Access key - Programmatic access. Click Next: Permissions. Click Attach existing policies directly. Tại ô tìm kiếm , điền ssm. Click chọn AmazonSSMFullAccess. Click Next: Tags, click Next: Reviews. Click Create user. Lưu lại thông tin Access key ID và Secret access key để thực hiện cấu hình AWS CLI. Cài đặt và cấu hình AWS CLI và Session Manager Plugin Để thực hiện phần thực hành này, đảm bảo máy trạm của bạn đã cài AWS CLI và Session Manager Plugin\nBạn có thể tham khảo thêm bài thực hành về cài đặt và cấu hình AWS CLI tại đây.\nTip Với Windows thì khi giải nén thư mục cài đặt Session Manager Plugin bạn hãy chạy file install.bat với quyền Administrator để thực hiện cài đặt.\nThực hiện Portforwarding Chạy command dưới đây trong Command Prompt trên máy của bạn để cấu hình Port Forwarding. aws ssm start-session --target (your ID windows instance) --document-name AWS-StartPortForwardingSession --parameters portNumber=\"3389\",localPortNumber=\"9999\" --region (your region) Tip Thông tin Instance ID của Windows Private Instance có thể tìm được khi bạn xem chi tiết máy chủ EC2 Windows Private Instance.\nCâu lệnh ví dụ C:\\Windows\\system32\u003eaws ssm start-session --target i-06343d7377486760c --document-name AWS-StartPortForwardingSession --parameters portNumber=\"3389\",localPortNumber=\"9999\" --region ap-southeast-1 Warning Nếu câu lệnh của bạn báo lỗi như dưới đây : SessionManagerPlugin is not found. Please refer to SessionManager Documentation here: http://docs.aws.amazon.com/console/systems-manager/session-manager-plugin-not-found\nChứng tỏ bạn chưa cài Session Manager Plugin thành công. Bạn có thể cần khởi chạy lại Command Prompt sau khi cài Session Manager Plugin.\nKết nối tới Private Windows Instance bạn đã tạo bằng công cụ Remote Desktop trên máy trạm của bạn. Tại mục Computer: điền localhost:9999. Quay trở lại giao diện quản trị của dịch vụ System Manager - Session Manager. Click tab Session history. Chúng ta sẽ thấy các session logs với tên Document là AWS-StartPortForwardingSession. Chúc mừng bạn đã hoàn tất bài thực hành hướng dẫn cách sử dụng Session Manager để kết nối cũng như lưu trữ các session logs trong S3 bucket. Hãy nhớ thực hiện bước dọn dẹp tài nguyên để tránh sinh chi phí ngoài ý muốn nhé.",
    "description": "Info Port Forwarding là mốt cách thức hữu ích để chuyển hướng lưu lượng mạng từ 1 địa chỉ IP - Port này sang 1 địa chỉ IP - Port khác. Với Port Forwarding chúng ta có thể truy cập một EC2 instance nằm trong private subnet từ máy trạm của chúng ta.\nChúng ta sẽ cấu hình Port Forwarding cho kết nối RDP giữa máy của mình với Private Windows Instance nằm trong private subnet mà chúng ta đã tạo cho bài thực hành này.",
    "tags": [],
    "title": "Port Forwarding",
    "uri": "/example-content/5-portfwd/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2 \u003e Create Public instance",
    "content": "Truy cập giao diện quản trị dịch vụ EC2 Click Instances. Click Launch instances. Tại trang Step 1: Choose an Amazon Machine Image (AMI). Click Select để lựa chọn AMI Amazon Linux 2 AMI. Tại trang Step 2: Choose an Instance Type. Click chọn Instance type t2.micro. Click Next: Configure Instance Details. Tại trang Step 3: Configure Instance Details Tại mục Network chọn Lab VPC. Tại mục Subnet chọn Lab Public Subnet. Tại mục Auto-assign Public IP chọn Use subnet setting (Enable) Click Next: Add Storage. Click Next: Add Tags để chuyển sang bước kế tiếp. Click Next: Configure Security Group để chuyển sang bước kế tiếp. Tại trang Step 6: Configure Security Group. Chọn Select an existing security group. Chọn security group SG Public Linux Instance. Click Review and Launch. Hộp thoại cảnh báo hiện lên vì chúng ta không cấu hình tường lửa cho phép kết nối vào port 22, Click Continue để tiếp tục.\nTại trang Step 7: Review Instance Launch.\nClick Launch. Tại hộp thoại Select an existing key pair or create a new key pair. Click chọn Create a new key pair. Tại mục Key pair name điền LabKeypair. Click Download Key Pair và lưu xuống máy tính của bạn. Click Launch Instances để tạo máy chủ EC2. Click View Instances để quay lại danh mục EC2 instances.\nClick vào biểu tượng edit dưới cột Name.\nTại hộp thoại Edit Name điền Public Linux Instance. Click Save. Tiếp theo chúng ta sẽ thực hiện tương tự để tạo 1 EC2 Instance Windows chạy trong Private subnet.",
    "description": "Truy cập giao diện quản trị dịch vụ EC2 Click Instances. Click Launch instances. Tại trang Step 1: Choose an Amazon Machine Image (AMI). Click Select để lựa chọn AMI Amazon Linux 2 AMI. Tại trang Step 2: Choose an Instance Type. Click chọn Instance type t2.micro. Click Next: Configure Instance Details.",
    "tags": [],
    "title": "Tạo Public Linux EC2",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.5-createec2linux/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content",
    "content": "We will take the following steps to delete the resources we created in this exercise.\nDelete EC2 instance Go to EC2 service management console\nClick Instances. Select both Public Linux Instance and Private Windows Instance instances. Click Instance state. Click Terminate instance, then click Terminate to confirm. Go to IAM service management console\nClick Roles. In the search box, enter SSM. Click to select SSM-Role. Click Delete, then enter the role name SSM-Role and click Delete to delete the role. Click Users. Click on user Portfwd. Click Delete, then enter the user name Portfwd and click Delete to delete the user. Delete S3 bucket Access System Manager - Session Manager service management console.\nClick the Preferences tab. Click Edit. Scroll down. In the section S3 logging. Uncheck Enable to disable logging. Scroll down. Click Save. Go to S3 service management console\nClick on the S3 bucket we created for this lab. (Example: lab-fcj-bucket-0001 ) Click Empty. Enter permanently delete, then click Empty to proceed to delete the object in the bucket. Click Exit. After deleting all objects in the bucket, click Delete\nEnter the name of the S3 bucket, then click Delete bucket to proceed with deleting the S3 bucket. Delete VPC Endpoints Go to VPC service management console Click Endpoints. Select the 4 endpoints we created for the lab including SSM, SSMMESSAGES, EC2MESSAGES, S3GW. Click Actions. Click Delete VPC endpoints. In the confirm box, enter delete.\nClick Delete to proceed with deleting endpoints. Click the refresh icon, check that all endpoints have been deleted before proceeding to the next step.\nDelete VPC Go to VPC service management console\nClick Your VPCs. Click on Lab VPC. Click Actions. Click Delete VPC. In the confirm box, enter delete to confirm, click Delete to delete Lab VPC and related resources.",
    "description": "We will take the following steps to delete the resources we created in this exercise.\nDelete EC2 instance Go to EC2 service management console\nClick Instances. Select both Public Linux Instance and Private Windows Instance instances. Click Instance state. Click Terminate instance, then click Terminate to confirm. Go to IAM service management console\nClick Roles. In the search box, enter SSM. Click to select SSM-Role. Click Delete, then enter the role name SSM-Role and click Delete to delete the role.",
    "tags": [],
    "title": "Clean up resources",
    "uri": "/example-content/6-cleanup/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Clean up resources",
    "content": "Chúng ta sẽ tiến hành các bước sau để xóa các tài nguyên chúng ta đã tạo trong bài thực hành này.\nXóa EC2 instance Truy cập giao diện quản trị dịch vụ EC2 Click Instances. Click chọn cả 2 instance Public Linux Instance và Private Windows Instance. Click Instance state. Click Terminate instance, sau đó click Terminate để xác nhận. Truy cập giao diện quản trị dịch vụ IAM Click Roles. Tại ô tìm kiếm , điền SSM. Click chọn SSM-Role. Click Delete, sau đó điền tên role SSM-Role và click Delete để xóa role. Click Users. Click chọn user Portfwd. Click Delete, sau đó điền tên user Portfwd và click Delete để xóa user. Xóa S3 bucket Truy cập giao diện quản trị dịch vụ System Manager - Session Manager. Click tab Preferences. Click Edit. Kéo chuột xuống dưới. Tại mục S3 logging. Bỏ chọn Enable để tắt tính năng logging. Kéo chuột xuống dưới. Click Save. Truy cập giao diện quản trị dịch vụ S3 Click chọn S3 bucket chúng ta đã tạo cho bài thực hành. ( Ví dụ : lab-fcj-bucket-0001 ) Click Empty. Điền permanently delete, sau đó click Empty để tiến hành xóa object trong bucket. Click Exit. Sau khi xóa hết object trong bucket, click Delete Điền tên S3 bucket, sau đó click Delete bucket để tiến hành xóa S3 bucket. Xóa các VPC Endpoint Truy cập vào giao diện quản trị dịch vụ VPC Click Endpoints. Chọn 4 endpoints chúng ta đã tạo cho bài thực hành bao gồm SSM, SSMMESSAGES, EC2MESSAGES, S3GW. Click Actions. Click Delete VPC endpoints. Tại ô confirm , điền delete. Click Delete để tiến hành xóa các endpoints. Click biểu tượng refresh, kiểm tra tất cả các endpoints đã bị xóa trước khi làm bước tiếp theo. Xóa VPC Truy cập vào giao diện quản trị dịch vụ VPC Click Your VPCs. Click chọn Lab VPC. Click Actions. Click Delete VPC. Tại ô confirm, điền delete để xác nhận, click Delete để thực hiện xóa Lab VPC và các tài nguyên liên quan.",
    "description": "Chúng ta sẽ tiến hành các bước sau để xóa các tài nguyên chúng ta đã tạo trong bài thực hành này.\nXóa EC2 instance Truy cập giao diện quản trị dịch vụ EC2 Click Instances. Click chọn cả 2 instance Public Linux Instance và Private Windows Instance. Click Instance state. Click Terminate instance, sau đó click Terminate để xác nhận. Truy cập giao diện quản trị dịch vụ IAM Click Roles. Tại ô tìm kiếm , điền SSM. Click chọn SSM-Role. Click Delete, sau đó điền tên role SSM-Role và click Delete để xóa role.",
    "tags": [],
    "title": "Dọn dẹp tài nguyên  ",
    "uri": "/example-content/6-cleanup/_index.vi/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2",
    "content": "Go to EC2 service management console Click Instances. Click Launch instances. On the Step 1: Choose an Amazon Machine Image (AMI) page. Drag the mouse down. Click Select to select AMI Microsoft Windows Server 2019 Base. On the Step 2: Choose an Instance Type page. Click on Instance type t2.micro. Click Next: Configure Instance Details. At Step 3: Configure Instance Details page In the Network section, select Lab VPC. In the Subnet section, select Lab Private Subnet. At Auto-assign Public IP select Use subnet setting (Disable) Click Next: Add Storage. Click Next: Add Tags to move to the next step. Click Next: Configure Security Group to move to the next step. On page Step 6: Configure Security Group. Select Select an existing security group. Select security group SG Private Windows Instance. Click Review and Launch. The warning dialog box appears because we do not configure the firewall to allow connections to port 22, Click Continue to continue.\nAt page Step 7: Review Instance Launch.\nClick Launch. In the Select an existing key pair or create a new key pair dialog box. Click Choose an existing key pair. In the Key pair name section, select LabKeypair. Click I acknowledge that I have access to the corresponding private key file, and that without this file, I won’t be able to log into my instance.. Click Launch Instances to create EC2 server. Click View Instances to return to the list of EC2 instances.\nClick the edit icon under the Name column.\nIn the Edit Name dialog box, enter Private Windows Instance. Click Save. Next, we will proceed to create IAM Roles to serve the Session Manager.",
    "description": "Go to EC2 service management console Click Instances. Click Launch instances. On the Step 1: Choose an Amazon Machine Image (AMI) page. Drag the mouse down. Click Select to select AMI Microsoft Windows Server 2019 Base. On the Step 2: Choose an Instance Type page. Click on Instance type t2.micro. Click Next: Configure Instance Details.",
    "tags": [],
    "title": "Create Private Instance",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.6-createec2windows/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey \u003e Example Content \u003e Preparation  \u003e Preparing VPC and EC2 \u003e Create Private Instance",
    "content": "Truy cập giao diện quản trị dịch vụ EC2 Click Instances. Click Launch instances. Tại trang Step 1: Choose an Amazon Machine Image (AMI). Kéo chuột xuống phía dưới. Click Select để lựa chọn AMI Microsoft Windows Server 2019 Base. Tại trang Step 2: Choose an Instance Type. Click chọn Instance type t2.micro. Click Next: Configure Instance Details. Tại trang Step 3: Configure Instance Details Tại mục Network chọn Lab VPC. Tại mục Subnet chọn Lab Private Subnet. Tại mục Auto-assign Public IP chọn Use subnet setting (Disable) Click Next: Add Storage. Click Next: Add Tags để chuyển sang bước kế tiếp. Click Next: Configure Security Group để chuyển sang bước kế tiếp. Tại trang Step 6: Configure Security Group. Chọn Select an existing security group. Chọn security group SG Private Windows Instance. Click Review and Launch. Hộp thoại cảnh báo hiện lên vì chúng ta không cấu hình tường lửa cho phép kết nối vào port 22, Click Continue để tiếp tục.\nTại trang Step 7: Review Instance Launch.\nClick Launch. Tại hộp thoại Select an existing key pair or create a new key pair. Click chọn Choose an existing key pair. Tại mục Key pair name chọn LabKeypair. Click chọn I acknowledge that I have access to the corresponding private key file, and that without this file, I won’t be able to log into my instance.. Click Launch Instances để tạo máy chủ EC2. Click View Instances để quay lại danh mục EC2 instances.\nClick vào biểu tượng edit dưới cột Name.\nTại hộp thoại Edit Name điền Private Windows Instance. Click Save. Tiếp theo chúng ta sẽ tiến hành tạo các IAM Role để phục vụ cho Session Manager.",
    "description": "Truy cập giao diện quản trị dịch vụ EC2 Click Instances. Click Launch instances. Tại trang Step 1: Choose an Amazon Machine Image (AMI). Kéo chuột xuống phía dưới. Click Select để lựa chọn AMI Microsoft Windows Server 2019 Base. Tại trang Step 2: Choose an Instance Type. Click chọn Instance type t2.micro. Click Next: Configure Instance Details.",
    "tags": [],
    "title": "Tạo Private Windows EC2",
    "uri": "/example-content/2-prerequiste/2.1-createec2/2.1.6-createec2windows/_index.vi/index.html"
  },
  {
    "breadcrumb": "",
    "content": "This is your new home page.",
    "description": "This is your new home page.",
    "tags": [],
    "title": "My First Cloud Journey",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "My First Cloud Journey",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
