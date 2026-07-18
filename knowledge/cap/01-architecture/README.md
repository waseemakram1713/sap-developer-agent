# Module 01 — CAP Architecture

## Overview
Architecture is the foundation of every SAP Cloud Application Programming Model (CAP) application. 

Before learning CDS, services, handlers, or deployment, it is important to understand how the framework is designed and why SAP recommends its architectural approach. This module explains the core architectural concepts that guide the design of maintainable, scalable, and cloud-native CAP applications.

---

## Learning Objectives
After completing this module you should understand:
- The overall CAP architecture
- The responsibilities of each application layer
- The CAP request lifecycle
- How CAP aligns with SAP Clean Core
- How CAP applications fit into SAP BTP
- Architectural best practices

---

## Module Contents

### 1. CAP Architecture Overview
Understand the major building blocks of a CAP application. Topics include:
- Framework overview
- Runtime
- CDS
- Services
- Persistence
- UI
- External integrations

### 2. Layered Architecture
Learn how responsibilities are separated. Topics include:
- Domain layer
- Service layer
- Business logic
- Persistence
- UI
- Integration

### 3. Request Lifecycle
Understand what happens when a request reaches a CAP application. Topics include:
- HTTP Request
- OData Processing
- Event Handling
- Database Access
- Response Generation

### 4. Clean Core
Understand SAP's recommended extension strategy. Topics include:
- Side-by-side extensions
- Loose coupling
- Upgrade safety
- Extensibility

### 5. Deployment View
Learn how CAP applications execute inside SAP BTP. Topics include:
- Cloud Foundry
- Kyma
- SAP HANA Cloud
- Destinations
- Authentication
- Services

### 6. Glossary
Definitions of important CAP architectural terms used throughout the knowledge base.

---

## Recommended Reading Order
1. CAP Architecture Overview
2. Layered Architecture
3. Request Lifecycle
4. Clean Core
5. Deployment View
6. Glossary

---

## Repository Standards
This module focuses on architecture rather than implementation details. Programming examples are intentionally minimal. Implementation guidance is covered in later modules.

---

## Related Modules
- Module 02 — Project Structure
- Module 03 — Domain Modeling
- Module 04 — Services
- Module 05 — Runtime
- Module 06 — Security