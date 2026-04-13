export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center sm:pt-32">
      <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
        Kyle Sit
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
        Software engineer building thoughtful, performant tools.
        Below are a few projects I'm proud of.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
        <a
          href="https://github.com/kyle-sit"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kyle-sit"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
        >
          LinkedIn
        </a>
        <a
          href="mailto:hello@example.com"
          className="rounded-md border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
        >
          Email
        </a>
      </div>
    </section>
  );
}
