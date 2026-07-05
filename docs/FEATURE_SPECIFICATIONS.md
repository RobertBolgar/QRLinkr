# FEATURE_SPECIFICATIONS.md

Version: 1.0

Status: Planning

Owner: Robert Bolgar

## Purpose

This document defines the functional specifications for each major feature in QRLinkr.

Every feature should include:

- Purpose
- User Story
- Requirements
- Acceptance Criteria
- Future Enhancements

---

# Feature 001 — Website URL QR

## Purpose

Generate QR codes for website URLs.

## User Story

As a user, I want to paste a URL and instantly generate a QR code.

## Requirements

- Accept HTTP and HTTPS URLs
- Live preview
- PNG export
- SVG export

## Acceptance Criteria

- QR updates instantly
- QR scans correctly
- Downloads work

---

# Feature 002 — Custom Message QR

## Purpose

Allow users to generate a QR code that displays a custom text message when scanned.

## User Story

As a user, I want to enter a custom message and instantly generate a QR code that displays that message when scanned.

## Requirements

- 100% client-side
- No account required
- No backend
- No database
- Unlimited use
- Live preview
- PNG download
- SVG download
- Uses the existing QR generation service
- Multi-line support
- Unicode support

## User Flow

1. Select generation mode
2. Choose between:
   - Website URL
   - Custom Message
3. Enter content
4. Live QR preview updates
5. Download PNG or SVG

## Acceptance Criteria

- QR updates instantly as user types
- QR scans correctly and displays the custom message
- Downloads work for both PNG and SVG formats
- No account creation required
- Works entirely client-side

---

# Feature 003 — Email QR

Fields:

- Email Address
- Subject (optional)
- Body (optional)

Generate valid mailto links.

---

# Feature 004 — Phone QR

Generate tel: QR codes.

Support international and domestic phone numbers.

---

# Feature 005 — SMS QR

Fields:

- Phone Number
- Message (optional)

Generate valid SMS QR codes.

---

# Feature 006 — Wi-Fi QR

Fields:

- SSID
- Password
- Security Type

Support:

- WPA/WPA2
- WEP
- Open Networks

---

# Feature 007 — PNG Download

Requirements:

- High Resolution
- No Watermark
- Print Ready
- Instant Download

---

# Feature 008 — SVG Download

Requirements:

- Vector Output
- Editable
- Infinite Scaling
- Standards Compliant

---

# Feature 009 — QR Customization

Allow users to customize:

- Foreground Color
- Background Color
- Margin
- Error Correction
- Output Size
- Transparent Background

Changes should update the preview immediately.

---

# Feature 010 — TubeLinkr Information Card

Purpose:

Introduce TubeLinkr after successful QR generation.

Explain:

- Smart Links
- Analytics
- Attribution
- Traffic Proof

Requirements:

- Never interrupt QR generation
- No popup
- Single call-to-action
- Helpful, not promotional

---

# Future Features

Additional specifications will be added as QRLinkr grows, including:

- vCard QR
- Calendar QR
- WhatsApp QR
- Crypto Wallet QR
- Logo Upload
- Dynamic QR Codes
- API
- Bulk Generation
