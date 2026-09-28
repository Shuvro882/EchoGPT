import { ChevronDown, Sparkles } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is EchoGPT?",
      answer:
        "EchoGPT is an AI workspace concept that brings conversations, AI models and productivity tools together in one place.",
    },
    {
      question: "Can I use different AI models?",
      answer:
        "Yes. The workspace is designed to let users choose different AI capabilities depending on the task they are working on.",
    },
    {
      question: "Can I compare AI responses?",
      answer:
        "EchoGPT can provide a comparison workflow so you can review different AI responses and choose the one that works best for your task.",
    },
    {
      question: "Is EchoGPT free to use?",
      answer:
        "The landing page includes Free, Pro and Team pricing concepts. Actual pricing and usage limits depend on the final product offering.",
    },
    {
      question: "Can I use EchoGPT for work and study?",
      answer:
        "Yes. The workspace can be used for research, writing, brainstorming, coding, learning and many other everyday tasks.",
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-semibold text-violet-600 shadow-sm">
            <Sparkles size={15} />
            FAQ
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Questions?
            <span className="text-violet-600"> We have answers.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Everything you need to know before getting started with EchoGPT.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-2xl border border-gray-200 bg-white transition hover:border-violet-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left font-semibold text-gray-900">
                <span>{faq.question}</span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition group-open:rotate-180 group-open:bg-violet-50 group-open:text-violet-600">
                  <ChevronDown size={17} />
                </span>
              </summary>

              <div className="px-6 pb-5">
                <p className="max-w-3xl text-sm leading-7 text-gray-500">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}