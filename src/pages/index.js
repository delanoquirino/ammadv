
import { About } from '@/components/About'

import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Localization } from '@/components/Localization'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <Team/>
      <Localization/>
      <Contact />
      
    </>
  )
}
