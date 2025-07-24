import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>ProCogia AI Agent Hub</title>
        <meta name="description" content="Access ProCogia's suite of AI agents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">ProCogia AI Agent Hub</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Welcome to the ProCogia AI Agent Hub. This site is currently under construction.
        </p>
        <div className="flex space-x-4">
          <Link href="/" className="btn-primary">
            Home
          </Link>
          <Link href="/agents" className="btn-secondary">
            View Agents
          </Link>
        </div>
      </main>

      <footer className="bg-[#2d2e2c] text-white p-4 text-center">
        <p>© {new Date().getFullYear()} ProCogia, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
