
const certifications = [
  {
    title: 'ISTQB® Certified Tester – Foundation Level (CTFL)',
    issuer: 'ISTQB',
    platform: 'ISTQB',
    status: 'In Progress',
  },
  {
    title: 'Java SE 17 Developer',
    issuer: 'Oracle',
    platform: 'Oracle',
    status: 'In Progress',
  },
  {
    title: 'IT Fundamentals for Cybersecurity',
    issuer: 'IBM',
    platform: 'Coursera',
    date: 'September 2025',
    status: 'Completed',
    certificateUrl:
      'https://www.coursera.org/specializations/it-fundamentals-cybersecurity',
  },
  {
    title: 'API Validation with Postman',
    issuer: 'Cloud & DevOps Automation Expert',
    platform: 'Coursera',
    date: 'May 2026',
    status: 'Completed',
    certificateUrl: 'https://coursera.org/verify/AZA4KY01AZ6A',
  },
  {
    title: 'QA Process Optimization: Agile & Automated Testing',
    issuer: 'Coursera',
    platform: 'Coursera',
    date: 'April 2026',
    status: 'Completed',
    certificateUrl:
      'https://www.coursera.org/learn/qa-process-optimization-agile-automated-testing',
  },
  {
    title: 'Introduction to Selenium',
    issuer: 'Coursera',
    platform: 'Coursera',
    date: 'April 2026',
    status: 'Completed',
    certificateUrl:
      'https://www.coursera.org/account/accomplishments/verify/0JRFHKPDK58I',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Certifications
          </p>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Focused learning across quality assurance, secure development,
            and backend systems.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => {
            const isInProgress = cert.status === 'In Progress'

            return (
              <div
                key={cert.title}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between gap-3">

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
                      isInProgress
                        ? 'border-amber-200 bg-amber-50 text-amber-600'
                        : 'border-cyan-200 bg-cyan-50 text-cyan-700'
                    }`}
                  >
                    {isInProgress ? '⏳' : '🏆'}
                  </div>

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    {cert.platform}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {cert.title}
                </h3>

                <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  <p>{cert.issuer}</p>

                  {cert.date && (
                    <p>
                      {cert.platform} · {cert.date}
                    </p>
                  )}
                </div>

                <div className="mt-5">
                  {isInProgress ? (
                    <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                      ⏳ In Progress
                    </span>
                  ) : (
                    cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-slate-900 underline underline-offset-4 transition hover:text-cyan-700"
                      >
                        View Certificate →
                      </a>
                    )
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}