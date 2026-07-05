# ARCHITECTURE_GUIDELINES.md

Version: 1.0

Status: Planning

Owner: Robert Bolgar

Primary Audience: Developers and AI Coding Agents

## Purpose

Define how QRLinkr should be built.

The codebase should be simple, fast, maintainable, and easy to extend.

## Core Philosophy

Prefer readability over cleverness.

Every component should have a clear purpose.

Every file should exist for a reason.

Avoid premature complexity.

## Required Stack

- React
- Vite
- TypeScript
- Plain CSS
- React Router
- Vercel
- GitHub

## Not Allowed Without Approval

- Tailwind CSS
- Bootstrap
- Material UI
- Chakra UI
- jQuery
- Redux
- MobX
- Large component libraries

## Recommended Folder Structure

src/
  components/
  pages/
  hooks/
  utils/
  services/
  styles/
  assets/
  types/
  constants/

## Component Rules

Components should be:

- Small
- Reusable
- Focused
- Easy to understand

Good examples:

- Button
- Card
- Input
- QRCodePreview
- DownloadButton
- ColorPicker

Avoid generic names like:

- MainComponent
- UtilityComponent
- EverythingComponent

## State Management

Use local React state whenever possible.

Do not introduce global state unless the application clearly requires it.

The MVP should not need Redux or any state management library.

## Styling Rules

Use plain CSS.

Avoid excessive specificity.

Avoid !important.

Use consistent class naming.

Follow DESIGN_SYSTEM.md.

## TypeScript Rules

Avoid any.

Use clear interfaces.

Prefer explicit types for shared data structures.

## QR Engine

QR generation logic should be isolated from the UI.

The QR engine should be reusable so TubeLinkr can share the same generation approach.

Business logic should not be tightly coupled to presentation components.

## Performance

Performance is a product feature.

Avoid unnecessary dependencies.

Avoid unnecessary renders.

Avoid expensive work inside render functions.

Do not over-optimize prematurely.

## Dependencies

Before adding any dependency ask:

- Does this solve a meaningful problem?
- Is it worth the long-term maintenance cost?
- Could this be built simply in-house?

Avoid dependency bloat.

## Error Handling

The app should never crash because of user input.

Handle invalid, empty, or unusual input gracefully.

Show helpful user-facing messages.

## Accessibility

All interactive elements should be keyboard accessible.

Inputs should have labels.

Buttons should have descriptive text.

Focus states should be visible.

## Git Workflow

Commit frequently.

Use clear commit messages.

Examples:

- Add homepage layout
- Implement QR preview
- Add PNG download
- Improve mobile responsiveness

## Documentation

If implementation decisions change the project structure or architecture, update the documentation.

Documentation should stay aligned with the codebase.

## Final Rule

Choose the implementation that is easiest to understand, easiest to maintain, and least likely to require major refactoring later.
