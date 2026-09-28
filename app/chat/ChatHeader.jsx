"use client";

import { Menu, Bell } from "lucide-react";

export default function ChatHeader({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-5 sm:px-8 lg:px-10">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-violet-50 hover:text-violet-600 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={21} />
        </button>

        <div>
          <h1 className="text-base font-semibold text-gray-900">
            New Chat
          </h1>
          <p className="hidden text-xs text-gray-400 sm:block">
            Your AI workspace
          </p>
        </div>
      </div>

      <button
        className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-500 transition hover:bg-gray-100 hover:text-violet-600"
      >
        <Bell size={19} />
      </button>
    </header>
  );
}