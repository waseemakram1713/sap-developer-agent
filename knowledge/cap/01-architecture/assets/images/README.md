# Module 01 Architectural Assets: Image Registry

**Module:** 01 – Architecture  
**Directory:** assets/images  
**Version:** 1.0.0  
**Status:** Operational

---

## 1. Purpose
This directory acts as the dedicated storage repository for all static visual assets, architecture high-fidelity flowcharts, and system topology graphics used to illustrate the documentation within **Module 01: Architecture**.

---

## 2. Tracked Image Inventory & Conventions

All binary graphics added to this folder must follow standard naming conventions and resolution requirements to keep documentation clean and performant.

| File Name | Targeted Document | Description | Format / Dimensions |
| :--- | :--- | :--- | :--- |
| `01-cap-core-topology.png` | `cap-architecture-overview.md` | Core runtime components showing the relationship between application services and out-of-band layers. | PNG / 1200x800px |
| `02-layered-boundaries.png` | `layered-architecture.md` | Visual breakdown of strict horizontal boundaries preventing layer-skipping anti-patterns. | PNG / 1024x768px |
| `03-request-pipeline.png`  | `request-lifecycle.md`  | Detailed phase sequence representing the event dispatch pipeline (`before`, `on`, `after`). | PNG / 1200x900px |
| `04-clean-core-mesh.png`   | `clean-core.md`          | Enterprise side-by-side extension routing architecture using SAP Event Mesh. | PNG / 1400x900px |
| `05-btp-deployment-view.png`| `deployment-view.md`     | Production target landscape mapping out Cloud Foundry, Kyma, and SAP HANA Cloud. | PNG / 1600x1000px |

---

## 3. Engineering Guidelines for Visual Contributions

When updating or introducing new diagrams to this repository:
1. **Prefer Vector-Source Exports:** Generate all primary image configurations from source architecture tools (like Lucidchart, Draw.io, or Miro) using high-resolution exports.
2. **File Compression:** Run all binary files through a compression engine (e.g., TinyPNG) before staging to keep the Git workspace lightweight.
3. **Alternative Text:** Always accompany embedded images in markdown files with descriptive alternative text using the following standard reference pattern:
   ```markdown
   ![Short Asset Description](assets/images/filename.png)