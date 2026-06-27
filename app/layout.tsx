import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VS Code Portfolio',
  description: 'A personal portfolio built inside a VS Code-inspired UI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
