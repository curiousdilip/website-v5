# Personal Portfolio - Dilip Kumar Maurya

This is a personal portfolio web application built with **Next.js** and **React**, showcasing projects, about information, and contact functionality. Features include smooth scrolling with Locomotive Scroll, page animations with Framer Motion, and server-side rendering (SSR) & static generation (SSG) for optimized performance and SEO.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)

---

## Demo

[(Live Link)](https://dilipmaurya.in/)

---

## Features

- **Next.js** framework with file-based routing and SSR/SSG
- Dynamic project pages with data fetched from Cosmic JS CMS
- Smooth scrolling integration via `react-locomotive-scroll`
- Responsive design with custom CSS variables and media queries
- Animated components built with `framer-motion`
- SEO-friendly metadata per page using `next/head`
- Contact form with client-side submission handler (can be extended with API route)
- Custom 404 page with navigation helpers

---

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)
- [Cosmic JS](https://www.cosmicjs.com/) (Headless CMS for project data)
- CSS Variables and Media Queries for styling
- Google Fonts (Montserrat)

---

## Project Structure

your-nextjs-portfolio/
├── components/
│ ├── Card.jsx
│ ├── ContactForm.jsx
│ ├── Header.jsx
│ ├── OtherProject.jsx
│ ├── ScrollToTop.jsx
├── pages/
│ ├── _app.js # Main layout and scroll provider
│ ├── _document.js # Custom document for Google Fonts
│ ├── 404.js # Custom 404 error page
│ ├── about.js # About page
│ ├── contact.js # Contact page
│ ├── index.js # Home page
│ └── work/
│ ├── index.js # Projects list page
│ └── [slug].js # Individual project dynamic page
├── public/
│ └── assets/ # Static images and icons
├── styles/
│ └── globals.css # Global CSS styles
├── package.json
└── next.config.js (optional)

text

---

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

git clone https://github.com/your-username/your-nextjs-portfolio.git
cd your-nextjs-portfolio

text

2. Install dependencies:

npm install

or
yarn install

text

3. Run the development server:

npm run dev

or
yarn dev

text

Open [http://localhost:3000](http://localhost:3000) to view your portfolio in your browser.

---

## Available Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the app for production.
- `npm start` - Start the production server after building.
- `npm run lint` - Run ESLint to check code quality.

---

## Deployment

You can deploy this Next.js app using platforms like:

- [Vercel](https://vercel.com/) (recommended, creators of Next.js)
- Netlify
- AWS Amplify
- Custom Node.js hosting

Make sure to set up any environment variables (e.g., API keys) in your deployment environment.

---

## Environment Variables

If you extend the app to use private API keys (e.g., for Cosmic JS or OpenWeatherMap), add a `.env.local` file in the root and use Next.js environment variables 🔐.

Example `.env.local`:

NEXT_PUBLIC_COSMIC_READ_KEY=your_read_key_here
NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_key_here

text

Access them in your code as:

process.env.NEXT_PUBLIC_COSMIC_READ_KEY

text

---

## Notes

- The project uses **URL-encoded JSON queries** to fetch project data from Cosmic JS API.
- For Locomotive Scroll compatibility with Next.js, the scroll logic is wrapped with client-side safe hooks and dynamic imports.
- Next.js 13+ `<Link>` is used without nesting `<a>` tags to prevent deprecated warnings.
- The `ContactForm` currently uses client-side fetch; you can add an API route to handle form submissions.

---

## License

This project is licensed under the MIT License.

---

## Author

Dimitar Kalapocev  
[LinkedIn](https://www.linkedin.com/in/dimitar-kalapocev/) | [GitHub](https://github.com/DimitarK13) | [Instagram](https://www.instagram.com/dimitar_kalapocev/)

---

If you have any questions or want help customizing or deploying, feel free to reach out!
