import { useEffect, useCallback } from 'react';

interface ImagePreloaderOptions {
  priority?: boolean;
  delay?: number;
}

const useImagePreloader = () => {
  const preloadImage = useCallback((src: string, options: ImagePreloaderOptions = {}) => {
    const { priority = false, delay = 0 } = options;
    
    const loadImage = () => {
      // Verifica se a imagem já está no cache
      const link = document.querySelector(`link[href="${src}"]`);
      if (link) return Promise.resolve();
      
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          // Adiciona ao cache do navegador
          const linkElement = document.createElement('link');
          linkElement.rel = 'prefetch';
          linkElement.href = src;
          if (priority) {
            linkElement.setAttribute('fetchpriority', 'high');
          }
          document.head.appendChild(linkElement);
          resolve();
        };
        
        img.onerror = () => {
          console.warn(`Falha ao pré-carregar imagem: ${src}`);
          reject(new Error(`Failed to preload ${src}`));
        };
        
        img.src = src;
      });
    };
    
    if (delay > 0) {
      setTimeout(loadImage, delay);
    } else {
      return loadImage();
    }
  }, []);
  
  const preloadImages = useCallback((images: string[], options: ImagePreloaderOptions = {}) => {
    const { priority = false } = options;
    
    // Prioriza imagens críticas
    const criticalImages = images.filter((_, index) => priority || index < 3);
    const nonCriticalImages = images.filter((_, index) => !priority && index >= 3);
    
    // Carrega imagens críticas imediatamente
    criticalImages.forEach((src, index) => {
      preloadImage(src, { priority: true, delay: index * 100 });
    });
    
    // Carrega imagens não críticas com delay
    nonCriticalImages.forEach((src, index) => {
      preloadImage(src, { priority: false, delay: 1000 + (index * 200) });
    });
  }, [preloadImage]);
  
  const preloadRouteImages = useCallback((route: string) => {
    const routeImageMap: Record<string, string[]> = {
      '/': ['/images/forest-background.jpg'],
      '/deforestation': ['/images/deforestation-hero.jpg', '/images/amazon-deforestation.jpg'],
      '/oceans': ['/images/oceans-hero.jpg', '/images/ocean-warming.jpg', '/images/Acidificacion_contenidoInterior_746x419.jpg'],
      '/agriculture': ['/images/agriculture-hero.jpg', '/images/agriculture-sustainability.jpg'],
      '/solutions': ['/images/solutions-hero.jpg', '/images/renewable-energy.jpg'],
      '/references': ['/images/references-background.jpg']
    };
    
    const images = routeImageMap[route] || [];
    if (images.length > 0) {
      preloadImages(images, { priority: true });
    }
  }, [preloadImages]);
  
  // Preload baseado em intersection observer para links
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = entry.target as HTMLAnchorElement;
            const href = link.getAttribute('href');
            if (href) {
              // Pequeno delay para não sobrecarregar
              setTimeout(() => preloadRouteImages(href), 500);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );
    
    // Observa todos os links de navegação
    const navLinks = document.querySelectorAll('nav a, [data-preload-route]');
    navLinks.forEach((link) => observer.observe(link));
    
    return () => {
      navLinks.forEach((link) => observer.unobserve(link));
    };
  }, [preloadRouteImages]);
  
  return {
    preloadImage,
    preloadImages,
    preloadRouteImages
  };
};

export default useImagePreloader;