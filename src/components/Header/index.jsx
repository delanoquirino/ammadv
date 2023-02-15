"use client"

import Image from 'next/image'
import * as S from './styles'
import logo from '/public/images/logoamm.png'
import { useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Sidebar } from '../Sidebar';
import Link from 'next/link';



export const Header = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <S.Header>
            <S.HeaderContainer>
                <S.Navi>
                    <S.Logo>
                        <Image
                            src={logo}
                            width={250}
                            alt="logo"
                        />
                    </S.Logo>

                    <S.NavBar>
                        <AiOutlineMenuFold onClick={showSidebar} />
                        {sidebar && <Sidebar active={setSidebar} />}
                    </S.NavBar>
                    <S.Content>
                        <Link href="#about">Sobre</Link>
                        <Link href="#services">Áreas de Atuação</Link>
                        <Link href="#team">Equipe</Link>
                        <Link href="#contact">Contato</Link>
                    </S.Content>
                </S.Navi>
            </S.HeaderContainer>
        </S.Header>
    )
}
