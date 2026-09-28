import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 px-6 pb-8 pt-16 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Sparkles size={20} />
              </div>

              <span className="text-xl font-bold tracking-tight">
                Echo<span className="text-violet-400">GPT</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              A modern AI workspace designed to help you think, create and
              work smarter with AI.
            </p>

            <a
              href="/chat"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Start exploring
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Product
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="#features"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Features
              </a>

              <a
                href="#models"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                AI Models
              </a>

              <a
                href="#faq"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                FAQ
              </a>

              <a
                href="/chat"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Chat
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                About
              </a>

              <a
                href="#"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Privacy
              </a>

              <a
                href="#"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          
          <p className="text-xs text-gray-500">
            © 2026 EchoGPT. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              GH
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              X
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}