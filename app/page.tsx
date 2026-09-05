const teamMembers = [
  {
    name: "Aryan Singh",
    role: "Project Lead & Developer",
    initials: "AS",
    description:
      "Leads the project and works on the core development and implementation of DevPortfolio.",
  },
  {
    name: "Raunak Kumar Rao",
    role: "Developer",
    initials: "RK",
    description:
      "Works on developing project features and contributes to the overall implementation of the portfolio.",
  },
  {
    name: "Hardik",
    role: "Developer & CI/CD Integration",
    initials: "H",
    description:
      "Works on development, integration, and CI/CD workflow for the project.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 md:px-12">
        <a href="#" className="text-xl font-bold">
          DevPortfolio
        </a>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-zinc-500">
            Home
          </a>
          <a href="#team" className="hover:text-zinc-500">
            Team
          </a>
          <a href="#skills" className="hover:text-zinc-500">
            Skills
          </a>
          <a href="#contact" className="hover:text-zinc-500">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-[70vh] items-center justify-center px-6"
      >
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Hi, we are DevPortfolio
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            We are a team of developers who enjoy building websites and
            learning new technologies.
          </p>

          <a
            href="#team"
            className="mt-7 inline-block rounded-md bg-black px-5 py-2.5 text-sm text-white hover:bg-zinc-800"
          >
            Meet the Team
          </a>
        </div>
      </section>

      {/* DEV-12: Team Profiles */}
      <section
        id="team"
        className="border-t border-zinc-200 bg-zinc-50 px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Our Team
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Meet the Developers
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              Get to know the developers behind DevPortfolio and their roles
              in building the project.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Avatar */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-xl font-bold text-white">
                  {member.initials}
                </div>

                {/* Name */}
                <h3 className="mt-6 text-xl font-bold">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm font-medium text-zinc-500">
                  {member.role}
                </p>

                <div className="my-5 h-px bg-zinc-200" />

                {/* Description */}
                <p className="text-sm leading-6 text-zinc-600">
                  {member.description}
                </p>

                {/* Status */}
                <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Team Member
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}