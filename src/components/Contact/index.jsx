'use client'

import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import * as S from './styles'
import { InfoContact } from '../InfoContact'

export const Contact = () => {
    return (
        <S.Container>

            <S.ContactContainer id='contact'>

                <S.Content>
                    <p>Escritorio</p>
                    <h1>Contato</h1>

                    <InfoContact />

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
