"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

const models = [
  {
    name: "EchoGPT",
    description:
      "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
    category: "General",
    icon: "E",
  },
  {
    name: "Nemotron 3 Ultra",
    description:
      "Llama 3.1 Nemotron 70B Instruct",
    category: "General",
    icon: "N",
  },
  {
    name: "DeepSeek V4 Pro",
    description:
      "DeepSeek specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
    category: "Reasoning",
    icon: "D",
  },
  {
    name: "GPT-5.4",
    description:
      "Preview GPT’s powerful abilities with GPT-5.4, offering precise yet expansive answers in an accessible, versatile format.",
    category: "General",
    icon: "G",
  },
  {
    name: "GPT-5.5",
    description:
      "Preview GPT’s powerful abilities with GPT-5.5, offering precise yet expansive answers in an accessible, versatile format.",
    category: "General",
    icon: "G",
  },
  {
    name: "GPT-5.6 Sol",
    description:
      "GPT-5.6 Sol delivers OpenAI's flagship reasoning with a 1M token context, ideal for long documents and demanding analysis.",
    category: "Reasoning",
    icon: "G",
  },
  {
    name: "GLM-5.2",
    description:
      "GLM-5.2 offers strong multilingual reasoning and coding across a 1M token context at a low cost per token.",
    category: "Coding",
    icon: "G",
  },
  {
    name: "Tencent Hy3",
    description:
      "Tencent Hunyuan 3 provides fast, budget-friendly responses for everyday chat, drafting, and summarisation.",
    category: "General",
    icon: "T",
  },
  {
    name: "Qwen 3.8 27B",
    description:
      "Qwen 3.8 27B balances speed and quality for general assistance, coding help, and structured output.",
    category: "Coding",
    icon: "Q",
  },
  {
    name: "DeepSeek V4 Flash",
    description:
      "DeepSeek V4 Flash answers quickly over a 1M token context, tuned for rapid iteration at very low cost.",
    category: "Reasoning",
    icon: "D",
  },
  {
    name: "Kimi K2.7 Code",
    description:
      "Kimi K2.7 Code is built for software work — reading large repositories, writing code, and explaining changes.",
    category: "Coding",
    icon: "K",
  },
  {
    name: "MiniMax M3",
    description:
      "MiniMax M3 handles long-context conversation and reasoning with an efficient price-to-quality balance.",
    category: "General",
    icon: "M",
  },
  {
    name: "GLM-5.3 Flash",
    description:
      "GLM-5.3 Flash is the fastest GLM tier, made for high-volume chat where latency matters most.",
    category: "Fast",
    icon: "G",
  },
  {
    name: "Gemini 3.8 Flash",
    description:
      "Gemini 3.8 Flash combines Google's multimodal strengths with fast responses across a 1M token context.",
    category: "Multimodal",
    icon: "G",
  },
  {
    name: "Qwen 3.7 Max",
    description:
      "Qwen 3.7 Max is the top Qwen tier for complex reasoning, long-form writing, and detailed technical work.",
    category: "Reasoning",
    icon: "Q",
  },
  {
    name: "Qwen 3.7 Plus",
    description:
      "Qwen 3.7 Plus gives near-flagship quality at a fraction of the cost for daily reasoning and drafting.",
    category: "General",
    icon: "Q",
  },
  {
    name: "Qwen 3.6 Plus",
    description:
      "Qwen 3.6 Plus is a dependable general-purpose model for conversation, summarisation, and analysis.",
    category: "General",
    icon: "Q",
  },
  {
    name: "MiMo V2.5",
    description:
      "MiMo V2.5 from Xiaomi delivers efficient everyday assistance with one of the lowest costs per token.",
    category: "General",
    icon: "M",
  },
];

export default function Store() {
  const [search, setSearch] = useState("");

  const filteredModels = models.filter((model) => {
    const query = search.toLowerCase();

    return (
      model.name.toLowerCase().includes(query) ||
      model.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-full bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            EchoGPT Store
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-lg text-gray-500">
            Explore powerful AI models and find the right one for your needs.
          </p>
        </div>

        {/* Search */}
        <div className="relative mx-auto mt-9 max-w-2xl">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search AI models..."
            className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        {/* Results */}
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              AI Models
            </h2>

            <span className="text-sm text-gray-400">
              {filteredModels.length} models
            </span>
          </div>

          {filteredModels.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredModels.map((model) => (
                <div
                  key={model.name}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50"
                >
                  {/* Model Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-lg font-bold text-violet-600">
                      {model.icon}
                    </div>

                    <span className="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-500">
                      {model.category}
                    </span>
                  </div>

                  {/* Model Name */}
                  <h3 className="mt-5 text-base font-semibold text-gray-900">
                    {model.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-500">
                    {model.description}
                  </p>

                  {/* Button */}
                  <button
                    type="button"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
                  >
                    Try App
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-200">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
                  <Search size={24} />
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  No models found
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Try searching for another AI model.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}