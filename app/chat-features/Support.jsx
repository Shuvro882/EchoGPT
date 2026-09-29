"use client";

import { Mail, ChevronRight } from "lucide-react";

const PREFERRED = [
  {
    icon: Mail,
    title: "Email Us",
    text: "We will aim to respond in 1 day",
  },
];

const SOCIALS = [
  {
    type: "facebook",
    title: "Facebook",
    text: "Follow us on Facebook for the latest updates and news!",
  },
  {
    type: "instagram",
    title: "Instagram",
    text: "See behind the scenes and fresh updates!",
  },
  {
    type: "linkedin",
    title: "LinkedIn",
    text: "Connect with us professionally on LinkedIn.",
  },
];

function SocialIcon({ type }) {
  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5.5ZM4 10h5v10H4V10Zm7 0h4.8v1.4h.1c.7-1.1 2-1.9 4-1.9 4.1 0 4.9 2.7 4.9 6.2V20h-5v-3.8c0-1 0-2.4-1.5-2.4s-1.8 1.1-1.8 2.3V20H11V10Z" />
      </svg>
    );
  }

  return null;
}

function OptionCard({ icon: Icon, title, text }) {
  return (
    <button
      className="flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-gray-200 p-5 text-left transition hover:border-violet-200 hover:shadow-sm"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100">
        <Icon size={20} className="text-gray-800" />
      </div>

      <div className="flex-1">
        <h3 className="text-[17px] font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {text}
        </p>
      </div>

      <ChevronRight size={18} className="shrink-0 text-gray-400" />
    </button>
  );
}

export default function Support() {
  return (
    <div className="min-h-full bg-white px-4 py-10 sm:px-6">
      <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Talk with Our Team
      </h1>

      <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
        {/* Preferred Option */}
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Your preferred option
        </p>

        <div className="mt-2 h-px bg-gray-200" />

        <div className="mt-5 space-y-4">
          {PREFERRED.map((item) => (
            <OptionCard key={item.title} {...item} />
          ))}
        </div>

        {/* Follow Us */}
        <p className="mt-10 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Follow us
        </p>

        <div className="mt-2 h-px bg-gray-200" />

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SOCIALS.map((social) => (
            <button
              key={social.title}
              className="flex w-full cursor-pointer items-start justify-between rounded-2xl border border-gray-200 p-5 text-left transition hover:border-violet-200 hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-800">
                  <SocialIcon type={social.type} />
                </div>

                <div>
                  <h3 className="text-[17px] font-semibold text-gray-900">
                    {social.title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    {social.text}
                  </p>
                </div>
              </div>

              <ChevronRight
                size={18}
                className="mt-1 shrink-0 text-gray-400"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}