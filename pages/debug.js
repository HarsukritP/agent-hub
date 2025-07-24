import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Debug() {
  const [componentStatus, setComponentStatus] = useState({
    header: 'Checking...',
    footer: 'Checking...',
    layout: 'Checking...'
  });

  useEffect(() => {
    // Check if components are loaded
    try {
      const headerElement = document.querySelector('header');
      const footerElement = document.querySelector('footer');
      const layoutElement = document.querySelector('div.flex.flex-col.min-h-screen');
      
      setComponentStatus({
        header: headerElement ? 'Loaded ✅' : 'Not found ❌',
        footer: footerElement ? 'Loaded ✅' : 'Not found ❌',
        layout: layoutElement ? 'Loaded ✅' : 'Not found ❌'
      });
    } catch (error) {
      console.error('Error checking components:', error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Debug | ProCogia AI Agent Hub</title>
        <meta name="description" content="Debug page for component verification" />
      </Head>

      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Debug Page</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Component Status</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="font-medium">Header Component:</span>
                <span>{componentStatus.header}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Footer Component:</span>
                <span>{componentStatus.footer}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Layout Component:</span>
                <span>{componentStatus.layout}</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Environment Info</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="font-medium">Next.js Version:</span>
                <span>{process.env.NEXT_PUBLIC_VERSION || 'Unknown'}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Node Environment:</span>
                <span>{process.env.NODE_ENV || 'Unknown'}</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/test" className="btn-secondary">
              Test Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
