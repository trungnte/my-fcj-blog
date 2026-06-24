+++
date = '2025-10-13T11:26:38+07:00'
# draft = true
title = 'EC2'
weight = 2
[params]
  menuPre = '<i class="fa-solid fa-server"></i> '
+++

## Amazon Elastic Compute Cloud (Amazon EC2)

- **Resizable**
- **Affordable**
- **Global**

## 1. What is Amazon EC2?

- Amazon EC2 provides resizable compute capacity in the cloud.
- Amazon EC2 eliminates the need to invest in hardware up front, so you can focus on developing and deploying applications faster.
- You can use Amazon EC2 to launch as many virtual servers, also known as compute instances, as you need.
- EC2 instance type: instance types are made up of varying combinations of CPU, memory, storage, and networking capacity.
- **Common use case with EC2 instance type**:
    - Compute-optimized instances for certain web applications and video transcoding.
    - Other common use cases include memory-optimized instances for big data analytics and caches, storage-optimized instances for large databases, and graphics-based instances for machine learning.

> [!NOTE]
> - Regardless of the instances type you choose, Amazon EC2 instances are:
>    - **Reliable**
>    - **Scalable:**
>        - using auto scaling, you can scale your EC2 instance count up or down to quickly handle changes in requirements or spikes and troughs in application popularity.
>        - Auto scaling reduces your need to forecast traffic, so that you can focus on application features.
>    - **Highly Available:**
>        - Amazon EC2 provides for high availability, because you can place instances across various Availability Zones.
>        - By launching instances in separate Availability Zones, you can protect your applications from failure of a single location.
>        - Regions consist of one or more Availability Zones and are geographically dispersed.
>        - Each Amazon EC2 Region has a 99.99 percent guarantee for almost no downtime.
>    - **Cost effective:**
>        - You can optimize your costs based on your needs and pay for only what you use.
>        - When you are finished using an instance, you can terminate it, and you are only charged for any remaining storage costs on data that you choose not to delete.
>        - There is a range of instance purchasing options:
>            - On-Demand Instances, which are purely pay as you go
>            - Savings Plans and Reserved Instances, which offer low prices for a 1-3 year commitment
>            - Dedicated Hosts, which offer physical servers dedicated for your use;
>            - Spot Instances, which offer low prices for applications that have flexible start and end times.
            
    
### **Provisioning**
    
- Choosing the operating system, networking details, storage options, and security settings.
    

## 2. What problems does Amazon EC2 solve?

![Screenshot 2025-05-06 at 14.47.52.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_14.47.52.png)

# Amazon EC2 benefits

- Elastic computing:
    - Increase or decrease capacity within minutes, not hours or days.
    - Can commission one, hundreds, or even thousands of server instances simultaneously.
    - Auto Scaling to maintain availability of your EC2 fleet and automatically scale your fleet up and down depending on your needs to maximize performance and minimize cost.
    - To scale multiple services, you can use AWS Auto Scaling.
- Complete control:
    - Full control including root access
    - Ability to interact with them
    - Can stop any instances while retaining the data on the boot partition and then subsequently restart the same instance by using web service APIs
    - Instances can be rebooted remotely by using web service APIs, or access to their console output.
- Flexible hosting services:
    - Choice of multiple instance types, operating systems, and software packages.
    - Select a configuration of memory, CPU, instance, storage, and boot partition size
- Integrated:
    - Integrated with most AWS services (S3, RDS, VPC)
    - This integration provides a complete, secure solution for computing, query processing, and cloud storage across a wide range of applications.
- Reliable:
    - EC2 offers a highly-reliable environment where replacement instances can be rapidly and predictably commissioned.
    - The service runs within the proven network infrastructure and data centers of Amazon.
- Secure:
    - Security is our highest priority. As an AWS customer, you will benefit from a data center and network architecture that’s built to meet the requirements of the most security-sensitive organizations
    - EC2 works in conjunction with Amazon VPC to provide security and robust networking functionality for your compute resources.
- Inexpensive:
    - Using Amazon EC2, you can take advantage of Amazon’s scale - you can pay a very low rate for the compute capacity that you actually consume.
