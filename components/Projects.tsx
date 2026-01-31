'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Plataforma de Microsserviços com Mensageria',
      icon: '🔹',
      gradient: 'from-blue-500 to-cyan-500',
      description: [
        'Arquitetura baseada em RabbitMQ',
        'Comunicação assíncrona entre serviços',
        'Stack: Python, FastAPI, Docker',
      ],
      link: '#',
      linkText: 'Em breve no GitHub',
    },
    {
      title: 'API Gateway com AWS',
      icon: '🔹',
      gradient: 'from-violet-500 to-purple-500',
      description: [
        'Orquestração de serviços backend',
        'Integração com AWS API Gateway + ECS',
        'Foco em segurança e escalabilidade',
      ],
    },
    {
      title: 'Aplicação com IA e RAG',
      icon: '🔹',
      gradient: 'from-emerald-500 to-teal-500',
      description: [
        'Uso de IA generativa com Retrieval-Augmented Generation',
        'Correlação de eventos e histórico de dados',
        'Aplicação prática em cenários corporativos',
      ],
    },
  ]

  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Portfólio</span>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 animate-slide-up">
          Projetos em Destaque
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl animate-fade-in-delay">
          Alguns projetos representativos do meu perfil técnico e experiência
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-delay">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 card-hover flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                {project.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {project.title}
              </h3>

              <ul className="space-y-3 mb-6 flex-1">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group/link"
                >
                  <span>{project.linkText}</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
