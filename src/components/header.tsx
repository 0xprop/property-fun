"use client";
import { useState } from 'react';

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="py-4 px-6 bg-soft-grey shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-3xl py-1 space-x-4 cursor-pointer w-20"
          aria-label="Property Fun"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? (
            <span className="inline-block w-full text-center">🤑</span>
          ) : (
            <>
              <span>🏠</span>
              <span>🎉</span>
            </>
          )}
        </div>
      </div>
    </header>
  )
}