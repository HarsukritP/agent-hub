import Head from 'next/head';
import Link from 'next/link';

export default function Test() {
  return (
    <>
      <Head>
        <title>Test Page | ProCogia AI Agent Hub</title>
        <meta name="description" content="Test page for component verification" />
      </Head>

      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Component Test Page</h1>
          <p className="text-lg text-gray-600 mb-8">
            If you can see this page with a header above and footer below, the layout components are working correctly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-2">Header Test</h2>
              <p className="text-gray-600">
                The header should be visible at the top with navigation links.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-2">Layout Test</h2>
              <p className="text-gray-600">
                This content should be wrapped in the main layout.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-2">Footer Test</h2>
              <p className="text-gray-600">
                The footer should be visible at the bottom of the page.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/agents" className="btn-secondary">
              View Agents
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
