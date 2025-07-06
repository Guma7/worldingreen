import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Solution } from '../../types/environmentalData';
import SolutionCard from '../SolutionCard';

interface SolutionsSectionProps {
  title: string;
  subtitle?: string;
  solutions: Solution[];
  columns?: number;
  backgroundColor?: string;
}

const SectionContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor'].includes(prop),
})<{ backgroundColor?: string }>`
  padding: 4rem 0;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.background};
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const SolutionsGrid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(${({ columns }) => Math.min(columns, 3)}, 1fr);
  }
`;

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  title,
  subtitle,
  solutions,
  columns = 3,
  backgroundColor,
}) => {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <SectionContent>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </SectionTitle>
          
          {subtitle && (
            <SectionSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </SectionSubtitle>
          )}
        </SectionHeader>
        
        <SolutionsGrid columns={columns}>
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </SolutionsGrid>
      </SectionContent>
    </SectionContainer>
  );
};

export default SolutionsSection;