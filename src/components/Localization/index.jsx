'use client'

import * as S from './styles'

export const Localization = () => {
    return (
        <S.Container>
            <S.Title>
                <h1>Aguardamos a sua visita!</h1>
            </S.Title>
            <S.LocazationContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11240.60792916824!2d-42.790546738471946!3d-5.078606147810807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39fa13760fb5%3A0x81769cc548a20b47!2sTeresina%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1676325755387!5m2!1spt-BR!2sbr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </S.LocazationContainer>
        </S.Container>
    )
}
