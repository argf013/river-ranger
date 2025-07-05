import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/" className="text-xl font-bold text-gray-800">
                                PWA Template
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                            <Link
                                to="/"
                                className="border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
