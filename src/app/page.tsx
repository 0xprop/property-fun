"use client";
import Header from '../components/header';
import Footer from '../components/footer';
import AnimatedBackground from '../components/AnimatedBackground';
import Logo from '../images/Logo.svg';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12">
        <div className="max-w-7xl w-full flex justify-center items-center">
          <Logo className="logo-white opacity-80" style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
