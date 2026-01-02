"use client"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          Mohammed El Kassoiri © {new Date().getFullYear()}
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
