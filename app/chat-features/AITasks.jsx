
"use client";

import { useState } from "react";
import {
  Search,
  Lightbulb,
  Rocket,
  WandSparkles,
  Brain,
  BriefcaseBusiness,
  IdCard,
  Mail,
  Landmark,
  Gamepad2,
  Clapperboard,
  Bike,
  Trees,
  Users,
  Youtube,
  Instagram,
  Music2,
  Sparkles,
  X,
} from "lucide-react";

// Brand icons using inline SVG
function BrandIcon({ name }) {
  if (name === "X") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.5L5.4 22H2.2l7.3-8.4L1.8 2h6.5l4.5 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="4"
          fill="#FF0033"
        />
        <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="white" />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M15.5 3v11.2a4.2 4.2 0 1 1-3.5-4.1"
          stroke="#25F4EE"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M16.5 4.5c.5 2.6 2.1 4.2 4.5 4.5"
          stroke="#FE2C55"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M14.5 3v11.2a4.2 4.2 0 1 1-3.5-4.1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.5 4.5c.5 2.6 2.1 4.2 4.5 4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="url(#ig-gradient)"
          strokeWidth="2.5"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="#D946EF"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#F97316" />
        <defs>
          <linearGradient id="ig-gradient" x1="3" y1="21" x2="21" y2="3">
            <stop stopColor="#FBBF24" />
            <stop offset=".5" stopColor="#EC4899" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return null;
}

const TABS = ["Ideas", "Work", "Fun", "Online Content"];

const CARDS = {
  Ideas: [
    {
      title: "Think Outside the Box",
      text: "Breakthrough ideas await your discovery",
      icon: Lightbulb,
      color: "bg-amber-50 text-amber-500",
    },
    {
      title: "Startup",
      text: "Get a list of ambitious startup ideas based on your area of interest",
      icon: Rocket,
      color: "bg-blue-50 text-blue-500",
    },
    {
      title: "Innovate and Elevate",
      text: "Your guide to unique and fresh ideas",
      icon: WandSparkles,
      color: "bg-violet-50 text-violet-600",
    },
  ],

  Work: [
    {
      title: "Max Productivity",
      text: "Max productivity, achieve more, stress less",
      icon: Brain,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Recruiting",
      text: "Define the qualifications for any position",
      icon: BriefcaseBusiness,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "CV Builder",
      text: "Generate a creative resume",
      icon: IdCard,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Email",
      text: "Get help to craft a compelling email",
      icon: Mail,
      color: "bg-orange-50 text-orange-500",
    },
    {
      title: "Interview Tips",
      text: "Receive helpful tips for your interview",
      icon: Landmark,
      color: "bg-indigo-50 text-indigo-600",
    },
  ],

  Fun: [
    {
      title: "Gaming",
      text: "Level up your gaming skills and conquer challenges",
      icon: Gamepad2,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Movie Time",
      text: "Cinematic delight, enjoy the latest blockbuster",
      icon: Clapperboard,
      color: "bg-red-50 text-red-500",
    },
    {
      title: "Cycling Day",
      text: "Pedal through scenic routes, relish the ride",
      icon: Bike,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Outdoor Activities",
      text: "Embrace nature, engage in thrilling outdoor adventures",
      icon: Trees,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Fun with buddies",
      text: "Create memories with friends, have endless fun",
      icon: Users,
      color: "bg-orange-50 text-orange-500",
    },
  ],

  "Online Content": [
    {
      title: "X Posts",
      text: "Summarize your text into a post (Tweet)",
      brand: "X",
      color: "bg-gray-100 text-gray-900",
    },
    {
      title: "YouTube Scripts",
      text: "Create a script for your video on any topic",
      brand: "YouTube",
      color: "bg-red-50 text-red-600",
    },
    {
      title: "TikTok Posts",
      text: "Craft TikTok posts on any topic",
      brand: "TikTok",
      color: "bg-gray-100 text-gray-900",
    },
    {
      title: "TikTok Captions",
      text: "Boost your TikTok views with appealing captions",
      brand: "TikTok",
      color: "bg-gray-100 text-gray-900",
    },
    {
      title: "Insta Content",
      text: "Create Instagram posts on any topic",
      brand: "Instagram",
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Insta Reels",
      text: "Get creative for your Insta Reels",
      brand: "Instagram",
      color: "bg-pink-50 text-pink-600",
    },
  ],
};

export default function AITasks() {
  const [activeTab, setActiveTab] = useState("Ideas");
  const [search, setSearch] = useState("");

  const cards = CARDS[activeTab].filter((card) => {
    const query = search.toLowerCase();

    return (
      card.title.toLowerCase().includes(query) ||
      card.text.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-full bg-white px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
            <Sparkles size={24} />
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            EchoGPT AI Tasks
          </h1>

          <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
            Discover and create custom versions of ChatGPT that combine
            instructions, extra knowledge, and any combination of skills.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-7 max-w-3xl">
          <div className="flex h-12 items-center gap-3 rounded-full border border-gray-200 bg-white px-5 transition focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100">
            <Search size={18} className="shrink-0 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for the Apps"
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="text-gray-400 transition hover:text-gray-700"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 overflow-x-auto">
          <div className="mx-auto flex w-max min-w-full justify-center gap-6 border-b border-gray-200 sm:gap-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap border-b-2 px-1 pb-3 text-sm transition sm:text-[15px] ${
                  activeTab === tab
                    ? "border-violet-600 font-semibold text-violet-600"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-800">
              {activeTab}
            </h2>

            <span className="text-xs text-gray-400">
              {cards.length} {cards.length === 1 ? "task" : "tasks"}
            </span>
          </div>

          {cards.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {cards.map((card) => {
                const Icon = card.icon;

                return (
                  <button
                    key={card.title}
                    type="button"
                    className="group min-h-[180px] rounded-2xl border border-gray-200 bg-white p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md hover:shadow-violet-100/50"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.color}`}
                    >
                      {card.brand ? (
                        <BrandIcon name={card.brand} />
                      ) : (
                        <Icon size={22} strokeWidth={1.8} />
                      )}
                    </div>

                    <h3 className="mt-4 text-[16px] font-semibold text-gray-900 transition group-hover:text-violet-600">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {card.text}
                    </p>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-gray-200 px-5 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-500">
                <Search size={22} />
              </div>

              <h3 className="mt-4 font-semibold text-gray-900">
                No tasks found
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Try another search or select a different category.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-4 text-sm font-semibold text-violet-600 hover:text-violet-700"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}