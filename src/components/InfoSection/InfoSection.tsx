import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../Button';

interface InfoSectionProps {
  title: string;
  description: string | React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
}

const SectionContainer = styled.section<{ backgroundColor?: string }>`
  padding: 4rem 0;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.background};
`;

const SectionContent = styled.div<{ reverse: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
    align-items: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SectionDescription = styled(motion.div)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonContainer = styled(motion.div)`
  margin-top: 2rem;
`;

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
  ctaText,
  ctaLink,
  backgroundColor,
}) => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <SectionContent reverse={reverse}>
        <TextContent ref={textRef}>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </SectionDescription>
          
          {ctaText && ctaLink && (
            <ButtonContainer
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button onClick={() => window.location.href = ctaLink}>
                {ctaText}
              </Button>
            </ButtonContainer>
          )}
        </TextContent>
        
        <ImageContainer
          ref={imageRef}
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -50 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={imageUrl} alt={imageAlt} />
        </ImageContainer>
      </SectionContent>
    </SectionContainer>
  );
};

export default InfoSection;