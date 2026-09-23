import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Projects</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Selected work combining product thinking, code quality, and real-world functionality.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 shadow-[0_0_25px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-cyan-300"
            >
              <div className={`h-40 bg-gradient-to-br ${project.accent}`} />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-slate-900">{project.name}</h3>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-700">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Main features</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-700">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
