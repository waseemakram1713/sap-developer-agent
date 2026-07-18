# Engineering Playbook: Layered Architecture

**Module:** 01 – Architecture  
**Document:** Layered Architecture  
**Version:** 1.0.0  
**Status:** Approved

---

# 1. Purpose

This document defines the layered architecture used in SAP Cloud Application Programming Model (CAP) applications within the SAP Developer Agent.

A layered architecture promotes separation of concerns by assigning a clear responsibility to each layer. This makes applications easier to understand, extend, test, and maintain.

The objective is not only to organize code but also to ensure that business logic, persistence, presentation, and integrations evolve independently.

---

# 2. Why Layered Architecture Matters

Enterprise applications grow over time. Without clear architectural boundaries, responsibilities become mixed, resulting in:

- Duplicate business logic
- Difficult maintenance
- Tight coupling
- Reduced testability
- Poor scalability
- Higher technical debt

A layered architecture addresses these risks by ensuring that every component has a well-defined responsibility.

---

# 3. Architectural Layers

The SAP Developer Agent organizes CAP applications into the following logical layers.

```text
┌─────────────────────────────────────────────┐
│ Presentation Layer                          │
│ SAP Fiori Elements • SAPUI5 • Mobile • APIs │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ Service Layer                               │
│ OData Services • Actions • Functions        │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ Business Logic Layer                        │
│ Event Handlers • Validation • Rules         │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ Domain Model Layer                          │
│ CDS Entities • Types • Aspects              │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ Persistence Layer                           │
│ SAP HANA Cloud • SQLite                     │
└─────────────────────────────────────────────┘
```

Each layer communicates only through defined interfaces and should avoid direct dependencies that bypass the architecture.

---

# 4. Layer Responsibilities

## Presentation Layer

Purpose:

Provide user interaction and consume backend services.

Examples:

- SAP Fiori Elements
- SAPUI5
- Mobile applications
- External API consumers

Responsibilities:

- Display data
- Collect user input
- Trigger business operations
- Present validation messages

Should NOT contain:

- Business rules
- Database logic
- Authorization decisions
- Complex calculations

---

## Service Layer

Purpose:

Expose business capabilities to consumers.

Responsibilities:

- OData services
- Service projections
- Actions
- Functions
- API contracts

Should NOT contain:

- UI logic
- Database-specific implementation
- Complex orchestration

---

## Business Logic Layer

Purpose:

Implement business behavior.

Responsibilities:

- Event handlers
- Validation
- Business rules
- Calculations
- Workflow orchestration
- Integration coordination

This is where most custom application logic belongs.

---

## Domain Model Layer

Purpose:

Represent the business domain.

Responsibilities:

- Entities
- Types
- Aspects
- Associations
- Compositions
- Enumerations

The domain model should remain independent from UI and infrastructure concerns.

---

## Persistence Layer

Purpose:

Store and retrieve business data.

Responsibilities:

- Database storage
- Transactions
- Persistence services

Persistence implementation details should remain abstracted through CAP whenever possible.

---

# 5. Communication Between Layers

Communication should always flow through adjacent layers.

Recommended flow:

Presentation

↓

Service

↓

Business Logic

↓

Domain Model

↓

Persistence

Avoid skipping layers.

For example:

❌ UI directly accessing the database.

❌ UI implementing business rules.

❌ Database-specific SQL inside the presentation layer.

---

# 6. Engineering Decisions

Within this repository, we intentionally follow these decisions:

- Business rules belong in the Business Logic Layer.
- Domain models define the business, not the UI.
- Services expose capabilities rather than implementation details.
- Persistence concerns remain isolated.
- UI applications remain lightweight.
- Integrations are coordinated by backend services.

These decisions promote consistency across projects.

---

# 7. Best Practices

- Keep each layer focused on a single responsibility.
- Design reusable business services.
- Keep UI applications stateless whenever practical.
- Reuse domain models.
- Minimize dependencies between layers.
- Document architectural boundaries.
- Review layer responsibilities during code reviews.

---

# 8. Anti-Patterns

Avoid:

- Business logic inside UI controllers.
- Direct database access from presentation code.
- Monolithic service implementations.
- Duplicate validation logic.
- Tight coupling between modules.
- Exposing internal persistence structures through APIs.

---

# 9. Practical Example

Sales Order Application

```text
SAP Fiori Elements
        │
        ▼
SalesService
        │
        ▼
Sales Event Handlers
        │
        ▼
SalesOrder Entity
        │
        ▼
SAP HANA Cloud
```

Inventory Application

```text
Mobile Application
        │
        ▼
InventoryService
        │
        ▼
Inventory Validation Handler
        │
        ▼
Inventory Entity
        │
        ▼
SAP HANA Cloud
```

---

# 10. Code Review Checklist

During architecture reviews, verify:

- Is each responsibility placed in the correct layer?
- Is business logic isolated from the UI?
- Are services exposing only required capabilities?
- Are domain models independent?
- Is persistence abstracted appropriately?
- Are integrations loosely coupled?

---

# 11. Related Documents

- CAP Architecture Overview
- Request Lifecycle
- Clean Core
- Project Structure
- Domain Modeling

---

# 12. Official References

Refer to the official SAP Cloud Application Programming Model documentation for framework behavior and implementation details.

This document defines the architectural conventions adopted by the SAP Developer Agent and complements, rather than replaces, SAP documentation.