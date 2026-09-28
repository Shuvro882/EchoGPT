import {
  ArrowRight,
  Sparkles,
  Check,
  ChevronDown,
  Send,
  Plus,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-100/70 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
            <Sparkles size={15} />
            One workspace. Multiple AI models.
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Think smarter with
            <br />

            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
              every AI model.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            Chat with powerful AI models, compare responses, create content,
            and get more done — all from one beautifully designed workspace.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/chat"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 font-semibold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Start Chatting
              <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Explore Features
              <ChevronDown size={17} />
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-violet-600" />
              Multiple AI models
            </span>

            <span className="hidden text-gray-200 sm:block">•</span>

            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-violet-600" />
              One workspace
            </span>

            <span className="hidden text-gray-200 sm:block">•</span>

            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-violet-600" />
              Built for productivity
            </span>
          </div>
        </div>

        {/* Product Preview */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Glow */}
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-violet-200/60 via-indigo-100/60 to-purple-200/60 blur-2xl" />

          {/* Browser Window */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-violet-100/70">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/80 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
              </div>

              <div className="hidden rounded-md border border-gray-200 bg-white px-5 py-1.5 text-xs text-gray-400 sm:block">
                echogpt.live
              </div>

              <div className="w-12" />
            </div>

            {/* App Interface */}
            <div className="grid min-h-[460px] grid-cols-1 md:grid-cols-[190px_1fr]">
              {/* Mini Sidebar */}
              <aside className="hidden border-r border-gray-100 bg-[#faf9ff] p-4 md:block">
                <div className="mb-7 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-white">
                    <Sparkles size={14} />
                  </div>

                  <span className="text-sm font-bold">
                    Echo<span className="text-violet-600">GPT</span>
                  </span>
                </div>

                <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white">
                  <Plus size={14} />
                  New Chat
                </button>

                <p className="mb-3 text-[10px] font-semibold tracking-wider text-gray-400">
                  WORKSPACE
                </p>

                <div className="space-y-1 text-xs text-gray-500">
                  <div className="rounded-lg bg-violet-100 px-3 py-2 font-medium text-violet-700">
                    AI Chat
                  </div>

                  <div className="rounded-lg px-3 py-2">
                    Compare
                  </div>

                  <div className="rounded-lg px-3 py-2">
                    Image Studio
                  </div>

                  <div className="rounded-lg px-3 py-2">
                    History
                  </div>
                </div>
              </aside>

              {/* Chat Area */}
              <div className="flex flex-col bg-white">
                {/* Chat Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      New conversation
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      Choose a model and start chatting
                    </p>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    GPT-5
                    <ChevronDown size={13} />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 space-y-6 p-5 sm:p-8">
                  {/* User Message */}
                  <div className="ml-auto max-w-md rounded-2xl rounded-br-md bg-violet-600 px-4 py-3 text-sm leading-6 text-white">
                    Help me create a productive study plan for my upcoming
                    exams.
                  </div>

                  {/* AI Message */}
                  <div className="flex max-w-xl gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                      <Sparkles size={15} />
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold text-gray-700">
                        EchoGPT
                      </p>

                      <p className="text-sm leading-7 text-gray-500">
                        Absolutely. Let's create a realistic study plan based
                        on your available time, subjects, and exam dates.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] text-gray-500">
                          📚 Study Plan
                        </span>

                        <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] text-gray-500">
                          ✨ Smart Suggestions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prompt Input */}
                <div className="border-t border-gray-100 p-4 sm:p-5">
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5">
                    <button className="text-gray-400">
                      <Plus size={18} />
                    </button>

                    <span className="flex-1 text-sm text-gray-400">
                      Ask anything...
                    </span>

                    <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
                      <Send size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-5 top-20 hidden rounded-xl border border-gray-200 bg-white p-3 shadow-xl lg:block">
            <p className="text-[10px] font-medium text-gray-400">
              POWERED BY
            </p>

            <p className="mt-1 text-xs font-bold text-gray-700">
              Multiple AI Models
            </p>
          </div>

          <div className="absolute -right-5 bottom-24 hidden rounded-xl border border-gray-200 bg-white p-3 shadow-xl lg:block">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <Check size={14} />
              </div>

              <div>
                <p className="text-[10px] text-gray-400">
                  SMART WORKSPACE
                </p>

                <p className="text-xs font-bold text-gray-700">
                  Everything in one place
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}