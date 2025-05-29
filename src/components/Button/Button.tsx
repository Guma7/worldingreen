import React from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  border: none;
  outline: none;
  gap: 8px;
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 8px 16px;
          font-size: 0.875rem;
        `;
      case 'large':
        return css`
          padding: 16px 32px;
          font-size: 1.125rem;
        `;
      case 'medium':
      default:
        return css`
          padding: 12px 24px;
          font-size: 1rem;
        `;
    }
  }}
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.lightText};
          
          &:hover {
            background-color: ${theme.colors.primary};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.medium};
          }
          
          &:active {
            transform: translateY(0);
            box-shadow: ${theme.shadows.small};
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.lightText};
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          padding-left: 8px;
          padding-right: 8px;
          
          &:hover {
            color: ${theme.colors.secondary};
            background-color: rgba(30, 86, 49, 0.05);
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.lightText};
          
          &:hover {
            background-color: ${theme.colors.secondary};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.medium};
          }
          
          &:active {
            transform: translateY(0);
            box-shadow: ${theme.shadows.small};
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      iconPosition={iconPosition}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </ButtonContainer>
  );
};

export default Button;