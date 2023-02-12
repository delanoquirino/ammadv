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
                    alt="logo"
                />
                <S.Content>
                    <h2>Amorin, Madeira & Moura</h2>
                    <p>Amorin, Madeira & Moura é um escritório que surgiu a partir do ideal de alguns profissionais jovens, que acreditavam no trabalho como o responsável pelo desenvolvimento social e buscavam promover a existência das relações justas.
                    </p>
                    <p><span>Endereço:</span> Av. Mal. Mascarenhas de Moraes, 1927 - Bento Ferreira, Vitória - ES, 29050-945</p>
                    <p><span>Atendimento:</span> Atendimento de segunda à sexta de 08:00 ás 18:00. Aos sábados de 08:00 às 12:00</p>
                    <p><span>WhatsApp:</span> (33) 3333-3333</p>
                    <p><span>Telefone:</span> (33) 3333-3331</p>
                </S.Content>
            </S.AboutContainer>
        </S.Container>
    )
}
