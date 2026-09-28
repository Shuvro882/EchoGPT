"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
          <Sparkles size={21} />
        </div>

        <span className="text-xl font-bold tracking-tight">
          Echo<span className="text-violet-600">GPT</span>
        </span>
      </a>

      {/* Desktop Navigation */}
      {isMenuOpen && (
  <div className="absolute left-0 right-0 top-full mx-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl md:hidden">
    <div className="flex flex-col gap-4 text-sm font-medium text-gray-600">
      <a
        href="#features"
        onClick={() => setIsMenuOpen(false)}
        className="transition hover:text-violet-600"
      >
        Features
      </a>

      <a
        href="#models"
        onClick={() => setIsMenuOpen(false)}
        className="transition hover:text-violet-600"
      >
        AI Models
      </a>

      <a
        href="#faq"
        onClick={() => setIsMenuOpen(false)}
        className="transition hover:text-violet-600"
      >
        FAQ
      </a>

      <hr className="border-gray-100" />

      <a
        href="/chat"
        onClick={() => setIsMenuOpen(false)}
        className="rounded-xl border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700"
      >
        Sign In
      </a>

      <a
        href="/chat"
        onClick={() => setIsMenuOpen(false)}
        className="rounded-xl bg-violet-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-violet-700"
      >
        Get Started
      </a>
    </div>
  </div>
)}

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a
          href="/login"
          className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 sm:block"
        >
          Sign In
        </a>

        <a
  href="/chat"
  className="hidden items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 sm:inline-flex"
>
  Get Started
  <ArrowRight size={16} />
</a>
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  aria-expanded={isMenuOpen}
  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 md:hidden"
>
  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
</button>


     
      </div>
    </nav>
  );
}