"use client";
import Header from '../components/header';
import Footer from '../components/footer';
import AnimatedBackground from '../components/AnimatedBackground';
import Logo from '../images/Logo.svg';
import '../styles/Logo.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="logo-container">
            <Logo className="logo-svg logo-white" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
