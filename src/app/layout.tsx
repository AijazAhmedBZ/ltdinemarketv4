import Header from '@/components/layout/Header'
import './globals.css'
import { Sora } from 'next/font/google'
import Providers from '@/components/Provider'

const inter = Sora({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="px-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}