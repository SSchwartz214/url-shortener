# URL Shortener

A simple URL shortener API built with Express and TypeScript.

## Features

- Shorten URLs to 5-character slugs
- Retrieve original URLs from shortened slugs
- Duplicate detection - returns existing slug if URL already exists
- In-memory storage using TypeScript

## Installation

```bash
npm install
```

## Usage

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

## API Endpoints

### Shorten a URL

**POST** `/shorten`

Request body:
```json
{
  "originalUrl": "https://example.com"
}
```

Response:
```json
{
  "shortenedUrl": "abc12"
}
```

### Retrieve Original URL

**GET** `/shorten/:shortenedUrl`

Redirects to the original URL if the slug exists.

## Tech Stack

- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Jest** - Testing framework

