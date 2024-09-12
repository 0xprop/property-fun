import '../styles/globals.css'
import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Property Fun',
  description: 'Real estate in crypto is boring!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>{children}</body>
    </html>
  )
}
