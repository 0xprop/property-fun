"use client";
import { useState } from 'react';

export default function Header({ className = '' }) {
  return (
    <header className={`py-4 px-6 bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-3xl sm:text-4xl py-2 space-x-4 cursor-pointer w-24 sm:w-28"
          aria-label="Property Fun"
        >
          <span className="text-white">🏠</span>
          <span className="text-white">🎉</span>
        </div>
      </div>
    </header>
  )
}