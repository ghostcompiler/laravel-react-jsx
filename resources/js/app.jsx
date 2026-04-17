import { StrictMode } from 'react';
import { initializeTheme } from '@/hooks/useAppearance';
import { createInertiaApp } from '@inertiajs/react';
import '../css/app.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    // layout: (name) => { // This is where you can set different layouts based on the page name. For example, you might want to use a different layout for auth pages.
    //     switch (true) {
    //         case name.startsWith('auth/'):
    //             return AuthLayout;
    //         default:
    //             return AppLayout;
    //     }
    // },
    strictMode: true,
    withApp(app) {
        return <StrictMode>{app}</StrictMode>;
    },
    progress: {
        delay: 0,
        color: '#4B5563',
    },
});

initializeTheme();
