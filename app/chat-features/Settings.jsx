"use client";

import { useState } from "react";
import {
  User,
  Palette,
  MessageSquare,
  Bell,
  ShieldCheck,
  Moon,
  Sun,
  Monitor,
  ChevronRight,
  Trash2,
} from "lucide-react";

const SETTINGS_SECTIONS = [
  {
    title: "Account",
    description: "Manage your account information and profile settings.",
    icon: User,
  },
  {
    title: "Appearance",
    description: "Customize how EchoGPT looks on your device.",
    icon: Palette,
  },
  {
    title: "Chat Preferences",
    description: "Control how conversations and messages behave.",
    icon: MessageSquare,
  },
  {
    title: "Notifications",
    description: "Choose which notifications you want to receive.",
    icon: Bell,
  },
  {
    title: "Privacy & Data",
    description: "Manage your privacy and data preferences.",
    icon: ShieldCheck,
  },
];

export default function Settings() {
  const [theme, setTheme] = useState("System");
  const [enterToSend, setEnterToSend] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-full bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            Manage your EchoGPT account, preferences, and privacy settings.
          </p>
        </div>

        {/* Account */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
              <User size={21} className="text-violet-600" />
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-gray-900">Your Account</h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage your profile and account information.
              </p>
            </div>

            <button className="hidden cursor-pointer rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 sm:block">
              Edit
            </button>
          </div>
        </section>

        {/* Settings */}
        <div className="mt-6 space-y-4">
          {SETTINGS_SECTIONS.slice(1).map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Icon size={19} className="text-violet-600" />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-bold text-gray-900">
                      {section.title}
                    </h2>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Appearance */}
                {section.title === "Appearance" && (
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold text-gray-700">
                      Theme
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { name: "Light", icon: Sun },
                        { name: "Dark", icon: Moon },
                        { name: "System", icon: Monitor },
                      ].map((item) => {
                        const ThemeIcon = item.icon;

                        return (
                          <button
                            key={item.name}
                            onClick={() => setTheme(item.name)}
                            className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition ${
                              theme === item.name
                                ? "border-violet-500 bg-violet-50 text-violet-600"
                                : "border-gray-200 text-gray-600 hover:border-violet-200"
                            }`}
                          >
                            <ThemeIcon size={17} />
                            {item.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Chat Preferences */}
                {section.title === "Chat Preferences" && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Enter to send
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Press Enter to send your message.
                        </p>
                      </div>

                      <button
                        onClick={() => setEnterToSend(!enterToSend)}
                        className={`relative h-6 w-11 cursor-pointer rounded-full transition ${
                          enterToSend ? "bg-violet-600" : "bg-gray-300"
                        }`}
                        aria-label="Toggle enter to send"
                      >
                        <span
                          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                            enterToSend ? "left-6" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {/* Notifications */}
                {section.title === "Notifications" && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Email notifications
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Receive updates and important account notifications.
                        </p>
                      </div>

                      <button
                        onClick={() => setNotifications(!notifications)}
                        className={`relative h-6 w-11 cursor-pointer rounded-full transition ${
                          notifications ? "bg-violet-600" : "bg-gray-300"
                        }`}
                        aria-label="Toggle email notifications"
                      >
                        <span
                          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                            notifications ? "left-6" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {/* Privacy */}
                {section.title === "Privacy & Data" && (
                  <div className="mt-6 space-y-3">
                    <button className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-200 p-4 text-left transition hover:border-violet-200 hover:bg-violet-50/40">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Data controls
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Manage how your conversation data is handled.
                        </p>
                      </div>

                      <ChevronRight size={18} className="text-gray-400" />
                    </button>

                    <button className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-200 p-4 text-left transition hover:border-violet-200 hover:bg-violet-50/40">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Privacy policy
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Review EchoGPT's privacy information.
                        </p>
                      </div>

                      <ChevronRight size={18} className="text-gray-400" />
                    </button>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Danger Zone */}
        <section className="mt-6 rounded-2xl border border-red-200 bg-red-50/30 p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100">
              <Trash2 size={19} className="text-red-500" />
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-gray-900">Delete Account</h2>
              <p className="mt-1 text-sm text-gray-500">
                Permanently remove your EchoGPT account and data.
              </p>
            </div>

            <button className="cursor-pointer rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50">
              Delete
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}