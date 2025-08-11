# Law Firm Website - Replit Development Guide

## Overview

This is a Korean law firm website for "빛솔 법률사무소" (Bitsol Law Office) specializing in consultation requests and client communication. The application features a modern React frontend with a Node.js/Express backend, designed for consultation form submissions and client management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **Tailwind CSS** with **shadcn/ui** component library for consistent styling
- **Tanstack Query** for server state management and API calls
- **React Hook Form** with **Zod** validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design for consultation endpoints
- **In-memory storage** implementation (currently using MemStorage class)
- **Drizzle ORM** configured for PostgreSQL (ready for database integration)
- **Session-based architecture** prepared with connect-pg-simple

### Key Components

1. **Consultation System**
   - Form submission with validation
   - Email and phone contact collection
   - Practice area selection
   - Privacy agreement compliance
   - Status tracking (pending, contacted, resolved)

2. **UI Components**
   - Responsive design with mobile-first approach
   - Accessible components using Radix UI primitives
   - Professional law firm styling with custom color scheme
   - Toast notifications for user feedback

3. **Content Pages**
   - Home page with hero section and contact CTAs
   - About page with lawyer introduction
   - Team page showcasing firm members
   - Practice areas with detailed service descriptions
   - Contact page with location and contact info
   - Privacy policy page

## Data Flow

1. **Consultation Submission**
   - Client fills out consultation form
   - Form validation using Zod schema
   - Data sent to `/api/consultations` POST endpoint
   - Server stores consultation with auto-generated ID
   - Success/error feedback via toast notifications

2. **Admin Consultation Viewing**
   - GET `/api/consultations` returns all consultations
   - Sorted by creation date (newest first)
   - Status tracking for follow-up management

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, ReactDOM, Vite)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)

### UI and Styling
- Tailwind CSS with PostCSS
- Radix UI component primitives
- Lucide React icons
- Custom law firm color theming

### Development Tools
- TypeScript for type safety
- ESBuild for production builds
- Replit-specific development plugins

## Deployment Strategy

### Development Environment
- Vite dev server with HMR (Hot Module Replacement)
- Express server with middleware integration
- Replit-specific development banner and error handling

### Production Build Process
1. Frontend build: `vite build` → outputs to `dist/public`
2. Backend build: `esbuild` bundles server code → outputs to `dist/index.js`
3. Static file serving from built frontend assets

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection (Drizzle config ready)
- Development vs production asset serving strategy

### Database Integration Notes
- Drizzle schema defined in `shared/schema.ts`
- Currently using in-memory storage (`MemStorage` class)
- Ready for PostgreSQL integration when database is provisioned
- Migration system configured via `drizzle.config.ts`

### File Structure
- `client/` - React frontend application
- `server/` - Express backend with API routes
- `shared/` - Common TypeScript types and schemas
- Component organization follows feature-based structure
- UI components use shadcn/ui conventions with custom styling