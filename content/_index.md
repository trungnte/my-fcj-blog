---
title : "Session Management"
# date :  "`r Sys.# date()`" 
weight : 1 
chapter : false
---
# Work with Amazon System Manager - Session Manager

### Overall
 In this lab, you'll learn the basics and practice of Amazon  System Manager - Session Manager
. Perform creating public and private instance connections. 

![ConnectPrivate](/images/arc-log.png) 

### Content
 1. [Introduction ](1-introduce/)
 2. [Preparation](2-prerequiste/)
 3. [Connect to EC2 instance](3-accessibilitytoinstances/)
 4. [Manage session logs](4-s3log/)
 5. [Port Forwarding](5-Portfwd/)
 6. [Clean up resources](6-cleanup/)


```tree
- 1-Introduce | folder | secondary
  - _index.md | fa-fw fab fa-markdown
  - _index.vi.md | fa-fw fab fa-markdown
- 2-Prerequiste | folder | secondary
  - 2.1-createec2 | folder | secondary
    - 2.1.1-createvpc | folder
      - _index.md | fa-fw fab fa-markdown 
      - _index.vi.md | fa-fw fab fa-markdown
    - 2.1.2-createpublicsubnet| folder
      - _index .md | fa-fw fab fa-markdown
      - _index.vi.md | fa-fw fab fa-markdown
    - 2.1.3-createprivatesubnet| folder
      - _index.md | fa-fw fab fa-markdown
      - _index.vi.md | fa-fw fab fa-markdown
    - 2.1.4-createsecgroup| folder
      - _index.md | fa-fw fab fa-markdown
      - _index.vi.md | fa-fw fab fa-markdown
    - 2.1.5-createec2linux| folder
      - _index.md | fa-fw fab fa-markdown
      - _index.vi.md | fa-fw fab fa-markdown
    - 2.1.6-createec2windows| folder
      - _index.md | fa-fw fab fa-markdown
      - _index.vi.md | fa-fw fab fa-markdown
      - _index.md | fa-fw fab fa-markdown
      - _index.vi.md | fa-fw fab fa-markdown
  - 2.2-createiamrole| folder | secondary
    - _index.md | fa-fw fab fa-markdown
    - _index.vi.md | fa-fw fab fa-markdown
    - _index.md | fa-fw fab fa-markdown
    - _index.vi.md | fa-fw fab fa-markdown
- 3-Accessibilitytoinstances| folder | secondary
  - 3.1-Public-instance| folder | secondary
    - _index.md | fa-fw fab fa-markdown
    - _index.vi.md | fa-fw fab fa-markdown
  - 3.2-Private-instance| folder | secondary
    - 3.2.1-enablevpcdns| folder
      - _index.md | fa-fw fab fa-markdown
      - _index.vi.md | fa-fw fab fa-markdown
    - 3.2.2-createvpcendpoint| folder
      - 3.2.2.1-endpointssm| folder
        - _index.md | fa-fw fab fa-markdown
        - _index.vi.md | fa-fw fab fa-markdown
      - 3.2.2.2-endpointssmmessages| folder
        - _index.md | fa-fw fab fa-markdown
        - _index.vi.md | fa-fw fab fa-markdown
      - 3.2.2.3-endpointec2messages| folder
        - _index.md | fa-fw fab fa-markdown
        - _index.vi.md | fa-fw fab fa-markdown
        - _index.md | fa-fw fab fa-markdown
        - _index.vi.md | fa-fw fab fa-markdown
      - 3.2.3-connectec2| folder
        - _index.md | fa-fw fab fa-markdown
        - _index.vi.md | fa-fw fab fa-markdown
        - _index.md | fa-fw fab fa-markdown
        - _index.vi.md | fa-fw fab fa-markdown
        - _index.md | fa-fw fab fa-markdown
        - _index.vi.md | fa-fw fab fa-markdown
- 4-s3log| folder | secondary
  - 4.1-updateiamrole| folder | secondary
    - _index.md | fa-fw fab fa-markdown
    - _index.vi.md | fa-fw fab fa-markdown
  - 4.2-creates3bucket| folder | secondary
    - _index.md | fa-fw fab fa-markdown
    - _index.vi.md | fa-fw fab fa-markdown
  - 4.3-creategwes3| folder | secondary
    - _index.md | fa-fw fab fa-markdown
    - _index.vi.md | fa-fw fab fa-markdown
  - 4.4-configsessionlogs| folder | secondary
    - _index.md | fa-fw fab fa-markdown
    - _index.vi.md | fa-fw fab fa-markdown
    - _index.md | fa-fw fab fa-markdown
    - _index.vi.md | fa-fw fab fa-markdown
- 5-Portfwd| folder | secondary
  - _index.md | fa-fw fab fa-markdown
  - _index.vi.md | fa-fw fab fa-markdown
- 6-cleanup| folder | secondary
  - _index.md | fa-fw fab fa-markdown
  - _index.vi.md | fa-fw fab fa-markdown
- _index.md | fa-fw fab fa-markdown | purple
- _index.vi.md | fa-fw fab fa-markdown | purple
```