import { createGlobalStyle } from 'styled-components';
import type { Theme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 600;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  section {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  .text-center {
    text-align: center;
  }

  .text-primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .text-accent {
    color: ${({ theme }) => theme.colors.accent};
  }

  .text-danger {
    color: ${({ theme }) => theme.colors.danger};
  }

  .mb-1 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  .mb-2 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .mb-3 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  .mb-4 {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  .mb-5 {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`;