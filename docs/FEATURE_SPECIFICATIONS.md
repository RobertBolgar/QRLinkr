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

Allow users to generate a QR code that opens a hosted QRLinkr message page displaying a custom text message when scanned.

## User Story

As a user, I want to enter a custom message and instantly generate a QR code that opens a branded message page when scanned.

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
- Message limit: 160 characters
- URL-safe encoding
- Hosted /message page for display
- Plain text rendering (no HTML/script injection)
- Unicode support
- Emoji support

## Architecture

The QR code points to a hosted QRLinkr URL:
- Format: `https://qrlinkr.app/message?text=<encoded-message>`
- Message is URL-encoded in the query parameter
- The /message page decodes and displays the message
- No backend or database required
- Message content comes entirely from the QR code URL

## User Flow

1. Select generation mode
2. Choose between:
   - Website URL
   - Custom Message
3. Enter message (max 160 characters)
4. Live QR preview updates with hosted URL
5. Download PNG or SVG
6. When scanned, opens /message page with decoded message

## /message Page Requirements

- Read encoded message from URL query parameter
- Safely decode using URL-safe decoding
- Display message as plain text only (prevent HTML/script injection)
- Show polished QRLinkr-branded view
- Include "Create Your Own QR Message" CTA linking to homepage
- Show friendly empty state when no message parameter present
- Responsive design

## Acceptance Criteria

- QR updates instantly as user types
- QR scans correctly and opens the /message page
- /message page decodes and displays the message correctly
- Downloads work for both PNG and SVG formats
- No account creation required
- Works entirely client-side
- Emojis and special characters display correctly
- Empty state shows friendly message when no text parameter

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
