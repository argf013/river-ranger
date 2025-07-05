import { Link } from 'react-router-dom';
import { useState } from 'react';
import RiverRangerLogo from '../../public/favicon.svg';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/" className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                                    <img src={RiverRangerLogo} alt="River Ranger Logo" className="w-6 h-6" />
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                                    River Ranger Jakarta
                                </span>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                            <Link
                                to="/"
                                className="border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                            >
                                Beranda
                            </Link>
                            <Link
                                to="/about"
                                className="border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                to="/programs"
                                className="border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                            >
                                Program
                            </Link>
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-green-700 transition-colors duration-200"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-green-700 transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                        ? 'max-h-64 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}>
                    <div className="pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                        <Link
                            to="/"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 transform hover:translate-x-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Beranda
                        </Link>
                        <Link
                            to="/about"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 transform hover:translate-x-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            to="/programs"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 transform hover:translate-x-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Program
                        </Link>
                        <a
                            href="#contact"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 transform hover:translate-x-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
