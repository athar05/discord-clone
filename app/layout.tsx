import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Clone',
  description: 'A discord clone where you can chat with your friends, create severs, have audio/video calls and more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
		</ClerkProvider>
  )
}
