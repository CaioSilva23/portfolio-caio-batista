'use client'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Sobre Mim</span>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 max-w-3xl animate-slide-up">
          Transformando ideias em
          <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mt-2">
            soluções tecnológicas
          </span>
        </h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-delay">
            <p className="text-lg text-slate-600 leading-relaxed">
              Sou desenvolvedor <strong className="text-slate-900 font-semibold">Full Stack Sênior</strong> com mais de <strong className="text-slate-900 font-semibold">6 anos de experiência</strong>, especializado em <strong className="text-slate-900 font-semibold">Python</strong>, <strong className="text-slate-900 font-semibold">arquitetura de microsserviços</strong> e <strong className="text-slate-900 font-semibold">ambientes cloud (AWS)</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Possuo <strong className="text-slate-900 font-semibold">MBA em Engenharia de Software pela USP/ESALQ</strong>, com foco em Liderança, Arquitetura de Software, DevOps, Qualidade e Segurança da Informação e Métodos Ágeis.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Atuei em projetos corporativos de grande escala, modernização de sistemas legados e soluções orientadas a dados e performance.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-delay-2">
            {/* Highlight Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">6+ Anos</h3>
              <p className="text-slate-600 text-sm">De experiência em desenvolvimento</p>
            </div>

            {/* Highlight Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">MBA</h3>
              <p className="text-slate-600 text-sm">Eng. de Software USP/ESALQ</p>
            </div>

            {/* Highlight Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Petrobras</h3>
              <p className="text-slate-600 text-sm">Experiência corporativa</p>
            </div>

            {/* Highlight Card 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cloud AWS</h3>
              <p className="text-slate-600 text-sm">Arquitetura escalável</p>
            </div>
          </div>
        </div>

        {/* MBA Badge - Redesigned */}
        <div className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200 animate-fade-in-delay-2">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-1">MBA em Engenharia de Software</h3>
              <p className="text-slate-600">Universidade de São Paulo (USP) / ESALQ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