- Get started quickly:
    - Get started quickly with Amazon EC2.
    - Ready to use in minutes whether launch an instance programmatically or AWS management console.
    - Stop or terminate them as quickly as starting.

# Amazon EC2 Architecture

Region > VPC > Elastic Load Balancing > AZ > Public subnet > Security group > EC2 instance

![Screenshot 2025-05-06 at 15.10.57.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_15.10.57.png)

## Region:

- A Region is a physical location around the world where AWS clusters data centers.
- Each Region is designed to be isolated from the other Regions. This separation achieves the greatest possible fault tolerance and stability.
- Ideally, when you launch an instance, you want to choose the Region that is closest to your users to help cut down on latency.

## VPC:

- Amazon VPC is a service that lets you launch AWS resources in a logically isolated virtual network that you define
- When you set up an AWS account, you are given a default VPS. However, you can create multiple VPCs in single Region or place them in different Regions.
- Each VPC can have a dedicated purpose to support different environments, such as production, development, and testing.
- If you do not specify the VPC to launch your instance in, then it will be launched in your default VPC.

## Subnets:

- Within each VPC, you can specify the subnet to place the EC2 instance in.
- A subnet is a range of IP addresses in your VPC.
- Use a public subnet for resources that must be connected to the internet and a private subnet for resources that won’t be connected to the internet.
- Subnets are associated with only one Availability Zone.

## Security groups:

- When you launch your EC2 instance, it will be protected by a security group that you select while configuring the instance.
- A security group acts as a virtual firewall for your EC2 instances to control incoming and outgoing traffic.
- You want to build your application to be highly available and fault tolerant. To do so, a best practice is to launch instances in multiple AZ and attach an Elastic Load Balancer. ELB automatically distributes incoming application traffic across multiple targets and virtual instances in one or more AZ

# Instance costs

The five main drivers that affect the instance cost:

- Instance purchasing options
- Tenancy
- Amazon Machine Image (AMI)
- EC2 instance type
- Storage type and size

# On-Demand Instances

- Pay for compute capacity per second (Amazon Linux and Ubuntu) or by the hour (all other operation systems)
- No long-term commitments
- No upfront payments
- Increase or decrease your compute capacity depending on the demands of your application
    
    
    | Use case | Problem solved |
    | --- | --- |
    | Short-term, spiky, or unpredictable workloads | Solves the need for immediate compute capacity |
    | Application development or testing |  |

# Reserved Instances (RI)

Reserved Instances can provide a significant discount for your architectures.

- Up to 72 percent discount compared to On-Demand Instances
- Prepay for capacity (1-year or 3-year buying options)
- Three upfront payment methods:
    - Standard RIs
    - Convertible RIs
    - Scheduled RIs
    
    | Use case | Problem solved |
    | --- | --- |
    | Predictable usage workloads that do not require flexibility in compute power | Provides the ability to reserve capacity ahead of time, reducing cost |
    | Workloads that last longer than 1 year |  |
    | Users are able to make upfront payments to reduce total computing costs even further |  |

# Savings Plans Instances

AWS offers two types of savings plans:

- Compute Saving Plans provide the most flexibility and help to reduce your costs by up to 66 percent.
    - These plans automatically apply to EC2 instance usage regardless of instance family, size, AZ, Region, operating system, or tenancy. They also apply to AWS Fargate and AWS Lambda usage.
- EC2 instances Savings Plans apply to specific instance family within a specific Region and provide the largest discount (up to 72 percent, like Standard RIs)

| Use case | Problem solved |
| --- | --- |
| Long time worloads |  |
| Computing needs that might need flexibility over location or by instance power | Don’t have to coordinate your RI purchases |

# Spot Instances

- Purchase unused Amazon EC2 capacity
- Up to 90 percent off compared to on-demand pricing
- Prices controlled by AWS based on supply and demand
- Termination notice provided 2 minutes prior to termination
- Spot blocks: Launch Spot Instances with a duration lasting 1-6 hours

| Use case | Problem solved |
| --- | --- |
| Applications with flexible start and end time | Low budgeted workloads can be completed with low cost instances, provided that interruptions can be tolerated |
| Applications only feasible at very low compute prices |  |
| Users with urgent computing needs for large amounts of additional capacity |  |

