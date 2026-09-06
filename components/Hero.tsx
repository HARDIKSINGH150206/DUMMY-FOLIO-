export default function Hero() {
  return (
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
  );
}
