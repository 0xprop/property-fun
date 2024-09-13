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
      <main className="flex-grow flex items-center justify-center px-4 py-2 sm:py-4">
        <div className="w-full flex justify-center items-center">
          <Logo className="logo-white w-full max-w-[60vmin] h-auto" />
        </div>
      </main>
      <Footer className="flex-shrink-0 mt-auto" />
    </div>
  )
}
