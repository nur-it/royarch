# Royarch

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `src/app/page.jsx`. The page auto-updates as you edit the file.

## About This Project

This project is a web application built with Next.js and React. It serves as a portfolio website for an architecture firm named "Royarch".

### Features

- **Home Page:** A landing page with a hero section.
- **Portfolio:** Showcases the firm's projects.
- **Contact Page:** A form to get in touch with the firm.
- **Project Pages:** Detailed pages for each project.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run start`

Starts the application in production mode. The application should be compiled with `npm run build` first.

### `npm run lint`

Runs the linter to check for code quality and style issues.

## Dependencies

- [next](https.nextjs.org): A React framework for building server-side rendered and statically generated web applications.
- [react](https.reactjs.org): A JavaScript library for building user interfaces.
- [react-dom](https.reactjs.org/docs/react-dom.html): Provides DOM-specific methods that can be used at the top level of your app.

## Dev Dependencies

- [eslint](https.eslint.org): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [eslint-config-next](https://nextjs.org/docs/basic-features/eslint): The default ESLint configuration for Next.js projects.

## Folder Structure

```
.
├── .next
├── node_modules
├── public
│   ├── footer-logo.png
│   ├── logo-image.png
│   └── hero
│       ├── carousel-item-1.png
│       ├── carousel-item-2.jpg
│       └── carousel-item-3.jpg
├── src
│   ├── app
│   │   ├── contact
│   │   │   └── page.jsx
│   │   ├── portfolio-alternative
│   │   │   └── page.jsx
│   │   └── projects
│   │       └── innovation-architecture
│   │           └── page.jsx
│   ├── components
│   │   ├── sections
│   │   │   ├── contact
│   │   │   ├── home
│   │   │   │   └── hero.jsx
│   │   │   └── project
│   │   └── shared
│   │       ├── header.jsx
│   │       ├── pre-loader.jsx
│   │       ├── sidebar.jsx
│   │       └── svgs.jsx
│   ├── hooks
│   │   └── use-test.js
│   └── styles
│       └── globals.css
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
```
