'use client'

export default function Education() {
  const education = [
    {
      degree: 'MBA em Engenharia de Software',
      institution: 'USP / ESALQ',
      period: '04/2024 – 12/2025',
      icon: '🎓',
      gradient: 'from-blue-500 to-cyan-500',
      topics: [
        'Liderança',
        'Arquitetura de Software',
        'DevOps',
        'Qualidade e Segurança da Informação',
        'Métodos Ágeis',
      ],
    },
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'UNICARIOCA',
      period: '01/2019 – 12/2021',
      icon: '💻',
      gradient: 'from-violet-500 to-purple-500',
      topics: [],
    },
  ]

  return (
    <section id="education" className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Educação</span>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 animate-slide-up">
          Formação Acadêmica
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl animate-fade-in-delay">
          Formação sólida com foco em excelência técnica e liderança
        </p>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl animate-fade-in-delay">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-base font-semibold text-blue-600 mb-3">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>
              </div>

              {edu.topics.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Áreas de Foco:</h4>
                  <ul className="space-y-2">
                    {edu.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3 text-slate-600">
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
