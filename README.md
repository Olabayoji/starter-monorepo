# Monorepo for Web Application Development

## Structure

### Apps

- **web:** Next.js application for the frontend user interface.
- **api:** Express backend API powered by TRPC for efficient remote procedure calls.

### libs

- **database:** Database interactions handled by Prisma, ensuring data consistency and efficiency.
- **trpc-client:** Configuration for the frontend to seamlessly communicate with the TRPC server. It supports both the client and react server components.
- **trpc-server:** Robust TRPC server setup for the backend API.
- **ui:** Reusable and encapsulated UI components.
- **typescript-config:** Base Typescript configuration for the monorepo
- **eslint-config:** ESLint configuration for the monorepo

## Key Features

- **TypeScript:** Enforces strong typing for a clean, maintainable, and error-free codebase.
- **Static Testing:** Maintain code quality and catch potential issues early with Prettier, ESLint, and TypeScript.
- **Type Propagation:** Database types seamlessly flow to UI components, ensuring type safety and preventing errors.
- **Modern Tooling:** Leverage the power of Prisma, TRPC, and NextAuth for efficient data management, communication, and authentication.
- **Reusable Components:** Build scalable and maintainable UIs with shared components.