'use client'

export default function TechStack() {
  const categories = [
    {
      title: 'Backend',
      icon: '⚙️',
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        'Python (Django, Flask, FastAPI)',
        'APIs REST, Microserviços',
        'PostgreSQL, MySQL',
        'Celery, RabbitMQ, Redis',
      ],
    },
    {
      title: 'Frontend',
      icon: '🎨',
      gradient: 'from-violet-500 to-purple-500',
      items: [
        'TypeScript, JavaScript',
        'React.js, Next.js',
        'Vue.js',
        'Material UI',
      ],
    },
    {
      title: 'Cloud & Infra',
      icon: '☁️',
      gradient: 'from-emerald-500 to-teal-500',
      items: [
        'AWS (EC2, S3, SQS, RDS, API Gateway)',
        'Docker, Kubernetes',
        'CI/CD, Jenkins, Github Actions',
        'Git, GitHub',
      ],
    },
    {
      title: 'Arquitetura & Boas Práticas',
      icon: '🏗️',
      gradient: 'from-orange-500 to-red-500',
      items: [
        'Microsserviços',
        'Clean Architecture',
        'SOLID',
        'Testes unitários (Jest)',
        'Sistemas Distribuídos',
      ],
    },
  ]

  return (
    <section id="tech" className="relative py-20 sm:py-28 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Tecnologias</span>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 animate-slide-up">
          Stack Técnica
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl animate-fade-in-delay">
          Tecnologias e ferramentas que utilizo para construir soluções robustas e escaláveis
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-fade-in-delay">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-slate-300 to-transparent rounded-full" />
                </div>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-slate-600 group/item"
                  >
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover/item:text-slate-900 transition-colors font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
