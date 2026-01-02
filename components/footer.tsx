"use client"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Mohammed El Kassoiri. All rights reserved.</p>
          <p className="mt-1">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
