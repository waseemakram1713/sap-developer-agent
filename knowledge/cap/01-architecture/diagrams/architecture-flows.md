# Module 01 Architecture Diagrams

## 1. Request Lifecycle Event Sequence
This Mermaid sequence diagram illustrates the boundary rules defined in `request-lifecycle.md`.

```mermaid
sequenceDiagram
    autonumber
    actor Client as Fiori UI / Consumer
    participant Protocol as Protocol Adapter (OData V4)
    participant Framework as CAP Event Dispatcher
    participant DB as SAP HANA Cloud / HDI Container

    Client->>Protocol: HTTP POST /odata/v4/catalog/Orders
    Protocol->>Framework: Emit 'CREATE' Event + Context (req)
    
    Note over Framework: Phase 1: BEFORE Handlers<br/>(Validations & Rejections)
    rect rgb(240, 248, 255)
        Framework->>Framework: Execute srv.before('CREATE', ...)
    end
    
    alt is Request Invalid?
        Framework-->>Client: req.reject(400, "Message") [Rollback]
    end

    Note over Framework: Phase 2: ON Handlers<br/>(Core Processing)
    Framework->>DB: Process Data Persistence (Generic/Custom)
    DB-->>Framework: Confirm Transaction State

    Note over Framework: Phase 3: AFTER Handlers<br/>(Result Enrichment)
    rect rgb(245, 245, 245)
        Framework->>Framework: Execute srv.after('CREATE', ...)
    end

    Framework->>Protocol: Serialize Response Payload
    Protocol-->>Client: HTTP 201 Created