import Link from 'next/link'

export default function Footer({ className = '' }) {
  return (
    <footer className={`py-8 px-8 bg-transparent ${className}`}>
      <div className="container mx-auto flex flex-col space-y-2 sm:flex-row sm:space-y-0 justify-between items-center">
        <div className="text-sm sm:text-base font-light text-white">
          © 2024 property.fun  |  All rights reserved.
        </div>
        <nav className="mt-2 sm:mt-0">
          <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm sm:text-base font-light text-white">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}