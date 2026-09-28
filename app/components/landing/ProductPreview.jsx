import {
  MessageSquare,
  Send,
  Paperclip,
  Mic,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function ProductPreview() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600">
            <Sparkles size={15} />
            Built for your workflow
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="text-violet-600"> work with AI.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Chat, compare and create from one clean workspace designed to keep
            your AI workflow simple.
          </p>
        </div>

        {/* Product Window */}
        <div className="relative mt-14">
          {/* Glow */}
          <div className="absolute left-1/2 top-10 h-72 w-3/4 -translate-x-1/2 rounded-full bg-violet-200/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-2xl shadow-violet-100/60">
            {/* Top Bar */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
                  <Sparkles size={16} />
                </div>

                <span className="text-sm font-semibold text-gray-800">
                  EchoGPT
                </span>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="text-xs text-gray-400">Workspace</span>
                <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                  General
                </span>
              </div>
            </div>

            {/* Main Area */}
            <div className="grid min-h-[520px] lg:grid-cols-[210px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-gray-200 bg-white p-4 lg:block">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200">
                  <MessageSquare size={16} />
                  New Chat
                </button>

                <div className="mt-7">
                  <p className="px-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Recent
                  </p>

                  <div className="mt-3 space-y-1">
                    <div className="rounded-lg bg-violet-50 px-3 py-2.5 text-xs font-medium text-violet-700">
                      Project planning
                    </div>

                    <div className="rounded-lg px-3 py-2.5 text-xs text-gray-500">
                      Website ideas
                    </div>

                    <div className="rounded-lg px-3 py-2.5 text-xs text-gray-500">
                      Marketing strategy
                    </div>

                    <div className="rounded-lg px-3 py-2.5 text-xs text-gray-500">
                      Learn JavaScript
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-5">
                  <p className="px-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Tools
                  </p>

                  <div className="mt-3 space-y-1">
                    <div className="px-3 py-2.5 text-xs text-gray-500">
                      Compare
                    </div>

                    <div className="px-3 py-2.5 text-xs text-gray-500">
                      Image Studio
                    </div>

                    <div className="px-3 py-2.5 text-xs text-gray-500">
                      AI Tasks
                    </div>
                  </div>
                </div>
              </aside>

              {/* Chat */}
              <div className="flex flex-col bg-gray-50">
                {/* Chat Header */}
                <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Project planning
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-400">
                      AI workspace
                    </p>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600">
                    GPT
                    <ChevronDown size={14} />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 space-y-6 p-5 sm:p-8">
                  {/* User */}
                  <div className="ml-auto max-w-xl rounded-2xl rounded-br-md bg-violet-600 px-5 py-4 text-sm leading-6 text-white shadow-sm">
                    Help me create a simple plan for launching my new
                    project.
                  </div>

                  {/* AI */}
                  <div className="flex max-w-2xl gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm ring-1 ring-gray-200">
                      <Sparkles size={17} />
                    </div>

                    <div className="rounded-2xl rounded-tl-md border border-gray-200 bg-white px-5 py-4 text-sm leading-7 text-gray-600 shadow-sm">
                      <p>
                        Absolutely. Here is a simple launch plan you can
                        follow:
                      </p>

                      <div className="mt-3 space-y-2">
                        <div>
                          <span className="font-semibold text-gray-900">
                            01.
                          </span>{" "}
                          Define your target audience.
                        </div>

                        <div>
                          <span className="font-semibold text-gray-900">
                            02.
                          </span>{" "}
                          Prepare your core product.
                        </div>

                        <div>
                          <span className="font-semibold text-gray-900">
                            03.
                          </span>{" "}
                          Create your launch content.
                        </div>

                        <div>
                          <span className="font-semibold text-gray-900">
                            04.
                          </span>{" "}
                          Measure results and improve.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prompt Area */}
                <div className="border-t border-gray-200 bg-white p-4 sm:p-5">
                  <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-sm">
                    <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-600">
                      <Paperclip size={18} />
                    </button>

                    <div className="flex-1 px-2 text-sm text-gray-400">
                      Ask EchoGPT anything...
                    </div>

                    <button className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 sm:flex">
                      <Mic size={18} />
                    </button>

                    <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-200">
                      <Send size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Cards */}
          <div className="absolute -left-4 top-1/3 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-200/50 xl:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Sparkles size={18} />
              </div>

              <div>
                <p className="text-xs font-bold text-gray-900">
                  Smart responses
                </p>
                <p className="mt-1 text-[11px] text-gray-400">
                  Powered by AI
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-20 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-200/50 xl:block">
            <p className="text-xs font-bold text-gray-900">
              One workspace
            </p>

            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              <span className="text-[11px] text-gray-400">
                Multiple AI tools
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}