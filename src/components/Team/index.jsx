"use client"

import Image from 'next/image'
import * as S from './styles'

import avatar1 from '/public/images/avatar1.png'
import avatar2 from '/public/images/avatar2.png'
import arthur from '/public/images/arthur.jpg'

export const Team = () => {

  const cards = [

    {
      img: arthur,
      name: "Arthur Lincoln Amorim",
      id: "OAB 123/456",
      expert: "Direito Público"
    },
    {
      img: avatar1,
      name: "João Ferreira",
      id: "OAB 123/456",
      expert: "Direito Eleitoral"
    },
    {
      img: avatar2,
      name: "Mariane Ferreira",
      id: "OAB 123/456",
      expert: "Direito Público"
    },



  ]


  return (
    <S.Team id='team'>
      <S.Container >
        <S.Title>
          <h1>Equipe</h1>
        </S.Title>
        <S.Content>
          {cards.map(({ img, name, id, expert }) => (

            <S.Card>
              <Image
                src={img}
                height={200}
                width={200}
                alt="foto Joao ferreira"

              />
              <h3>{name}</h3>
              <p>{id}</p>
              <p>Especialista: {expert}</p>
            </S.Card>
          ))}
        </S.Content>
      </S.Container>
    </S.Team>
  )
}
