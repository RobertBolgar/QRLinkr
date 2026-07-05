# PRODUCT_DECISIONS.md

Version: 1.0

Status: Active

Owner: Robert Bolgar

## Purpose

This document records product decisions that have already been made. It exists to prevent settled discussions from being reopened without a compelling business or technical reason.

Every decision should include:
- Decision
- Reason
- Status
- Date

---

## Business

### Decision
QRLinkr will remain free with no advertisements.

**Reason**
Maximize adoption and become the primary top-of-funnel acquisition channel for TubeLinkr.

**Status**
Active

**Date**
2026-07-03

---

### Decision
QRLinkr will not require user accounts in Version 1.

**Reason**
Remove friction and allow immediate QR generation.

**Status**
Active

**Date**
2026-07-03

---

### Decision
QRLinkr is a companion product to TubeLinkr, not a competitor.

**Reason**
QRLinkr creates QR codes. TubeLinkr provides Smart Links, analytics, attribution, and Traffic Proof.

**Status**
Active

**Date**
2026-07-03

---

## Product

### Decision
QRLinkr must stand on its own as an excellent product.

**Reason**
Users should recommend QRLinkr because it is genuinely useful—not because it promotes TubeLinkr.

**Status**
Active

**Date**
2026-07-03

---

### Decision
Introduce TubeLinkr only after successful QR generation.

**Reason**
Users should complete their primary task before seeing additional products.

**Status**
Active

**Date**
2026-07-03

---

### Decision
Message QR codes use a hosted QRLinkr message page with URL-encoded content instead of raw text QR codes.

**Reason**
This creates a consistent branded experience across devices without requiring a backend or database. The message is stored entirely within the QR code URL itself, ensuring the feature remains 100% client-side while providing a polished presentation layer.

**Status**
Active

**Date**
2026-07-05

---

## Technology

### Decision
Use React + Vite + TypeScript.

**Reason**
Modern, maintainable, high-performance stack.

**Status**
Active

**Date**
2026-07-03

---

### Decision
Use Plain CSS instead of Tailwind or a UI framework.

**Reason**
Maintain full design control, reduce dependencies, and simplify long-term maintenance.

**Status**
Active

**Date**
2026-07-03

---

### Decision
Version 1 is entirely client-side.

**Reason**
Keep infrastructure simple, fast, and inexpensive.

**Status**
Active

**Date**
2026-07-03

---

## Design

### Decision
Dark mode first.

**Reason**
Maintain a premium, modern visual identity across the product ecosystem.

**Status**
Active

**Date**
2026-07-03

---

## Development

### Decision
Documentation is the source of truth.

**Reason**
Implementation should follow documented product decisions, not assumptions.

**Status**
Active

**Date**
2026-07-03

---

### Decision
Sprint 1 focuses only on the application foundation.

**Reason**
A solid UI and architecture reduce future rework.

**Status**
Active

**Date**
2026-07-03

---

## Decision History

Never delete historical decisions.

If a decision changes:

1. Mark the previous decision as **Superseded**.
2. Record the new decision.
3. Explain why the change was made.

This preserves the evolution of the product over time.
