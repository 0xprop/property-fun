import Link from 'next/link'

export default function Footer({ className = '' }) {
  return (
    <footer className={`py-4 px-6 bg-transparent ${className}`}>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm sm:text-base text-white mb-2 sm:mb-0">
          © 2024 property.fun  |  All rights reserved.
        </div>
        <nav>
          <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-base text-white">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}