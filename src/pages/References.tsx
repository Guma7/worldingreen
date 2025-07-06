import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';

const ReferencesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const ReferencesTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ReferencesDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const ReferencesCategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin: 2.5rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: 0.5rem;
`;

const ReferencesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ReferenceItem = styled.li`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ReferenceTitle = styled.h4`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ReferenceLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

const ReferenceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-top: 0.5rem;
`;

const ReferencesPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Referências"
        subtitle="Fontes e bases científicas utilizadas em nosso conteúdo"
        backgroundImage="/images/references-background.jpg"
        overlay={true}
        height="70vh"
        alignText="center"
      />
      
      <ReferencesContainer>
        <ReferencesTitle>Nossas Fontes de Informação</ReferencesTitle>
        <ReferencesDescription>
          Todas as informações apresentadas em nosso site são baseadas em pesquisas científicas, altamente revisadas e conceituadas no meio acadêmico, além de relatórios de organizações nacionais e internacionais sobre os temas abordados.
        </ReferencesDescription>
        
        <ReferencesCategoryTitle>Mudanças Climáticas e Eventos Extremos</ReferencesCategoryTitle>
        <ReferencesList>
          <ReferenceItem>
            <ReferenceTitle>IPCC - Painel Intergovernamental sobre Mudanças Climáticas</ReferenceTitle>
            <ReferenceLink href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer">
              https://www.ipcc.ch/
            </ReferenceLink>
            <ReferenceDescription>
              Organização científica criada pela ONU para avaliar a ciência relacionada às mudanças climáticas. Seus relatórios são a base para acordos internacionais sobre clima.
            </ReferenceDescription>
          </ReferenceItem>
          
          <ReferenceItem>
            <ReferenceTitle>NOAA - Administração Nacional Oceânica e Atmosférica</ReferenceTitle>
            <ReferenceLink href="https://www.noaa.gov/" target="_blank" rel="noopener noreferrer">
              https://www.noaa.gov/
            </ReferenceLink>
            <ReferenceDescription>
              Agência científica americana que monitora as condições dos oceanos e da atmosfera, fornecendo dados sobre furacões, temperaturas oceânicas e outros fenômenos climáticos.
            </ReferenceDescription>
          </ReferenceItem>
          
          <ReferenceItem>
            <ReferenceTitle>Defesa Civil do Rio Grande do Sul</ReferenceTitle>
            <ReferenceLink href="https://www.defesacivil.rs.gov.br/" target="_blank" rel="noopener noreferrer">
              https://www.defesacivil.rs.gov.br/
            </ReferenceLink>
            <ReferenceDescription>
              Órgão responsável pelo monitoramento e resposta a desastres no estado do Rio Grande do Sul, fornecendo dados oficiais sobre as enchentes de 2024.
            </ReferenceDescription>
          </ReferenceItem>
          
          <ReferenceItem>
            <ReferenceTitle>Proteção Civil Italiana</ReferenceTitle>
            <ReferenceLink href="http://www.protezionecivile.gov.it/" target="_blank" rel="noopener noreferrer">
              http://www.protezionecivile.gov.it/
            </ReferenceLink>
            <ReferenceDescription>
              Departamento do governo italiano responsável pela previsão, prevenção e gestão de eventos de emergência, incluindo as enchentes na região da Emilia-Romagna.
            </ReferenceDescription>
          </ReferenceItem>
        </ReferencesList>
        
        <ReferencesCategoryTitle>Impactos nas Abelhas e Polinizadores</ReferencesCategoryTitle>
        <ReferencesList>
          <ReferenceItem>
            <ReferenceTitle>Fundação de Amparo à Pesquisa do Estado de São Paulo (Fapesp)</ReferenceTitle>
            <ReferenceLink href="https://fapesp.br/" target="_blank" rel="noopener noreferrer">
              https://fapesp.br/
            </ReferenceLink>
            <ReferenceDescription>
              Agência de fomento à pesquisa científica que financia estudos sobre os efeitos dos agrotóxicos em abelhas e outros polinizadores.
            </ReferenceDescription>
          </ReferenceItem>
          
          <ReferenceItem>
            <ReferenceTitle>Universidade de São Paulo (USP)</ReferenceTitle>
            <ReferenceLink href="https://www5.usp.br/" target="_blank" rel="noopener noreferrer">
              https://www5.usp.br/
            </ReferenceLink>
            <ReferenceDescription>
              Instituição de ensino e pesquisa que realiza estudos sobre os efeitos das mudanças climáticas nas abelhas, incluindo alterações cognitivas e comportamentais.
            </ReferenceDescription>
          </ReferenceItem>
        </ReferencesList>
        
        <ReferencesCategoryTitle>Agrotóxicos e Impactos Ambientais</ReferencesCategoryTitle>
        <ReferencesList>
          <ReferenceItem>
            <ReferenceTitle>Anvisa - Agência Nacional de Vigilância Sanitária</ReferenceTitle>
            <ReferenceLink href="https://www.gov.br/anvisa/" target="_blank" rel="noopener noreferrer">
              https://www.gov.br/anvisa/
            </ReferenceLink>
            <ReferenceDescription>
              Órgão regulador brasileiro responsável pela aprovação e classificação de agrotóxicos quanto à sua toxicidade e impactos à saúde.
            </ReferenceDescription>
          </ReferenceItem>
          
          <ReferenceItem>
            <ReferenceTitle>Greenpeace Brasil</ReferenceTitle>
            <ReferenceLink href="https://www.greenpeace.org/brasil/" target="_blank" rel="noopener noreferrer">
              https://www.greenpeace.org/brasil/
            </ReferenceLink>
            <ReferenceDescription>
              Organização não-governamental que realiza pesquisas e campanhas sobre o uso de agrotóxicos no Brasil, incluindo aqueles proibidos em outros países.
            </ReferenceDescription>
          </ReferenceItem>
        </ReferencesList>
        
        <ReferencesCategoryTitle>Desmatamento e Uso da Terra</ReferencesCategoryTitle>
        <ReferencesList>
          <ReferenceItem>
            <ReferenceTitle>INPE - Instituto Nacional de Pesquisas Espaciais</ReferenceTitle>
            <ReferenceLink href="http://www.inpe.br/" target="_blank" rel="noopener noreferrer">
              http://www.inpe.br/
            </ReferenceLink>
            <ReferenceDescription>
              Instituto brasileiro responsável pelo monitoramento do desmatamento na Amazônia e em outros biomas brasileiros através de imagens de satélite.
            </ReferenceDescription>
          </ReferenceItem>
          
          <ReferenceItem>
            <ReferenceTitle>MapBiomas</ReferenceTitle>
            <ReferenceLink href="https://mapbiomas.org/" target="_blank" rel="noopener noreferrer">
              https://mapbiomas.org/
            </ReferenceLink>
            <ReferenceDescription>
              Iniciativa que mapeia anualmente a cobertura e uso da terra no Brasil, fornecendo dados sobre desmatamento, regeneração florestal e expansão agrícola.
            </ReferenceDescription>
          </ReferenceItem>
          
          <ReferenceItem>
            <ReferenceTitle>FAO - Organização das Nações Unidas para Alimentação e Agricultura</ReferenceTitle>
            <ReferenceLink href="https://www.fao.org/" target="_blank" rel="noopener noreferrer">
              https://www.fao.org/
            </ReferenceLink>
            <ReferenceDescription>
              Agência especializada da ONU que lidera esforços internacionais para combater a fome e promover a segurança alimentar, fornecendo dados sobre uso da terra e recursos hídricos na agricultura.
            </ReferenceDescription>
          </ReferenceItem>
        </ReferencesList>
        
        <ReferencesCategoryTitle>Recursos Hídricos</ReferencesCategoryTitle>
        <ReferencesList>
          <ReferenceItem>
            <ReferenceTitle>Water Footprint Network</ReferenceTitle>
            <ReferenceLink href="https://waterfootprint.org/" target="_blank" rel="noopener noreferrer">
              https://waterfootprint.org/
            </ReferenceLink>
            <ReferenceDescription>
              Organização internacional que desenvolve padrões e ferramentas para medir e avaliar a pegada hídrica de produtos, processos e organizações.
            </ReferenceDescription>
          </ReferenceItem>
          
          <ReferenceItem>
            <ReferenceTitle>UNESCO - Organização das Nações Unidas para a Educação, a Ciência e a Cultura</ReferenceTitle>
            <ReferenceLink href="https://en.unesco.org/" target="_blank" rel="noopener noreferrer">
              https://en.unesco.org/
            </ReferenceLink>
            <ReferenceDescription>
              Agência da ONU que promove a cooperação internacional em educação, ciências e cultura, incluindo programas de gestão de recursos hídricos.
            </ReferenceDescription>
          </ReferenceItem>
        </ReferencesList>
      </ReferencesContainer>
    </>
  );
};

export default ReferencesPage;