import { useEffect, useRef } from 'react';
import { ChevronDown, Award } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    // Create falling spheres
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: Math.random() * 1 + 0.5,
        radius: Math.random() * 8 + 4,
        opacity: Math.random() * 0.2 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y - particle.radius > canvas.height) {
          particle.y = -particle.radius;
          particle.x = Math.random() * canvas.width;
          particle.vx = (Math.random() - 0.5) * 0.3;
        }

        particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));

        // Draw sphere with gradient
        const gradient = ctx.createRadialGradient(
          particle.x - particle.radius / 3,
          particle.y - particle.radius / 3,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        gradient.addColorStop(0, `rgba(212, 175, 55, ${particle.opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(16, 86, 24, ${particle.opacity})`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw metallic shine
        ctx.strokeStyle = `rgba(255, 255, 255, ${particle.opacity * 0.2})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(particle.x - particle.radius / 3, particle.y - particle.radius / 3, particle.radius / 2, 0, Math.PI * 2);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden section-industrial" style={{ backgroundColor: '#9D9E9F' }}>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />

      {/* Industrial Grid Pattern */}
      <div className="absolute inset-0 opacity-5 metal-texture" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Main Headline with Shimmer */}
          <div className="space-y-4">
            <div className="inline-block badge-industrial">
              <span>🏆 Líderes em Esferas de Aço</span>
            </div>
            <h1 className="shimmer-title text-5xl md:text-6xl lg:text-7xl leading-tight">
              Esferas para Polimento de Precisão
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed slide-up stagger-1 max-w-3xl mx-auto">
            Esferas e mídias para polimento de <span className="font-semibold text-primary">altíssima qualidade</span>. 
            Mais de <span className="font-semibold text-primary">70 anos</span> de tradição industrial com certificação ISO 9001.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 slide-up stagger-2 relative z-10">
            <div className="space-y-2 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-primary/10">
              <div className="text-3xl md:text-4xl font-bold text-primary">270+</div>
              <p className="text-sm text-gray-600">Avaliações Google</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-primary/10">
              <div className="text-3xl md:text-4xl font-bold text-primary">70+</div>
              <p className="text-sm text-gray-600">Anos de Tradição</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-primary/10">
              <div className="text-3xl md:text-4xl font-bold text-primary">24h</div>
              <p className="text-sm text-gray-600">Entrega Rápida</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 slide-up stagger-3 relative z-10">
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary text-lg px-8 py-4 pulse-glow relative z-10"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="btn-outline text-lg px-8 py-4 relative z-10"
            >
              Ver Produtos
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('produtos')}
              className="flex flex-col items-center gap-2 text-primary hover:scale-110 transition-transform"
            >
              <span className="text-sm font-semibold">Descubra mais</span>
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 divider-diagonal" />
    </section>
  );
}
