const teamMembers = [
  {
    name: "Aryan Singh",
    role: "Project Lead & Developer",
    skills: ["React", "HTML", "CSS", "Git", "GitHub"],
    file: "/resumes/aryan.pdf",
    initials: "AS",
  },
  {
    name: "Raunak Kumar Rao",
    role: "Developer",
    skills: ["Python", "C++", "C", "DSA", "Git", "GitHub"],
    file: "/resumes/raunak.pdf",
    initials: "RR",
  },
  {
    name: "Hardik Singh",
    role: "Developer & CI/CD / Integration",
    skills: ["TypeScript", "JavaScript", "NestJS", "PostgreSQL", "Docker"],
    file: "/resumes/hardik.pdf",
    initials: "HS",
  },
];

export default function Team() {
  return (
    <section id="team" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Our Team
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Meet the Developers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Meet the developers behind DevPortfolio, their skills, and
            technical background.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-zinc-200 bg-white p-7 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-lg font-bold text-zinc-800">
                {member.initials}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-zinc-900">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-zinc-500">
                {member.role}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={member.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
              >
                View Resume
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}