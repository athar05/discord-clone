import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from '@/lib/utils'

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
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className,
					"bg-white dark:bg-[#313338]"
					)}>
				<ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-clone"
						disableTransitionOnChange
          >
					{children}
					</ThemeProvider>
				</body>
      </html>
		</ClerkProvider>
  )
}
