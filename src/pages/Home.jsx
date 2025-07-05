import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center py-12 text-center">
            <div className="mb-8 flex items-center justify-center gap-8">
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="h-24 animate-pulse" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="h-24 animate-spin"
                        style={{ animationDuration: '10s' }}
                        alt="React logo"
                    />
                </a>
            </div>

            <h1 className="mb-8 text-4xl font-bold">Vite + React + PWA Template</h1>

            <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="mb-4 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                    Count is {count}
                </button>
                <p className="text-gray-700">
                    Edit <code className="rounded bg-gray-100 px-2 py-1 font-mono">src/pages/Home.jsx</code> and save to test HMR
                </p>
            </div>

            <p className="text-gray-500">
                Click on the Vite and React logos to learn more about these technologies
            </p>
        </div>
    );
}
