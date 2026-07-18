# Engineering Decision Document: CAP Architecture Overview

**Module:** 01 – Architecture  
**Version:** 1.0.0  
**Status:** Approved

---

# 1. Purpose

This document defines the architectural principles, design philosophy, and high-level structure of SAP Cloud Application Programming Model (CAP) applications used within the SAP Developer Agent.

It serves as the architectural foundation for all future knowledge modules, engineering decisions, skills, templates, and automation.

This document complements the official SAP CAP documentation by focusing on engineering guidance and architectural decision-making rather than framework syntax or API details.

---

# 2. Overview

The SAP Cloud Application Programming Model (CAP) is SAP's enterprise application development framework for building cloud-native applications on SAP Business Technology Platform (SAP BTP).

CAP promotes:

- Domain-Driven Design (DDD)
- Separation of Concerns (SoC)
- Service-Oriented Architecture (SOA)
- Declarative Development
- Cloud-Native Design
- SAP Clean Core

Rather than requiring developers to implement infrastructure concerns manually, CAP provides standardized capabilities for:

- Data modeling
- Service exposure
- Authentication and authorization
- Persistence
- Transactions
- Event handling
- Messaging
- Extensibility

This enables engineering teams to focus primarily on delivering business value.

---

# 3. Business Motivation

Enterprise software evolves continuously. Without a clear architecture, applications become increasingly difficult to maintain, extend, test, and upgrade.

CAP addresses these challenges by promoting clear architectural boundaries and standardized development practices.

Benefits include:

- Maintainable application architecture
- Consistent development patterns
- Faster feature delivery
- Reduced technical debt
- Simplified testing
- Upgrade-friendly extensions
- Cloud-native scalability
- Better alignment with SAP Clean Core principles

---

# 4. Architectural Principles

The SAP Developer Agent follows these architectural principles for every CAP project.

## Domain First

Model the business domain before implementing services or business logic.

The domain model represents the business and should remain independent from UI, persistence implementation details, and integrations.

---

## Separation of Concerns

Each architectural layer should have a single responsibility.

Business logic, persistence, service definitions, UI, and integrations should remain loosely coupled.

---

## Service Orientation

Applications expose business capabilities through well-defined services.

Services define *what* consumers can access, while business logic defines *how* those capabilities are implemented.

---

## Declarative Development

Prefer declarative modeling using CDS before implementing imperative code.

Use framework capabilities whenever they satisfy business requirements.

---

## Clean Core

Design applications as side-by-side extensions.

Avoid modifying SAP standard applications whenever an extension approach is available.

---

# 5. High-Level Architecture

A typical CAP application consists of the following logical layers.

```text
================================================================================
                               CLIENT LAYER
--------------------------------------------------------------------------------
 SAP Fiori Elements | SAPUI5 | Mobile Apps | External OData/REST Consumers
================================================================================
                                      │
                                      │ HTTP / REST / OData V4
                                      ▼
================================================================================
                            SERVICE LAYER (srv/)
--------------------------------------------------------------------------------
 OData Services
 Actions
 Functions
 Service Definitions
================================================================================
                                      │
                                      │ Request Processing
                                      ▼
================================================================================
                     APPLICATION LOGIC LAYER (srv/)
--------------------------------------------------------------------------------
 Event Handlers
 Business Rules
 Validations
 Orchestrations
 Custom Logic
================================================================================
                                      │
                                      │ cds.ql / Persistence Services
                                      ▼
================================================================================
                         DOMAIN & PERSISTENCE LAYER (db/)
--------------------------------------------------------------------------------
 CDS Entities
 Types
 Aspects
 Associations
 Compositions
================================================================================
                                      │
                                      ▼
================================================================================
                          DATABASE PLATFORM
--------------------------------------------------------------------------------
 SAP HANA Cloud
 SQLite (Development)
 PostgreSQL (Supported Scenarios)
================================================================================
```

Each layer has clearly defined responsibilities and communicates through well-defined interfaces.

---

# 6. Core Components

## Domain Model

Defines the business using CDS.

Typical artifacts include:

- Entities
- Types
- Aspects
- Associations
- Compositions
- Enumerations

The domain model represents business concepts and should remain technology-independent.

---

## Service Layer

The service layer exposes business capabilities.

Responsibilities include:

- OData services
- Projections
- Actions
- Functions
- Service contracts

---

## Application Logic Layer

Business behavior is implemented through event handlers.

Responsibilities include:

- Validation
- Authorization
- Calculations
- Business rules
- Workflow orchestration
- Custom processing

Business logic should remain independent from UI implementations.

---

## Persistence Layer

Responsible for storing and retrieving business data.

CAP abstracts persistence through CDS models and persistence services, allowing applications to work with supported databases while minimizing database-specific code.

---

## Integration Layer

Enterprise applications often integrate with additional SAP and non-SAP services.

Examples include:

- SAP Event Mesh
- SAP Integration Suite
- REST APIs
- External OData services
- Messaging platforms

Integrations should remain loosely coupled whenever possible.

---

# 7. Engineering Decisions

Within this repository, we intentionally follow these engineering decisions.

- Model the domain before implementing services.
- Prefer CDS over manual database definitions.
- Keep business logic in backend services.
- Avoid business logic inside UI applications.
- Prefer reusable services over duplicated implementations.
- Expose only necessary business capabilities.
- Keep architectural layers independent.
- Design APIs before implementation.

These decisions provide consistency across projects and improve long-term maintainability.

---

# 8. Best Practices

Recommended practices for CAP applications:

- Design the domain before coding.
- Keep services focused on a single business capability.
- Use meaningful entity and service names.
- Reuse existing services whenever possible.
- Prefer framework features over custom implementations.
- Keep event handlers small and focused.
- Document architectural decisions.
- Apply Clean Core principles consistently.

---

# 9. Anti-Patterns

Avoid the following practices:

- Mixing UI logic with backend business logic.
- Duplicating business rules across services.
- Creating monolithic services.
- Bypassing CAP framework capabilities unnecessarily.
- Writing database-specific code without justification.
- Tight coupling between modules.
- Premature optimization.
- Exposing internal implementation details through service APIs.

---

# 10. Practical Example

Example enterprise architecture:

```text
SAP Fiori Elements
        │
        ▼
CatalogService
        │
        ▼
SalesService
        │
        ▼
Business Event Handlers
        │
        ▼
CDS Domain Model
        │
        ▼
SAP HANA Cloud

Integrations
    ├── SAP Event Mesh
    ├── SAP Integration Suite
    └── SAP AI Core
```

This architecture keeps presentation, business logic, persistence, and integrations clearly separated.

---

# 11. Related Documents

- Module 01 – Layered Architecture
- Module 01 – Request Lifecycle
- Module 01 – Clean Core
- Module 02 – Project Structure
- Module 03 – Domain Modeling
- Module 04 – Services

---

# 12. Official References

This document intentionally avoids duplicating official SAP documentation.

For framework behavior, APIs, release notes, and implementation details, consult:

- SAP Cloud Application Programming Model Documentation (CAPire)
- SAP Help Portal
- SAP Business Technology Platform Documentation
- SAP Clean Core Guidance

This repository complements those resources by documenting engineering principles, architectural conventions, and project-specific best practices used by the SAP Developer Agent.