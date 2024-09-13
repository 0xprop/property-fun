"use client";
import Header from '../components/header';
import Footer from '../components/footer';
import AnimatedBackground from '../components/AnimatedBackground';
import Logo from '../images/Logo.svg';

export default function Home() {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      <AnimatedBackground />
      <Header className="flex-shrink-0" />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-[90%] aspect-[460/47] relative">
          <Logo className="logo-white absolute inset-0 w-full h-full object-contain" />
        </div>
      </main>
      <Footer className="flex-shrink-0" />
    </div>
  )
}
