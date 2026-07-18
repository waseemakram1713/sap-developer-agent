# Engineering Playbook: CAP Request Lifecycle

**Module:** 01 – Architecture  
**Document:** Request Lifecycle  
**Version:** 1.0.0  
**Status:** Approved

---

# 1. Purpose

This document explains how requests are processed inside a SAP Cloud Application Programming Model (CAP) application.

Understanding the CAP request lifecycle is essential for designing correct business logic, implementing event handlers, debugging applications, and maintaining clean architectural boundaries.

This document defines when and where application logic should execute.

---

# 2. Why Request Lifecycle Matters

CAP applications are event-driven.

A request does not directly execute custom code from the UI to the database.

Instead, CAP processes requests through a structured lifecycle where different stages allow developers to:

- Validate incoming data
- Apply business rules
- Modify requests
- Execute custom operations
- React after processing
- Handle transactions consistently

Correct lifecycle usage prevents:

- Business logic duplication
- Incorrect handler placement
- Database inconsistencies
- Tight coupling

---

# 3. High-Level Request Flow

A typical CAP request follows this flow:

```text
                    Client Request
                         │
                         ▼
                CAP Service Endpoint
                         │
                         ▼
              Request Authentication
                         │
                         ▼
                Authorization Checks
                         │
                         ▼
                  before() Handlers
                         │
                         ▼
                    on() Handler
                         │
                         ▼
              Database / External Service
                         │
                         ▼
                  after() Handlers
                         │
                         ▼
                 Response to Client
```

---

# 4. CAP Event Processing Model

CAP processes operations through events.

Common CRUD events:

```text
CREATE
READ
UPDATE
DELETE
```

Custom operations:

```text
Actions
Functions
Custom Events
```

Developers attach custom logic to these events using handlers.

---

# 5. Handler Phases

CAP provides three primary handler phases:

```text
before()

↓

on()

↓

after()
```

Each phase has a specific responsibility.

---

# 6. before() Handler

## Purpose

The `before()` phase executes before the main operation.

It is mainly used for:

- Validation
- Data enrichment
- Default values
- Authorization checks
- Input transformation

Example scenarios:

- Check mandatory business rules
- Validate customer status
- Calculate derived fields before saving

Example:

```javascript
srv.before("CREATE", "Orders", async req => {

    if (!req.data.customer) {
        req.error(
            400,
            "Customer is required"
        );
    }

});
```

---

# 7. on() Handler

## Purpose

The `on()` phase controls the actual processing of a request.

It can:

- Replace default behavior
- Implement custom operations
- Call external services
- Execute custom business processes

Example:

```javascript
srv.on("approveOrder", async req => {

    const order = req.data;

    // custom approval logic

    return order;

});
```

---

# 8. after() Handler

## Purpose

The `after()` phase executes after the main operation completes successfully.

Common uses:

- Response enrichment
- Formatting output
- Additional calculations
- Notifications

Example:

```javascript
srv.after("READ", "Orders", results => {

    results.forEach(order => {
        order.statusText =
            "Processed";
    });

});
```

---

# 9. Transaction Boundary

CAP automatically manages transactions.

Typical flow:

```text
Request Start

↓

Transaction Created

↓

before()

↓

Business Processing

↓

Database Operations

↓

after()

↓

Commit

↓

Response
```

Developers should avoid manually managing transactions unless required.

---

# 10. Where Business Logic Belongs

Use this decision guide:

| Requirement | Location |
|---|---|
| Mandatory field check | CDS / before() |
| Business validation | before() |
| Complex calculation | on() / before() |
| External API call | on() |
| Response formatting | after() |
| Database model rule | CDS |
| UI formatting | Fiori/UI5 |

---

# 11. Engineering Decisions

Within this repository:

- Validation should happen as early as possible.
- Business rules should not live in UI applications.
- Custom behavior should use CAP events.
- CDS constraints are preferred before custom validation code.
- Event handlers should remain small and focused.
- External communication should be isolated.

---

# 12. Best Practices

## Prefer Declarative Rules First

Before creating handlers, ask:

Can CDS handle this requirement?

Examples:

Use CDS for:

- Mandatory fields
- Data types
- Associations
- Simple constraints

Use handlers for:

- Complex business decisions
- External integrations
- Dynamic processing

---

## Keep Handlers Focused

Avoid large handler files.

Prefer:

```
orders-service.js

customer-service.js

inventory-service.js
```

rather than:

```
all-business-logic.js
```

---

# 13. Anti-Patterns

Avoid:

## Business Logic in UI

Bad:

```text
Fiori Controller
       |
       Business Rules
       |
       Backend
```

---

## Database Logic in Handlers

Avoid unnecessary SQL-specific implementations.

Prefer CAP services and CDS models.

---

## Using on() Everywhere

The `on()` handler should not replace CAP defaults without a reason.

Prefer:

before()
for validation

after()
for enrichment

on()
for custom processing

---

# 14. Debugging Lifecycle Issues

When debugging:

Check:

1. Is the request reaching the service?
2. Is authentication successful?
3. Is the correct event triggered?
4. Is the handler registered?
5. Is the database operation successful?
6. Is an after-handler modifying the response?

---

# 15. Practical Example

Order Creation Flow:

```text
Fiori Create Order

        |
        ▼

POST /Orders

        |
        ▼

before CREATE Orders

- Validate customer
- Check credit limit

        |
        ▼

CAP Default CREATE

- Persist data

        |
        ▼

after CREATE Orders

- Send notification

        |
        ▼

Return Response
```

---

# 16. Related Documents

- CAP Architecture Overview
- Layered Architecture
- Clean Core
- Service Design
- Runtime Model

---

# 17. Official References

This document complements official SAP CAP documentation.

For framework behavior, APIs, and implementation details refer to:

- SAP Cloud Application Programming Model Documentation
- CAPire
- SAP BTP Documentation

This repository defines engineering practices used by the SAP Developer Agent.