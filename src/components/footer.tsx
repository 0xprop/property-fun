import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-soft-grey">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm font-extralight text-footer-text">
          © 2024 property.fun ⚡️ All rights reserved.
        </div>
        <nav>
          <ul className="flex space-x-4 text-sm font-extralight text-footer-text">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}