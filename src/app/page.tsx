import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Image src="/logo.png" alt="Property.fun Logo" width={150} height={50} />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">property.fun</h1>
        <p className="text-xl mb-8">Coming Soon</p>
        {/* SVG animation placeholder */}
        <div className="w-64 h-64 bg-gray-200 rounded-full animate-pulse"></div>
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <p>&copy; 2023 property.fun. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
