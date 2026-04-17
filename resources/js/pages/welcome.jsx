import { useState } from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head>
                <title>Ghost Compiler Laravel React JSX Starter Kit</title>
                <meta
                    name="description"
                    content="Ghost Compiler Laravel React JSX Starter Kit is a production-ready Laravel 13 and React 19 Inertia starter with JSX pages, SSR support, Docker deployment, and modern dashboard tooling."
                />
                <meta
                    name="keywords"
                    content="Laravel, React, JSX, Inertia, SSR, Vite, Tailwind, Docker, Render, Railway, dashboard starter kit"
                />
                <meta name="robots" content="index,follow" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Ghost Compiler Laravel React JSX Starter Kit"
                />
                <meta
                    property="og:description"
                    content="A Laravel 13 + React 19 Inertia starter kit with JSX-first pages, production SSR support, and Docker deployment built in."
                />
                <meta property="og:url" content="https://dashboard-agpr.onrender.com/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Ghost Compiler Laravel React JSX Starter Kit"
                />
                <meta
                    name="twitter:description"
                    content="Production-ready Laravel 13 and React 19 starter with JSX pages, SSR support, and Docker deployment."
                />
                <link rel="canonical" href="https://dashboard-agpr.onrender.com/" />
            </Head>

            <div className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-slate-100 selection:bg-emerald-400/40 max-[578px]:px-3 max-[578px]:py-6 sm:px-6 sm:py-10">
                <BackgroundShapes />

                <div className="relative mx-auto w-full max-w-6xl space-y-10">
                    <header className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-md md:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-4 max-[578px]:items-start">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/favicon.svg"
                                    alt="Ghost Compiler logo"
                                    className="h-12 w-12 rounded-xl border border-white/15 bg-white/10 p-2 shadow-lg shadow-emerald-400/20"
                                />
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300/90 uppercase">
                                        Ghost Compiler
                                    </p>
                                    <h1 className="text-xl font-black tracking-tight text-white max-[578px]:text-lg sm:text-2xl">
                                        Laravel + Inertia JSX Integration
                                    </h1>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-rose-300/40 bg-rose-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-rose-100 uppercase">
                                    Laravel 13
                                </span>
                                <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-200 uppercase">
                                    JSX First
                                </span>
                            </div>
                        </div>
                    </header>

                    <section className="grid gap-6 lg:grid-cols-5">
                    <div className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-2xl shadow-black/20 backdrop-blur-md max-[578px]:p-3 sm:p-6 lg:col-span-3 md:p-8">
                        <div className="mb-8 flex flex-wrap items-center gap-5">
                            <img
                                src="/favicon.svg"
                                alt="Ghost Compiler mark"
                                className="h-18 w-18 rounded-2xl border border-white/20 bg-slate-900/60 p-3 shadow-xl shadow-emerald-500/25"
                            />
                            <div className="space-y-2">
                                <p className="inline-block rounded-full border border-rose-300/40 bg-rose-300/10 px-3 py-1 text-xs font-bold tracking-[0.16em] text-rose-100 uppercase">
                                    Laravel Defaults To TSX, This Starter Uses JSX
                                </p>
                                <h2 className="text-3xl leading-tight font-black tracking-tight text-white max-[578px]:text-2xl sm:text-5xl">
                                    Inertia Integration Rebuilt,
                                    <span className="block bg-linear-to-r from-emerald-300 via-cyan-200 to-sky-300 bg-clip-text text-transparent">
                                        Clean React JSX Workflow
                                    </span>
                                </h2>
                                <p className="max-w-2xl text-base leading-relaxed text-slate-200/90">
                                    A production-focused Laravel 13 starter that keeps Inertia modern and delivers JSX-first pages, layouts, hooks, and generators for dashboard and SaaS teams.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <StatCard label="Framework" value="Laravel 13" />
                            <StatCard label="Inertia" value="v3 + SSR" />
                            <StatCard label="Frontend" value="React 19 JSX" />
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/15 bg-linear-to-b from-emerald-400/15 to-cyan-300/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-md max-[578px]:p-3 sm:p-6 lg:col-span-2 md:p-8">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-emerald-200 uppercase">
                            Integration Highlights
                        </h3>
                        <div className="mt-4 space-y-3">
                            <Feature title="Inertia + JSX Pages" desc="Route-driven pages in resources/js/pages/*.jsx" />
                            <Feature title="JSX Layout Pattern" desc="Attach layouts with Dashboard.layout = (page) => ..." />
                            <Feature title="Hook Based Logic" desc="Organize reusable logic under resources/js/hooks" />
                            <Feature title="SSR In Dev" desc="Inertia v3 handles SSR automatically with composer run dev" />
                            <Feature title="Production SSR" desc="Build with npm run build:ssr then start inertia:start-ssr" />
                            <Feature title="Generators Included" desc="make:page, make:layout, make:component, make:hook" />
                        </div>
                    </div>
                </section>

                    <section className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-md max-[578px]:p-3 sm:p-6 md:p-8">
                        <div className="mb-4 flex items-center justify-between gap-2 max-[578px]:flex-wrap max-[578px]:items-start">
                            <h3 className="text-sm font-bold tracking-[0.2em] text-slate-200 uppercase">
                                Installation
                            </h3>
                            <span className="rounded-full border border-rose-300/50 bg-rose-300/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-rose-100 uppercase">
                                Official Commands
                            </span>
                        </div>

                        <p className="mb-4 text-sm leading-relaxed text-slate-300">
                            Use one of these commands to scaffold from this starter.
                        </p>

                        <div className="space-y-3">
                            <CommandLine command="composer create-project ghostcompiler/laravel-react-jsx" />
                            <CommandLine command="laravel new demo --using=ghostcompiler/laravel-react-jsx" />
                        </div>

                        <p className="mt-4 wrap-break-word text-xs text-slate-400">
                            Composer command can also include a folder name, for example: <span className="font-semibold text-slate-200 break-all">composer create-project ghostcompiler/laravel-react-jsx demo</span>
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-md max-[578px]:p-3 sm:p-6 md:p-8">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-slate-200 uppercase">
                            Requirements
                        </h3>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <RequirementItem label="PHP" value="8.3+" />
                            <RequirementItem label="Node" value="20+" />
                            <RequirementItem label="Laravel" value="13" />
                            <RequirementItem label="React" value="19" />
                        </div>
                    </div>
                </section>

                    <section className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-md max-[578px]:p-3 sm:p-6 md:p-8">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-slate-200 uppercase">
                            JSX Generator Commands
                        </h3>
                        <div className="mt-4 space-y-3">
                            <CommandLine command="php artisan make:page Dashboard" />
                            <CommandLine command="php artisan make:layout Admin/MainLayout" />
                            <CommandLine command="php artisan make:component UI/Button" />
                            <CommandLine command="php artisan make:hook useAuth" />
                            <CommandLine command="php artisan make:lib api/client" />
                            <CommandLine command="php artisan make:helper format/currency" />
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-md max-[578px]:p-3 sm:p-6 md:p-8">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-slate-200 uppercase">
                            SSR Quick Guide
                        </h3>
                        <div className="mt-4 space-y-4">
                            <GuideCard
                                title="Development"
                                colorClass="text-emerald-300"
                                content={
                                    <>
                                        Run <InlineCode text="composer run dev" /> for full stack development, or <InlineCode text="npm run dev" /> for frontend only.
                                        Inertia v3 handles SSR automatically in development.
                                    </>
                                }
                            />
                            <GuideCard
                                title="Production"
                                colorClass="text-amber-300"
                                content={
                                    <>
                                        Build with <InlineCode text="npm run build:ssr" /> then run <InlineCode text="php artisan inertia:start-ssr" />.
                                    </>
                                }
                            />
                        </div>
                    </div>
                </section>

                    <section className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-md max-[578px]:p-3 sm:p-6 md:p-8">
                    <h3 className="text-sm font-bold tracking-[0.2em] text-slate-200 uppercase">
                        JSX Inertia Flow
                    </h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                        <FlowStep
                            title="1. Route"
                            desc="Laravel route returns Inertia::render with a page name."
                        />
                        <FlowStep
                            title="2. Page"
                            desc="Inertia loads the matching JSX page from resources/js/pages."
                        />
                        <FlowStep
                            title="3. Layout"
                            desc="Optional layout wrapper composes dashboard or app shells."
                        />
                    </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-md max-[578px]:p-3 sm:p-6 md:p-8">
                    <h3 className="text-sm font-bold tracking-[0.2em] text-slate-200 uppercase">
                        Scripts
                    </h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <ScriptItem name="composer run dev" desc="Laravel server + queue + logs + Vite" />
                        <ScriptItem name="npm run dev" desc="Vite frontend dev server" />
                        <ScriptItem name="npm run build" desc="Client bundle" />
                        <ScriptItem name="npm run build:ssr" desc="Client + SSR bundles" />
                    </div>
                </section>

                    <footer className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center backdrop-blur-sm">
                        <p className="text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">
                            Crafted for Laravel teams shipping JSX-first Inertia products
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}

