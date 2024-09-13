import Link from 'next/link'

export default function Footer({ className = '' }) {
  return (
    <footer className={`py-2 sm:py-4 px-4 sm:px-6 bg-transparent ${className}`}>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        <div className="text-white mb-1 sm:mb-0">
          © 2024 property.fun
        </div>
        <nav>
          <ul className="flex space-x-3 sm:space-x-4 text-white">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}