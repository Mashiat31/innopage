# Innovation Page - Developer Guide

## Overview
This Innovation page serves as a product updates hub for EiQ clients, displaying both released features and upcoming roadmap items.

## Content Management via JSON
Content is managed through the `src/data/features.json` file. Product owners should update this file and provide it to developers for deployment.

## JSON Structure

### What's New Features
```json
{
  "whatsNew": [
    {
      "id": "unique-id",
      "title": "Feature Title",
      "description": "Feature description text",
      "releaseDate": "DD MMM YYYY",
      "mediaType": "video" | "image",
      "mediaUrl": "path/to/media/file",
      "featured": true | false
    }
  ]
}
```

### Upcoming Features
```json
{
  "upcomingFeatures": [
    {
      "id": "unique-id",
      "title": "Feature Title", 
      "description": "Feature description text",
      "expectedDate": "Q3 2025" | "Month Year",
      "status": "In Development" | "Planning" | "Testing",
      "webinarLink": "url-to-webinar" | "#",
      "betaSignup": true | false
    }
  ]
}
```

## Media Assets
- Images should be placed in `src/assets/`
- Videos should be placed in `public/` for direct access
- Use descriptive filenames for better organization

## Deployment Process
1. Product owner updates `features.json`
2. Developer receives updated JSON file
3. Developer updates the file in the project
4. Deploy changes to production

## Design System
The page uses a professional enterprise design with:
- Dark navy sidebar
- Clean white content area  
- Card-based feature layout
- Semantic color tokens from the design system