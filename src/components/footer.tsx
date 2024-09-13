import Link from 'next/link'

export default function Footer({ className = '' }) {
  return (
    <footer className={`py-9 px-4 sm:px-6 bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm sm:text-base text-white mb-4 sm:mb-0">
          © 2024 property.fun ⚡️ All rights reserved.
        </div>
        <nav className="mb-4 sm:mb-0">
          <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-base text-white">
            <li><Link href="/privacy" className="hover:text-primary transition-colors pb-2">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors pb-2">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors pb-2">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}