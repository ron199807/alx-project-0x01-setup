# Next.js User Management Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Features

- User management with add/edit functionality
- Modular component structure (`components/common`, `components/layout`)
- TypeScript support with custom interfaces ([interfaces/index.ts](interfaces/index.ts))
- API routes via [pages/api](pages/api)
- Styled with Tailwind CSS ([postcss.config.mjs](postcss.config.mjs))
- Font optimization using [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
alx-project-0x01/
  components/
    common/      # Reusable UI components (e.g., UserModal)
    layout/      # Layout components
  interfaces/    # TypeScript interfaces and types
  pages/         # Next.js pages and API routes
  public/        # Static assets
  styles/        # Global and component styles
  ...
```

## API Routes

API routes are available under `/api/*`. For example, [http://localhost:3000/api/hello](http://localhost:3000/api/hello) is handled by [pages/api/hello.ts](pages/api/hello.ts).

## Customization

- Edit UI components in [components/common](components/common)
- Update types/interfaces in [interfaces/index.ts](interfaces/index.ts)
- Modify global styles in [styles/](styles/)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn-pages-router)
- [Next.js GitHub](https://github.com/vercel/next.js)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for