# Tenancy

- Tenancy defines how EC2 instances are distributed across the physical host hardware
- Amazon EC2 offers three tenancy options for hosting your instances. The tenancy that you choose will affect pricing
    - Shared tenancy
    - Dedicated instance
    - Dedicated host

![Screenshot 2025-05-06 at 16.01.50.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_16.01.50.png)

![Screenshot 2025-05-06 at 18.12.28.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_18.12.28.png)

# Using Amazon EC2

## Step1: Using tags

### Instance name and tags

- A tag is a label that you can assign to an AWS resource
    - It consists of a key and an optional value
    - The name of the instance is default tag. ***Key=Name; Value=(the name you give the instance)***
- Potential benefits of tagging: Filtering, automation, cost allocation, and access control

### Manage tags:

- Add, remove, or edit tags.
- The tag limit per Amazon EC2 resource is 50 tags.
- Naming and tagging resources is optional.

### Search and filter for tags:

- Search for resources by key or by value
- Filter and search for resources by a combination of tag keys and values

### Benefits of using tags

1. Resource organization: 
    1. Configure tags to displayed with resources 
    2. Can search and filter by tag
    3. AWS Resource Group service, create groups of AWS resources based on one or more tags or portions of tags.
    4. Using Resource Groups and Tag Editor, you can consolidate and view data for applications that consist of multiple services, resources, and Regions in one place
2. Cost management:
    1. Can use AWS Cost Explorer and detailed billing reports to break down AWS costs by tag
    2. Typically, you use business tags such as cost center, business unit, customer, or project to associate AWS costs with traditional cost-allocation dimensions. But a cost allocation report can include any tag.
3. Automation
    1. Resource-specific or service-specific tags are often used to filter resources during automation activities. Automation tags are used to opt in or opt out of automated tasks or to identify specific versions of resources to archive, update, or delete.
    2. For example, you can run automated start or stop scripts that turn off development environments during nonbusiness hours to reduce costs. In this scenario, EC2 instance tags are a simple way to identify instances to opt out of this action. For scripts that find and delete stale, out-of-date, or rolling Amazon EBS snapshots, snapshot tags can add an extra dimension of search criteria.
4. Access control
    1. AWS Identify and Access Management (IAM) provides fine-grained access control across all of AWS. With IAM, you can specify who can access which services and resources, and under which conditions. Using IAM, you can use tagged resources to implement attribute-based control (ABAC). You can create IAM policies that allow operations based on tag information to control access. ABAC helps provide better control over which resources a user can modify, use or delete.
    2. For example, you can create an IAM policy that allows users to terminate an instance but denies the action if the instance has the tag environment=production.

## Step2: Choosing an Amazon Machine Image

Amazon Machine Image components are as follows

1. **Templates for the root volume** of the instance contain the following
- Operating system (OS)
- Application servers
- Applications
1. **Launch permissions control** which AWS accounts can use the AMI
2. **Block device mapping** specifies the volumes to attach to the instance (if any) when it is launched.

### Using AMIs

- Choose an AMI that fits the use case of your instance.
- Use the same AMI to launch multiple instances that should have the same configuration.
- If instances have different use cases, use AMIs that are specific to the use cases of each instance.

> **Before you create your instance, it is important to fully understand what the instance will be used for. After an instance is created, you cannot change the AMI.**
> 

### Where do you get an AMI?

1. Pre-built: Amazon offers a number of pre-built AMIs to launch your instances. These AMIs include Linux and Windows options with various suboptions to tailor your setup.
2. AWS Marketplace: The AWS marketplace offers a digital catalog with thousands of software solutions listed. These AMIs can offer specific use cases to help you get started quickly.
3. Create your own: An AMI is an anonymized, block-level copy of the root volume of a donor machine or golden instance. It is a virtual machine (VM) that you configured with the specific OS and application content that you want placed on the AMI. When you create an AMI, Amazon EC2 stops the instance, snapshots its root volume, and finally registers the snapshot as an AMI.
4. Community AMIs: people all over the globe create community AMIs. These AMIs are not vetted by AWS and are used at your own risk. These AMIs can offer many different solutions to various problems, but use them with great care. They should be thoroughly reviewed for security concerns when using them in any production or corporate environment.

