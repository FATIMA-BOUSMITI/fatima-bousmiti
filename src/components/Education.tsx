const education = [
  {
    title: 'ENSA Safi',
    school: 'Computer Engineering',
    description: '2024 – Present: Computer Engineering\n2022 – 2024: Preparatory Classes',
  },
  {
    title: 'Lycée Al-Khawarizmi',
    school: 'Baccalaureate in Mathematical Sciences B — Honors (Bien)',
    description: '2022',
  },
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Education</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Academic foundation in engineering and software development.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          {education.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.title === 'ENSA Safi' ? 'Academic' : 'High School'}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-lg text-slate-700">{item.school}</p>
              <p className="mt-4 max-w-3xl whitespace-pre-line text-base leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
