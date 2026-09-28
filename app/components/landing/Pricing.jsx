import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      description: "For exploring AI and everyday tasks.",
      price: "$0",
      period: "forever",
      features: [
        "Access to AI chat",
        "Basic AI models",
        "Conversation history",
        "Essential AI tools",
      ],
      button: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      description: "For users who want more power and flexibility.",
      price: "$19",
      period: "per month",
      features: [
        "Everything in Free",
        "More advanced AI models",
        "Model comparison",
        "Advanced AI tools",
        "Higher usage limits",
      ],
      button: "Start Pro",
      featured: true,
    },
    {
      name: "Team",
      description: "For teams building better workflows together.",
      price: "$39",
      period: "per user / month",
      features: [
        "Everything in Pro",
        "Team workspace",
        "Shared conversations",
        "Team collaboration",
        "Priority support",
      ],
      button: "Choose Team",
      featured: false,
    },
  ];

  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600">
            <Sparkles size={15} />
            Simple pricing
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Choose a plan that
            <span className="text-violet-600"> fits your workflow.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Start for free and upgrade when you need more AI power.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-violet-500 bg-gray-950 text-white shadow-2xl shadow-violet-100"
                  : "border-gray-200 bg-white text-gray-900 shadow-sm hover:shadow-xl hover:shadow-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-violet-500 px-3 py-1 text-xs font-bold text-white">
                  Most popular
                </div>
              )}

              <div className="pr-24">
                <h3 className="text-xl font-bold">{plan.name}</h3>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    plan.featured ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8 flex items-end gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>

                <span
                  className={`pb-1 text-xs ${
                    plan.featured ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Button */}
              <a
                href="/chat"
                className={`mt-8 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-violet-600 text-white hover:bg-violet-500"
                    : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                {plan.button}
              </a>

              {/* Features */}
              <div
                className={`my-7 h-px ${
                  plan.featured ? "bg-white/10" : "bg-gray-100"
                }`}
              />

              <p
                className={`text-xs font-semibold uppercase tracking-wider ${
                  plan.featured ? "text-gray-500" : "text-gray-400"
                }`}
              >
                What's included
              </p>

              <div className="mt-5 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-violet-500/20 text-violet-400"
                          : "bg-violet-50 text-violet-600"
                      }`}
                    >
                      <Check size={13} strokeWidth={3} />
                    </div>

                    <span
                      className={`text-sm ${
                        plan.featured ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Small Note */}
        <p className="mt-8 text-center text-xs text-gray-400">
          Pricing shown for the landing page concept. Final plans and limits
          can be configured based on the product offering.
        </p>
      </div>
    </section>
  );
}