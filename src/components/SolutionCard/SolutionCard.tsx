import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Solution } from '../../types/environmentalData';

interface SolutionCardProps {
  solution: Solution;
  index?: number;
}

const CardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const CategoryTag = styled.span<{ category: string }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ category, theme }) => {
    switch (category) {
      case 'individual':
        return `rgba(${theme.colors.tertiary.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
      case 'policy':
        return `rgba(${theme.colors.primary.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
      case 'technology':
        return `rgba(${theme.colors.accent.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
      case 'conservation':
        return `rgba(${theme.colors.secondary.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
      default:
        return `rgba(${theme.colors.gray.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
    }
  }};
  color: ${({ category, theme }) => {
    switch (category) {
      case 'individual':
        return theme.colors.tertiary;
      case 'policy':
        return theme.colors.primary;
      case 'technology':
        return theme.colors.accent;
      case 'conservation':
        return theme.colors.secondary;
      default:
        return theme.colors.gray;
    }
  }};
`;

const ImpactTag = styled.span<{ impact: string }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ impact, theme }) => {
    switch (impact) {
      case 'high':
        return `rgba(${theme.colors.primary.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
      case 'medium':
        return `rgba(${theme.colors.warning.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
      case 'low':
        return `rgba(${theme.colors.gray.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
      default:
        return `rgba(${theme.colors.gray.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`;
    }
  }};
  color: ${({ impact, theme }) => {
    switch (impact) {
      case 'high':
        return theme.colors.primary;
      case 'medium':
        return theme.colors.warning;
      case 'low':
        return theme.colors.gray;
      default:
        return theme.colors.gray;
    }
  }};
`;

const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'individual':
      return 'Individual';
    case 'policy':
      return 'Política';
    case 'technology':
      return 'Tecnologia';
    case 'conservation':
      return 'Conservação';
    default:
      return category;
  }
};

const getImpactLabel = (impact: string): string => {
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

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, index = 0 }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ImageContainer>
        <Image src={solution.imageUrl} alt={solution.title} />
      </ImageContainer>
      
      <CardContent>
        <CardTitle>{solution.title}</CardTitle>
        <CardDescription>{solution.description}</CardDescription>
        
        <TagsContainer>
          <CategoryTag category={solution.category}>
            {getCategoryLabel(solution.category)}
          </CategoryTag>
          
          <ImpactTag impact={solution.impact}>
            {getImpactLabel(solution.impact)}
          </ImpactTag>
        </TagsContainer>
      </CardContent>
    </CardContainer>
  );
};

export default SolutionCard;