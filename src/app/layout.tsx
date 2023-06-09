import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Daedalus Institute',
  description: 'Research and development to advance the technology of humanity',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className='flex min-h-screen w-full flex-col items-center justify-between'>

        <Header />
        
        <div className="pt-24 container mx-auto flex justify-center items-center">
          {children}
        </div>

        <Footer />

        <Analytics />
      
      </body>
    </html>
  )
}
