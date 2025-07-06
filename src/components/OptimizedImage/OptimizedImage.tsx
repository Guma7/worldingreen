import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface OptimizedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  srcSet?: string;
  webpSrc?: string;
}

const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isLoaded'].includes(prop),
})<{ isLoaded: boolean }>`
  position: relative;
  overflow: hidden;
  transition: opacity 0.3s ease;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  className,
  onLoad,
  onError,
  sizes,
  srcSet,
  webpSrc,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority && imgRef.current) {
      // Para imagens prioritárias, força o carregamento imediato
      const img = document.createElement('img');
      img.onload = () => {
        setIsLoaded(true);
        onLoad?.();
      };
      img.onerror = () => {
        setHasError(true);
        onError?.();
      };
      img.src = src;
    }
  }, [src, priority, onLoad, onError]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <ImageContainer isLoaded={true} className={className}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          height: '100%',
          background: '#f0f0f0',
          color: '#666'
        }}>
          Erro ao carregar imagem
        </div>
      </ImageContainer>
    );
  }

  return (
    <ImageContainer isLoaded={isLoaded} className={className}>
      {!isLoaded && <LoadingPlaceholder />}
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          <Image
            ref={imgRef}
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={handleLoad}
            onError={handleError}
            style={{ display: isLoaded ? 'block' : 'none' }}
          />
        </picture>
      ) : (
        <Image
          ref={imgRef}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;