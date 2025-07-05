import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-100 p-4">
            <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
                <h2 className="mb-6 text-2xl font-semibold text-gray-700">Page Not Found</h2>
                <p className="mb-8 text-gray-600">
                    The page you are looking for doesn't exist or has been moved.
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
