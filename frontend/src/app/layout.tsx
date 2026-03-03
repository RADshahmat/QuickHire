import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Inter, Epilogue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-epilogue',
})

const clash = localFont({
  src: [
    { path: '../fonts/ClashDisplay-Regular.otf', weight: '400' },
    { path: '../fonts/ClashDisplay-Semibold.otf', weight: '600' },
    { path: '../fonts/ClashDisplay-Bold.otf', weight: '700' },
  ],
  variable: '--font-clash',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${epilogue.variable}
          ${inter.variable}
          
          ${clash.variable}
          
          antialiased
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}