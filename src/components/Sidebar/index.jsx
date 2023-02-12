"use client"

import Link from 'next/link';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import * as S from './styles'

export const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <S.Container sidebar={active}>
      <AiOutlineMenuUnfold onClick={closeSidebar} />
      <S.Content>
        <Link href="#about">Sobre</Link>
        <Link href="/">Áreas de Atuação</Link>
        <Link href="/">Equipe</Link>
        <Link href="/">Contato</Link>
      </S.Content>
      <S.Contact>
        <span>(33) 3333-3331</span>
        <S.Address>
          Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200
        </S.Address>
      </S.Contact>
    </S.Container>
  )
}
