import { FooterSection } from '@/components/sections/footer-section'
import { Navbar } from '@/components/sections/navbar'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'shogoworks | Web開発 × AI エンジニア',
  description: '田中省伍（shogoworks）- Webアプリケーション開発とAI技術指導・AI導入支援を専門とするフリーランスエンジニア。企業・個人向けにAI活用セミナーやレッスンも開催中。',
  generator: 'shogoworks',
  icons: {
    icon: '/assets/images/favicon.png',
  },
  openGraph: {
    title: 'shogoworks | Web開発 × AI エンジニア',
    description: 'Webアプリケーション開発とAI技術指導・AI導入支援を専門とするフリーランスエンジニア',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <FooterSection />
        </div>
      </body>
    </html>
  )
}
