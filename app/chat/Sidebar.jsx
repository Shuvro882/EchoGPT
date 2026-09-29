"use client";

import {
  Sparkles,
  Plus,
  Image,
  Video,
  GitCompare,
  Link,
  History,
  Store,
  ListTodo,
  FileSearch,
  FileText,
  CircleHelp,
  Mail,
  CreditCard,
  Code2,
  MessageCircle,
  Home,
  Settings,
  Sun,
  ChevronLeft,
  Share2,
} from "lucide-react";

export default function Sidebar({
  isOpen,
  onClose,
  selectedItem,
  onSelect,
  darkMode,
  setDarkMode,
}) {
  const engagementItems = [
    { label: "Image Studio", icon: Image, pro: true },
    { label: "Video Studio", icon: Video, pro: true },
    { label: "Compare", icon: GitCompare },
    { label: "Connectors", icon: Link },
    { label: "History", icon: History },
    { label: "Store", icon: Store },
    { label: "AI Tasks", icon: ListTodo },
    { label: "AI Job Analysis", icon: FileSearch },
    { label: "AI SOP Builder", icon: FileText },
  ];

  const supportItems = [
    { label: "Support", icon: CircleHelp },
    { label: "Newsletter", icon: Mail },
    { label: "Subscriptions", icon: CreditCard },
    { label: "API Platform", icon: Code2 },
    { label: "Discord", icon: MessageCircle },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex h-screen w-72 flex-col overflow-hidden border-r transition-colors duration-300 lg:static lg:translate-x-0 ${
        darkMode
          ? "border-gray-800 bg-gray-900"
          : "border-violet-100 bg-[#f8f7ff]"
      } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Logo */}
      <div
        className={`sticky top-0 z-10 flex items-center justify-between px-5 py-5 ${
          darkMode ? "bg-gray-900" : "bg-[#f8f7ff]"
        }`}
      >
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
            <Sparkles size={20} />
          </div>

          <span
            className={`text-xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Echo<span className="text-violet-600">GPT</span>
          </span>
        </a>

        <button
          onClick={onClose}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition lg:hidden ${
            darkMode
              ? "text-gray-400 hover:bg-gray-800 hover:text-white"
              : "text-gray-500 hover:bg-white hover:text-gray-900"
          }`}
          aria-label="Close sidebar"
        >
          <ChevronLeft size={19} />
        </button>
      </div>

      {/* Scrollable Menu */}
      <div className="sidebar-scroll mt-7 flex-1 overflow-y-auto px-4 pb-4">
        {/* New Chat */}
        <div className="mb-7">
          <button
            onClick={() => {
              onSelect("Home");
              onClose();
            }}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
          >
            <Plus size={18} />
            New Chat
          </button>
        </div>

        {/* Engagement */}
        <div>
          <p className="px-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
            Engagement
          </p>

          <div className="mt-3 space-y-1">
            {engagementItems.map((item) => {
              const Icon = item.icon;
              const isActive = selectedItem === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => onSelect(item.label)}
                  className={`group flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                    isActive
                      ? darkMode
                        ? "bg-gray-800 text-violet-400 shadow-sm"
                        : "bg-white text-violet-600 shadow-sm"
                      : darkMode
                      ? "text-gray-400 hover:bg-gray-800 hover:text-violet-400"
                      : "text-gray-600 hover:bg-white hover:text-violet-600 hover:shadow-sm"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className={`shrink-0 transition ${
                      isActive
                        ? "text-violet-500"
                        : darkMode
                        ? "text-gray-500 group-hover:text-violet-400"
                        : "text-gray-500 group-hover:text-violet-600"
                    }`}
                  />

                  <span className="flex-1">{item.label}</span>

                  {item.pro && (
                    <span className="rounded-md bg-violet-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-violet-600">
                      PRO
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-6 h-px ${
            darkMode ? "bg-gray-800" : "bg-violet-100"
          }`}
        />

        {/* Help & Support */}
        <div>
          <p className="px-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
            Help & Support
          </p>

          <div className="mt-3 space-y-1">
            {supportItems.map((item) => {
              const Icon = item.icon;
              const isActive = selectedItem === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.label === "API Platform") {
                      window.open(
                        "https://platform.echogpt.live/",
                        "_blank"
                      );
                      return;
                    }

                    if (item.label === "Discord") {
                      window.open(
                        "https://discord.com/invite/JG8SXMtaeH",
                        "_blank"
                      );
                      return;
                    }

                    onSelect(item.label);
                  }}
                  className={`group flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                    isActive
                      ? darkMode
                        ? "bg-gray-800 text-violet-400 shadow-sm"
                        : "bg-white text-violet-600 shadow-sm"
                      : darkMode
                      ? "text-gray-400 hover:bg-gray-800 hover:text-violet-400"
                      : "text-gray-600 hover:bg-white hover:text-violet-600 hover:shadow-sm"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className={`shrink-0 transition ${
                      isActive
                        ? "text-violet-500"
                        : darkMode
                        ? "text-gray-500 group-hover:text-violet-400"
                        : "text-gray-500 group-hover:text-violet-600"
                    }`}
                  />

                  <span className="flex-1">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        className={`border-t p-3 transition-colors ${
          darkMode
            ? "border-gray-800 bg-gray-900"
            : "border-violet-100 bg-[#f8f7ff]"
        }`}
      >
        <div className="grid grid-cols-4 gap-1">
          {/* Home */}
          <button
            onClick={() => {
              window.open("https://appifydevs.com/", "_blank");
            }}
            className={`flex h-10 cursor-pointer items-center justify-center rounded-lg transition ${
              selectedItem === "Home"
                ? darkMode
                  ? "bg-gray-800 text-violet-400 shadow-sm"
                  : "bg-white text-violet-600 shadow-sm"
                : darkMode
                ? "text-gray-400 hover:bg-gray-800 hover:text-violet-400"
                : "text-gray-500 hover:bg-white hover:text-violet-600"
            }`}
            aria-label="Home"
          >
            <Home size={18} />
          </button>

          {/* Share */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "EchoGPT",
                  text: "Check out EchoGPT",
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
              }
            }}
            className={`flex h-10 cursor-pointer items-center justify-center rounded-lg transition ${
              selectedItem === "Share"
                ? darkMode
                  ? "bg-gray-800 text-violet-400 shadow-sm"
                  : "bg-white text-violet-600 shadow-sm"
                : darkMode
                ? "text-gray-400 hover:bg-gray-800 hover:text-violet-400"
                : "text-gray-500 hover:bg-white hover:text-violet-600"
            }`}
            aria-label="Share"
          >
            <Share2 size={18} />
          </button>

          {/* Settings */}
          <button
            onClick={() => {
              onSelect("Settings");
            }}
            className={`flex h-10 cursor-pointer items-center justify-center rounded-lg transition ${
              selectedItem === "Settings"
                ? darkMode
                  ? "bg-gray-800 text-violet-400 shadow-sm"
                  : "bg-white text-violet-600 shadow-sm"
                : darkMode
                ? "text-gray-400 hover:bg-gray-800 hover:text-violet-400"
                : "text-gray-500 hover:bg-white hover:text-violet-600"
            }`}
            aria-label="Settings"
          >
            <Settings size={18} />
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 cursor-pointer items-center justify-center rounded-lg transition ${
              darkMode
                ? "bg-gray-800 text-yellow-400"
                : "text-gray-500 hover:bg-white hover:text-violet-600"
            }`}
            aria-label="Toggle dark mode"
          >
            <Sun size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}