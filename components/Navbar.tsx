export default function Navbar() {
  return (
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
  );
}
