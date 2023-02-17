import * as S from './styles'
import { FaFileContract } from 'react-icons/fa';
import { MdPublic } from 'react-icons/md';
import { GiInjustice } from 'react-icons/gi';

export const Services = () => {

    const cards = [
        {
            icon: <FaFileContract />,
            name: "Licitações e Contratos",
            description: "Processo por meio do qual a Administração Pública contrata obras, serviços, compras e alienações",
        },
        {
            icon: <MdPublic />,
            name: "Direito Público",
            description: "Conjunto das normas jurídicas de natureza pública, compreendendo tanto a regularização em relação entre o particular e o Estado, como as atividades, as funções e organizações dos poderes do Estado.",
        },
        {
            icon: <GiInjustice />,
            name: "Direito Eleitoral",
            description: "O direito eleitoral é um conjunto de normas que visa dar transparência e seriedade a todo o processo de eleição, envolvendo eleitores, candidatos e ferramentas usadas no processo.",
        },
        {
            icon: <GiInjustice />,
            name: "Gestão Pública",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur delectus tenetur odit culpa, repellat repudiandae corrupti dignissimos optio totam enim eveniet ex, nesciunt libero magnam? Id facere sapiente laboriosam?",
        },
    ]

    return (
        <S.Services id='services'>
            <S.Container >
                <S.Title>
                    <h1>Áreas de Atuação</h1>
                </S.Title>
                <S.Content>
                    {cards.map(({ icon, name, description }) => (
                        <S.Card>
                            <div>{icon}</div>
                            <h2>{name}</h2>
                            <p> {description}</p>
                        </S.Card>

                    ))}

                </S.Content>
            </S.Container>
        </S.Services >
    )
}
