export default function WelcomeSection() {
  return (
    <section className="px-5 pb-6 pt-8 text-center sm:pt-14 lg:pt-10">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Hello There! <span aria-hidden="true">👋</span>
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
        Your personal AI assistant is ready to help — ask me anything,
        anytime.
      </p>
    </section>
  );
}