### AMI benefits

1. Repeatability
2. Reusability
3. Recoverability
4. Marketplace solutions
5. Backups

## Step3: Instances types

The instance type that you choose determines the following:

- Processing power (CPU)
- Memory (RAM)
- Disk space and disk type
- Network performance

Instance types optimized for:

- Light workloads
- Heavy workloads
- Extreme workloads

### Instances families

Each instance belongs to an instance family. An instance family is a group of instances, with varying configurations, which are based on similar compute, memory, and storage capacities.

**AWS EC2 instance type families:**

- T family
- M family
- C family
- P family
- R family

### Instances types names

![Screenshot 2025-05-06 at 23.06.40.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.06.40.png)

### Instance categories

1. General purpose
    
    ![Screenshot 2025-05-06 at 23.08.49.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.08.49.png)
    
2. Compute optimized
    
    ![Screenshot 2025-05-06 at 23.09.51.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.09.51.png)
    
3. Memory optimized
    
    ![Screenshot 2025-05-06 at 23.10.47.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.10.47.png)
    
4. Accelerated computing
    
    ![Screenshot 2025-05-06 at 23.11.33.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.11.33.png)
    
5. Storage optimized
    
    ![Screenshot 2025-05-06 at 23.12.11.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.12.11.png)
    

### Scaling instances vertically

![Screenshot 2025-05-06 at 23.13.50.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.13.50.png)

## Step4: Key pairs

A key pair consists of the following:

- A public key that AWS stores
- A private key file that you store

Connecting to your instance with your key pair:

- Windows AMIs use the private key to obtain the administrator password that you need to log in to your instance through Remote Desktop Protocol (RDP).
- Linux AMIs use the private key to use Secure Shell (SSH) to securely connect to your instance.

## Step5: Network settings

- Amazon VPC
- Subnet
- Security group
- Public IP address

When you starting using Amazon VPC, you have a default VPC in each AWS Region. A default VPC comes with a public subnet in each AZ of the Region. Therefore, you can immediately start launching Amazon EC2 instances into a default VPC

![Screenshot 2025-05-06 at 23.59.45.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.59.45.png)

The Northern Virginia Region has six public subnets, one for each of its six AZ. You can create more public subnets in your default VPC, and you can even create and customize additional VPCs in any Region

![Screenshot 2025-05-06 at 23.57.41.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-06_at_23.57.41.png)

### Public IP address

- An IP address that’s reachable from the internet
- Used to communicate between your instances and the internet
- Depending on the situation, a public IP address might or might not be auto-assigned to your EC2 instance.

| Default VPC | Default VPC | Custom VPC |
| --- | --- | --- |
| Default subnet | Custom subnet | Custom subnet |
| Auto-assign public IP → enable | Auto-assign public IP → disable by default | Auto-assign public IP → disable by default |
| Can choose disable if you want | Can change it | Can change it |

### Security groups

- Virtual firewall for your instances
- Controls network access
- Exists outside the instance’s guest OS

Security group rules features:

- Filters traffic that’s allowed to access your instance
- Specifies allow rules but not deny rules
- Can be modified at any time
- Updates affect attached instances in real time

### Security group - rule components

- Type: the specific type of protocol to open to network traffic. Common protocol SSH, RDP, HTTP, HTTPS
- Protocol: the most common protocols are 6 (TCP), 17 (UDP) and 1 (ICMP)
- Port range: specify a single port number (ex 22) or range of port numbers (ex 7000-8000)
- Source: source (inbound rules) or (destination) outbound rules, specify a single IP address , range of IP address. If the instance is hosting a web page, you can leave it open to all traffic on HTTP.

 

### Inbound and outbound rules

inbound rules:

![Screenshot 2025-05-07 at 00.20.37.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_00.20.37.png)

outbound rules:

![Screenshot 2025-05-07 at 00.21.06.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_00.21.06.png)

### Security groups’ stateful attributes

![Screenshot 2025-05-07 at 00.24.53.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_00.24.53.png)

### Managing security groups

![Screenshot 2025-05-07 at 00.26.26.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_00.26.26.png)

