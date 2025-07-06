import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../Button';
import OptimizedImage from '../OptimizedImage';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlay?: boolean;
  height?: string;
  alignText?: 'left' | 'center' | 'right';
}

const HeroContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => !['height', 'overlay'].includes(prop),
})<{ height: string; overlay: boolean }>`
  position: relative;
  height: ${({ height }) => height};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: ${({ theme }) => theme.colors.lightText};
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ overlay }) => overlay ? 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))' : 'none'};
    z-index: 2;
  }
`;

const BackgroundImage = styled(OptimizedImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled.div.withConfig({
  shouldForwardProp: (prop) => !['alignText'].includes(prop),
})<{ alignText: string }>`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  padding: 0 1.5rem;
  text-align: ${({ alignText }) => alignText};
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  max-width: 800px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  overlay = true,
  height = '100vh',
  alignText = 'left',
}) => {
  return (
    <HeroContainer height={height} overlay={overlay}>
      <BackgroundImage 
        src={backgroundImage} 
        alt="Hero background" 
        priority={true}
      />
      <HeroContent alignText={alignText}>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </HeroSubtitle>
        
        {(ctaText || secondaryCtaText) && (
          <ButtonContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {ctaText && ctaLink && (
              <Button
                onClick={() => window.location.href = ctaLink}
                size="large"
              >
                {ctaText}
              </Button>
            )}
            
            {secondaryCtaText && secondaryCtaLink && (
              <Button
                onClick={() => window.location.href = secondaryCtaLink}
                variant="outline"
                size="large"
              >
                {secondaryCtaText}
              </Button>
            )}
          </ButtonContainer>
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;