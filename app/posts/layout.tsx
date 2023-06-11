import { Inter } from 'next/font/google'
import './globals.scss';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Posts',
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