function BackgroundShapes() {
    return (
        <>
            <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl" />
            <div className="pointer-events-none absolute top-40 -right-20 h-104 w-104 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/15 blur-3xl" />
        </>
    );
}

function StatCard({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/15 bg-slate-900/45 p-4">
            <p className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
                {label}
            </p>
            <p className="mt-1 text-xl font-black tracking-tight text-white">
                {value}
            </p>
        </div>
    );
}

function RequirementItem({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/15 bg-slate-900/45 p-4">
            <p className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
                {label}
            </p>
            <p className="mt-1 text-lg font-black text-emerald-200">{value}</p>
        </div>
    );
}

function FlowStep({ title, desc }) {
    return (
        <div className="rounded-2xl border border-white/15 bg-slate-900/45 p-4">
            <p className="text-sm font-black text-cyan-100">{title}</p>
            <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
    );
}

function ScriptItem({ name, desc }) {
    return (
        <div className="rounded-2xl border border-white/15 bg-slate-900/45 p-4">
            <p className="font-mono text-sm font-semibold text-cyan-100">{name}</p>
            <p className="mt-1 text-xs text-slate-300">{desc}</p>
        </div>
    );
}

function Feature({ title, desc }) {
    return (
        <div className="rounded-2xl border border-white/15 bg-slate-900/35 p-4 transition-transform duration-300 hover:translate-x-1 hover:border-emerald-300/60">
            <p className="text-base font-bold text-white">{title}</p>
            <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
    );
}

