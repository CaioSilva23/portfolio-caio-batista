'use client'

export default function Experience() {
  const experiences = [
    {
      company: 'Compass UOL',
      role: 'Desenvolvedor Backend Sênior',
      location: 'São Paulo – SP',
      period: '10/2025 – Atual',
      icon: '🚀',
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        'Atuação em projeto de modernização de sistema corporativo legado',
        'Migração de monólito em Delphi 7 + Oracle PL/SQL para arquitetura de microsserviços',
        'Stack: Python, FastAPI, Next.js e AWS',
        'Participação ativa em decisões arquiteturais e estratégias de migração',
      ],
    },
    {
      company: 'Morning Star (Petrobras)',
      role: 'Analista de Sistemas Sênior',
      location: 'Rio de Janeiro – RJ',
      period: '10/2024 – 10/2025',
      icon: '🛢️',
      gradient: 'from-violet-500 to-purple-500',
      items: [
        'Desenvolvimento de soluções para análise e otimização de perfuração de poços petrolíferos',
        'Integração de dados corporativos com algoritmos de Machine Learning',
        'Tecnologias: Python, Django, TypeScript, Vue.js, RabbitMQ, PostgreSQL, Redis, Kubernetes e AWS',
        'Liderança técnica na organização de projetos, documentação e processos do time',
      ],
    },
    {
      company: 'Fattureweb',
      role: 'Desenvolvedor Full Stack',
      location: 'São Paulo – SP',
      period: '06/2023 – 10/2024',
      icon: '⚡',
      gradient: 'from-emerald-500 to-teal-500',
      items: [
        'Desenvolvimento de aplicações para gestão de faturas de energia elétrica, água e esgoto',
        'Foco em performance, escalabilidade e confiabilidade',
        'Stack: Python (Tornado, Django), React.js, TypeScript, Celery, RabbitMQ, PostgreSQL, Docker e AWS',
        'Manutenção e evolução contínua de serviços críticos',
      ],
    },
    {
      company: 'Exército Brasileiro',
      role: 'Cabo',
      location: 'Rio de Janeiro – RJ',
      period: '03/2016 – 02/2024',
      icon: '🎖️',
      gradient: 'from-orange-500 to-red-500',
      items: [
        'Atuação no ciclo completo de desenvolvimento de software',
        'Desenvolvimento de sistemas para gestão de licitações e controle de empenhos',
        'Tecnologias: Python (Django, Flask), React.js, PostgreSQL e Docker',
        'Forte desenvolvimento de habilidades em liderança, organização e trabalho em equipe',
      ],
    },
  ]

  return (
    <section id="experience" className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Trajetória</span>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 animate-slide-up">
          Experiência Profissional
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl animate-fade-in-delay">
          Mais de 6 anos construindo soluções para empresas de diversos setores
        </p>

        {/* Timeline */}
        <div className="space-y-8 animate-fade-in-delay">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-px bg-gradient-to-b from-slate-200 to-transparent" />
              )}

              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.company}</h3>
                        <p className="text-lg font-semibold text-blue-600 mb-3">{exp.role}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-slate-600">
                          <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
