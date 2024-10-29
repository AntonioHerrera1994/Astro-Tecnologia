import { useRef } from '@astrojs/react';

const componenteRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const opacity = Math.min(1, scrollTop / 200); // Ajustar la opacidad según el desplazamiento
    componenteRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Aplicar color de fondo con opacidad
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, [componenteRef]);
