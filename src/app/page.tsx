'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-8">
          Welcome to{' '}
          <span className="text-blue-600">Next.js!</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Your modern web application is now running. This is a sample page built with 
          Next.js, TypeScript, and Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">⚡ Fast</h3>
            <p className="text-gray-600">Built with Next.js for optimal performance and SEO</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🎨 Beautiful</h3>
            <p className="text-gray-600">Styled with Tailwind CSS for modern design</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🔧 TypeScript</h3>
            <p className="text-gray-600">Type-safe development with TypeScript</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Counter</h2>
          <div className="text-4xl font-bold text-blue-600 mb-4">{count}</div>
          <div className="space-x-4">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Decrease
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Increase
            </button>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-600">
            Ready to deploy to{' '}
            <a 
              href="https://vercel.com" 
              className="text-blue-600 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  )
}
