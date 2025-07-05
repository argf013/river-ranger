export default function About() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-3xl font-bold text-gray-900">About</h1>
                <p className="mb-4 text-gray-700">
                    This is a React PWA template built with Vite, React Router, and TailwindCSS.
                </p>
                <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">Features</h2>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>⚡️ Lightning-fast development with Vite</li>
                    <li>📱 Progressive Web App (PWA) ready</li>
                    <li>🎨 TailwindCSS for utility-first styling</li>
                    <li>🧭 React Router for navigation</li>
                    <li>🔄 Code splitting with lazy loading</li>
                    <li>✨ Prettier for code formatting</li>
                </ul>
            </div>
        </div>
    );
}
