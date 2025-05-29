import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLeaf, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.lightText};
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightText};
  text-decoration: none;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const FooterDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 1.25rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.lightText};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightText};
  opacity: 0.8;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.tertiary};
    transform: translateX(5px);
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.lightText};
  opacity: 0.8;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.tertiary};
    transform: translateX(5px);
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  font-size: 0.875rem;
  opacity: 0.6;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/" onClick={scrollToTop}>
            <FaLeaf />
            World in Green
          </FooterLogo>
          <FooterDescription>
            Conscientizando sobre os impactos ambientais da indústria e promovendo soluções sustentáveis para um futuro melhor.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Navegação</FooterTitle>
          <FooterLink to="/" onClick={scrollToTop}>Início</FooterLink>
          <FooterLink to="/deforestation" onClick={scrollToTop}>Desmatamento</FooterLink>
          <FooterLink to="/oceans" onClick={scrollToTop}>Oceanos</FooterLink>
          <FooterLink to="/agriculture" onClick={scrollToTop}>Agricultura</FooterLink>
          <FooterLink to="/solutions" onClick={scrollToTop}>Soluções</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Recursos</FooterTitle>
          <ExternalLink href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer">
            IPCC
          </ExternalLink>
          <ExternalLink href="https://www.greenpeace.org/brasil/" target="_blank" rel="noopener noreferrer">
            Greenpeace Brasil
          </ExternalLink>
          <ExternalLink href="https://www.wwf.org.br/" target="_blank" rel="noopener noreferrer">
            WWF Brasil
          </ExternalLink>
          <ExternalLink href="https://www.imazon.org.br/" target="_blank" rel="noopener noreferrer">
            Imazon
          </ExternalLink>
          <ExternalLink href="https://www.observatoriodoclima.eco.br/" target="_blank" rel="noopener noreferrer">
            Observatório do Clima
          </ExternalLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterDescription>
            Tem alguma dúvida ou sugestão? Entre em contato conosco.
          </FooterDescription>
          <FooterDescription>
            Email: contato@worldingreen.com
          </FooterDescription>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} World in Green. Todos os direitos reservados. Desenvolvido com 💚 para o planeta.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;