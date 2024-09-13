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
        <div className="w-full h-full flex justify-center items-center">
          <Logo className="logo-white w-auto h-auto max-w-[90%] max-h-[70vh] object-contain" />
        </div>
      </main>
      <Footer className="flex-shrink-0" />
    </div>
  )
}
