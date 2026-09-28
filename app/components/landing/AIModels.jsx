import {
  Sparkles,
  MessageSquare,
  Brain,
  Code2,
  Image,
  ArrowRight,
} from "lucide-react";

export default function AIModels() {
  const models = [
    {
      name: "GPT",
      description: "Advanced reasoning and natural conversations.",
      icon: Brain,
    },
    {
      name: "Claude",
      description: "Thoughtful answers and long-form writing.",
      icon: MessageSquare,
    },
    {
      name: "Gemini",
      description: "Multimodal intelligence for modern workflows.",
      icon: Sparkles,
    },
    {
      name: "Coding AI",
      description: "Build, debug and understand code faster.",
      icon: Code2,
    },
    {
      name: "Image AI",
      description: "Turn your ideas into creative visuals.",
      icon: Image,
    },
  ];

  return (
    <section
      id="models"
      className="bg-gray-50 px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-semibold text-violet-600 shadow-sm">
            <Sparkles size={15} />
            AI Models
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            One workspace.
            <span className="text-violet-600"> Multiple AI models.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Choose the right AI model for your task without switching between
            different platforms.
          </p>
        </div>

        {/* Models Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {models.map((model) => {
            const Icon = model.icon;

            return (
              <div
                key={model.name}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {model.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {model.description}
                </p>

                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-violet-600 opacity-0 transition group-hover:opacity-100">
                  Explore
                  <ArrowRight size={15} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Compare responses, switch models and find the right AI for every
            task.
          </p>
        </div>
      </div>
    </section>
  );
}