"use client";

import { useState } from "react";
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const BENEFITS = [
  {
    title: "Industry Trends",
    text: "Stay updated with the latest breakthroughs in LLMs and generative AI.",
  },
  {
    title: "Power Usage",
    text: "Advanced techniques to get the most out of EchoGPT's toolset.",
  },
  {
    title: "Early Access",
    text: "Be the first to test new models and experimental features.",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    alert(`Newsletter signup submitted for: ${email}`);
  };

  return (
    <div className="min-h-full bg-white px-4 py-10 sm:px-6 sm:py-14">
      {/* Hero + Signup */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Elevate Your{" "}
          <span className="text-violet-600">AI Strategy</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
          Join 50,000+ professionals receiving curated insights on AI
          productivity, industry trends, and exclusive EchoGPT features.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-md sm:mt-10"
        >
          {/* Email Input */}
          <div className="flex items-center gap-3 rounded-xl border border-violet-200 px-4 py-3.5 transition focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100">
            <Mail
              size={18}
              className="shrink-0 text-gray-400"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-[15px] text-gray-800 outline-none placeholder:text-gray-400"
              placeholder="Enter your business email"
              aria-label="Business email"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-300/60 transition hover:bg-violet-700"
          >
            Join the Newsletter
            <ArrowRight size={18} />
          </button>

          {/* Trust Points */}
          <div className="mt-4 flex flex-col items-center justify-center gap-3 text-xs font-medium tracking-wide text-gray-500 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck
                size={14}
                className="text-violet-600"
              />
              NO SPAM POLICY
            </span>

            <span className="flex items-center gap-1.5">
              <Sparkles
                size={14}
                className="text-violet-600"
              />
              PREMIUM INSIGHTS
            </span>
          </div>
        </form>
      </div>

      {/* Benefit Cards */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-violet-200 hover:shadow-sm sm:p-6"
          >
            <h3 className="text-[15px] font-bold text-gray-900">
              {benefit.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}