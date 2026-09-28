import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gray-950 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600 via-violet-600 to-purple-700 px-6 py-16 text-center shadow-2xl shadow-violet-200/20 sm:px-10 lg:px-16">
          {/* Background Effects */}
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />

          <div className="relative">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <Sparkles size={15} />
              Ready to get started?
            </span>

            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your next great idea could start with AI.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-violet-100 sm:text-lg">
              Bring your questions, ideas and projects to one powerful AI
              workspace built to help you move faster.
            </p>

            {/* Button */}
            <a
              href="/chat"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-violet-700 shadow-xl transition hover:bg-gray-100"
            >
              Start Chatting
              <ArrowRight size={17} />
            </a>

            <p className="mt-4 text-xs text-violet-200">
              No complicated setup. Just start exploring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}