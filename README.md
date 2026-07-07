# QRLinkr

Create beautiful QR codes for free. No ads. No watermark. No account required.

## Features

- Generate high-quality QR codes in PNG and SVG formats
- Clean, modern interface
- No account required
- No watermarks
- Fast and responsive

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Google Analytics Configuration

QRLinkr supports Google Analytics 4 integration through environment variables.

### Setup

1. Create a `.env.local` file in the project root
2. Add your Google Analytics Measurement ID:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Restart the development server after adding the variable

### How It Works

- If `VITE_GA_MEASUREMENT_ID` is set, Google Analytics will be loaded and initialized
- Page views are automatically tracked on route changes
- If the variable is not set, the application runs normally without analytics
- No console errors occur when analytics is not configured

### Verification

The production build includes Google Search Console verification for search indexing.
