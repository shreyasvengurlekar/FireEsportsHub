# Overview

This is a modern Full-Stack gaming tournament platform called "FireStorm Esports" built for Free Fire players aged 10-18. The application provides tournament management, user registration, blog functionality, and contact features. It's built with React frontend, Express.js backend, PostgreSQL database with Drizzle ORM, and uses Shadcn/UI components for the interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Wouter** for client-side routing instead of React Router
- **Shadcn/UI** component library with Radix UI primitives
- **TailwindCSS** for styling with custom gaming theme colors
- **TanStack Query** for server state management and API calls
- **React Hook Form** with Zod validation for form handling
- **Vite** as the build tool and development server

## Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with dedicated routes for tournaments, registrations, blog posts, contact, and newsletter
- **In-memory storage** implementation with interface-based design for easy database migration
- **Zod schemas** for request validation shared between frontend and backend
- **Session-based** request logging and error handling middleware

## Data Storage
- **Drizzle ORM** configured for PostgreSQL with migration support
- **Neon Database** as the PostgreSQL provider (@neondatabase/serverless)
- **Database schema** includes tables for users, tournaments, registrations, blog posts, contacts, and newsletter subscriptions
- **Shared schema definitions** between client and server using Drizzle-Zod for type safety

## Authentication & Security
- Currently implements basic user schema with username/password fields
- Session management setup with connect-pg-simple for PostgreSQL session storage
- Form validation using Zod schemas with proper error handling

## Development Workflow
- **Monorepo structure** with separate client, server, and shared directories
- **Hot module replacement** with Vite in development mode
- **TypeScript** configuration with strict mode and path aliases
- **ESBuild** for production server bundling
- **Replit-specific** development tools and error handling

## External Dependencies

- **Neon Database** - PostgreSQL hosting service
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Icons** - Additional social media icons (Discord, Twitter, etc.)
- **Google Fonts** - Typography (Orbitron for gaming headers, Inter for body text)
- **Unsplash** - Stock images for gaming backgrounds
- **Replit services** - Development environment and deployment platform

The architecture follows a clean separation of concerns with shared type definitions, making it easy to maintain consistency between frontend and backend while supporting future scalability needs.