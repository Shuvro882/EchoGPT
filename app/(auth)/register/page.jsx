
"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Mail, Sparkles } from "lucide-react";

function ProviderIcon({ name }) {
  if (name === "google") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M21.35 12.23c0-.79-.07-1.55-.22-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
        />
        <path
          fill="#34A853"
          d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.53A9.75 9.75 0 0 0 12 21.5Z"
        />
        <path
          fill="#FBBC05"
          d="M6.54 13.6A5.86 5.86 0 0 1 6.23 12c0-.56.11-1.1.31-1.6V7.87H3.29A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.13l3.25-2.53Z"
        />
        <path
          fill="#EA4335"
          d="M12 6.37c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.45 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.71 5.37l3.25 2.53C7.31 8.09 9.46 6.37 12 6.37Z"
        />
      </svg>
    );
  }

  if (name === "twitter") {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded bg-black text-[11px] font-bold text-white">
        X
      </span>
    );
  }

  if (name === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  return null;
}

const PROVIDERS = [
  {
    key: "email",
    label: "Sign up with email",
    icon: "email",
  },
  {
    key: "google",
    label: "Sign up with Google",
    icon: "google",
  },
  {
    key: "twitter",
    label: "Sign up with Twitter",
    icon: "twitter",
  },
  {
    key: "github",
    label: "Sign up with GitHub",
    icon: "github",
  },
];

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center px-4">

      {/* Back Button */}
      <button
        type="button"
        onClick={() => router.back()}
        className="absolute left-6 top-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-50"
        aria-label="Go back"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

        {/* Logo + Sign In */}
        <div className="flex flex-col items-center text-center">

          {/* EchoGPT Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
              <Sparkles size={21} />
            </div>

            <span className="text-xl font-bold tracking-tight text-gray-900">
              Echo<span className="text-violet-600">GPT</span>
            </span>
          </div>

          {/* Sign In Link */}
          <p className="mt-3 text-[15px] text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-violet-600 hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>

        {/* Register Providers */}
        <div className="mt-6 space-y-3">
          {PROVIDERS.map((provider) => (
            <button
              key={provider.key}
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 font-semibold text-gray-800 transition-all duration-200 hover:border-violet-600 hover:bg-violet-600 hover:text-white hover:shadow-md hover:shadow-violet-200"
            >
              {provider.icon === "email" ? (
                <Mail size={18} />
              ) : (
                <ProviderIcon name={provider.icon} />
              )}

              {provider.label}
            </button>
          ))}
        </div>

        {/* Updates Checkbox */}
        <label className="mt-6 flex cursor-pointer items-center justify-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded accent-violet-600"
          />

          <span>
            I want to receive updates about EchoGPT
          </span>
        </label>

        {/* Terms */}
        <p className="mt-3 text-center text-xs leading-5 text-gray-500">
          By proceeding, you agree to our{" "}
          <a
            href="#"
            className="underline hover:text-gray-700"
          >
            Terms of use.
          </a>{" "}
          Read our{" "}
          <a
            href="#"
            className="underline hover:text-gray-700"
          >
            Privacy Policy
          </a>
        </p>

      </div>
    </main>
  );
}