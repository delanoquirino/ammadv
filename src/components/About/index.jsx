"use client"

import Image from 'next/image'

import bussiness from '../../../public/images/bussiness.jpg'
import { InfoContact } from '../InfoContact'

import * as S from './styles'

export const About = () => {
    return (
        <S.Container id='about'>
            <S.AboutContainer>
                <Image
                    src={bussiness}
                    height={500}
                    width={600}
                    alt="bussiness"
                />
                <S.Content>
                    <h1>Amorim, Moura & Martins</h1>
                    <p>Amorim, Moura & Martins é um escritório que surgiu a partir do ideal de alguns profissionais jovens, que acreditavam no trabalho como o responsável pelo desenvolvimento social e buscavam promover a existência das relações justas.
                    </p>

                    <p><span>Atendimento:</span> Atendimento de segunda à sexta de 08:00 ás 18:00. Aos sábados de 08:00 às 12:00</p>

                    <InfoContact />
                </S.Content>
            </S.AboutContainer>
        </S.Container>
    )
}
