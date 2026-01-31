'use client'

export default function Certifications() {
  const certifications = [
    { name: 'Python', icon: '🐍' },
    { name: 'Django e Django Rest Framework', icon: '🎸' },
    { name: 'Full JavaScript', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Fundamentos de Data Science e IA', icon: '🤖' },
    { name: 'Redes Neurais Artificiais em Python', icon: '🧠' },
    { name: 'Gestão Ágil de Projetos', icon: '🚀' },
  ]

  return (
    <section id="certifications" className="relative py-20 sm:py-28 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Aprendizado</span>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 animate-slide-up">
          Certificações
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl animate-fade-in-delay">
          Investimento contínuo em aprendizado e desenvolvimento profissional
        </p>

        {/* Certifications Grid */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm animate-fade-in-delay">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-slate-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                  {cert.icon}
                </div>
                <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors text-sm">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
