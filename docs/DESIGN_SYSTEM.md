# DESIGN_SYSTEM.md

Version: 1.0

Status: Planning

Owner: Robert Bolgar

## Purpose

This document defines the visual design language for QRLinkr.

The goal is to create a premium, modern experience that feels more like professional software than a typical free online utility.

## Design Philosophy

QRLinkr should be:

- Minimal
- Modern
- Fast
- Professional
- Trustworthy

Avoid:

- Advertisements
- Visual clutter
- Flashy gradients
- Excessive animations
- Marketing-heavy interfaces

## Inspiration

- Linear
- Vercel
- Stripe
- Raycast
- GitHub

## Color Palette

### Background
Primary: #09090B
Surface: #111113
Card: #18181B

### Text
Primary: #FFFFFF
Secondary: #A1A1AA
Muted: #71717A

### Accent
TubeLinkr Orange: #FF6B2C

### Success
#22C55E

### Error
#EF4444

### Borders
rgba(255,255,255,.08)

## Typography

Headings:
DM Sans

Body:
Inter

Monospace:
JetBrains Mono

## Layout

- Max width: 1200px
- Centered content
- Large whitespace
- Consistent spacing

Spacing scale:

4
8
12
16
24
32
48
64
96

## Border Radius

Inputs: 12px

Buttons: 12px

Cards: 16px

Dialogs: 20px

## Buttons

Primary:
Orange background
White text

Secondary:
Dark background
Border

Ghost:
Transparent

## Inputs

Large
Rounded
Comfortable
Clear focus state

## Cards

Use subtle borders and generous spacing.

Cards should organize content without overwhelming the interface.

## QR Preview

The QR preview is the hero element.

Requirements:

- Large
- Centered
- Sharp
- High contrast
- Smooth updates

## Icons

Use Lucide icons consistently throughout the application.

## Motion

Keep animations subtle.

Duration:

150–250ms

Use motion only to improve usability.

## Accessibility

- Strong contrast
- Keyboard navigation
- Visible focus states
- Clear labels

## Design Rule

Before adding anything to the UI ask:

"Does this make generating a QR code easier?"

If not, it probably shouldn't be added.
