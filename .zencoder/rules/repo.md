---
description: Repository Information Overview
alwaysApply: true
---

# prometheus Information

## Summary
`prometheus` is a modern web application built with **Next.js 16** and **React 19**, utilizing **Convex** as a backend-as-a-service and **Clerk** for authentication. The project follows a feature-based architecture and uses **Tailwind CSS** for styling and **Radix UI** for accessible components.

## Structure
- **./convex/**: Contains the backend schema (`schema.ts`), authentication configuration (`auth.config.ts`), and database functions (`projects.ts`).
- **./src/app/**: Implements the Next.js App Router, including the main layout and entry pages.
- **./src/features/**: Organized by feature (e.g., `auth`), containing feature-specific components and logic.
- **./src/components/**: Shared UI components, likely utilizing the Shadcn UI pattern (`components.json` present).
- **./src/lib/**: Shared utility functions and library initializations.
- **./public/**: Static assets like SVGs and icons.

## Language & Runtime
**Language**: TypeScript  
**Version**: ^5 (TypeScript), 20+ (Node.js types)  
**Build System**: Next.js  
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- **next**: 16.1.1 (Framework)
- **react**: 19.2.3 (UI Library)
- **convex**: ^1.31.7 (Backend/Database)
- **@clerk/nextjs**: ^6.36.7 (Authentication)
- **tailwindcss**: ^4 (Styling)
- **radix-ui**: ^1.4.3 (Primitives)
- **lucide-react**: ^0.562.0 (Icons)

**Development Dependencies**:
- **typescript**: ^5
- **eslint**: ^9
- **@types/node**: ^20
- **@types/react**: ^19

## Build & Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Testing
No testing framework (Jest, Vitest, Playwright, etc.) was identified in the repository configuration or file structure.

## Main Files & Resources
- **./next.config.ts**: Next.js configuration.
- **./convex/schema.ts**: Database schema definitions.
- **./convex/auth.config.ts**: Authentication integration with Convex.
- **./src/app/layout.tsx**: Root layout for the application.
- **./components.json**: Configuration for UI component generation/management.
