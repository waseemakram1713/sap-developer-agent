# Engineering Playbook: CAP Deployment Architecture

**Module:** 01 – Architecture  
**Document:** Deployment View  
**Version:** 1.0.0  
**Status:** Approved

---

# 1. Purpose

This document defines how SAP Cloud Application Programming Model (CAP) applications are deployed and operated within SAP Business Technology Platform (SAP BTP).

The purpose is to explain the relationship between:

- CAP application components
- SAP BTP runtime environments
- Platform services
- External SAP systems
- Security services
- Integration capabilities

This document guides deployment decisions for production-ready CAP applications.

---

# 2. Deployment Architecture Overview

A CAP application is not deployed as a standalone application.

It runs as part of a larger SAP BTP landscape containing:

- Application runtime
- Database services
- Identity services
- Connectivity services
- Integration services

Typical architecture:

```text
                         Users
                           |
                           |
                    SAP Fiori Application
                           |
                           |
                           ▼

              SAP BTP Application Runtime

        ---------------------------------------
        |                                     |
        |          CAP Application            |
        |                                     |
        |   Service Layer                     |
        |   Business Logic                   |
        |   Event Handlers                   |
        |                                     |
        ---------------------------------------

                    |
                    |
        ---------------------------------------
        |                                     |
        ▼                                     ▼

 SAP HANA Cloud                  External Services

 Database                        SAP S/4HANA
                                 APIs
                                 Event Mesh
                                 Integration Suite
```

---

# 3. SAP BTP Runtime Options

SAP BTP provides multiple runtime environments.

The SAP Developer Agent considers two primary deployment options.

---

# 3.1 Cloud Foundry Runtime

Cloud Foundry is the most common runtime for CAP applications.

Architecture:

```text
SAP BTP Cloud Foundry

        |
        |
        ▼

CAP Application

(Node.js / Java)

        |
        |
        ▼

Service Bindings

        |
        |
        ├── SAP HANA Cloud
        ├── XSUAA
        ├── Destination Service
        └── Event Mesh
```

Characteristics:

- Managed application runtime
- Simplified deployment
- Strong CAP support
- Mature ecosystem

Common deployment artifacts:

- mta.yaml
- manifest.yml
- package.json
- xs-security.json

---

# 3.2 Kyma Runtime

Kyma provides Kubernetes-based runtime capabilities.

Architecture:

```text
SAP BTP Kyma Runtime

        |
        |
        ▼

 Kubernetes Cluster

        |
        |
        ▼

CAP Container

        |
        |
        ├── HANA Cloud
        ├── Kubernetes Services
        ├── APIs
        └── Events
```

Characteristics:

- Container-based deployment
- Kubernetes flexibility
- Microservice-oriented architecture
- Advanced cloud-native scenarios

Suitable for:

- Complex architectures
- Kubernetes-native workloads
- Advanced orchestration

---

# 4. CAP Deployment Components

A production CAP application commonly contains:

```text
CAP Application
│
├── Application Module
│
├── Database Module
│
├── Security Configuration
│
├── Service Bindings
│
└── External Connections
```

---

# 5. SAP HANA Cloud Integration

SAP HANA Cloud is the preferred production database for CAP applications.

Architecture:

```text
CAP Service

      |
      |
      ▼

CAP Persistence Layer

      |
      |
      ▼

SAP HANA Cloud

      |
      |
      ▼

Business Data
```

Benefits:

- Enterprise-grade database
- High availability
- SAP ecosystem alignment
- Cloud-native operation

For local development:

```text
CAP Application

      |

SQLite Database
```

For production:

```text
CAP Application

      |

SAP HANA Cloud
```

---

# 6. Security Architecture

CAP applications require secure identity management.

Typical architecture:

```text
User

 |

SAP Identity Authentication

 |

XSUAA / Authorization Service

 |

CAP Application

 |

Business Data
```

Security responsibilities:

## Authentication

Determines:

"Who is the user?"

Examples:

- Identity Authentication
- XSUAA

---

## Authorization

Determines:

"What can the user do?"

Examples:

- Roles
- Scopes
- Restrictions

---

# 7. Connectivity Architecture

Enterprise applications frequently communicate with SAP and external systems.

Typical services:

## Destination Service

Used for:

- External API connections
- Authentication management
- Centralized connectivity configuration

Example:

```text
CAP Application

      |

Destination Service

      |

SAP S/4HANA API
```

---

## SAP Event Mesh

Used for event-driven communication.

Example:

```text
SAP S/4HANA

      |

Business Event

      |

Event Mesh

      |

CAP Application
```

---

## SAP Integration Suite

Used for enterprise integration scenarios.

Example:

```text
SAP S/4HANA

      |

Integration Suite

      |

External System

```

---

# 8. Deployment Lifecycle

Typical CAP deployment process:

```text
Developer Workstation

        |
        |
        ▼

Git Repository

        |
        |
        ▼

CI/CD Pipeline

        |
        |
        ▼

SAP BTP Environment

        |
        |
        ▼

Production Application
```

---

# 9. Engineering Decisions

Within this repository:

- Cloud Foundry is the default CAP deployment target unless requirements require Kyma.
- SAP HANA Cloud is preferred for production persistence.
- Local development uses lightweight databases.
- Credentials are never stored in source code.
- Services are connected using service bindings.
- Deployment configuration is version controlled.

---

# 10. Best Practices

Follow these practices:

- Separate development, test, and production environments.
- Use managed services instead of self-managed infrastructure.
- Automate deployment pipelines.
- Apply least-privilege security.
- Monitor application health.
- Store configuration externally.
- Document service dependencies.

---

# 11. Anti-Patterns

Avoid:

## Hardcoded Credentials

Bad:

```javascript
password="myPassword"
```

---

## Direct Production Changes

Bad:

```text
Developer

   |
   |
Manual Production Modification
```

---

## Missing Service Documentation

Bad:

```text
CAP Application

Unknown Dependencies

Unknown Runtime Configuration
```

---

# 12. Practical Production Example

Enterprise Sales Extension:

```text
                  Users

                    |

              SAP Fiori Elements

                    |

                    ▼

              CAP Application

                    |

       ----------------------------

       |                          |

 SAP HANA Cloud             Event Mesh

       |                          |

       |                    SAP S/4HANA Events

       |

 Business Data
```

---

# 13. Deployment Checklist

Before production deployment:

- [ ] Runtime selected
- [ ] Database configured
- [ ] Security configured
- [ ] Service bindings created
- [ ] Destinations configured
- [ ] Monitoring enabled
- [ ] CI/CD pipeline available
- [ ] Backup strategy defined

---

# 14. Related Documents

- CAP Architecture Overview
- Layered Architecture
- Request Lifecycle
- Clean Core
- Security Architecture

---

# 15. Official References

This document complements official SAP documentation.

For implementation details refer to:

- SAP Business Technology Platform Documentation
- SAP Cloud Application Programming Model Documentation
- SAP HANA Cloud Documentation
- SAP BTP Runtime Documentation

This repository defines deployment principles and conventions used by the SAP Developer Agent.