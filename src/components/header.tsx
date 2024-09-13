"use client";
import React from 'react';

export default function Header({ className = '' }) {
  return (
    <header className={`py-2 px-4 bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-xl sm:text-3xl py-1 space-x-2 cursor-pointer w-16 sm:w-24"
          aria-label="Property Fun"
        >
          <span className="text-white">🏠</span>
          <span className="text-white">🎉</span>
        </div>
      </div>
    </header>
  )
}