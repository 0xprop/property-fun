import Link from 'next/link'
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'; // Import X.com and Telegram icons

export default function Footer({ className = '' }) {
  return (
    <footer className={`py-9 px-4 sm:px-6 bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm sm:text-base text-white mb-4 sm:mb-0">
          © 2024 property.fun ⚡️ All rights reserved.
        </div>
        <nav className="mb-4 sm:mb-0">
          <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-base text-white">
            <li>
              <Link href="https://x.com/propertydotfun" className="hover:text-gray-400 transition-all duration-300 pb-2">
                <FaTwitter className="inline-block text-xl hover:shadow-lg" /> {/* X.com icon with shadow effect and gray on hover */}
              </Link>
            </li>
            <li>
              <Link href="https://t.me/propertydotfun" className="hover:text-gray-400 transition-all duration-300 pb-2">
                <FaTelegramPlane className="inline-block text-xl hover:shadow-lg" /> {/* Telegram icon with shadow effect and gray on hover */}
              </Link>
            </li>
            {/* Removed previous links */}
          </ul>
        </nav>
      </div>
    </footer>
  )
}