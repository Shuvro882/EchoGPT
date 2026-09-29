"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Clock3,
  Copy,
  FileText,
  Globe2,
  History,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  PenLine,
  Search,
  Send,
  Settings,
  Sparkles,
  Languages,
  WandSparkles,
  X,
} from "lucide-react";

const quickActions = [
  {
    title: "Summarize",
    description: "Get a quick summary",
    icon: FileText,
  },
  {
    title: "Explain",
    description: "Understand this page",
    icon: WandSparkles,
  },
  {
    title: "Rewrite",
    description: "Improve your text",
    icon: PenLine,
  },
  {
    title: "Translate",
    description: "Translate selected text",
    icon: Languages,
  },
];

const recentChats = [
  "React interview questions",
  "Next.js routing explained",
  "JavaScript concepts",
];

export default function ExtensionPage() {
  const [activeView, setActiveView] = useState("chat");
  const [selectedModel, setSelectedModel] = useState("EchoGPT");
  const [prompt, setPrompt] = useState("");
  const [showModels, setShowModels] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const models = [
    "EchoGPT",
    "GPT-5.6",
    "DeepSeek V4 Pro",
    "Gemini 3.8 Flash",
  ];

  const handleSend = () => {
    if (!prompt.trim()) return;

    setPrompt("");
  };

  return (
    <main className="min-h-screen bg-[#f7f6ff] text-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 border-b border-violet-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-200">
              <Sparkles size={21} />
            </div>

            <div>
              <h1 className="text-base font-bold tracking-tight">
                EchoGPT Extension
              </h1>
              <p className="hidden text-xs text-gray-400 sm:block">
                Your AI assistant, everywhere
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="hidden rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-violet-50 hover:text-violet-600 sm:block"
            >
              Features
            </button>

            <button
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700"
            >
              <span className="hidden sm:inline">Add to Chrome</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-semibold text-violet-600 shadow-sm">
            <Sparkles size={14} />
            EchoGPT Chrome Extension
          </div>

          <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Your AI assistant,
            <span className="block text-violet-600">
              right beside you.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Chat with AI, summarize webpages, rewrite content and switch
            between powerful models without leaving your browser.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700">
              Add to Chrome
              <ArrowRight size={17} />
            </button>

            <button className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-violet-200 hover:text-violet-600">
              Explore features
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Check size={15} className="text-green-500" />
              Works on any webpage
            </div>

            <div className="flex items-center gap-2">
              <Check size={15} className="text-green-500" />
              Multiple AI models
            </div>

            <div className="flex items-center gap-2">
              <Check size={15} className="text-green-500" />
              Quick actions
            </div>
          </div>
        </div>

        {/* Extension Preview */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-8 rounded-full bg-violet-300/20 blur-3xl" />

          <div className="relative w-full max-w-[390px] overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-2xl shadow-violet-200/50">
            {/* Extension Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-sm font-bold">EchoGPT</p>
                  <p className="text-[10px] text-gray-400">
                    AI Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50">
                  <Search size={16} />
                </button>

                <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50">
                  <Settings size={16} />
                </button>

                <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            {/* Extension Navigation */}
            <div className="flex border-b border-gray-100 px-4">
              <button
                onClick={() => setActiveView("chat")}
                className={`flex-1 border-b-2 py-3 text-xs font-semibold ${
                  activeView === "chat"
                    ? "border-violet-600 text-violet-600"
                    : "border-transparent text-gray-400"
                }`}
              >
                Chat
              </button>

              <button
                onClick={() => setActiveView("history")}
                className={`flex-1 border-b-2 py-3 text-xs font-semibold ${
                  activeView === "history"
                    ? "border-violet-600 text-violet-600"
                    : "border-transparent text-gray-400"
                }`}
              >
                History
              </button>
            </div>

            {activeView === "chat" ? (
              <>
                {/* Context */}
                <div className="mx-4 mt-4 flex items-center gap-2 rounded-xl bg-violet-50 px-3 py-2.5">
                  <Globe2 size={15} className="text-violet-600" />

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold text-violet-700">
                      Current webpage
                    </p>
                    <p className="truncate text-[10px] text-violet-500">
                      echogpt.live
                    </p>
                  </div>

                  <X size={13} className="text-violet-400" />
                </div>

                {/* Welcome */}
                <div className="px-5 pb-3 pt-7">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <Bot size={21} />
                  </div>

                  <h3 className="text-lg font-bold">
                    How can I help?
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    Ask anything or use a quick action below.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2 px-4">
                  {quickActions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <button
                        key={action.title}
                        className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-left transition hover:border-violet-200 hover:bg-violet-50"
                      >
                        <Icon
                          size={16}
                          className="text-violet-600"
                        />

                        <p className="mt-2 text-[11px] font-semibold text-gray-700">
                          {action.title}
                        </p>

                        <p className="mt-0.5 text-[9px] text-gray-400">
                          {action.description}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Composer */}
                <div className="mt-4 border-t border-gray-100 p-4">
                  <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-50">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Ask EchoGPT anything..."
                      rows={2}
                      className="w-full resize-none border-0 bg-transparent px-2 py-1 text-xs text-gray-700 outline-none placeholder:text-gray-400"
                    />

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <button className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-violet-600">
                          <Paperclip size={15} />
                        </button>

                        <div className="relative">
                          <button
                            onClick={() =>
                              setShowModels(!showModels)
                            }
                            className="flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1.5 text-[10px] font-semibold text-gray-600"
                          >
                            <Bot size={13} />
                            {selectedModel}
                            <ChevronDown size={12} />
                          </button>

                          {showModels && (
                            <div className="absolute bottom-9 left-0 z-20 w-40 rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl">
                              {models.map((model) => (
                                <button
                                  key={model}
                                  onClick={() => {
                                    setSelectedModel(model);
                                    setShowModels(false);
                                  }}
                                  className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[10px] text-gray-600 hover:bg-violet-50 hover:text-violet-600"
                                >
                                  {model}

                                  {selectedModel === model && (
                                    <Check size={13} />
                                  )}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={handleSend}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-700"
                      >
                        <Send size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* History */
              <div className="px-4 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold">
                      Recent conversations
                    </h3>
                    <p className="mt-1 text-[10px] text-gray-400">
                      Continue where you left off.
                    </p>
                  </div>

                  <History size={17} className="text-violet-500" />
                </div>

                <div className="space-y-2">
                  {recentChats.map((chat) => (
                    <button
                      key={chat}
                      className="flex w-full items-center gap-3 rounded-xl border border-gray-100 p-3 text-left transition hover:border-violet-200 hover:bg-violet-50"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
                        <MessageSquare size={14} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-gray-700">
                          {chat}
                        </p>

                        <p className="mt-1 flex items-center gap-1 text-[9px] text-gray-400">
                          <Clock3 size={10} />
                          Recently
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-100 bg-violet-50 py-2.5 text-xs font-semibold text-violet-600 hover:bg-violet-100">
                  <History size={14} />
                  View all conversations
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="border-y border-violet-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600">
              Built for your browser
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Everything you need,
              <span className="text-violet-600"> right in your side panel.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
              Designed to keep your AI workflow close while you browse,
              research, write and learn.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Globe2,
                title: "Page Context",
                text: "Understand and summarize the webpage you're viewing.",
              },
              {
                icon: Bot,
                title: "Multiple Models",
                text: "Switch between powerful AI models whenever you need.",
              },
              {
                icon: WandSparkles,
                title: "Quick Actions",
                text: "Summarize, explain, rewrite and translate instantly.",
              },
              {
                icon: History,
                title: "Conversation History",
                text: "Keep your important conversations organized.",
              },
            ].map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-lg hover:shadow-violet-100"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-sm font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 px-6 py-12 text-center text-white shadow-2xl shadow-violet-200 sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Sparkles size={26} />
          </div>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Bring EchoGPT with you.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-violet-100 sm:text-base">
            Turn any webpage into an AI-powered workspace and get answers
            without leaving your browser.
          </p>

          <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-violet-700 shadow-lg transition hover:bg-violet-50">
            Add EchoGPT to Chrome
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-violet-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-7 text-xs text-gray-400 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-white">
              <Sparkles size={14} />
            </div>

            <span className="font-semibold text-gray-600">
              EchoGPT
            </span>
          </div>

          <p>AI assistance, wherever you browse.</p>
        </div>
      </footer>
    </main>
  );
}