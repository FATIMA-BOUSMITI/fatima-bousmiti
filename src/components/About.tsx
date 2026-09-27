export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">About me</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Developer with a strong foundation in mobile, backend, and QA.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-[0_0_25px_rgba(15,23,42,0.04)] backdrop-blur-xl">
            <p className="text-base leading-8 text-slate-700">
              I am a 5th-year Computer Engineering student at ENSA Safi, Morocco, with a strong interest in software testing, quality assurance, API validation, mobile development, and backend engineering.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              My profile is increasingly oriented toward QA and testing, with a focus on functional testing, regression testing, REST API testing, and delivering reliable digital products with secure architecture.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Mobile Developer', 'Building cross-platform and native-ready mobile experiences'],
              ['QA Tester', 'Functional, regression, and API testing with structured quality checks'],
              ['Backend Developer', 'Working with Java, Spring Boot, Django, and REST APIs'],
              ['Security', 'JWT, Spring Security, and OWASP-focused secure development mindset'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white/80 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-700">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
