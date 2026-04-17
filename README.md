# Ghost Compiler — Laravel React JSX Starter Kit

<p align="center">
<a href="https://github.com/ghostcompiler/laravel-react-jsx" target="_blank">
<img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Ghost Compiler Logo">
</a>
</p>

<p align="center">
Modern Laravel 13 + React 19 + Inertia + Vite starter kit built for scalable dashboards, SaaS panels, and license platforms.
</p>

---

# About

**Ghost Compiler Laravel React JSX Starter Kit** is a clean full-stack foundation that combines Laravel with React (JSX) using Inertia.js and Vite.

It is designed for building:

- Admin dashboards
- SaaS panels
- Multi-tenant systems
- License managers
- API-driven applications

---

# Stack

Core technologies included:

- Laravel 13
- React 19
- Inertia.js v3
- Vite 8
- TailwindCSS v4
- SSR (automatic in development with @inertiajs/vite)
- Custom Artisan generators

---

# Features

### Frontend

- React JSX architecture
- Inertia routing
- TailwindCSS v4
- SSR in development handled automatically (Inertia v3)
- Layout system support
- Hook-based logic structure

### Backend

- Laravel 13
- Clean routing structure
- Inertia integration
- SSR rendering support for production deployments

### Developer Experience

Custom generators included:

```bash
php artisan make:page
php artisan make:layout
php artisan make:component
php artisan make:hook
php artisan make:lib
php artisan make:helper
```

Nested paths supported automatically.

Example:

```bash
php artisan make:page Admin/Dashboard
```

Creates:

```
resources/js/pages/Admin/Dashboard.jsx
```

---

# Installation

## Using Composer (Recommended)

Create a new project:

```bash
composer create-project ghostcompiler/laravel-react-jsx demo
```

---

## Using Laravel Installer

If Laravel installer is installed globally:

```bash
laravel new demo --using=ghostcompiler/laravel-react-jsx
```

---

## Manual Installation (Fallback)

Clone repository manually:

```bash
git clone https://github.com/ghostcompiler/laravel-react-jsx.git demo
cd demo
composer install
npm install
cp .env.example .env
php artisan key:generate
npm run start
```

---

# Development Commands

Start full development environment:

```bash
npm run start
```

Runs:

- Laravel server
- Vite dev server
- Inertia SSR automatically in development

Run only Vite:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Build production client + SSR bundles:

```bash
npm run build:ssr
```

Start SSR renderer manually (production):

```bash
php artisan inertia:start-ssr
```

---

# SSR Support

Inertia v3 with `@inertiajs/vite` enables SSR automatically during development when running:

```bash
npm run dev
```

or:

```bash
npm run start
```

No separate SSR Node process is required in development.

For production SSR, build the SSR bundle:

```bash
npm run build:ssr
```

Production SSR output:

```
public/build/
bootstrap/ssr/app.js
```

Then run the SSR renderer:

```bash
php artisan inertia:start-ssr
```

To confirm SSR is working, open the app in a browser and check the page source or the first HTML response. If SSR is active, the initial response will already include rendered page content instead of only a shell div, and the server logs will show the SSR process starting without errors.

---

# Docker Deployment

This project includes a production Dockerfile for platforms like Render and Railway.

Build behavior:

- Installs Composer dependencies with Laravel scripts disabled during image build
- Builds the frontend and SSR bundle with Vite
- Copies the runtime PHP app, vendor directory, built assets, and SSR bundle into the final image
- Starts the Laravel web server on the platform-provided `PORT`
- Starts Inertia SSR automatically when the SSR bundle is present

Hosted demos:

- Render: https://dashboard-agpr.onrender.com/
- Railway: http://dashboard-production-6de3.up.railway.app

How to deploy:

```bash
docker build -t ghostcompiler-dashboard .
docker run -p 8080:8080 -e APP_ENV=production -e APP_DEBUG=false ghostcompiler-dashboard
```

How to check SSR after deploy:

1. Open the live URL and confirm the page loads without a client-only flash on first paint.
2. Inspect the page source and verify the landing page content is already in the HTML response.
3. Check the deployment logs for `Starting Inertia SSR...` and make sure there is no SSR startup error.
4. If the SSR bundle is missing, confirm `bootstrap/ssr/app.js` exists in the container image.

---

# Project Structure

```
resources/js/
│
├── components/
├── hooks/
├── layouts/
├── lib/
├── pages/
└── app.jsx
```

Recommended usage:

| Folder     | Purpose             |
| ---------- | ------------------- |
| pages      | Inertia route pages |
| layouts    | Layout wrappers     |
| components | UI components       |
| hooks      | React hooks         |
| lib        | Utilities / helpers |

---

# Artisan Generators

## Create Page

```bash
php artisan make:page Dashboard
```

Creates:

```
resources/js/pages/Dashboard.jsx
```

---

## Create Layout

```bash
php artisan make:layout Admin/MainLayout
```

Creates:

```
resources/js/layouts/Admin/MainLayout.jsx
```

---

## Create Component

```bash
php artisan make:component UI/Button
```

Creates:

```
resources/js/components/UI/Button.jsx
```

---

## Create Hook

```bash
php artisan make:hook useAuth
```

Creates:

```
resources/js/hooks/useAuth.js
```

---

## Create Library File

```bash
php artisan make:lib api/client
```

Creates:

```
resources/js/lib/api/client.js
```

---

## Create Helper File

```bash
php artisan make:helper format/currency
```

Creates:

```
app/Helpers/Format/Currency.php
```

---

# Example Layout Usage

```jsx
import DashboardLayout from "@/layouts/Admin/MainLayout";

export default function Dashboard() {
    return <div>Dashboard</div>;
}

Dashboard.layout = (page) => <DashboardLayout>{page}</DashboardLayout>;
```

---

# Example Hook Usage

```jsx
import useAuth from "@/hooks/useAuth";

const { state } = useAuth();
```

---

# Example Component Usage

```jsx
import Button from "@/components/UI/Button";

<Button>Click me</Button>;
```

---

# Scripts

Available npm scripts:

```bash
npm run dev
npm run build
npm run build:ssr
npm run start
```

| Script    | Purpose                    |
| --------- | -------------------------- |
| dev       | Run Vite (SSR auto in dev) |
| build     | Build client bundle        |
| build:ssr | Build client + SSR bundles |
| start     | Laravel + Vite             |

---

# Requirements

Minimum versions:

| Tool    | Version |
| ------- | ------- |
| PHP     | 8.3+    |
| Node    | 20+     |
| Laravel | 13      |
| React   | 19      |

---

# Recommended Usage

Ideal for:

- SaaS dashboards
- reseller panels
- licensing systems
- admin portals
- API-first applications

---

# Contributing

Pull requests are welcome.

If you'd like to improve generators or architecture, contributions are appreciated.

---

# License

MIT License © Ghost Compiler
