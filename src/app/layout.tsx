import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'
import DemoModal from '@/components/DemoModal'

export const metadata: Metadata = {
  title: 'Trushti Solutions — Software Products & IT Services',
  description: 'Trushti Solutions builds Trushti POS and Trushti Desktime.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <ClientScripts />
        <DemoModal />
      </body>
    </html>
  )
}
