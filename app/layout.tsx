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
    <html lang="ja" className="dark scroll-smooth">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
