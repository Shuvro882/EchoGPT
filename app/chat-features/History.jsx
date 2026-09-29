"use client";

import {
  Search,
  MessageSquare,
  Plus,
} from "lucide-react";

export default function History() {
  return (
    <div className="min-h-full bg-white px-6 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Chat History
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            Find and continue your previous conversations.
          </p>
        </div>

        {/* Search */}
        <div className="relative mt-10">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search your conversations..."
            className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        {/* Empty State */}
        <div className="mt-8 flex min-h-[420px] items-center justify-center rounded-2xl border border-gray-200 bg-white">
          <div className="max-w-md px-6 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <MessageSquare size={28} strokeWidth={1.8} />
            </div>

            <h2 className="mt-6 text-xl font-semibold text-gray-900">
              No conversations yet
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Your conversations will appear here once you start chatting
              with EchoGPT.
            </p>

            {/* Button */}
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700"
            >
              <Plus size={17} />
              Start New Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}