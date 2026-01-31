import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caio Batista - Desenvolvedor Full Stack Sênior | Python, AWS & Microsserviços',
  description: 'Desenvolvedor Full Stack Sênior com mais de 6 anos de experiência, especializado em Python, arquitetura de microsserviços e ambientes cloud (AWS). MBA em Engenharia de Software pela USP/ESALQ.',
  keywords: ['Desenvolvedor Python', 'Full Stack', 'AWS', 'Microsserviços', 'Django', 'FastAPI', 'React', 'Next.js', 'TypeScript', 'Backend Sênior'],
  authors: [{ name: 'Caio Batista' }],
  creator: 'Caio Batista',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.svg',
  },
  themeColor: '#0F172A',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://caiosilva.dev',
    title: 'Caio Batista - Desenvolvedor Full Stack Sênior',
    description: 'Desenvolvedor Full Stack Sênior com mais de 6 anos de experiência, especializado em Python, arquitetura de microsserviços e ambientes cloud (AWS).',
    siteName: 'Caio Batista Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caio Batista - Desenvolvedor Full Stack Sênior',
    description: 'Desenvolvedor Full Stack Sênior com mais de 6 anos de experiência em Python, AWS e Microsserviços.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



