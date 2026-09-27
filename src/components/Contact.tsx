export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-8 shadow-[0_0_30px_rgba(59,130,246,0.06)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl"></h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-700">
                I am open to internships, PFE opportunities, junior developer roles, and QA-focused positions where I can contribute, learn, and grow with a strong development team.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl">
              <div className="space-y-4 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{' '}
                  <a href="mailto:fatimabousmiti9@gmail.com" className="text-slate-700 hover:text-slate-900">
                    fatimabousmiti9@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">LinkedIn:</span>{' '}
                  <a href="https://www.linkedin.com/in/fatima-bousmiti-a845292a7" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">
                    linkedin.com/in/fatima-bousmiti
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">GitHub:</span>{' '}
                  <a href="https://github.com/FATIMA-BOUSMITI" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">
                    github.com/FATIMA-BOUSMITI

                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
