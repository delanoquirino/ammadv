'use client'

import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import * as S from './styles'

export const Contact = () => {
    return (
        <S.Container>

            <S.ContactContainer id='contact'>

                <S.Content>
                    <p>Escritorio</p>
                    <h1>Contato</h1>

                    <S.Icons>
                        <S.IconsContainer>
                            <GoLocation />
                            <p>Teresina/PI: Rua Ribamar Pacheco, n° 2469, bairro de Fátima

                            </p>
                        </S.IconsContainer>
                        <S.IconsContainer>
                            <FaWhatsapp />
                            <p>
                                (86) 3305-6632
                            </p>
                        </S.IconsContainer>
                        <S.IconsContainer>
                            <AiOutlineMail />
                            <p>amm.advogados@hotmail.com</p>
                        </S.IconsContainer>
                    </S.Icons>

                </S.Content>
                <S.Form>
                    <h1>Fale Conosco</h1>
                    <input type="text" placeholder='Nome Completo' />
                    <input type="text" placeholder='Email' />
                    <textarea name="" id="" rows="10"></textarea>
                    <button>Enviar</button>
                </S.Form>
            </S.ContactContainer>


        </S.Container>
    )
}
