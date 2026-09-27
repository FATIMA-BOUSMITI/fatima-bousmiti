import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Experience</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl"></h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-xl">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
              </div>

              {item.summary && (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Résumé du stage</p>
                  <p className="mt-2 text-base leading-7 text-slate-700">{item.summary}</p>
                </div>
              )}

              {item.responsibilities && item.responsibilities.length > 0 && (
                <div className="mt-5">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Responsabilités</p>
                  <ul className="space-y-2 pl-5 text-base leading-7 text-slate-700">
                    {item.responsibilities.map((task) => (
                      <li key={task} className="list-disc">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.techStack && item.techStack.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-800 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
