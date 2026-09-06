const teamMembers = [
  {
    name: "Aryan Singh",
    role: "Project Lead & Developer",
    description:
      "Leads the project and works on developing the core features of DevPortfolio.",
    initials: "AS",
  },
  {
    name: "Raunak Kumar Rao",
    role: "Developer",
    description:
      "Works on building features and creating a clean and responsive user experience.",
    initials: "RR",
  },
  {
    name: "Hardik",
    role: "Developer & CI/CD / Integration",
    description:
      "Works on development, integration, and CI/CD activities for the project.",
    initials: "H",
  },
];

export default function TeamProfiles() {
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
            Meet the three developers behind DevPortfolio and learn about
            their roles in the project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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

              <p className="mt-5 text-sm leading- 6 text-zinc-600">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}