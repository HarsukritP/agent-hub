import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-40 mr-2">
                {/* Replace with actual ProCogia logo */}
                <div className="absolute inset-0 flex items-center">
                  <span className="text-xl font-bold text-[#2d2e2c]">ProCogia</span>
                  <span className="ml-2 px-2 py-1 bg-[#a6ce39] text-white rounded text-sm">AI Hub</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#00b2e3] font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-gray-600 hover:text-[#00b2e3] font-medium">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#00b2e3] font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#00b2e3] font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00b2e3]">
              Home
            </Link>
            <Link href="/agents" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00b2e3]">
              Agents
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00b2e3]">
              About
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00b2e3]">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
