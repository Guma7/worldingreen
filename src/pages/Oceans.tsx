import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import InfoSection from '../components/InfoSection';
import { environmentalIssues } from '../data/environmentalData';
import { theme } from '../styles/theme';

const ProblemCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProblemTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const ProblemDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProblemSource = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-style: italic;
`;

const ProblemsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const ProblemsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProblemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const OceansPage: React.FC = () => {
  // Encontrar os problemas relacionados aos oceanos
  const oceansIssue = environmentalIssues.find(issue => issue.id === 4);
  
  return (
    <>
      <Hero 
        title="Oceanos em Perigo"
        subtitle="Entenda os desafios enfrentados pelos oceanos e seus impactos na vida marinha e no clima global"
        backgroundImage="/images/oceans-hero.jpg"
        ctaLink="#info"
        overlay={true}
        height="80vh"
        alignText="center"
      />
      
      <div id="info">
        {oceansIssue && (
          <InfoSection 
            title={oceansIssue.title}
            description={oceansIssue.description}
            imageUrl={oceansIssue.imageUrl || '/images/ocean-fallback.jpg'}
            imageAlt="Poluição nos oceanos"
            backgroundColor={theme.colors.background}
          />
        )}
      </div>
      
      <InfoSection 
        title="Acidificação dos Oceanos"
        description="A acidificação dos oceanos é causada pela absorção de dióxido de carbono (CO2) da atmosfera. Quando o CO2 se dissolve na água do mar, forma ácido carbônico, reduzindo o pH da água. Desde o início da Revolução Industrial, os oceanos absorveram cerca de 30% do CO2 emitido por atividades humanas, resultando em uma queda de 0,1 unidade no pH oceânico. Essa mudança representa um aumento de 30% na acidez. A acidificação prejudica diretamente os recifes de coral, causando o enfraquecimento de suas estruturas calcárias e dificultando sua formação e crescimento. Muitos organismos marinhos com conchas ou esqueletos de carbonato de cálcio, como moluscos, crustáceos e corais, têm dificuldade para formar suas estruturas em águas mais ácidas. Além disso, a acidificação afeta o desenvolvimento e a reprodução de diversas espécies marinhas, alterando o equilíbrio dos ecossistemas oceânicos e reduzindo a biodiversidade marinha."
        imageUrl="/images/Acidificacion_contenidoInterior_746x419.jpg"
        imageAlt="Acidificação dos oceanos"
        reverse={true}
        backgroundColor={theme.colors.background}
      />
      
      {oceansIssue && oceansIssue.statistics && (
        <StatsSection 
          title="Estatísticas dos Oceanos"
          subtitle="Dados importantes sobre os problemas que afetam os oceanos"
          stats={oceansIssue.statistics}
          columns={3}
          backgroundColor={theme.colors.secondary + '20'}
        />
      )}
      
      <ProblemsContainer>
        <ProblemsTitle>Principais Problemas dos Oceanos</ProblemsTitle>
        <ProblemsGrid>
          <ProblemCard>
            <ProblemTitle>Poluição por Plástico</ProblemTitle>
            <ProblemDescription>
              Estima-se que 8 milhões de toneladas de plástico entram nos oceanos anualmente. Esse plástico se fragmenta em microplásticos que são ingeridos por organismos marinhos, entrando na cadeia alimentar. Mais de 800 espécies marinhas são afetadas pela poluição plástica através de ingestão, emaranhamento ou outros perigos. Até 2050, pode haver mais plástico do que peixes nos oceanos, em peso, se as tendências atuais continuarem.
            </ProblemDescription>
            <ProblemSource>Fonte: ONU Meio Ambiente, Ellen MacArthur Foundation</ProblemSource>
          </ProblemCard>
          
          <ProblemCard>
            <ProblemTitle>Aquecimento dos Oceanos</ProblemTitle>
            <ProblemDescription>
              Os oceanos absorveram mais de 90% do excesso de calor gerado pelo aquecimento global. Desde 1970, a temperatura dos oceanos aumentou em média 0,13°C por década. O aquecimento dos oceanos causa branqueamento de corais, morte ou migração de espécies, além de intensificação de tempestades. Eventos de branqueamento em massa de corais estão ocorrendo com frequência cinco vezes maior do que há 40 anos.
            </ProblemDescription>
            <ProblemSource>Fonte: IPCC, NOAA</ProblemSource>
          </ProblemCard>
          
          <ProblemCard>
            <ProblemTitle>Pesca Excessiva</ProblemTitle>
            <ProblemDescription>
              Aproximadamente 33% dos estoques pesqueiros mundiais estão sendo explorados em níveis biologicamente insustentáveis. Outros 60% estão sendo pescados no limite máximo sustentável. Esta exploração excessiva causa desequilíbrios nos ecossistemas marinhos, afetando toda a cadeia alimentar oceânica e reduzindo a biodiversidade marinha.
            </ProblemDescription>
            <ProblemSource>Fonte: FAO, Global Fishing Watch</ProblemSource>
          </ProblemCard>
          
          <ProblemCard>
            <ProblemTitle>Zonas Mortas</ProblemTitle>
            <ProblemDescription>
              Existem mais de 400 zonas mortas nos oceanos do mundo, cobrindo uma área total de mais de 245.000 km². Estas são áreas com níveis de oxigênio tão baixos que não conseguem sustentar a maioria da vida marinha. As zonas mortas são causadas principalmente pelo aumento da temperatura dos oceanos, onde o acréscimo de apenas 1°C cria condições nas quais muitas espécies não conseguem sobreviver. O aquecimento das águas reduz a capacidade de retenção de oxigênio e dificulta a mistura entre camadas de água, criando extensas áreas sem vida marinha.
            </ProblemDescription>
            <ProblemSource>Fonte: UNESCO, Science</ProblemSource>
          </ProblemCard>
          
          <ProblemCard>
            <ProblemTitle>Poluição Química</ProblemTitle>
            <ProblemDescription>
              Além do plástico, os oceanos são contaminados por uma variedade de produtos químicos, incluindo petróleo, pesticidas, produtos farmacêuticos, metais pesados e produtos de cuidados pessoais. Aproximadamente 80% da poluição marinha tem origem em atividades terrestres. Esses contaminantes podem bioacumular em organismos marinhos e biomagnificar ao longo da cadeia alimentar, afetando a saúde humana através do consumo de frutos do mar contaminados.
            </ProblemDescription>
            <ProblemSource>Fonte: UNEP, Marine Pollution Bulletin</ProblemSource>
          </ProblemCard>
          
          <ProblemCard>
            <ProblemTitle>Elevação do Nível do Mar</ProblemTitle>
            <ProblemDescription>
              O nível global do mar subiu cerca de 21-24 centímetros desde 1880, com um terço desse aumento ocorrendo nas últimas duas décadas. A taxa atual de elevação é de 3,6 mm por ano, mais do que o dobro da taxa do século XX. Até 2100, o nível do mar pode subir entre 0,3 e 2,5 metros, dependendo das emissões de gases de efeito estufa. Isso ameaça comunidades costeiras, infraestrutura e ecossistemas como manguezais e pântanos salgados.
            </ProblemDescription>
            <ProblemSource>Fonte: IPCC, NASA</ProblemSource>
          </ProblemCard>
        </ProblemsGrid>
      </ProblemsContainer>
      
      <InfoSection 
        title="Oceanos: Fonte Vital de Oxigênio"
        description="Os oceanos são responsáveis pela produção de 50-80% do oxigênio da Terra, superando a contribuição das florestas terrestres. Esta produção é realizada principalmente pelo fitoplâncton marinho - pequenas plantas à deriva, algas e algumas bactérias fotossintetizantes que habitam a zona iluminada da coluna d'água. Uma única espécie de bactéria marinha, a Prochlorococcus, é responsável por até 20% do oxigênio global - uma porcentagem maior do que todas as florestas tropicais combinadas. Isso torna a preservação dos oceanos tão ou mais importante que a conservação das florestas terrestres para a manutenção da vida no planeta. O aquecimento global, a poluição e a acidificação ameaçam estes organismos microscópicos essenciais, colocando em risco não apenas a biodiversidade marinha, mas também a própria qualidade do ar que respiramos."
        imageUrl="/images/ocean-pollution.jpg"
        imageAlt="Produção de oxigênio pelos oceanos"
        backgroundColor={theme.colors.background}
      />
    </>
  );
};

export default OceansPage;