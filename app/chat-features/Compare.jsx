"use client";

import { useState } from "react";
import { Grid2x2, Maximize2, Send, ChevronDown } from "lucide-react";

const MODELS = [
  {
    name: "EchoGPT",
    color: "bg-violet-600",
  },
  {
    name: "Nemotron 3 Ultra",
    color: "bg-green-500",
  },
  {
    name: "DeepSeek V4 Pro",
    color: "bg-blue-500",
  },
];

function ModelLogo({ color = "bg-violet-600" }) {
  return (
    <div
      className={`flex h-7 w-7 items-center justify-center rounded-full ${color}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9 8.5c3 0 3 3.5 0 3.5s-3 3.5 0 3.5" />
      </svg>
    </div>
  );
}

export default function Compare() {
  const [mode, setMode] = useState("compare");
  const [activeModel, setActiveModel] = useState("EchoGPT");

  return (
    <div className="min-h-full bg-white px-6 py-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Compare AI Models
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Ask one question and see how different AI models respond.
        </p>
      </div>

      {/* Compare / Focus Toggle */}
      <div className="mt-7 flex justify-center">
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setMode("compare")}
            className={
              mode === "compare"
                ? "flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-sm"
                : "flex items-center gap-2 rounded-full px-5 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
            }
          >
            <Grid2x2 size={16} />
            Compare
          </button>

          <button
            type="button"
            onClick={() => setMode("focus")}
            className={
              mode === "focus"
                ? "flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-sm"
                : "flex items-center gap-2 rounded-full px-5 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
            }
          >
            <Maximize2 size={16} />
            Focus
          </button>
        </div>
      </div>

      {/* Model Tabs */}
      {mode === "focus" && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {MODELS.map((model) => (
            <button
              key={model.name}
              type="button"
              onClick={() => setActiveModel(model.name)}
              className={
                model.name === activeModel
                  ? "rounded-full border border-violet-300 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700"
                  : "rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 transition hover:bg-gray-50"
              }
            >
              {model.name}
            </button>
          ))}
        </div>
      )}

      {/* Main Empty State */}
      <div className="mx-auto flex min-h-[300px] max-w-5xl items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">
            <Grid2x2 className="text-violet-600" size={25} />
          </div>

          <h2 className="mt-5 text-lg font-semibold text-gray-800">
            {mode === "compare"
              ? "Compare multiple AI models"
              : `${activeModel} Focus Mode`}
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
            {mode === "compare"
              ? "Send one prompt and compare responses from multiple models side by side."
              : `Focus on ${activeModel} and continue the conversation with this model.`}
          </p>
        </div>
      </div>

      {/* Composer */}
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Prompt */}
        <div className="px-6 pt-5">
          <p className="text-[15px] text-gray-500">
            {mode === "compare"
              ? "Message 3 models…"
              : `Message ${activeModel}…`}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 pb-5 pt-8">
          {/* Selected Models */}
          <button
            type="button"
            className="flex items-center gap-3 rounded-full border border-gray-200 px-3 py-2 transition hover:bg-gray-50"
          >
            <div className="flex -space-x-1.5">
              {MODELS.map((model) => (
                <ModelLogo
                  key={model.name}
                  color={model.color}
                />
              ))}
            </div>

            <span className="text-sm text-gray-800">
              {mode === "compare"
                ? "EchoGPT +2 more"
                : activeModel}
            </span>

            <ChevronDown size={15} className="text-gray-400" />
          </button>

          {/* Compare Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-2.5 font-semibold text-white shadow-md shadow-violet-300/50 transition hover:bg-violet-700"
          >
            <Send size={16} />

            {mode === "compare" ? "Compare" : "Ask"}
          </button>
        </div>

        {/* Info */}
        <div className="border-t border-gray-200 px-6 py-3">
          <p className="text-sm text-gray-500">
            {mode === "compare"
              ? "Every selected model answers the same prompt."
              : `${activeModel} will respond to your prompt.`}
          </p>
        </div>
      </div>
    </div>
  );
}