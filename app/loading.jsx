"use client";

import { LoaderCircle, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        {/* Logo / Icon */}
        <div className="relative mb-6">
          {/* Soft Glow */}
          <div className="absolute inset-0 scale-150 rounded-2xl bg-violet-200/40 blur-2xl" />

          {/* Icon Box */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white shadow-xl shadow-violet-200">
            <Sparkles size={28} strokeWidth={2} />
          </div>
        </div>

        {/* Spinner */}
        <LoaderCircle
          size={30}
          strokeWidth={2}
          className="mb-4 animate-spin text-violet-600"
        />

        {/* Text */}
        <p className="text-sm font-semibold text-gray-700">
          Preparing your workspace
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Just a moment...
        </p>
      </div>
    </div>
  );
}

