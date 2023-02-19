import * as S from './styles'

import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

export const InfoContact = () => {
    return (
        <S.Icons>
            <S.IconsContainer>
                <GoLocation />
                <p>Teresina/PI: Rua Ribamar Pacheco, n° 2469, bairro de Fátima</p>
            </S.IconsContainer>
            <S.IconsContainer>
                <FaWhatsapp />
                <p>(86) 3305-6632</p>
            </S.IconsContainer>
            <S.IconsContainer>
                <AiOutlineMail />
                <p>amm.advogados@hotmail.com</p>
            </S.IconsContainer>
        </S.Icons>
    )
}
