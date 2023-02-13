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
                        <p>Processo por meio do qual a Administração Pública contrata obras, serviços, compras e alienações</p>
                    </S.Card>


                    <S.Card>
                        <div><MdPublic /></div>
                        <h3>Direito Público</h3>
                        <p>Conjunto das normas jurídicas de natureza pública, compreendendo tanto a regularização em relação entre o particular e o Estado, como as atividades, as funções e organizações dos poderes do Estado.</p>
                    </S.Card>


                    <S.Card>
                        <div><GiInjustice /></div>
                        <h3>Direito Eleitoral</h3>
                        <p>O direito eleitoral é um conjunto de normas que visa dar transparência e seriedade a todo o processo de eleição, envolvendo eleitores, candidatos e ferramentas usadas no processo.

                        </p>
                    </S.Card>
                </S.Content>
            </S.Container>
        </S.Services>
    )
}