function GuideCard({ title, colorClass, content }) {
    return (
        <div className="rounded-2xl border border-white/15 bg-slate-900/40 p-4">
            <p className={`text-xs font-bold tracking-[0.18em] uppercase ${colorClass}`}>
                {title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">{content}</p>
        </div>
    );
}

function InlineCode({ text }) {
    return (
        <span className="mx-1 rounded-md border border-white/20 bg-black/30 px-1.5 py-0.5 font-mono text-xs text-cyan-100">
            {text}
        </span>
    );
}

function CommandLine({ command }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group flex flex-col gap-3 rounded-xl border border-white/15 bg-slate-900/50 p-3 transition-all duration-300 hover:border-cyan-300/60 hover:bg-slate-900/70 sm:flex-row sm:items-center sm:justify-between">
            <code className="w-full min-w-0 overflow-x-auto whitespace-nowrap font-mono text-sm text-cyan-100 sm:text-base">
                <span className="mr-2 text-slate-400">$</span>
                <span>{command}</span>
            </code>
            <button
                onClick={handleCopy}
                className={`flex w-full shrink-0 items-center justify-center rounded-lg px-3 py-1.5 text-xs font-bold tracking-wide uppercase transition-all active:scale-95 sm:w-auto ${
                    copied
                        ? 'bg-emerald-400 text-slate-900'
                        : 'border border-white/20 bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
            >
                {copied ? 'Copied' : 'Copy'}
            </button>
        </div>
    );
}
