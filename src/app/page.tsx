"use client";
import { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  const [alignment, setAlignment] = useState('items-start');
  const [emoji, setEmoji] = useState('🤔');

  useEffect(() => {
    setAlignment(Math.random() < 0.5 ? 'items-start' : 'items-end');
  }, []);

  const handleEmojiHover = () => {
    setEmoji(Math.random() < 0.5 ? '💩' : '🤮');
  };

  const handleEmojiLeave = () => {
    setEmoji('🤔');
  };

  return (
    <div className="min-h-screen flex flex-col bg-soft-grey">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-12 md:py-20">
        <div className={`max-w-7xl w-full flex flex-col md:flex-row ${alignment} space-y-8 md:space-y-0 md:space-x-8`}>
          <div className="md:w-2/3">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary leading-tight space-y-2 md:space-y-4">
              <span className="block">Real estate</span>
              <span className="block">in crypto</span>
              <span className="block">is boring !!</span>
            </h1>
          </div>
          <div className="md:w-1/3 flex justify-center items-center">
            <div className="relative w-full h-full">
              <span 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl cursor-pointer transition-transform duration-300 hover:scale-110"
                onMouseEnter={handleEmojiHover}
                onMouseLeave={handleEmojiLeave}
              >
                {emoji}
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
