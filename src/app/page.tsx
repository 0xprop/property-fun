"use client";
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  const [emoji, setEmoji] = useState('🤔');

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
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-2/3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary leading-tight">
              <span className="block">Real estate</span>
              <span className="block">in crypto</span>
              <span className="block">is boring !!</span>
            </h1>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-start items-center h-full">
            <span 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer transition-transform duration-300 hover:scale-110"
              onMouseEnter={handleEmojiHover}
              onMouseLeave={handleEmojiLeave}
            >
              {emoji}
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
