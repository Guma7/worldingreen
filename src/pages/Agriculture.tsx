import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import InfoSection from '../components/InfoSection';
import { environmentalIssues, environmentalComparisons } from '../data/environmentalData';
import { theme } from '../styles/theme';

const ComparisonContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const ComparisonTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ComparisonCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const ComparisonHeader = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ComparisonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ComparisonItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 1rem;
`;

const ComparisonValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ComparisonLabel = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const ComparisonVs = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 1rem 0;
  }
`;

const ComparisonDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  text-align: center;
  font-style: italic;
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AgriculturePage: React.FC = () => {
  // Encontrar os problemas relacionados à agricultura
  const agricultureIssue = environmentalIssues.find(issue => issue.id === 2);
  const waterIssue = environmentalIssues.find(issue => issue.id === 3);
  
  // Filtrar comparações relacionadas à agricultura
  const agricultureComparisons = environmentalComparisons.filter(
    comparison => ['water', 'emissions', 'land'].includes(comparison.category)
  );

  return (
    <>
      <Hero 
        title="Impactos da Agricultura"
        subtitle="Entenda como a produção de alimentos afeta o meio ambiente e quais são as alternativas sustentáveis"
        backgroundImage="/images/agriculture-hero.jpg"
        ctaLink="#info"
        overlay={true}
        height="80vh"
        alignText="center"
      />
      
      <div id="info">
        {agricultureIssue && (
          <InfoSection 
            title={agricultureIssue.title}
            description={agricultureIssue.description}
            imageUrl={agricultureIssue.imageUrl || '/images/agriculture-hero.jpg'}
            imageAlt="Agricultura e pecuária"
            backgroundColor={theme.colors.background}
          />
        )}
      </div>
      
      <InfoSection 
        title="Pecuária e Meio Ambiente"
        description="A pecuária é uma das atividades humanas com maior impacto ambiental. No Brasil, a agropecuária e o desmatamento foram responsáveis por 77% das emissões de gases de efeito estufa em 2022, com a pecuária sendo a principal causa do desmatamento na Amazônia e no Cerrado. Globalmente, a criação de animais para consumo ocupa cerca de 83% das terras agrícolas, mas fornece apenas 18% das calorias consumidas pelos humanos. A produção de carne, especialmente a bovina, também é intensiva em água: são necessários aproximadamente 15.000 litros de água para produzir 1kg de carne bovina, em comparação com 290 litros para 1kg de batata. Além disso, o gado é responsável por 14,5% das emissões globais de gases de efeito estufa, principalmente metano, um gás com potencial de aquecimento 28 vezes maior que o CO2."
        imageUrl="/images/amazon-deforestation.jpg"
        imageAlt="Pecuária e desmatamento"
        reverse={true}
        backgroundColor={theme.colors.background}
      />
      
      <InfoSection 
        title="Uso da Água na Agricultura"
        description="A agricultura é responsável por cerca de 70% do consumo global de água doce, com grande parte sendo utilizada para irrigação. No Brasil, esse percentual chega a 60%. A produção de alimentos de origem animal é particularmente intensiva em água: além da água consumida diretamente pelos animais, grandes volumes são necessários para produzir sua alimentação. A irrigação ineficiente e o manejo inadequado do solo contribuem para o desperdício de água e a contaminação de recursos hídricos por agrotóxicos e fertilizantes, causando eutrofização e prejudicando ecossistemas aquáticos."
        imageUrl="/images/water-agriculture.jpg"
        imageAlt="Uso da água na agricultura"
        backgroundColor={theme.colors.background}
      />
      
      {agricultureIssue && agricultureIssue.statistics && (
        <StatsSection 
          title="Estatísticas da Agricultura"
          subtitle="Dados importantes sobre os impactos ambientais da agricultura"
          stats={agricultureIssue.statistics}
          columns={3}
          backgroundColor={theme.colors.primary + '20'}
        />
      )}
      
      {waterIssue && waterIssue.statistics && (
        <StatsSection 
          title="Estatísticas do Uso da Água"
          subtitle="Dados sobre o consumo de água na produção de alimentos"
          stats={waterIssue.statistics}
          columns={3}
          backgroundColor={theme.colors.secondary + '20'}
        />
      )}
      
      <ComparisonContainer>
        <ComparisonTitle>Comparações de Impacto Ambiental</ComparisonTitle>
        <ComparisonGrid>
          {agricultureComparisons.map(comparison => (
            <ComparisonCard key={comparison.id}>
              <ComparisonHeader>{comparison.title}</ComparisonHeader>
              <ComparisonContent>
                <ComparisonItem>
                  <ComparisonValue>{comparison.value1} {comparison.unit}</ComparisonValue>
                  <ComparisonLabel>{comparison.label1}</ComparisonLabel>
                </ComparisonItem>
                <ComparisonVs>vs</ComparisonVs>
                <ComparisonItem>
                  <ComparisonValue>{comparison.value2} {comparison.unit}</ComparisonValue>
                  <ComparisonLabel>{comparison.label2}</ComparisonLabel>
                </ComparisonItem>
              </ComparisonContent>
              <ComparisonDescription>{comparison.description}</ComparisonDescription>
            </ComparisonCard>
          ))}
        </ComparisonGrid>
      </ComparisonContainer>
      
      <InfoSection 
        title="Agricultura Sustentável"
        description="A transição para sistemas alimentares sustentáveis é essencial para reduzir os impactos ambientais da agricultura. Práticas como a agricultura orgânica, agroflorestal e regenerativa podem ajudar a restaurar a saúde do solo, aumentar a biodiversidade e reduzir a dependência de insumos químicos. A agricultura de precisão utiliza tecnologia para otimizar o uso de recursos como água, fertilizantes e pesticidas. A redução do desperdício de alimentos também é crucial: aproximadamente um terço de todos os alimentos produzidos globalmente é perdido ou desperdiçado. Além disso, a adoção de dieta baseada em vegetais pode reduzir significativamente a pressão sobre recursos naturais e as emissões de gases de efeito estufa associadas à produção de alimentos."
        imageUrl="/images/agriculture-sustainability.jpg"
        imageAlt="Agricultura sustentável"
        reverse={true}
        backgroundColor={theme.colors.background}
      />
    </>
  );
};

export default AgriculturePage;