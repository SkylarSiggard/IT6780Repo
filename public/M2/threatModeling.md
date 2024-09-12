# Threat Modeling 

- **Clerk Authentication**
    - **Threat ID**: T1
    - **Threat Description**: Attackers attempts to bypass Clerk Authentication by intercepting session tokens. 
    - **Threat Type**: Spoofing. 
    - **Impact**: Unauthorized access to users accounts.
    - **Likelihood**: Medium. 
    - **Mitigation**: Use HTTPS for all traffic, securely store session tokens, set short-lived tokens, and enable multi authentication. 


- **Next.js API Routes**
    - **Threat ID**: T2
    - **Threat Description**: Attacker uses a poorly secure API endpoint to manipulate data in the SQLite Database. 
    - **Threat Type**: Tampering. 
    - **Impact**: Unauthorized modification of recipe data. 
    - **Likelihood**: High. 
    - **Mitigation**: Implement input validation (such as ZOD) and authentication checks on all API routes. 


- **SQLite Database**
    - **Threat ID**: T3
    - **Threat Description**: SQL injection in recipe submission forms allows attackers to extract or modify data in SQLite. 
    - **Threat Type**: Information Disclosure/ Tempering. 
    - **Impact**: Database compromise. 
    - **Likelihood**: High.
    - **Mitigation**: Use parameterized queries and ORM (e.g. Drizzle ORM) to prevent SQL injection. 


- **Email Content Injection**
    - **Threat ID**: T4
    - **Threat Description**: An attacker exploits weaknesses in how email content is generated, inserting malicious content such as links to phishing sites or malware.
    - **Threat Type**: Tampering.
    - **Impact**: Users could be tricked into clicking harmful links, leading to malware infection or data theft. 
    - **Likelihood**: Medium. 
    - **Mitigation**: Ensure proper sanitization of all users inputs that is included in email content. Validate and encode any dynamic content before rendering it in the email. 