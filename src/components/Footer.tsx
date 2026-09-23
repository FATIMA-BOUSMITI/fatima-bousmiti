export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:px-8">
        <p>© 2026 Fatima Bousmiti</p>
        <div className="flex items-center gap-5">
          <a href="#about" className="transition hover:text-cyan-700">About</a>
          <a href="#projects" className="transition hover:text-cyan-700">Projects</a>
          <a href="#contact" className="transition hover:text-cyan-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}
