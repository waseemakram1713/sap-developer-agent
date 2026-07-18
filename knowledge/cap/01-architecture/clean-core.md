# Engineering Playbook: SAP Clean Core Architecture

**Module:** 01 – Architecture  
**Document:** Clean Core Architecture  
**Version:** 1.0.0  
**Status:** Approved

---

# 1. Purpose

This document defines the SAP Clean Core architectural principles used by the SAP Developer Agent when designing SAP extensions.

The purpose of Clean Core is to keep SAP standard systems stable, upgrade-friendly, and adaptable while enabling innovation through modern extension approaches.

This document guides architectural decisions around:

- SAP S/4HANA extensions
- SAP BTP applications
- CAP-based side-by-side extensions
- Integration scenarios
- Event-driven architectures

---

# 2. Clean Core Overview

SAP Clean Core is an approach that minimizes modifications to the SAP standard system and promotes extensions through supported, upgrade-safe mechanisms.

The fundamental principle is:

> Keep the SAP core stable. Build innovation around it.

A clean core allows organizations to:

- Adopt SAP innovations faster
- Reduce upgrade effort
- Lower technical debt
- Improve system maintainability
- Enable cloud-native extensions

---

# 3. Why Clean Core Matters

Traditional ERP customization often created tightly coupled solutions.

Example:

```text
SAP Standard Code

        +
        
Custom Modifications

        +
        
Database Changes

        +
        
Custom Integrations

        ↓

Complex Upgrade Process
```

Over time, these modifications create:

- Upgrade conflicts
- Difficult testing
- Dependency issues
- Higher maintenance costs

Clean Core addresses these challenges through controlled extensibility.

---

# 4. Traditional Customization vs Extension

## Traditional Modification Approach

```text
Developer

   ↓

Modify SAP Standard Object

   ↓

Transport Change

   ↓

Future Upgrade Conflict
```

Examples:

- Changing SAP standard ABAP objects
- Modifying standard database tables
- Directly changing SAP-delivered code

---

## Clean Extension Approach

```text
SAP Standard Core

        |

Released APIs / Events

        |

SAP BTP Extension

        |

Custom Business Capability
```

The SAP core remains unchanged.

---

# 5. SAP Extensibility Model

SAP provides multiple extension approaches.

## 5.1 In-App Extensibility

Extensions built inside the SAP system.

Examples:

- Custom fields
- Custom logic
- UI adaptations
- Business rules

Suitable when:

- Extension belongs closely to SAP business processes
- Standard extension points exist

---

## 5.2 Side-by-Side Extensibility

Extensions built outside SAP S/4HANA using SAP BTP.

Examples:

- CAP applications
- SAPUI5 applications
- Event-driven applications
- AI-powered applications

Suitable when:

- New business capabilities are required
- Independent lifecycle is needed
- Additional scalability is required

---

# 6. CAP Role in Clean Core

SAP CAP is one of the primary technologies for building side-by-side extensions on SAP BTP.

CAP applications can provide:

- New business applications
- Process extensions
- Approval workflows
- Mobile applications
- AI-powered solutions
- Integration services

Typical architecture:

```text
                 SAP S/4HANA
                      |
                      |
              Released APIs
                      |
                      |
               SAP BTP Extension
                      |
        --------------------------------
        |              |               |
       CAP        Event Mesh     Integration Suite
        |
   SAP HANA Cloud
```

---

# 7. Side-by-Side Extension Principles

A well-designed CAP extension should:

- Consume released SAP APIs
- Avoid direct database access to SAP systems
- Use events where possible
- Maintain independent deployment lifecycle
- Follow SAP security standards
- Keep business ownership clear

---

# 8. Event-Driven Clean Core Architecture

Events enable loose coupling between SAP systems and extensions.

Example:

```text
SAP S/4HANA

Create Sales Order

        |

Business Event

        |

SAP Event Mesh

        |

CAP Application

        |

Additional Processing
```

Benefits:

- Reduced coupling
- Real-time processing
- Better scalability
- Independent applications

---

# 9. Engineering Decisions

Within this repository, the SAP Developer Agent follows these decisions:

- Prefer extensions over modifications.
- Use released APIs instead of direct database access.
- Use CAP for new cloud-native business applications.
- Use events for loosely coupled communication.
- Keep SAP standard objects untouched.
- Design extensions with independent lifecycle.

---

# 10. Decision Framework

Before modifying SAP core, evaluate:

```text
Requirement
     |
     ▼

Can standard functionality solve it?
     |
     ├── Yes → Use standard SAP capability
     |
     ▼

Is an in-app extension available?
     |
     ├── Yes → Use in-app extensibility
     |
     ▼

Is a separate application required?
     |
     └── Yes → Build side-by-side extension on SAP BTP
```

---

# 11. Best Practices

Follow these practices:

- Understand business capability before extending.
- Search for existing SAP APIs.
- Prefer released objects.
- Design extensions independently.
- Keep integrations loosely coupled.
- Document architectural decisions.
- Monitor extension lifecycle.

---

# 12. Anti-Patterns

Avoid:

## Direct SAP Database Access

Bad:

```text
CAP Application

      ↓

SAP HANA Database Tables
```

Reason:

- Breaks SAP abstraction
- Creates upgrade risks

---

## SAP Core Modification

Bad:

```text
Change SAP Standard Code

        ↓

Transport

        ↓

Upgrade Conflict
```

---

## Tight Coupling

Bad:

```text
SAP System
     |
     |
Custom Application
```

with no API or event boundary.

---

# 13. Practical Examples

## Example 1: Approval Workflow

Requirement:

"Create a custom approval process for purchase requests."

Recommended:

```text
SAP S/4HANA

        |
        |
Business Event

        |
        |
SAP Event Mesh

        |
        |
CAP Approval Application

        |
        |
SAP HANA Cloud
```

---

## Example 2: AI Invoice Processing

Requirement:

"Automatically analyze supplier invoices."

Recommended:

```text
SAP S/4HANA

        |

CAP Application

        |

SAP AI Core / Generative AI Hub

        |

Approval Result

        |

SAP System Update
```

---

# 14. Clean Core Checklist

Before approving an architecture:

- [ ] SAP standard remains unchanged
- [ ] Released APIs are used
- [ ] Extension approach is justified
- [ ] Integration boundaries are clear
- [ ] Security model is defined
- [ ] Lifecycle ownership is clear
- [ ] Upgrade impact is minimized

---

# 15. Related Documents

- CAP Architecture Overview
- Layered Architecture
- Request Lifecycle
- Deployment View
- Integration Architecture

---

# 16. Official References

This document complements official SAP guidance.

For product-specific behavior and capabilities refer to:

- SAP Clean Core Strategy
- SAP Business Technology Platform Documentation
- SAP S/4HANA Extensibility Guidance
- SAP Cloud Application Programming Model Documentation

This repository defines architectural conventions and decision-making principles used by the SAP Developer Agent.