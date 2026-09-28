import {
  Zap,
  ShieldCheck,
  LayoutDashboard,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function WhyEchoGPT() {
  const benefits = [
    {
      icon: Zap,
      title: "Work faster",
      description:
        "Get useful answers, ideas and content without jumping between multiple AI platforms.",
    },
    {
      icon: LayoutDashboard,
      title: "One organized workspace",
      description:
        "Keep your conversations, tools and AI workflows together in one clean interface.",
    },
    {
      icon: SlidersHorizontal,
      title: "Choose your workflow",
      description:
        "Switch between different AI capabilities depending on what you are trying to accomplish.",
    },
    {
      icon: ShieldCheck,
      title: "Designed for productivity",
      description:
        "A focused interface helps you spend less time managing tools and more time getting things done.",
    },
  ];

  return (
    <section className="bg-gray-950 px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-violet-300">
              <Sparkles size={15} />
              Why EchoGPT
            </span>

            <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Less switching.
              <span className="text-violet-400"> More creating.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              EchoGPT brings your AI workflow into one focused workspace so
              you can spend more time thinking, creating and solving problems.
            </p>

            <a
              href="/chat"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Explore EchoGPT
              <ArrowUpRight size={17} />
            </a>

            {/* Mini Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold">01</p>
                <p className="mt-1 text-xs text-gray-500">
                  Unified workspace
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">AI</p>
                <p className="mt-1 text-xs text-gray-500">
                  Powered workflows
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-1 text-xs text-gray-500">
                  Ready when you are
                </p>
              </div>
            </div>
          </div>

          {/* Right Benefits */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {benefit.description}
                  </p>

                  <div className="mt-5 h-px w-8 bg-violet-500/50 transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}