import RiverRangerLogo from '/favicon.svg';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white" role="contentinfo">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                                <img src={RiverRangerLogo} alt="River Ranger Logo" className="w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold">River Ranger Jakarta</span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Komunitas yang mengajak anak-anak dan dewasa berkreasi sekaligus menjaga lingkungan di Sungai Ciliwung, wilayah Condet.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/riverrangerjakarta"
                                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors"
                                aria-label="Follow River Ranger Jakarta on Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-xl" role="img" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="https://wa.me/6289663011842"
                                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors"
                                aria-label="Contact River Ranger Jakarta via WhatsApp (Nana)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-xl" role="img" aria-label="WhatsApp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UC6pdG5HQWtic-CjAQ4dhzVg"
                                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors"
                                aria-label="Subscribe to River Ranger Jakarta YouTube channel"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-xl" role="img" aria-label="YouTube">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Program</h3>
                        <nav aria-label="Program navigation">
                            <ul className="space-y-2 text-gray-300">
                                <li><p className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors">Kelas Alam</p></li>
                                <li><p className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors">#BebersihBareng</p></li>
                                <li><p className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors">Ecobrick</p></li>
                                <li><p className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors">Fotografi</p></li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Kontak</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" className="text-green-400 flex-shrink-0">
                                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                </svg>
                                <a href="https://wa.me/6289663011842" className="hover:text-white transition-colors">
                                    WhatsApp: 089663011842<br />
                                    <span className="text-sm text-gray-400">(Nana)</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" className="text-red-400 flex-shrink-0">
                                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <span>Condet, Jakarta Timur</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} River Ranger Jakarta. Menjaga Sungai Ciliwung untuk masa depan yang lebih hijau.
                    </p>
                </div>
            </div>
        </footer>
    );
}