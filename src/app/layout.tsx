import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GravityCore Health',
  description: 'Modern healthcare management solution for patients and medical practitioners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}