## Step 6: Configure storage

Amazon Elastic Block Store (Amazon EBS) is a durable, detachable, high-performance block-storage service designed for Amazon EC2.

- Works like an external hard drive
- Can provide low latency
- Able to handle almost any computing requirements

Amazon EBS capacities

- Run databases
- Host applications
- Handle most storage computing needs

### EBS volume types and use case

1. Solid state drive (SSD) - based
    1. **General purpose**: is an SSD volume that balances price and performance for a wide variety of workloads
        
        Use case:
        
        - Recommended for most workloads
        - Virtual desktops
        - Medium-sized single instance databases such as Microsoft SQL Server and Oracle
        - Latency-sensitive interactive applications
        - Boot volumes
        - Development and test environments
        
    2. **Provisioned IOPS**: Input/Output Operations per Second (IOPS) measures the number of maximum reads and writes that a computing storage device can perform in a second. Provisioned IOPS are the highest-performance SSD volumes for mission-critical low-latency or high-throughput workloads. With these volumes, customers can meet the IOPS and throughput requirements of their most intensive business-critical applications.
        
        Use case:
        
        - Critical business applications that require sustained IOPS performance
        - Large database workloads
        
2. Hard disk drive (HDD) - based
    1. **Throughput Optimized**: is a low-cost HDD volume designed for frequently accessed, throughput-intensive workloads
        
        Use case:
        
        - Streaming workloads
        - Big data
        - Data warehouses
        - Log processing
        - Cannot be a boot volume
        
    2. **Cold**: HDD is the lowest cost HDD volume and is designed for less frequently accessed workloads.
        
        Use case:
        
        - Throughput-oriented storage for large volumes of data that is infrequently accessed
        - Scenarios where the lowest storage cost is important
        - Cannot be a boot volume

### Amazon EBS storage configuration options

1. Volume types: 
    
    When choosing a volume type, you cannot use Throughput Optimized or Cold HHD volumes for root volumes. The root volume must be a general purpose or a Provisioned IOPS volume. You can add additional volumes (non-root volumes) to your instance and mix and match any types with other volume types as needed.
    
2. Volume size:
    
    The size of the volume is chosen in GiB. If you are creating the volume from a snapshot, then the size of the volume cannot be smaller than the size of the snapshot.
    
    Supported volume sizes are as follows:
    
    - General purpose volumes: 1GiB to 16,384 GiB
    - Provisioned IOPS: 4 GiB to 16,384 GiB
    - Throughput Optimized or Cold HDD: 125 GiB to 16,384 GiB
3. Delete on termination
    
    Delete on termination indicates whether the volumes should be automatically deleted when the instance is terminated. If you disable this delete on termination, then the volume will persist independently from the running life of an EC2 instance. As a result, the volume will remain provisioned in your account until you delete it manually.
    
    You can also change the delete on termination behavior after the instance has been launched.
    
4. Encryption
    
    Amazon EBS encryption is an encryption solution for your EBS volumes. You have the option to encrypt your root volume and any additional volumes that you attach to your EC2 instance. Amazon EBS encryption uses AWS Key Management Service (AWS KMS) keys to encrypt volumes. AWS KMS is a security service that lets you create and manage cryptographic keys to control their use across a wide range of AWS services.
    

### Adding a file system

- Amazon Elastic File System (Amazon EFS) is a file system that you can use to share files among multiple EC2 instances. It automatically grows and shrinks as you add and remove files with no need for management or provisioning
- You can attach instances to the file systems as you launch your instance or afterwards.
- You can remove instances from the file system without losing any files stored on Amazon EFS
- Amazon EFS cannot act as a root volume. Each instance that is attached to Amazon EFS must have its own root volume.

> *Amazon EFS will not act as a gateway for instances to access files that are stored on other EC2 instances. If an instance wants to share files with other instances, it must write them to the shared file system so the other instances can access them*
> 

![Screenshot 2025-05-07 at 11.19.25.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_11.19.25.png)

### Amazon EC2 instance store

An instance store provides temporary block-level storage for your instance. This storage is located on disks that are physically attached to the host computer.

An instance store is ideal for temporary storage of information that changes frequently, such as buffers, caches, scratch data, and other temporary content.

