"use client";
import Header from '../components/header';
import Footer from '../components/footer';
import AnimatedBackground from '../components/AnimatedBackground';
import Image from 'next/image';
import logoPng from '../images/Logo.png';
import styles from './Logo.module.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center">
          <Image 
            src={logoPng} 
            alt="Logo" 
            width={500} 
            height={200} 
            className={`w-full h-auto max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[360px] ${styles.logoWhite}`}
            priority
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
