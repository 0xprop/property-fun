"use client";
import { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  const [alignment, setAlignment] = useState('text-center');

  useEffect(() => {
    setAlignment(Math.random() < 0.5 ? 'text-left' : 'text-right');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-soft-grey">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6">
        <div className={`max-w-7xl w-full ${alignment}`}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary leading-tight">
            <span className="block">Real estate</span>
            <span className="block">
              in crypto <span className="inline-block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]">👀</span>
            </span>
            <span className="block">is boring !!</span>
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}
