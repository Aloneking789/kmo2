import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KMO',
  description: 'Made by Elite with ❤️',
  generator: 'Elite',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
