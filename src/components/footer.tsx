import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pt-4 pb-8 px-6 bg-soft-grey">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm md:text-base font-light text-footer-text mb-3 md:mb-0">
          © 2024 property.fun ⚡️ All rights reserved.
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm md:text-base font-light text-footer-text">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}