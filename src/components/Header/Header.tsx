import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';
import useImagePreloader from '../../hooks/useImagePreloader';

interface HeaderProps {
  transparent?: boolean;
}

const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => !['scrolled', 'transparent'].includes(prop),
})<{ scrolled: boolean; transparent?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background-color: ${({ scrolled, transparent, theme }) =>
    scrolled || !transparent
      ? theme.colors.background
      : 'transparent'};
  box-shadow: ${({ scrolled, theme }) =>
    scrolled ? theme.shadows.medium : 'none'};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.75rem;
  }
`;

const NavLinks = styled.nav.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.large};
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 1001;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 1rem 0;
    font-size: 1.1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const CloseButton = styled(MobileMenuButton)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { preloadRouteImages } = useImagePreloader();
  
  const handleLinkHover = (route: string) => {
    preloadRouteImages(route);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handleNavClick = () => {
    closeMenu();
    scrollToTop();
  };

  return (
    <HeaderContainer scrolled={scrolled} transparent={transparent}>
      <HeaderContent>
        <Logo to="/" onClick={scrollToTop}>
          <FaLeaf />
          World in Green
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          <FaBars />
        </MobileMenuButton>
        
        <Overlay isOpen={isOpen} onClick={closeMenu} />
        
        <NavLinks isOpen={isOpen}>
          <CloseButton onClick={closeMenu}>
            <FaTimes />
          </CloseButton>
          
          <NavLink 
            to="/" 
            onClick={handleNavClick}
            onMouseEnter={() => handleLinkHover('/')}
            data-preload-route
          >
            Início
          </NavLink>
          <NavLink 
            to="/deforestation" 
            onClick={handleNavClick}
            onMouseEnter={() => handleLinkHover('/deforestation')}
            data-preload-route
          >
            Desmatamento
          </NavLink>
          <NavLink 
            to="/oceans" 
            onClick={handleNavClick}
            onMouseEnter={() => handleLinkHover('/oceans')}
            data-preload-route
          >
            Oceanos
          </NavLink>
          <NavLink 
            to="/agriculture" 
            onClick={handleNavClick}
            onMouseEnter={() => handleLinkHover('/agriculture')}
            data-preload-route
          >
            Agricultura
          </NavLink>
          <NavLink 
            to="/solutions" 
            onClick={handleNavClick}
            onMouseEnter={() => handleLinkHover('/solutions')}
            data-preload-route
          >
            Soluções
          </NavLink>
          <NavLink 
            to="/references" 
            onClick={handleNavClick}
            onMouseEnter={() => handleLinkHover('/references')}
            data-preload-route
          >
            Referências
          </NavLink>
          
        </NavLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;