- **Persistent volumes**: Instance store volumes are not persistent storage. If your instance is (on purpose or by system failure) stopped, hibernated, or terminated, you will lose all of your data on the volume.
- **Limited availability**: Instance store volumes have limited availability because they are only optional for a certain combination of AMIs and instance types. When selecting an AMI, you can filter for AMIs that offer instance store volumes.
- **Add volumes**: You can specify instance store volumes for an instance only when you launch it. After the instance is launched, you can add EBS volumes to the instance but not instance store volumes.
- **Detach volumes**: An instance store volume’s disks are physically attached to the instance. Therefore, you cannot detach an instance store volume from one instance and attach it to a different instance. AWS does not offer you the option to detach the volume.
- **Configure volumes**: Instance store volumes are not configurable. The instance type that you choose predetermines the volume type (SSD or HHD) and size. These configurations are not optional. You also cannot encrypt these volumes.

## Step 7: Advanced details

1. **IAM identities: An IAM identity represents a user, and can be authenticated and then authorized to perform actions in AWS**
2. **Permission policies**: Policies determine which actions an identity can perform, on which AWS resources, and under which conditions.
3. **Assumable access**: to assume a role, the user must meet the requirements outline in the IAM policy. Role access can be granted to IAM users or federated users.
4. **Temporary credentials**: Temporary credentials have a more restricted set of permissions than the standard IAM user, and they expire automatically after a set period of time.

### Using IAM roles with AWS services

![Screenshot 2025-05-07 at 11.59.38.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_11.59.38.png)

> ***You should never store AWS credentials on an EC2 instance. It is highly insecure***
> 

### Managing roles

![Screenshot 2025-05-07 at 12.05.28.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_12.05.28.png)

### User data

![Screenshot 2025-05-07 at 12.12.29.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_12.12.29.png)

### Additional advance settings options

- **Request Spot Instances**: you can request Spot Instances at the Spot price, which are capped off at the On-Demand price. Remember that Spot Instances are for workloads that can be interrupted. Requesting Spot Instances can affect pricing because they are cheaper than On-Demand Instances.
- **Shutdown behavior**: setting affects how the instance behaves when an OS-level shutdown is performed. Instances can be either terminated or stopped. If no value is specific, the value of the AMI will still be used.
- **Termination protection**: if termination protection is enabled, the instance cannot be terminated by using the console, API, or CLI until termination protection is disabled. If no value is specified, the value of the source AMI will still be used.
- **Detailed monitoring**: Amazon CloudWatch is a monitoring service that provides you with data and actionable insights to monitor your applications. It is continually monitoring, collecting, and analyzing metrics about your instances. It updates your metrics dashboard every 5 minutes, without any additional charges. If detailed monitoring is enabled, CloudWatch updates metrics to your monitoring dashboards every minutes. Additional charges will apply if it is enabled. If no value is specified, the value of the source AMI will still be used.
- **Tenancy**: You might recall that in the previous section of the course, you learned about dedicated tenancy. At this point, you can make that choice to have it enabled or disabled. Dedicated tenancy instances run on single-tenant, dedicated hardware. Host tenancy instances run on a dedicated host. If you select dedicated tenancy or dedicated host, your costs will be increased for your instance. You have no additional charge for running your instance on shared hardware. If no value is specified, the value of the source AMI will still be used.

## Configuration considerations

![Screenshot 2025-05-07 at 12.26.59.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_12.26.59.png)

Note:

![Screenshot 2025-05-07 at 12.26.46.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_12.26.46.png)

# Activity: Configuring an instance based on the use case

1. **Scenario**
    
    Your manager asked you to create an EC2 instance that will host a dynamic website. After asking your manager more specific questions, you learn the following:
    
    - The website should be available to everyone on the web, but the primary customer target is on the east coast of the United States.
    - The instance that is hosting the website should have a Windows operating system.
    - The application should be launched with the most recent patches and updates.
    - The instance will need to have an administrator update patches from time to time.
    - The instance must be protected from accidentally being terminated.
    - The application needs to access Amazon S3
    - The instance’s resources should be reportable for costs.
    - The costs to run the instance should be kept as low as posible.
