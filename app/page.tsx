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
            We are a team of developers who enjoy building websites and learning
            new technologies.
          </p>

          <a
            href="#team"
            className="mt-7 inline-block rounded-md bg-black px-5 py-2.5 text-sm text-white hover:bg-zinc-800"
          >
            Meet the Team
          </a>
        </div>
      </section>
    </main>
  );
}
