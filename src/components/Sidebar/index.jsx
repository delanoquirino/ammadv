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
        <Link href="#services">Áreas de Atuação</Link>
        <Link href="#team">Equipe</Link>
        <Link href="#contact">Contato</Link>
      </S.Content>
      <S.Contact>
        <span>(86) 3305-6632</span>
        <S.Address>
          Teresina/PI: Rua Ribamar Pacheco, n° 2469, bairro de Fátima
        </S.Address>
      </S.Contact>
    </S.Container>
  )
}
