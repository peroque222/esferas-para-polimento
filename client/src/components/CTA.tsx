export default function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden" style={{ marginTop: '2rem' }}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/manus-storage/tamboreamento_cta_be8d671d.png)',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 slide-up">
          {/* Headline */}
          <h2 className="shimmer-title-light text-4xl md:text-5xl lg:text-6xl">
            Esferas para Polimento Industrial de Excelência
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Nossas esferas e mídias são especialmente desenvolvidas para máquinas de tamboreamento e vibroacabamento, 
            garantindo <span className="font-semibold">acabamento impecável</span> em cada peça.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">99%</div>
              <p className="text-white/80">Taxa de Satisfação</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">1000+</div>
              <p className="text-white/80">Clientes Ativos</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">24h</div>
              <p className="text-white/80">Entrega Garantida</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contato')}
            className="btn-primary text-lg px-10 py-4 pulse-glow hover:scale-105 transition-all duration-300"
          >
            Solicitar Orçamento Agora
          </button>

          {/* Secondary Text */}
          <p className="text-white/70 text-sm">
            Fale com nossos especialistas e receba uma proposta personalizada em até 2 horas.
          </p>
        </div>
      </div>
    </section>
  );
}
