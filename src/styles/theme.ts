export const theme = {
  colors: {
    primary: '#1E5631', // Verde escuro - representa florestas
    secondary: '#4A8B41', // Verde médio - representa vegetação
    tertiary: '#8CC084', // Verde claro - representa sustentabilidade
    accent: '#3A6EA5', // Azul - representa água/oceanos
    danger: '#C75643', // Vermelho - representa perigo/desmatamento
    warning: '#F0A202', // Amarelo - representa alerta
    success: '#4CAF50', // Verde - representa sucesso/positivo
    background: '#F5F5F5', // Fundo claro
    darkBackground: '#242424', // Fundo escuro
    text: '#333333', // Texto escuro
    lightText: '#FFFFFF', // Texto claro
    white: '#FFFFFF', // Branco
    gray: '#888888', // Cinza para textos secundários
    textLight: '#888888', // Adicionando propriedade textLight para corrigir os erros
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
};

export type Theme = typeof theme;