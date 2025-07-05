// Pages
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout
import MainLayout from '../layouts/MainLayout';
import ErrorBoundary from '../components/ErrorBoundary';

// Lazy loaded pages for better performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Loading component
const PageLoader = () => (
    <div className="flex h-screen w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
    </div>
);

// Router configuration
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: 'about',
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: '*',
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <NotFound />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
