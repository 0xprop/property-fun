import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-3 sm:pt-4 sm:pb-6 px-4 sm:px-6 bg-transparent">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xs sm:text-sm md:text-base font-light text-white mb-2 sm:mb-3 md:mb-0">
          © 2024 property.fun  |  All rights reserved.
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-2 sm:space-x-4 text-xs sm:text-sm md:text-base font-light text-white">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}