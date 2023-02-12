
import { About } from '@/components/About'
import { Header } from '@/components/Header'
import { Services } from '@/components/Services'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
    </>
  )
}
