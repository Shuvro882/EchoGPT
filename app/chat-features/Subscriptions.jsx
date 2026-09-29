"use client";

import {
  Check,
  Sparkles,
  Zap,
  Crown,
} from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For exploring EchoGPT and trying essential AI features.",
    icon: Sparkles,
    features: [
      "Access to basic AI models",
      "Limited daily messages",
      "Basic chat history",
      "Standard response speed",
    ],
    button: "Current Plan",
    featured: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "per month",
    description: "For professionals who need more power and productivity.",
    icon: Zap,
    features: [
      "Access to premium AI models",
      "Higher message limits",
      "AI Image & Video Studio",
      "Compare multiple AI models",
      "Priority response speed",
    ],
    button: "Upgrade to Pro",
    featured: true,
  },
  {
    name: "Business",
    price: "$30",
    period: "per month",
    description: "For teams and advanced users with higher AI workloads.",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Advanced AI models",
      "Higher usage limits",
      "AI Job Analysis & SOP Builder",
      "Priority support",
    ],
    button: "Choose Business",
    featured: false,
  },
];

export default function Subscriptions() {
  return (
    <div className="min-h-full bg-white px-4 py-10 sm:px-6 sm:py-14">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
          <Sparkles size={22} className="text-violet-600" />
        </div>

        <h1 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Choose Your Plan
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
          Unlock more AI power, higher limits, and advanced features
          with a plan that fits your workflow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const Icon = plan.icon;

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg ${
                plan.featured
                  ? "border-violet-500 shadow-md shadow-violet-100"
                  : "border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Plan Icon */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  plan.featured
                    ? "bg-violet-600 text-white"
                    : "bg-violet-50 text-violet-600"
                }`}
              >
                <Icon size={20} />
              </div>

              {/* Plan Name */}
              <h2 className="mt-5 text-xl font-bold text-gray-900">
                {plan.name}
              </h2>

              <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>

                <span className="pb-1 text-sm text-gray-500">
                  {plan.period}
                </span>
              </div>

              {/* Button */}
              <button
                className={`mt-6 w-full cursor-pointer rounded-xl py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700"
                    : "border border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
                }`}
              >
                {plan.button}
              </button>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-100" />

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100">
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        className="text-violet-600"
                      />
                    </div>

                    <span className="text-sm text-gray-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <p className="mt-8 text-center text-xs text-gray-400">
        Cancel anytime. Plans can be changed or upgraded whenever you need.
      </p>
    </div>
  );
}