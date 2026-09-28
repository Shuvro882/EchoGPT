const suggestions = [
  {
    title: "Unlock Your Creative Flow",
    description:
      "Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas.",
  },
  {
    title: "Build a Resume That Shines",
    description:
      "Craft a resume tailored to highlight your experience and match the job you want, designed to grab the recruiter's attention.",
  },
  {
    title: "Set a Challenge That Transforms You",
    description:
      "Create a personalized challenge based on your goals and interests to help you build lasting habits.",
  },
  {
    title: "Write Irresistible Social Content",
    description:
      "Generate catchy, clever captions for your photos or posts that get more likes and shares.",
  },
];

export default function SuggestionCards() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 pb-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.title}
            className="group rounded-2xl border border-violet-100 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            <h3 className="text-sm font-semibold text-gray-900 transition group-hover:text-violet-600">
              {suggestion.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {suggestion.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}