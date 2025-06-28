You are typescript expert and use `typescript` mcp tools to analyze and edit code.

Given a URL, use read_url_content_as_markdown and summary contents

## CRITICAL: Tool Usage Priority for Refactoring

**When performing refactoring operations (rename, move, etc.) on TypeScript/JavaScript code, ALWAYS use typescript MCP tools (`mcp__typescript_*`) instead of the default Edit/Write tools.**

Specifically for refactoring:

- For renaming symbols: ALWAYS use `mcp__typescript__rename_symbol` instead of Edit/Write
- For moving files: ALWAYS use `mcp__typescript__move_file` instead of Bash(mv) or Write
- For moving directories: ALWAYS use `mcp__typescript__move_directory` instead of Bash(mv)
- For finding references: ALWAYS use `mcp__typescript__find_references` instead of Grep/Bash(grep)
- For type analysis: ALWAYS use `mcp__typescript__get_type_*` tools

**NEVER use Edit, MultiEdit, or Write tools for TypeScript refactoring operations that have a corresponding mcp\__typescript_\* tool.**


## Development Stack

- pnpm
- typescript

## Code Modification Workflow

When modifying code in this project:

### 1. Development Commands
```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint
```

### 2. Code Quality Checks
Before committing, always run:
1. `pnpm typecheck` - Ensure no TypeScript errors
2. `pnpm lint` - Check for linting issues

### 3. Refactoring Guidelines
- Use TypeScript MCP tools for semantic refactoring
- Follow existing patterns in the codebase

## Directory Patterns

```
  apps/               # Application directory
    api/              # Hono API server for Cloudflare Workers
      src/            # API source code
        router/       # API route handlers (ogp, toc, twemoji)
        usecase/      # Business logic layer
      wrangler.toml   # Cloudflare Workers configuration
    blog/             # Hono + React blog application
      app/            # Blog application source
        components/   # React components
          domain/     # Domain-specific components
          elements/   # UI elements (header, footer, pagination)
          layouts/    # Layout components
          markdown/   # MDX custom components
          svg/        # SVG components
        css/          # SCSS stylesheets
        mdx/          # MDX configuration and utilities
        routes/       # File-based routing (pages and posts)
          posts/      # Blog post MDX files with assets
        utils/        # Utility functions
      public/         # Static assets
      dist/           # Build output directory

  tooling/            # Shared development tooling
    eslint/           # ESLint configuration packages
    github/           # GitHub Actions setup
    prettier/         # Prettier configuration
    tailwind/         # Tailwind CSS configuration
    typescript/       # TypeScript configuration

  node_modules/       # Root dependencies
  pnpm-workspace.yaml # PNPM workspace configuration
  turbo.json          # Turborepo configuration
```


## Architecture Overview

### MCP Client Configuration
This project uses external MCP servers via mcp.json:
- TypeScript language server (@mizchi/lsmcp)
- Web readability tools (@mizchi/readability)

### Cpmmand Configuration
This project uses Command via .claude/commands:
- Google Search (gemini-search)
- Split complex tasks into sequential steps, where each step can contain multiple parallel subtasks (orchestrator)

### Monorepo Structure
- Uses PNPM workspaces with Turborepo
- Hono-based API and blog applications
- Shared tooling configurations

### TypeScript Project Management
- Project instances are cached for performance
- Supports both tsconfig-based and default projects
- File dependency resolution is disabled by default for performance

