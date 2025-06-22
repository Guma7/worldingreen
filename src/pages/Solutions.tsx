import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { environmentalSolutions } from '../data/environmentalData';
import { theme } from '../styles/theme';

const SolutionsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const SolutionsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SolutionCard = styled.div<{ impact: string }>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: ${({ theme, impact }) => {
      switch (impact) {
        case 'high':
          return theme.colors.primary;
        case 'medium':
          return theme.colors.warning;
        case 'low':
          return theme.colors.danger;
        default:
          return theme.colors.primary;
      }
    }};
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SolutionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const SolutionDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  flex-grow: 1;
`;

const SolutionCategory = styled.span<{ category: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 1rem;
  background-color: ${({ theme, category }) => {
    switch (category) {
      case 'policy':
        return theme.colors.primary + '20';
      case 'technology':
        return theme.colors.secondary + '20';
      case 'individual':
        return theme.colors.tertiary + '20';
      case 'conservation':
        return theme.colors.primary + '20';
      default:
        return theme.colors.gray + '20';
    }
  }};
  color: ${({ theme, category }) => {
    switch (category) {
      case 'policy':
        return theme.colors.primary;
      case 'technology':
        return theme.colors.secondary;
      case 'individual':
        return theme.colors.tertiary;
      case 'conservation':
        return theme.colors.primary;
      default:
        return theme.colors.text;
    }
  }};
`;

const CategoryLabel = (category: string) => {
  switch (category) {
    case 'policy':
      return 'Política';
    case 'technology':
      return 'Tecnologia';
    case 'individual':
      return 'Ação Individual';
    case 'conservation':
      return 'Conservação';
    default:
      return category;
  }
};

const ImpactLabel = (impact: string) => {
  switch (impact) {
    case 'high':
      return 'Alto Impacto';
    case 'medium':
      return 'Médio Impacto';
    case 'low':
      return 'Baixo Impacto';
    default:
      return impact;
  }
};

