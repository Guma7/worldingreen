import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { StatisticItem } from '../../types/environmentalData';

interface StatCardProps {
  stat: StatisticItem;
  index?: number;
}

const CardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const StatValue = styled.h2<{ color?: string }>`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ color, theme }) => color || theme.colors.primary};
`;

const StatTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StatDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const IconContainer = styled.div<{ color?: string }>`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ color, theme }) => color || theme.colors.primary};
`;

const StatCard: React.FC<StatCardProps> = ({ stat, index = 0 }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {stat.icon && (
        <IconContainer color={stat.color}>
          {stat.icon}
        </IconContainer>
      )}
      <StatValue color={stat.color}>{stat.value}</StatValue>
      <StatTitle>{stat.title}</StatTitle>
      <StatDescription>{stat.description}</StatDescription>
    </CardContainer>
  );
};

export default StatCard;