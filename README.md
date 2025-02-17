# Web Application Monorepo

A full-stack web application monorepo using modern technologies and best practices.

## Structure

### Apps

- **web/** - Next.js frontend application 
  - Built with Next.js 15
  - Uses React 19 with TypeScript
  - Integrates tRPC client for type-safe API calls

- **api/** - Express backend API
  - Express server with tRPC integration
  - Type-safe API endpoints
  - Database integration via Prisma

### Packages

- **database/** - Database layer
  - Prisma ORM for PostgreSQL
  - Type-safe database schemas
  - Migration management

- **trpc-client/** - tRPC client configuration
  - Shared tRPC client setup
  - React Query integration
  - Type-safe API hooks

- **trpc-server/** - tRPC server implementation
  - API route definitions
  - Request validation
  - Business logic handlers

- **ui/** - Shared UI components
  - Reusable React components
  - Consistent styling
  - Type-safe props

- **typescript-config/** - Shared TypeScript configurations
  - Base tsconfig
  - React-specific settings
  - Strict type checking

- **eslint-config/** - Shared ESLint configurations
  - Common linting rules
  - React best practices
  - TypeScript integration

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Set up the database:
```bash
cd packages/database
pnpm db:push  # Apply database schema
pnpm db:generate  # Generate Prisma client
```

3. Start development servers:
```bash
pnpm dev
```

## Development Scripts
- pnpm dev - Start development environment
- pnpm build - Build all applications
- pnpm lint - Run ESLint on all projects
- pnpm format - Format code with Prettier

## Requirements
- Node.js >=18
- PNPM 8.15.6 or higher
- PostgreSQL database

## Technology Stack
- Frontend: Next.js 15, React 19
- Backend: Express, tRPC
- Database: PostgreSQL, Prisma
- Type Safety: TypeScript
- Testing: ESLint, TypeScript
- Package Management: PNPM Workspaces
- Build Tool: Turbo