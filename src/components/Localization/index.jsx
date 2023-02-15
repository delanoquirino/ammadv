'use client'

import * as S from './styles'

export const Localization = () => {
    return (
        <S.Container>
            <S.Title>
                <h1>Aguardamos a sua visita!</h1>
            </S.Title>
            <S.LocazationContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.199732457424!2d-42.80042646639542!3d-5.067639490844552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e399749399483%3A0x37358ba0fcbfe92d!2sR.%20Ribamar%20Pacheco%2C%202469%20-%20F%C3%A1tima%2C%20Teresina%20-%20PI%2C%2064049-546!5e0!3m2!1spt-BR!2sbr!4v1676339408198!5m2!1spt-BR!2sbr" width="100%" height="650" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </S.LocazationContainer>
        </S.Container>
    )
}
