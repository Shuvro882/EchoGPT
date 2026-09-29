
"use client";

import { useState } from "react";
import {
  Plus,
  Clock,
  Lightbulb,
  Send,
  BriefcaseBusiness,
  FileText,
  MessageSquare,
  Target,
  X,
} from "lucide-react";

const FEATURES = [
  {
    title: "Analyze Job Description",
    text: "Instantly get AI-powered insights for any job posting.",
    icon: FileText,
  },
  {
    title: "Tailor Your Resume",
    text: "Get suggestions to match your CV to the job requirements.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Prepare for Interviews",
    text: "Practice with AI-generated interview questions and tips.",
    icon: MessageSquare,
  },
  {
    title: "Skill Gap Analysis",
    text: "Discover key skills to focus on for your target role.",
    icon: Target,
  },
];

export default function AIJobAnalysis() {
  const [jobDescription, setJobDescription] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const handleAnalyze = () => {
    if (!jobDescription.trim()) {
      setShowInsights(true);
      return;
    }

    // UI demo only: no real AI/API integration yet.
    setShowInsights(true);
  };

  return (
    <div className="min-h-full bg-white px-6 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            EchoGPT – AI Job Insight
          </h1>

          <span className="-rotate-2 rounded-lg bg-violet-600 px-4 py-2 text-2xl font-extrabold text-white shadow-lg shadow-violet-300/60 sm:text-4xl">
            Assistant
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">
          Understand job requirements, tailor your resume, and prepare for
          your next career opportunity with AI-powered assistance.
        </p>

        {/* Feature Cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:border-violet-200 hover:shadow-md hover:shadow-violet-100/50"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-100">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-violet-600">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Job Description Composer */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 px-5 pt-5 sm:px-6">
            <p className="text-sm font-medium text-gray-700">
              Job Description
            </p>

            <div className="flex items-center gap-2">
              {/* Upload CV button */}
              <label
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-violet-50 hover:text-violet-600"
                title="Upload your resume"
              >
                <Plus size={17} />

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                      alert(`Selected file: ${file.name}`);
                    }
                  }}
                />
              </label>

              {/* History */}
              <button
                type="button"
                onClick={() => setShowHistory(!showHistory)}
                title="Recent analysis"
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition ${
                  showHistory
                    ? "bg-violet-50 text-violet-600"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Clock size={17} />
              </button>
            </div>
          </div>

          <div className="px-5 pt-3 sm:px-6">
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste job title & description here..."
              rows={6}
              className="w-full resize-y bg-transparent text-[15px] leading-7 text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 pb-5 pt-3 sm:px-6">
            <button
              type="button"
              onClick={() => setShowInsights(!showInsights)}
              className="flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-100"
            >
              <Lightbulb size={16} />
              Job Insights
            </button>

            <button
              type="button"
              onClick={handleAnalyze}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-300/50 transition hover:bg-violet-700"
            >
              Analyze Job
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* History Panel */}
        {showHistory && (
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">
                Recent Analysis
              </h3>

              <button
                type="button"
                onClick={() => setShowHistory(false)}
                className="text-gray-400 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              No previous job analysis available.
            </p>
          </div>
        )}

        {/* Insights / Demo Result */}
        {showInsights && (
          <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/50 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Lightbulb size={18} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-900">
                    Job Insights
                  </h3>

                  <button
                    type="button"
                    onClick={() => setShowInsights(false)}
                    className="text-gray-400 hover:text-gray-700"
                  >
                    <X size={18} />
                  </button>
                </div>

                {jobDescription.trim() ? (
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Your job description has been entered. Connect an AI
                    backend to generate job requirements, resume
                    suggestions, interview questions, and skill-gap
                    analysis.
                  </p>
                ) : (
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Paste a job description above to get started with
                    your job analysis.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}