const SolutionImpact = styled.span<{ impact: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  background-color: ${({ theme, impact }) => {
    switch (impact) {
      case 'high':
        return theme.colors.primary + '20';
      case 'medium':
        return theme.colors.warning + '20';
      case 'low':
        return theme.colors.danger + '20';
      default:
        return theme.colors.gray + '20';
    }
  }};
  color: ${({ theme, impact }) => {
    switch (impact) {
      case 'high':
        return theme.colors.primary;
      case 'medium':
        return theme.colors.warning;
      case 'low':
        return theme.colors.danger;
      default:
        return theme.colors.text;
    }
  }};
`;

// Os componentes relacionados às seções de impactos foram removidos pois não são mais utilizados


const SolutionsPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Soluções Ambientais"
        subtitle="Conheça as principais soluções para os desafios ambientais que enfrentamos"
        backgroundImage="https://rswaack.com.br/wp-content/uploads/2022/08/pagina22_pixabay.jpg"
        ctaText="Saiba Mais"
        ctaLink="#info"
        overlay={true}
        height="70vh"
        alignText="center"
      />
      
      <div id="info">
        <InfoSection 
          title="Transformação Ecológica"
          description="O governo brasileiro afirma estar implementando um Plano de Transformação Ecológica que visa impulsionar a economia verde através de investimentos em bioeconomia, energias renováveis, infraestrutura verde, agricultura sustentável, economia circular e tecnologias limpas. Este plano busca conciliar desenvolvimento econômico com preservação ambiental, criando empregos verdes e promovendo a inovação tecnológica. A transição para uma economia de baixo carbono é essencial para cumprir os compromissos climáticos do país e garantir um futuro sustentável para as próximas gerações. Apesar destas medidas serem extremamente positivas, são, em sua maioria, apenas tentativas de adaptação ao mercado global moderno, com suas ''exigências verdes'', além do pensamento de ''quanto poderíamos lucrar com o biomercado'', do que propriamente soluções reais às principais causas destes problemas (com a necessária urgência e intensidade ). Muito além disto precisa ser feito, principalmente pelos meios governamentais, apesar de que ainda existem políticos que abusam do negacionismo para impor seus olhares obscuros e egocêntricos de mercado (lucro pessoal ou daqueles que os apoiam). A questão não está em se devemos ou não tomar estas medidas, mas se ainda há tempo de tomá-las."
          imageUrl="https://portalsustentabilidade.com/wp-content/webp-express/webp-images/uploads/2025/02/design-destaque-99.jpg.webp"
          imageAlt="Transformação Ecológica"
          backgroundColor={theme.colors.background}
        />
      </div>
      
      {/* Seções de impactos foram removidas conforme solicitado */}
      
      <InfoSection 
        title="Energias Renováveis no Brasil"
        description="O Brasil possui uma matriz energética diversificada, com aproximadamente 83% da eletricidade gerada a partir de fontes renováveis. Nos últimos anos, o país tem expandido significativamente sua capacidade de energia eólica e solar: a capacidade eólica instalada cresceu mais de 20 vezes na última década, representando cerca de 12% da matriz energética, enquanto a energia solar fotovoltaica tem apresentado um crescimento exponencial, com mais de 2 milhões de sistemas de geração distribuída instalados, correspondendo a aproximadamente 6% da geração. O potencial brasileiro para estas energias renováveis é imenso, com condições favoráveis devido à alta irradiação solar e aos fortes ventos no Nordeste. A fusão nuclear, embora ainda em desenvolvimento experimental em outros países, representa uma promissora fonte de energia limpa para o futuro."
        imageUrl="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Energias Renováveis no Brasil"
        reverse={true}
        backgroundColor={theme.colors.background}
      />
      
      <InfoSection 
        title="Reflorestamento e Restauração"
        description="O reflorestamento e a restauração de ecossistemas são estratégias fundamentais para combater as mudanças climáticas e a perda de biodiversidade. O Brasil se comprometeu a restaurar 12 milhões de hectares de florestas até 2030 como parte do Acordo de Paris. Projetos como o Pacto pela Restauração da Mata Atlântica e a Aliança pela Restauração na Amazônia estão trabalhando para recuperar áreas degradadas. Isso é muito para o que vinha sendo feito e pouco para o que necessitamos, principalmente pelo fato de que as reais causas de desmatamento são muito mais velozes e pouco combatidas.  Além dos benefícios climáticos, a restauração florestal, realizado com planejamento e em gande escala (e principalmente com o desmatamento cessado) melhora a qualidade da água, previne a erosão do solo, cria habitats para a biodiversidade e pode gerar renda através do manejo sustentável de produtos florestais. Técnicas como a regeneração natural assistida, sistemas agroflorestais e plantio de espécies nativas estão sendo utilizadas para restaurar diferentes paisagens brasileiras, o que é maravilhoso, mas muito longe ainda do ideal."
        imageUrl="https://h2ahubagroambiental.com.br/wp-content/uploads/2022/11/HUB-blog-posts-julho-imagem-post3-1.png"
        imageAlt="Reflorestamento"
        backgroundColor={theme.colors.background}
      />
      
      <SolutionsContainer>
        <SolutionsTitle>Catálogo de Soluções</SolutionsTitle>
        <SolutionsGrid>
          {environmentalSolutions.map(solution => (
            <SolutionCard key={solution.id} impact={solution.impact}>
              <SolutionTitle>{solution.title}</SolutionTitle>
              <SolutionDescription>{solution.description}</SolutionDescription>
              <div>
                <SolutionImpact impact={solution.impact}>
                  {ImpactLabel(solution.impact)}
                </SolutionImpact>
                <SolutionCategory category={solution.category}>
                  {CategoryLabel(solution.category)}
                </SolutionCategory>
              </div>
            </SolutionCard>
          ))}
        </SolutionsGrid>
      </SolutionsContainer>
      
      <InfoSection 
        title="Economia Circular"
        description="A economia circular é um modelo econômico que visa eliminar resíduos e poluição, manter produtos e materiais em uso e regenerar sistemas naturais. No Brasil, iniciativas de economia circular estão ganhando força em diversos setores. A indústria de embalagens está investindo em designs recicláveis e biodegradáveis, enquanto empresas de eletrônicos implementam programas de logística reversa para recuperar materiais valiosos de produtos descartados. O setor de construção civil está adotando práticas como o uso de materiais reciclados e a redução de desperdícios. A transição para uma economia circular pode gerar uma economia de R$ 2,5 trilhões até 2030 no Brasil, além de reduzir significativamente as emissões de gases de efeito estufa e a pressão sobre recursos naturais."
        imageUrl="https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg?w=1980&ssl=1"
        imageAlt="Economia Circular"
        reverse={true}
        backgroundColor={theme.colors.background}
      />
      
      <InfoSection 
        title="Tecnologias Verdes"
        description="As tecnologias verdes estão revolucionando a forma como enfrentamos os desafios ambientais. No setor energético, avanços em baterias de armazenamento estão tornando as energias renováveis mais confiáveis e acessíveis. A agricultura de precisão utiliza sensores, drones e inteligência artificial para otimizar o uso de recursos e reduzir impactos ambientais. Tecnologias de captura e armazenamento de carbono estão sendo desenvolvidas para reduzir as emissões industriais. No transporte, veículos elétricos e biocombustíveis avançados estão reduzindo a dependência de combustíveis fósseis. O Brasil tem potencial para liderar em várias áreas de tecnologia verde, especialmente em biocombustíveis avançados, onde já possui expertise com o etanol de cana-de-açúcar e o biodiesel."
        imageUrl="https://itforum.com.br/wp-content/uploads/2023/12/Metas-sustentabilidade.jpg.webp"
        imageAlt="Tecnologias Verdes"
        backgroundColor={theme.colors.background}
      />
      
      <InfoSection 
        title="Soluções para os Oceanos"
        description="Para proteger os oceanos, precisamos de ações em múltiplas frentes: reduzir drasticamente o uso de plásticos descartáveis e melhorar a gestão de resíduos; diminuir as emissões de gases de efeito estufa para combater o aquecimento e a acidificação; expandir áreas marinhas protegidas; reduzir a poluição por nutrientes da agricultura e tratamento adequado de esgoto; e desenvolver tecnologias para limpeza dos oceanos. Acordos internacionais como o Tratado do Alto Mar, adotado em 2023, são essenciais para a proteção da biodiversidade marinha em águas internacionais."
        imageUrl="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Soluções para os oceanos"
        backgroundColor={theme.colors.background}
      />
    </>
  );
};

export default SolutionsPage;