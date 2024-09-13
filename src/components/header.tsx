"use client";
import React from 'react';

export default function Header({ className = '' }) {
  return (
    <header className={`py-2 sm:py-4 px-4 sm:px-6 bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-2xl sm:text-3xl py-1 sm:py-2 space-x-2 sm:space-x-4 cursor-pointer w-20 sm:w-24"
          aria-label="Property Fun"
        >
          <span className="text-white">🏠</span>
          <span className="text-white">🎉</span>
        </div>
      </div>
    </header>
  )
}