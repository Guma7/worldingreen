// Tipos para os dados ambientais

export interface StatisticItem {
  id: number;
  title: string;
  value: string;
  description: string;
  icon?: string;
  color?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

export interface EnvironmentalIssue {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  statistics: StatisticItem[];
  chartData?: ChartData;
  sources: string[];
}

export interface TimelineEvent {
  id: number;
  year: number;
  title: string;
  description: string;
  imageUrl?: string;
  category: 'deforestation' | 'ocean' | 'agriculture' | 'policy' | 'other';
}

export interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'individual' | 'policy' | 'technology' | 'conservation';
  impact: 'high' | 'medium' | 'low';
}

export interface ComparisonItem {
  id: number;
  title: string;
  category: string;
  value1: number;
  label1: string;
  value2: number;
  label2: string;
  unit: string;
  description: string;
}