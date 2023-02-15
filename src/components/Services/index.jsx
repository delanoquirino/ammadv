import * as S from './styles'
import { FaFileContract } from 'react-icons/fa';
import { MdPublic } from 'react-icons/md';
import { GiInjustice } from 'react-icons/gi';

export const Services = () => {
    return (
        <S.Services id='services'>
            <S.Container >
                <S.Title>
                    <h1>Áreas de Atuação</h1>
                </S.Title>
                <S.Content>
                    <S.Card>
                        <div><FaFileContract /></div>
                        <h2>Licitações e Contratos</h2>
                        <p>Processo por meio do qual a Administração Pública contrata obras, serviços, compras e alienações</p>
                    </S.Card>


                    <S.Card>
                        <div><MdPublic /></div>
                        <h2>Direito Público</h2>
                        <p>Conjunto das normas jurídicas de natureza pública, compreendendo tanto a regularização em relação entre o particular e o Estado, como as atividades, as funções e organizações dos poderes do Estado.</p>
                    </S.Card>


                    <S.Card>
                        <div><GiInjustice /></div>
                        <h2>Direito Eleitoral</h2>
                        <p>O direito eleitoral é um conjunto de normas que visa dar transparência e seriedade a todo o processo de eleição, envolvendo eleitores, candidatos e ferramentas usadas no processo.

                        </p>
                    </S.Card>
                    <S.Card>
                        <div><GiInjustice /></div>
                        <h2>Gestão Pública</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur delectus tenetur odit culpa, repellat repudiandae corrupti dignissimos optio totam enim eveniet ex, nesciunt libero magnam? Id facere sapiente laboriosam?</p>
                    </S.Card>

                </S.Content>
            </S.Container>
        </S.Services >
    )
}
