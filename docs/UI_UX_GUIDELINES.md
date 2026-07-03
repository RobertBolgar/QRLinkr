# UI_UX_GUIDELINES.md

Version: 1.0

Status: Planning

Owner: Robert Bolgar

## Purpose

Define the user experience principles and interface behavior for QRLinkr.

The interface should feel effortless. A first-time visitor should be able to generate and download a QR code in under 30 seconds without instructions.

## UX Philosophy

The user's goal is simple:

"I need a QR code."

Everything on the page should support that objective.

Never distract users before they complete their task.

## User Priorities

1. Generate a QR code
2. Download the QR code
3. Discover TubeLinkr

Always preserve this order.

## Homepage Layout

Header

↓

Hero

↓

QR Generator

↓

QR Preview

↓

Download Buttons

↓

Advanced Options

↓

TubeLinkr Information Card

↓

Footer

## Hero

Headline:

Create beautiful QR codes for free.

Supporting text:

No ads. No watermark. No account required.

## Desktop Layout

Two-column design.

Left:
- Input
- Settings

Right:
- QR Preview
- Download buttons

## Mobile Layout

Single column.

Order:

Input

↓

Preview

↓

Downloads

↓

Advanced Options

↓

TubeLinkr Card

## Input Experience

- Live generation
- Instant updates
- No Generate button
- Clear placeholder text

## QR Preview

The QR preview is the visual focus.

Requirements:

- Large
- Sharp
- Centered
- High contrast

## Download Experience

Buttons:

- Download PNG
- Download SVG

Downloads should begin immediately.

## Advanced Options

Collapsed by default.

Include:

- Foreground color
- Background color
- Margin
- Error correction
- Size
- Transparent background

## TubeLinkr Card

Only display after a QR code has been successfully generated.

Purpose:

Educate users about:

- Smart Links
- Analytics
- Attribution
- Traffic Proof

Never interrupt the QR generation workflow.

## Empty State

Display:

"Enter a URL to generate your QR code."

Avoid empty screens.

## Success Feedback

After download:

✓ PNG downloaded

or

✓ SVG downloaded

Use subtle toast notifications.

## Error Handling

Explain problems clearly.

Avoid technical jargon.

Always tell users how to fix the issue.

## Responsive Design

Support:

- Desktop
- Tablet
- Mobile

No horizontal scrolling.

## Accessibility

Support:

- Keyboard navigation
- Visible focus indicators
- Screen reader labels
- Proper color contrast

## UX Rule

If a design choice makes the interface more complicated without improving the user's ability to generate a QR code, it should be removed.
