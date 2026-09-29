import { ImageIcon, ChevronDown } from "lucide-react";

const RATIOS = ["16:9", "9:16", "1:1"];

export default function VideoStudio() {
  return (
    <div className="min-h-full bg-white px-6 py-10">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Video Studio
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          Just type what you imagine, and the video makes itself.
        </p>
      </div>

      {/* Prompt Card */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white">
        <div className="px-6 pt-5">
          <p className="text-[15px] text-gray-500">
            Describe your video…
          </p>
        </div>

        {/* Text Area Space */}
        <div className="h-24" />

        <div className="px-6">
          {/* First Frame */}
          <p className="text-sm text-gray-700">
            First Frame
          </p>

          <button
            type="button"
            className="mt-2 flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-gray-300 text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <ImageIcon size={18} />

            <span className="text-[11px]">
              Upload
            </span>
          </button>

          {/* Aspect Ratio */}
          <p className="mt-5 text-sm text-gray-700">
            Aspect ratio
          </p>

          <div className="mt-2 flex w-fit items-center gap-1 rounded-full border border-gray-200 px-1 py-1">
            {RATIOS.map((ratio) => (
              <button
                key={ratio}
                type="button"
                className={
                  ratio === "16:9"
                    ? "flex h-8 items-center justify-center rounded-full bg-violet-600 px-4 text-sm font-semibold text-white"
                    : "flex h-8 items-center justify-center rounded-full px-4 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                }
              >
                {ratio}
              </button>
            ))}
          </div>

          {/* Model + Generate */}
          <div className="mt-5 flex items-center justify-between pb-5">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-800 transition hover:bg-gray-50"
            >
              Veo 3.1 fast

              <ChevronDown
                size={16}
                className="text-gray-500"
              />
            </button>

            <button
              type="button"
              className="rounded-xl bg-violet-600 px-6 py-2.5 font-semibold text-white shadow-md shadow-violet-300/50 transition hover:bg-violet-700"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Paid Feature Notice */}
        <div className="border-t border-gray-200 px-6 py-3">
          <p className="text-sm text-gray-500">
            Video generation is a paid feature — upgrade to start creating
            videos.
          </p>
        </div>
      </div>

      {/* Info */}
      <p className="mt-4 text-center text-sm text-gray-500">
        Each video uses one message from your plan and takes a few minutes
        to render.
      </p>

      {/* Creations */}
      <div className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-lg font-semibold text-gray-900">
          Your creations
        </h2>

        <div className="mt-10 text-center text-[15px] text-gray-500">
          Nothing here yet — describe an image above to get started.
        </div>
      </div>
    </div>
  );
}