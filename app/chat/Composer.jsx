"use client";

import {
  GitFork,
  ChevronDown,
  Rocket,
  PlusCircle,
  Clock,
  Paperclip,
  Mic,
  Send,
} from "lucide-react";

function Logo() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9 8.5c3 0 3 3.5 0 3.5s-3 3.5 0 3.5" />
        <path d="M15 8.5c-1 1-1 2 0 3" />
      </svg>
    </div>
  );
}

export default function Composer() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 pb-5">
      <div className="rounded-3xl border border-violet-100 bg-white p-3 shadow-lg shadow-violet-100/40 sm:p-4">
        <div className="flex items-center justify-between px-1 pb-3">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              className="flex items-center gap-2 rounded-lg px-1 py-1 transition hover:bg-violet-50"
              aria-label="Select AI model"
            >
              <Logo />

              <span className="hidden text-sm font-medium text-gray-800 sm:block">
                EchoGPT
              </span>

              <ChevronDown size={16} className="text-gray-500" />
            </button>

            <span className="h-5 w-px bg-gray-200" />

            <button
              className="rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-violet-600"
              aria-label="Branch conversation"
            >
              <GitFork size={18} />
            </button>

            <button
              className="rounded-lg p-1.5 text-violet-600 transition hover:bg-violet-50"
              aria-label="AI tools"
            >
              <Rocket size={18} />
            </button>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <button
              className="rounded-lg p-2 transition hover:bg-gray-100 hover:text-violet-600"
              aria-label="New conversation"
            >
              <PlusCircle size={19} />
            </button>

            <button
              className="rounded-lg p-2 transition hover:bg-gray-100 hover:text-violet-600"
              aria-label="Conversation history"
            >
              <Clock size={19} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-violet-100 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
          <button
            className="shrink-0 rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-violet-600"
            aria-label="Attach file"
          >
            <Paperclip size={19} />
          </button>

          <input
            type="text"
            placeholder="Ask a question..."
            className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-[15px]"
          />

          <button
            className="hidden rounded-lg p-1 text-gray-500 transition hover:bg-gray-100 hover:text-violet-600 sm:block"
            aria-label="Voice input"
          >
            <Mic size={18} />
          </button>

          <button
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 sm:h-10 sm:w-10"
            aria-label="Send message"
          >
            <Send size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}