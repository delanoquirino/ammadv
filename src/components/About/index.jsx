"use client"

import Image from 'next/image'

import bussiness from '../../../public/images/bussiness.jpg'

import * as S from './styles'

export const About = () => {
    return (
        <S.Container id='about'>
            <S.AboutContainer>
                <Image
                    src={bussiness}
                    height="auto"
                    width={500}
                    alt="bussiness"
                />
                <S.Content>
                    <h2>Amorim, Moura & Martins</h2>
                    <p>Amorim, Moura & Martins é um escritório que surgiu a partir do ideal de alguns profissionais jovens, que acreditavam no trabalho como o responsável pelo desenvolvimento social e buscavam promover a existência das relações justas.
                    </p>
                    <p><span>Endereço:</span> Teresina/PI: Rua Ribamar Pacheco, n° 2469, bairro de Fátima</p>
                    <p><span>Atendimento:</span> Atendimento de segunda à sexta de 08:00 ás 18:00. Aos sábados de 08:00 às 12:00</p>
                    <p><span>Telefone:</span> (86) 3305-6632</p>
                </S.Content>
            </S.AboutContainer>
        </S.Container>
    )
}
