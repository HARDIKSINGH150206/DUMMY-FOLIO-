const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Jira",
  "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Technical Skills
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Our Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Technologies and tools used by our team to build and manage
            DevPortfolio.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-zinc-200 bg-white px-6 py-4 text-sm font-medium text-zinc-800 shadow-sm transition-shadow hover:shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
