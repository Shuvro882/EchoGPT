import { ArrowRight, Sparkles, Check, Menu } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-gray-100 bg-gray-50/60 px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            Powerful workspace
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to
            <span className="text-violet-600"> work smarter.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-500">
            EchoGPT brings powerful AI tools together in one simple workspace,
            so you can spend less time switching between tools.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {/* Large Feature */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-2">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-100 blur-3xl transition group-hover:bg-violet-200" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <Sparkles size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Multiple AI models, one workspace
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
                Access different AI models from one place and choose the right
                model for writing, coding, research, brainstorming, and
                everyday tasks.
              </p>

              {/* Mini Model UI */}
              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-violet-200 bg-violet-50 p-3">
                  <div className="mb-2 h-7 w-7 rounded-lg bg-violet-600" />
                  <p className="text-xs font-semibold text-gray-700">GPT</p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <div className="mb-2 h-7 w-7 rounded-lg bg-gray-800" />
                  <p className="text-xs font-semibold text-gray-700">
                    Claude
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <div className="mb-2 h-7 w-7 rounded-lg bg-indigo-500" />
                  <p className="text-xs font-semibold text-gray-700">
                    Gemini
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <div className="mb-2 h-7 w-7 rounded-lg bg-blue-500" />
                  <p className="text-xs font-semibold text-gray-700">More</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compare Feature */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <ArrowRight size={22} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Compare responses
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Compare answers from different AI models side by side and choose
              the response that works best for you.
            </p>

            <div className="mt-7 flex items-center gap-2">
              <div className="h-9 flex-1 rounded-lg bg-gray-100" />
              <div className="h-9 flex-1 rounded-lg bg-violet-100" />
            </div>
          </div>

          {/* Image & Video */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <Sparkles size={22} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Create more than text
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Explore creative AI tools for generating images, videos, and
              other content without leaving your workspace.
            </p>

            <div className="mt-7 flex gap-2">
              <div className="h-16 flex-1 rounded-xl bg-gradient-to-br from-violet-100 to-purple-50" />
              <div className="h-16 flex-1 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-50" />
            </div>
          </div>

          {/* Productivity */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Check size={22} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Built for productivity
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Turn ideas into action with AI-powered tasks, workflows, writing
              assistance, and productivity tools.
            </p>

            <div className="mt-7 space-y-2">
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
                <Check size={14} className="text-violet-600" />
                <span className="text-xs text-gray-500">
                  AI-powered tasks
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
                <Check size={14} className="text-violet-600" />
                <span className="text-xs text-gray-500">
                  Smart workflows
                </span>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <Menu size={22} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Everything stays organized
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Keep conversations, projects, and AI workflows organized so you
              can quickly return to what matters.
            </p>

            <div className="mt-7 space-y-2">
              <div className="h-2 w-4/5 rounded-full bg-gray-100" />
              <div className="h-2 w-3/5 rounded-full bg-gray-100" />
              <div className="h-2 w-2/3 rounded-full bg-violet-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}