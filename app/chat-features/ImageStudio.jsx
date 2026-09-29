"use client";

import { Plus, ChevronDown } from "lucide-react";

const RATIOS = ["1:1", "3:2", "2:3", "auto"];
const COUNTS = [1, 2, 3, 4];

export default function ImageStudio() {
  return (
    <div className="min-h-full bg-white px-6 py-10">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Image Studio
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          Create images that stop the scroll.
        </p>
      </div>

      {/* Prompt Card */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white">
        <div className="px-6 pt-5">
          <p className="text-[15px] text-gray-600">
            Turn my photo into a professional headshot
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 px-6 pb-5">
          {/* Add image */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
            aria-label="Add image"
          >
            <Plus size={16} />
          </button>

          {/* Aspect Ratio */}
          <div className="flex items-center gap-1 rounded-full border border-gray-200 px-1 py-1">
            {RATIOS.map((ratio) => (
              <button
                key={ratio}
                type="button"
                className={
                  ratio === "1:1"
                    ? "flex h-8 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white"
                    : "flex h-8 items-center justify-center rounded-full px-2 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                }
              >
                {ratio}
              </button>
            ))}
          </div>

          {/* Image Count */}
          <div className="flex items-center gap-1 rounded-full border border-gray-200 px-1 py-1">
            {COUNTS.map((count) => (
              <button
                key={count}
                type="button"
                className={
                  count === 1
                    ? "flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white"
                    : "flex h-8 w-8 items-center justify-center rounded-full text-sm text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                }
              >
                {count}
              </button>
            ))}
          </div>

          {/* Model */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-800 transition hover:bg-gray-50"
          >
            Nano Banana 2 Lite
            <ChevronDown size={16} className="text-gray-500" />
          </button>

          <div className="flex-1" />

          {/* Generate */}
          <button
            type="button"
            className="rounded-xl bg-violet-600 px-6 py-2.5 font-semibold text-white shadow-md shadow-violet-300/50 transition hover:bg-violet-700"
          >
            Generate
          </button>
        </div>

        {/* Paid Feature Notice */}
        <div className="border-t border-gray-200 px-6 py-3">
          <p className="text-sm text-gray-500">
            Image generation is a paid feature — upgrade to start creating
            images.
          </p>
        </div>
      </div>

      {/* Info */}
      <p className="mt-4 text-center text-sm text-gray-500">
        Each image uses one message from your plan. Generation takes up to a
        minute.
      </p>

      {/* Creations */}
      <div className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-lg font-semibold text-gray-900">
          Your creations
        </h2>

        <div className="mt-16 text-center text-[15px] text-gray-500">
          Nothing here yet — describe an image above to get started.
        </div>
      </div>
    </div>
  );
}