'use client'

import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-50 to-violet-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Entre em Contato</span>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 animate-slide-up">
          Vamos Trabalhar Juntos
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl animate-fade-in-delay">
          Estou disponível para novos projetos e colaborações. Entre em contato!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 animate-fade-in-delay">
          {/* Email */}
          <a
            href="mailto:caio.batista97@outlook.com"
            className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Email</h3>
            <p className="text-blue-600 font-medium text-sm group-hover:text-blue-700 break-all">
              caio.batista97@outlook.com
            </p>
          </a>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/caiosilva97/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">LinkedIn</h3>
            <p className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
              /in/caiosilva97
            </p>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/CaioSilva23"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">GitHub</h3>
            <p className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
              /CaioSilva23
            </p>
          </Link>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto text-center shadow-2xl animate-fade-in-delay-2">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Pronto para começar um projeto?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Construo software escalável, sustentável e orientado a negócio. Vamos conversar sobre seu próximo projeto!
          </p>
          <a
            href="mailto:caio.batista97@outlook.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Enviar Mensagem
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Caio Batista. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
