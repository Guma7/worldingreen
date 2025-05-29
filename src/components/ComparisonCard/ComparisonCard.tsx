import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { ComparisonItem } from '../../types/environmentalData';

interface ComparisonCardProps {
  comparison: ComparisonItem;
  index?: number;
}

const CardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const ComparisonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const ComparisonItem = styled.div<{ primary?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ primary, theme }) => 
    primary ? `rgba(${theme.colors.danger.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.1)` : 
    `rgba(${theme.colors.primary.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.1)`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ComparisonValue = styled.span<{ primary?: boolean }>`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ primary, theme }) => primary ? theme.colors.danger : theme.colors.primary};
`;

const ComparisonLabel = styled.span`
  font-size: 0.875rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const ComparisonUnit = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 0.5rem;
`;

const ComparisonBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => `rgba(${theme.colors.primary.replace('#', '').match(/[a-f0-9]{2}/gi)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`};
  border-radius: 4px;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
`;

const ComparisonBarFill = styled.div<{ percentage: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ theme }) => theme.colors.danger};
  border-radius: 4px;
`;

const ComparisonDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-top: auto;
`;

const ComparisonCard: React.FC<ComparisonCardProps> = ({ comparison, index = 0 }) => {
  // Calculate the percentage for the comparison bar
  const total = comparison.value1 + comparison.value2;
  const percentage = (comparison.value1 / total) * 100;
  
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CardTitle>{comparison.title}</CardTitle>
      
      <ComparisonBar>
        <ComparisonBarFill percentage={percentage} />
      </ComparisonBar>
      
      <ComparisonContainer>
        <ComparisonItem primary>
          <ComparisonValue primary>{comparison.value1}</ComparisonValue>
          <ComparisonUnit>{comparison.unit}</ComparisonUnit>
          <ComparisonLabel>{comparison.label1}</ComparisonLabel>
        </ComparisonItem>
        
        <ComparisonItem>
          <ComparisonValue>{comparison.value2}</ComparisonValue>
          <ComparisonUnit>{comparison.unit}</ComparisonUnit>
          <ComparisonLabel>{comparison.label2}</ComparisonLabel>
        </ComparisonItem>
      </ComparisonContainer>
      
      <ComparisonDescription>{comparison.description}</ComparisonDescription>
    </CardContainer>
  );
};

export default ComparisonCard;