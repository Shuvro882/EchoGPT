
"use client";

import {
  GraduationCap,
  Sparkles,
  Globe,
  Users,
  Briefcase,
  Microscope,
  Palette,
  AlertCircle,
} from "lucide-react";

const STATS = [
  {
    icon: Sparkles,
    title: "AI-Enhanced",
    text: "Powered by Google Gemini",
  },
  {
    icon: Globe,
    title: "6 Countries",
    text: "Country-specific guidelines",
  },
  {
    icon: Users,
    title: "4 Templates",
    text: "Academic, Professional, Research, Creative",
  },
];

const TEMPLATES = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    text: "Ideal for students with strong academic records applying to graduate programs.",
    tags: ["Academic", "Graduate Studies", "Scholarships"],
  },
  {
    icon: Briefcase,
    title: "Professional Track",
    text: "Designed for applicants with significant work experience seeking advanced degrees.",
    tags: ["Career", "Professional Development", "MBA"],
  },
  {
    icon: Microscope,
    title: "Research Focused",
    text: "Perfect for research-oriented applicants targeting PhD or research-intensive programs.",
    tags: ["Research", "PhD", "Innovation"],
  },
  {
    icon: Palette,
    title: "Creative Arts",
    text: "Tailored for applicants to creative programs like fine arts, design, or writing.",
    tags: ["Creative", "Arts", "Portfolio"],
  },
];

export default function AISOPBuilder() {
  return (
    <div className="min-h-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-violet-50 to-white px-4 py-10 text-center sm:px-6 sm:py-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-300/50">
          <GraduationCap size={28} className="text-white" />
        </div>

        <h1 className="mt-5 text-3xl font-extrabold text-violet-600 sm:text-4xl lg:text-5xl">
          AI-Powered SOP Builder
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
          Create compelling Statements of Purpose with AI assistance,
          tailored for your dream university and destination country.
        </p>

        {/* Stats */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
          {STATS.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                  <Icon size={18} className="text-violet-600" />
                </div>

                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {stat.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Template Selection */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-violet-600 sm:text-3xl">
            Choose Your SOP Template
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
            Select the template that best matches your background and
            the focus of your application. Each template is optimized
            for different types of applicants and academic goals.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {TEMPLATES.map((template) => {
            const Icon = template.icon;

            return (
              <div
                key={template.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-violet-300 hover:shadow-md sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Icon size={20} className="text-violet-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {template.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {template.text}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOP History Error State */}
      <section className="px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white px-4 py-14 text-center sm:py-16">
          <AlertCircle
            size={40}
            className="mx-auto text-red-500"
            strokeWidth={1.6}
          />

          <h3 className="mt-4 text-lg font-semibold text-red-500">
            Failed to load SOP history
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Please try again later or contact support.
          </p>
        </div>
      </section>
    </div>
  );
}