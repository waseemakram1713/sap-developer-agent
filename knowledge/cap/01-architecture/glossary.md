# Engineering Glossary: CAP Architecture Terms

**Module:** 01 – Architecture  
**Document:** Architecture Glossary  
**Version:** 1.0.0  
**Status:** Approved

---

# 1. Purpose

This glossary defines important SAP CAP, SAP BTP, and enterprise architecture terms used throughout the SAP Developer Agent knowledge base.

The purpose is to provide consistent terminology for developers, architects, and AI assistants.

---

# 2. SAP Cloud Application Programming Model (CAP)

## Definition

SAP Cloud Application Programming Model (CAP) is an SAP framework for building enterprise applications using domain-driven modeling, services, and cloud-native principles.

## Key Concepts

- CDS Modeling
- Services
- Event Handlers
- Persistence
- Extensibility
- Cloud Deployment

---

# 3. SAP Business Technology Platform (SAP BTP)

## Definition

SAP BTP is SAP's cloud platform for developing, integrating, extending, and operating enterprise applications.

## Provides

- Application Runtime
- Databases
- Integration Services
- Security Services
- AI Services
- Event Services

---

# 4. Domain-Driven Design (DDD)

## Definition

An approach that focuses software design around business domains rather than technical components.

## CAP Usage

In CAP:

```
Business Domain

      ↓

CDS Domain Model

      ↓

Services

      ↓

Applications
```

---

# 5. CDS (Core Data Services)

## Definition

CDS is SAP's declarative modeling language used in CAP to define business entities, relationships, and services.

## Used For

- Entities
- Types
- Associations
- Compositions
- Aspects
- Services

---

# 6. Domain Model

## Definition

The domain model represents business concepts independent of UI, database, and integration details.

Example:

```text
Customer

Sales Order

Product

Invoice
```

---

# 7. Service Layer

## Definition

The service layer exposes business capabilities to consumers.

## Responsibilities

- API exposure
- OData services
- Actions
- Functions
- Service contracts

---

# 8. Application Logic Layer

## Definition

The layer where custom business behavior is implemented.

## Examples

- Validations
- Calculations
- Workflows
- Event processing

Usually implemented using:

- JavaScript
- TypeScript
- Java

---

# 9. Event Handler

## Definition

A CAP component that reacts to lifecycle events.

Examples:

```text
before()

on()

after()
```

Used for:

- Validation
- Processing
- Enrichment

---

# 10. Request Lifecycle

## Definition

The sequence of processing steps when a request enters a CAP application.

Typical flow:

```
Request

↓

Authentication

↓

before()

↓

on()

↓

Database Processing

↓

after()

↓

Response
```

---

# 11. Persistence Layer

## Definition

The layer responsible for storing and retrieving application data.

Examples:

- SAP HANA Cloud
- SQLite

---

# 12. SAP HANA Cloud

## Definition

SAP's cloud-native database service used for enterprise application persistence.

CAP Production Scenario:

```
CAP Application

        |

SAP HANA Cloud
```

---

# 13. Clean Core

## Definition

SAP strategy to keep the SAP standard system stable by avoiding unnecessary modifications.

Principle:

```
Keep SAP Core Clean

Build Extensions Outside
```

---

# 14. Extension

## Definition

A capability added without modifying SAP standard functionality.

Types:

- In-App Extension
- Side-by-Side Extension

---

# 15. Side-by-Side Extension

## Definition

An application built outside SAP S/4HANA, typically on SAP BTP.

Example:

```
SAP S/4HANA

      |

API/Event

      |

CAP Application

      |

SAP BTP
```

---

# 16. Released API

## Definition

An SAP-supported interface intended for external consumption.

Examples:

- OData APIs
- REST APIs
- Events

---

# 17. SAP Event Mesh

## Definition

A messaging service that enables asynchronous event-based communication between applications.

Example:

```
SAP System

    |

Business Event

    |

Event Mesh

    |

CAP Application
```

---

# 18. SAP Integration Suite

## Definition

SAP's integration platform for connecting SAP and non-SAP systems.

Capabilities include:

- API Management
- Cloud Integration
- Event Integration

---

# 19. Destination Service

## Definition

SAP BTP service used to manage external connections securely.

Provides:

- URLs
- Authentication configuration
- Connectivity settings

---

# 20. Cloud Foundry Runtime

## Definition

A SAP BTP runtime environment used to deploy and operate applications.

Common CAP deployment target.

---

# 21. Kyma Runtime

## Definition

A Kubernetes-based SAP BTP runtime environment.

Used for:

- Container workloads
- Microservices
- Advanced cloud-native scenarios

---

# 22. Service Binding

## Definition

A secure connection between an application and a managed SAP BTP service.

Examples:

```
CAP Application

      |

Service Binding

      |

HANA Cloud
```

---

# 23. Managed Entity

## Definition

A CAP entity automatically enhanced with common lifecycle fields.

Examples:

- createdAt
- createdBy
- modifiedAt
- modifiedBy

---

# 24. Association

## Definition

A relationship between CDS entities.

Example:

```
Customer

   |

Orders
```

---

# 25. Composition

## Definition

A strong ownership relationship between entities.

Example:

```
Sales Order

     |

Order Items
```

---

# 26. SAP Clean Core Decision Flow

The architectural decision process:

```
Requirement

    |

Standard Feature Available?

    |

Extension Required?

    |

In-App or Side-by-Side?

    |

Implement Solution
```

---

# 27. SAP Developer Agent Meaning

Within this repository:

A SAP Developer Agent is an AI assistant that understands:

- SAP architecture
- CAP development practices
- BTP services
- Clean Core principles
- Enterprise engineering decisions

It does not only generate code; it applies architectural reasoning.

---

# Related Documents

- CAP Architecture Overview
- Layered Architecture
- Request Lifecycle
- Clean Core
- Deployment View

---

# Official References

This glossary complements official SAP documentation.

For detailed product behavior:

- SAP CAP Documentation
- SAP BTP Documentation
- SAP Clean Core Guidance

This glossary defines terminology conventions used by the SAP Developer Agent.