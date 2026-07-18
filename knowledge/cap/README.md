# SAP Cloud Application Programming Model (CAP)

## Overview
The SAP Cloud Application Programming Model (CAP) is SAP's framework for building enterprise-grade cloud applications on SAP Business Technology Platform (SAP BTP).

CAP enables developers to focus on business logic by providing a consistent programming model, built-in best practices, and support for enterprise features such as OData, authentication, authorization, persistence, messaging, and extensibility.

Within the SAP Developer Agent project, CAP serves as the primary backend application framework.

---

## Why We Use CAP
We use SAP CAP because it provides:
- Rapid application development
- Domain-driven development through CDS
- Built-in OData support
- Enterprise-grade security
- Database abstraction
- Event-driven capabilities
- Native SAP BTP integration
- Clean Core extensibility

CAP allows developers to spend more time implementing business value and less time building technical infrastructure.

---

## Our Development Philosophy
Within this repository we follow these principles:
- Prefer declarative development over imperative code.
- Model the business domain before writing implementation.
- Keep business logic inside service handlers.
- Separate domain, service, and UI concerns.
- Build reusable business services.
- Follow SAP Clean Core principles.
- Prefer standard CAP capabilities before custom implementations.

---

## Repository Learning Path
The CAP knowledge base is organized into the following sections.

### Concepts
Core ideas behind CAP. Topics include:
- CAP Architecture
- Domain-Driven Design
- CDS
- Services
- Events
- Persistence
- Runtime

### Modeling
Business domain modeling. Topics include:
- Entities
- Types
- Aspects
- Associations
- Compositions
- Managed Data
- Draft Enablement
- Localization

### Services
Service layer implementation. Topics include:
- OData V4
- Actions
- Functions
- Event Handlers
- Custom Logic
- Validation
- Transactions

### Runtime
Application execution. Topics include:
- Request Lifecycle
- Hooks
- Events
- Transactions
- Messaging
- Logging
- Error Handling

### Security
Enterprise security. Topics include:
- Authentication
- Authorization
- XSUAA
- Roles
- Restrictions
- Multi-tenancy

### Deployment
Deploying CAP applications. Topics include:
- SQLite
- SAP HANA Cloud
- Cloud Foundry
- Kyma Runtime
- MTA
- CI/CD

### Testing
Application quality. Topics include:
- Unit Testing
- Integration Testing
- Mock Services
- API Testing

### Best Practices
Engineering guidance. Topics include:
- Project Structure
- Naming Conventions
- Performance
- Clean Code
- Clean Core
- Versioning

### References
Links to official SAP documentation and external resources. 

No SAP documentation is duplicated in this repository. Instead, this knowledge base provides engineering guidance and project-specific conventions.

---

## Project Standards
All CAP implementations should:
- Follow SAP recommended architecture.
- Keep services modular.
- Prefer reusable business logic.
- Use meaningful names.
- Avoid duplicated code.
- Keep implementations maintainable.
- Document architectural decisions.

---

## What This Knowledge Base Is
This knowledge base is:
- An engineering guide.
- A collection of SAP best practices.
- A decision-making framework.
- A reference for the SAP Developer Agent.

---

## What This Knowledge Base Is Not
This repository is **not** intended to replace:
- SAP Help Portal
- CAP Documentation
- SAP Learning
- API Reference

Official SAP documentation should always be treated as the authoritative source for product behavior and APIs. This repository complements those resources with engineering guidance, conventions, and reusable knowledge for this project.

---

## Related Technologies
This CAP knowledge base works together with:
- SAP BTP
- SAP HANA Cloud
- SAP Fiori Elements
- SAPUI5
- SAP Event Mesh
- SAP Integration Suite
- SAP AI Core
- SAP Generative AI Hub

---

## Version
Current Version: **1.0.0**