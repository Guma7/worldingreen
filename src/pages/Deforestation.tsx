import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import InfoSection from '../components/InfoSection';
import { environmentalIssues, environmentalTimeline } from '../data/environmentalData';
import { theme } from '../styles/theme';

const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const TimelineTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const TimelineWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 30px;
    }
  }
`;

const TimelineEvent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-left: 60px;
  }
`;

const TimelineDate = styled.div`
  width: 120px;
  text-align: right;
  padding-right: 30px;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    right: -10px;
    top: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    text-align: left;
    padding-right: 0;
    padding-left: 0;
    margin-bottom: 0.5rem;
    
    &:after {
      left: -50px;
      right: auto;
    }
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  padding-left: 30px;
  max-width: 500px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 0;
  }
`;

const TimelineEventTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TimelineEventDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const DeforestationPage: React.FC = () => {
  // Filtrar eventos relacionados ao desmatamento
  const deforestationEvents = environmentalTimeline.filter(
    event => event.category === 'deforestation' || event.category === 'policy'
  );

  // Encontrar os problemas relacionados ao desmatamento
  const deforestationIssue = environmentalIssues.find(issue => issue.id === 1);

  return (
    <>
      <Hero 
        title="Desmatamento no Brasil"
        subtitle="Entenda as causas, impactos e soluções para o desmatamento em nossos biomas"
        backgroundImage="/images/deforestation-cattle.jpg"
        ctaText="Saiba Mais"
        ctaLink="#info"
        overlay={true}
        height="70vh"
        alignText="center"
      />
      
      <div id="info">
        {deforestationIssue && (
          <InfoSection 
            title={deforestationIssue.title}
            description={deforestationIssue.description}
            imageUrl={deforestationIssue.imageUrl || '/images/deforestation-cattle.jpg'}
            imageAlt="Desmatamento para pecuária"
            backgroundColor={theme.colors.background}
          />
        )}
      </div>
      
      <InfoSection 
        title="Biomas Brasileiros em Risco"
        description="O Brasil possui seis biomas principais: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa. A Amazônia, maior floresta tropical do mundo, perdeu mais de 17% de sua cobertura original. O Cerrado, segundo maior bioma do país, já perdeu cerca de 50% de sua vegetação nativa. A Mata Atlântica, que originalmente cobria 15% do território brasileiro, hoje mantém apenas 12,4% de sua cobertura florestal original. O desmatamento nesses biomas é impulsionado principalmente pela expansão agropecuária, especialmente para criação de gado e cultivo de soja."
        imageUrl="/images/brazilian-biomes.jpg"
        imageAlt="Biomas brasileiros"
        reverse={true}
        backgroundColor={theme.colors.background}
      />
      
      <InfoSection 
        title="Impactos do Desmatamento"
        description="O desmatamento tem impactos severos no clima, biodiversidade e comunidades locais. A remoção da cobertura florestal reduz a capacidade de absorção de CO2, contribuindo para as mudanças climáticas. Também causa perda de biodiversidade, com extinção de espécies e desequilíbrio dos ecossistemas. Além disso, afeta o ciclo hidrológico, causando alterações nos padrões de chuva e disponibilidade de água. Comunidades indígenas e tradicionais que dependem da floresta para sua subsistência são particularmente vulneráveis aos impactos do desmatamento."
        imageUrl="/images/deforestation-impacts.jpg"
        imageAlt="Impactos do desmatamento"
        backgroundColor={theme.colors.background}
      />
      
      {deforestationIssue && deforestationIssue.statistics && (
        <StatsSection 
          title="Estatísticas do Desmatamento"
          subtitle="Dados importantes sobre o desmatamento no Brasil"
          stats={deforestationIssue.statistics}
          columns={3}
          backgroundColor={theme.colors.tertiary + '20'}
        />
      )}
      
      <TimelineContainer>
        <TimelineTitle>Linha do Tempo do Desmatamento</TimelineTitle>
        <TimelineWrapper>
          {deforestationEvents.map(event => (
            <TimelineEvent key={event.id}>
              <TimelineDate>{event.year}</TimelineDate>
              <TimelineContent>
                <TimelineEventTitle>{event.title}</TimelineEventTitle>
                <TimelineEventDescription>{event.description}</TimelineEventDescription>
              </TimelineContent>
            </TimelineEvent>
          ))}
        </TimelineWrapper>
      </TimelineContainer>
    </>
  );
};

export default DeforestationPage;