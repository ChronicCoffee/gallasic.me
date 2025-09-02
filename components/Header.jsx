import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '../lib/utils'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-xl font-bold text-gray-800">Noah Gallasic</a>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <a href="#about" className="block text-gray-700 py-1">About</a>
            <a href="#projects" className="block text-gray-700 py-1">Projects</a>
            <a href="#skills" className="block text-gray-700 py-1">Skills</a>
            <a href="#contact" className="block text-gray-700 py-1">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
