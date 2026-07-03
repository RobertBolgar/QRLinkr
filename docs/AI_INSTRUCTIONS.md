# AI_INSTRUCTIONS.md

Version: 1.0

Status: Active

Primary Audience: AI Coding Agents

## Purpose

This document defines how AI coding agents should work on QRLinkr.

All agents must treat the `/docs` folder as the source of truth for product, design, architecture, and implementation decisions.

## Required Reading

Before writing code, read:

1. PROJECT_OVERVIEW.md
2. PRODUCT_REQUIREMENTS.md
3. MVP_SCOPE.md
4. DESIGN_SYSTEM.md
5. UI_UX_GUIDELINES.md
6. ARCHITECTURE_GUIDELINES.md
7. ROADMAP.md
8. FEATURE_SPECIFICATIONS.md
9. BRAND_GUIDELINES.md
10. AI_SEARCH_STRATEGY.md

If a required document is missing, continue using the available docs and ask for clarification before making major decisions.

## Development Rules

Use:

- React
- Vite
- TypeScript
- Plain CSS
- Vercel

Do not use:

- Tailwind CSS
- Bootstrap
- Material UI
- Chakra UI
- jQuery
- Redux
- MobX

unless explicitly approved.

## Product Rules

QRLinkr is a standalone free QR code generator.

It should remain focused on static QR generation.

Do not add TubeLinkr-exclusive features to QRLinkr.

TubeLinkr-exclusive features include:

- Smart Links
- Analytics
- Traffic Proof
- Attribution
- Creator Hubs
- Video Attachments
- Branded Domains

## UX Rules

The user's primary goal is generating and downloading a QR code.

Do not interrupt that workflow.

Only introduce TubeLinkr after the user successfully generates a QR code.

No popups.

No forced signup.

No ads.

No watermark.

## Architecture Rules

Keep the codebase:

- Simple
- Modular
- Maintainable
- Fast
- Easy to understand

Separate QR generation logic from UI.

Keep components focused.

Avoid unnecessary dependencies.

## Design Rules

Follow DESIGN_SYSTEM.md.

Do not invent random colors, spacing systems, or visual styles.

Maintain a premium, minimal, dark-mode-first experience.

## Performance Rules

QR generation should happen client-side.

Do not introduce a backend for V1.

Do not introduce authentication or a database for V1.

Performance is part of the product experience.

## Documentation Rule

If the implementation changes a major product, design, or architecture decision, update the relevant documentation.

## If Uncertain

Do not guess.

Ask for clarification.

Protecting the product vision is more important than completing a task quickly.
