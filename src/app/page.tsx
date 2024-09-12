import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Image src="/logo.png" alt="Property.fun Logo" width={150} height={50} />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">property.fun</h1>
        <p className="text-lg md:text-xl mb-8">Coming Soon</p>
        <svg className="w-48 h-48 md:w-64 md:h-64" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#4B5563" strokeWidth="8">
            <animate attributeName="stroke-dasharray" from="0 282.7" to="282.7 0" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </main>

      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">&copy; 2023 property.fun. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
