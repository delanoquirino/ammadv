"use client"

import Image from 'next/image'
import * as S from './styles'
import logo from '/public/logo.png'
import { useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Sidebar } from '../Sidebar';



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
                            height={80}
                            width={80}
                            alt="logo"
                        />
                    </S.Logo>
                    <S.NavBar>
                        <AiOutlineMenuFold onClick={showSidebar} />
                        {sidebar && <Sidebar active={setSidebar} />}
                    </S.NavBar>
                </S.Navi>
                <S.MidiaSocial>
                    <span>
                        Compartilhe:
                    </span>
                    <S.Icons>
                        <FaWhatsapp />
                        <FaInstagram />
                        <FaFacebook />
                    </S.Icons>

                </S.MidiaSocial>
            </S.HeaderContainer>
        </S.Header>
    )
}
