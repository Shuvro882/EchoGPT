"use client";

import {
  Search,
  Plus,
  Settings,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const connectors = [
  {
    name: "Google Drive",
    description: "Access and search files from your Google Drive.",
    icon: "G",
    connected: true,
  },
  {
    name: "Notion",
    description: "Search and use your Notion pages and databases.",
    icon: "N",
    connected: false,
  },
  {
    name: "GitHub",
    description: "Connect repositories and search your code.",
    icon: "GH",
    connected: false,
  },
  {
    name: "Slack",
    description: "Search messages and conversations from Slack.",
    icon: "S",
    connected: false,
  },
  {
    name: "Google Calendar",
    description: "Access your events and schedule.",
    icon: "C",
    connected: false,
  },
  {
    name: "Dropbox",
    description: "Search and access files stored in Dropbox.",
    icon: "D",
    connected: false,
  },
];

export default function Connectors() {
  return (
    <div className="min-h-full bg-white px-6 py-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Connectors
        </h1>

        <p className="mx-auto mt-2 max-w-xl text-lg text-gray-500">
          Connect your favorite apps and let EchoGPT work with your
          information.
        </p>
      </div>

      {/* Search + Add */}
      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search connectors..."
            className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700"
        >
          <Plus size={18} />
          Add Connector
        </button>
      </div>

      {/* Connected */}
      <div className="mx-auto mt-10 max-w-5xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Your Connectors
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage the apps connected to your EchoGPT account.
            </p>
          </div>

          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
            1 Connected
          </span>
        </div>

        {/* Connector Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {connectors.map((connector) => (
            <div
              key={connector.name}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-violet-200 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-lg font-bold text-gray-700 ring-1 ring-gray-100">
                  {connector.icon}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-gray-900">
                      {connector.name}
                    </h3>

                    {connector.connected && (
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-green-500"
                      />
                    )}
                  </div>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {connector.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    {connector.connected ? (
                      <span className="text-xs font-medium text-green-600">
                        Connected
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">
                        Not connected
                      </span>
                    )}

                    <button
                      type="button"
                      className={
                        connector.connected
                          ? "flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                          : "flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
                      }
                    >
                      {connector.connected ? (
                        <>
                          <Settings size={14} />
                          Manage
                        </>
                      ) : (
                        <>
                          <ExternalLink size={14} />
                          Connect
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-violet-100 bg-violet-50/60 p-5">
        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
            <ExternalLink size={17} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Bring your tools into EchoGPT
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Connect your everyday tools so EchoGPT can help you find,
              summarize, and work with information across your apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}