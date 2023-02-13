"use client"

import Image from 'next/image'
import * as S from './styles'

import avatar1 from '/public/images/avatar1.png'
import avatar2 from '/public/images/avatar2.png'
import avatar3 from '/public/images/avatar3.png'

export const Team = () => {
  return (
    <S.Team>
      <S.Container id='team'>
        <S.Title>
          <h1>Equipe</h1>
        </S.Title>
        <S.Content>
          <S.Card>

            <Image
              src={avatar1}
              height={200}
              width={200}
              alt="foto Joao ferreira"

            />

            <h3>Joao Ferreira</h3>
            <p>ADVOGADO - OAB 123/456</p>
            <p>Especialista em Direito Eleitoral</p>
          </S.Card>


          <S.Card>

            <Image
              src={avatar2}
              height={200}
              width={200}
              alt="foto mariane ferreira"

            />
            <h3>Mariane Ferreira</h3>
            <p>ADVOGADA - OAB 123/456</p>
            <p>Especialista em Direito Público</p>
          </S.Card>


          <S.Card>

            <Image
              src={avatar3}
              height={200}
              width={200}
              alt="foto maria ferreira"

            />
            <h3>Maria Ferreira</h3>
            <p>ADVOGADA - OAB 123/456</p>
            <p>Especialista em Licitações</p>
          </S.Card>
        </S.Content>
      </S.Container>
    </S.Team>
  )
}
