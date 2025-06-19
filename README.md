# GitHub Package Consumer POC

This React application demonstrates how to consume packages from GitHub Package Registry in a standalone project (outside of a monorepo).

## Features

- **React 18** with modern hooks and features
- **Vite** for fast development and optimized builds
- **ESLint** configuration for code quality
- **GitHub Package Registry** integration via `.npmrc`
- **Hot Module Replacement** for development
- **Production-ready build** optimization

## Prerequisites

1. **GitHub Personal Access Token**: You need a GitHub token with `read:packages` scope
2. **Node.js**: Version 16 or higher
3. **pnpm**: Package manager (recommended) or npm

## Quick Start

1. **Set your GitHub token as an environment variable**:
   ```bash
   export GITHUB_TOKEN=your_github_token_here
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start development server**:
   ```bash
   pnpm dev
   ```

The app will be available at `http://localhost:5173`

## Development

```bash
# Start development server with hot reload
pnpm dev

# Run linting
pnpm lint

# Preview production build
pnpm preview
```

## Build

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

## Project Structure

```
├── src/
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .npmrc               # GitHub Package Registry configuration
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite build configuration
└── README.md           # This file
```

## Package Configuration

The project is configured to use GitHub Package Registry for `@deepak-terse` scoped packages via the `.npmrc` file:

```
@deepak-terse:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

This allows the project to install and use the `@deepak-terse/hello-ui` package directly from GitHub Package Registry.

## Dependencies

### Production
- `react` ^18.2.0 - React library
- `react-dom` ^18.2.0 - React DOM rendering
- `@deepak-terse/hello-ui` ^2.0.2 - UI component from GitHub Package Registry

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React support for Vite
- `eslint` - Code linting
- `@types/react` - TypeScript definitions

## Related Projects

- **[GitHub Package Monorepo POC](../gh-pkg-monorepo-poc/README.md)** - Source monorepo that publishes the packages consumed by this application
- **[@deepak-terse/hello-ui](https://github.com/deepakterse/gh-pkg-monorepo-poc/tree/main/packages/hello-ui)** - UI component package being consumed

## Repository

This is a standalone consumer application that demonstrates GitHub Package Registry consumption outside of a monorepo context. 