import './globals.scss'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About',
  description: 'My personal app',
}

export default function NextLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
      <>
      <Header />
      {children}
        </>
  )
        
}
