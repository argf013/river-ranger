import { useRouteError, Link } from 'react-router-dom';

export default function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
            <div className="rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-4 text-2xl font-bold text-red-600">Oops!</h1>
                <p className="mb-4 text-gray-700">Sorry, an unexpected error has occurred.</p>
                <p className="mb-6 text-gray-500">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link
                    to="/"
                    className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}