2. **Name and tags:**
    
    Requirements to consider:
    
    - The instance’s resources should be reportable for costs.
    - The costs to run the instance should be kept as low as possible.
    
    To help track the costs of the instance, tags should be used. You can run reports based on tags to gain insight into the monthly costs of this particular instance.
    
    | Key | Value |
    | --- | --- |
    | Name | My test server |
    | Dept | Development |
3. **AMI**
    
    Requirements to consider:
    
    - The instance that is hosting the website should have a Windows operating system.
    - The costs to run the instance should be kept as low as possible.
    
    An AMI should be chosen that is packaged with Windows as the operating system.
    
    Also, you should give careful consideration for any other software that might be needed when choosing your AMI. Your manager said to keep costs as low as possible. 
    
    However, you don’t want the performance of your website to suffer in order to keep costs low. 
    
    Remember that AMIs cannot be switched out. If you later find that you need a more advanced AMI, you will need to create a new instance.
    
    Amazon Machine Image components:
    
    - A template for the root volume
    - Launch permissions
    - A block device mapping
    
4. **Instance type**
    
    Requirements to consider:
    
    - The website should be available to everyone on the web, but the primary customer target is on the east coast of the United States.
    - The costs to run the instance should be kept as low as possible.
    
    The instance is going to be used to host a website, and cost is a factor. Therefore, the most cost-effective instance type for a web server is one of the families in the general purpose category. Remember that instance types can be changed. You can scale up or scale down as needed. For example, you might start with an instance in the T3 family, and scale up if you need more CPU 
    
    ![Screenshot 2025-05-07 at 13.02.38.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_13.02.38.png)
    
5. **Key pair**
    
    Requirements to consider:
    
    - The instance will need to have an administrator update patches from time to time.
    
    Because the instance will need to have an administrator update patches from time to time, the instance should be created with a key pair. You can either create a new key pair or use an existing key pair. The administrator who is making the updates should have access to this key pair 
    
    ![Screenshot 2025-05-07 at 13.05.14.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_13.05.14.png)
    
6. **Network settings**
    
    Requirements to consider:
    
    - The instance that is hosting the website should have a Windows operating system.
    - The website should be available to everyone on the web, but the primary customer target is on the east coast of the United States.
    
    The website will be primarily targeting customers on the east coast of the United States. Therefore, the best Region to launch your instance in is the N. Virginia Region. You should be sure that the VPC and subnet that you place your instance in are configured for internet access. Also, a public IP address should be assigned to the instance.
    
    The security group should have inbound rules that allow for the following:
    
    - Internet (HTTP/HTTPS) traffic for the public website to be accessible to the internet.
    - Remote desktop protocol (RDP) traffic for an administrator to log in for patching and updating the instance. If the instance had a Linux OS, then you would use SSH instead.
        
        ![Screenshot 2025-05-07 at 13.12.00.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_13.12.00.png)
        
    
7. **Storage configurations**
    
    Requirements to consider:
    
    - The website should be available to everyone on the web, but the primary customer target is on the east coast of the United States.
    - The costs to run the instance should be kept as low as possible.
    
    A general purpose EBS volume would make the best choice for this workload. A provisioned IOPS volume is over-resourcing and will cost you more than you need to spend. If the website was hosting a critical business website with a large database, then a provisioned IOPS volume could be the right solution. You can always scale to meet the needs of your storage.
    
    ![Screenshot 2025-05-07 at 13.16.05.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_13.16.05.png)
    
8. **Advanced details**
    
    Consider the following requirements:
    
    - The instance will need to have an administrator update patches from time to time.
    - The application must be protected from accidentally being terminated
    - The application needs to access Amazon S3
    
    Because the application must access Amazon S3, you should attach an **IAM role** to the instance that has sufficient permissions to perform the required tasks.
    
    ![Screenshot 2025-05-07 at 13.20.05.png](/images/FirstCloudJourney/03-Compute/02-EC2/Screenshot_2025-05-07_at_13.20.05.png)
    
    To protect the instance from accidental termination, enable **termination protection**.
    
    To update and patch the instance when it is launched, add the appropriate script to the **user data** field.
