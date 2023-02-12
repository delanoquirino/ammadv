import * as S from './styles'
import { FaFileContract } from 'react-icons/fa';
import { MdPublic } from 'react-icons/md';
import { GiInjustice } from 'react-icons/gi';

export const Services = () => {
    return (
        <S.Services>
            <S.Container id='services'>
                <S.Title>
                    <h1>Áreas de Atuação</h1>
                </S.Title>
                <S.Content>
                    <S.Card>
                        <div><FaFileContract /></div>
                        <h3>Licitações e Contratos</h3>
                        <p>Esta é uma breve descrição que elabora o serviço que você mencionou acima.</p>
                    </S.Card>


                    <S.Card>
                        <div><MdPublic /></div>
                        <h3>Direito Público</h3>
                        <p>Esta é uma breve descrição que elabora o serviço que você mencionou acima.</p>
                    </S.Card>


                    <S.Card>
                        <div><GiInjustice /></div>
                        <h3>Direito Eleitoral</h3>
                        <p>Esta é uma breve descrição que elabora o serviço que você mencionou acima.</p>
                    </S.Card>
                </S.Content>
            </S.Container>
        </S.Services>
    )
}
