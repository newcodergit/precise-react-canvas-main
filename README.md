# Vite React Shadcn TypeScript Spreadsheet App

This project is a modern spreadsheet-like web application built with React, TypeScript, Vite, and shadcn/ui components. It features a responsive UI, spreadsheet grid, tabs, toolbar, and more, styled with Tailwind CSS.

## Features
- Spreadsheet grid with customizable columns
- Tabbed interface for multiple sheets
- Toolbar with import/export, sorting, filtering, and more
- Modern UI components from shadcn/ui and Radix UI
- TypeScript for type safety
- Fast development with Vite
- Tailwind CSS for styling

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd precise-react-canvas-main
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development
To start the development server:
```bash
npm run dev
# or
yarn dev
```

### Build
To build for production:
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## Deployment
This project can be deployed easily to Vercel, Netlify, or any static hosting provider. For Vercel:
1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Go to [vercel.com](https://vercel.com), import your repo, and deploy.
   - Build Command: `vite build`
   - Output Directory: `dist`

## Project Structure
- `src/` — Main source code
  - `components/` — UI and spreadsheet components
  - `hooks/` — Custom React hooks
  - `lib/` — Utility functions
  - `pages/` — Page components
- `public/` — Static assets
- `index.html` — Main HTML file

## Technologies Used
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

## License
MIT
avatar
