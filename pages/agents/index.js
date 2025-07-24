import Head from 'next/head';
import Link from 'next/link';

export default function Agents() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>AI Agents | ProCogia AI Agent Hub</title>
        <meta name="description" content="Browse ProCogia's suite of AI agents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="font-bold text-xl">ProCogia AI Agent Hub</Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                </li>
                <li>
                  <Link href="/agents" className="text-[#00b2e3] font-medium">Agents</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-8">AI Agents</h1>
          <p className="mb-8">
            This page will display a list of available AI agents. Check back soon for updates.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </main>

      <footer className="bg-[#2d2e2c] text-white p-4 text-center">
        <p>© {new Date().getFullYear()} ProCogia, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
