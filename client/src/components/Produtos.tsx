import { Sparkles, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function Produtos() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const produtos = [
    {
      id: 1,
      nome: 'Esferas de Aço Inox 304',
      descricao: 'Esferas de aço inoxidável 304 de alta precisão para polimento e acabamento industrial.',
      tamanhos: '2mm a 7mm',
      malhas: 'Diversas granulometrias',
      image: '/manus-storage/esfera-inox-304_7d5fbfb5.jpeg',
      cor: 'from-blue-50 to-blue-100',
    },
    {
      id: 2,
      nome: 'Mídias Inox',
      descricao: 'Mídias de polimento em aço inoxidável com formatos variados para diferentes aplicações.',
      tamanhos: '1mm a 2mm',
      malhas: 'Múltiplas opções',
      image: '/manus-storage/MIDIA_db1654c4.jpg',
      cor: 'from-green-50 to-green-100',
    },
    {
      id: 3,
      nome: 'Satélites para Polimento',
      descricao: 'Satélites especializados para tamboreamento e polimento de peças complexas.',
      tamanhos: '3mm X 5mm',
      malhas: 'Variadas',
      image: '/manus-storage/SATELITE_3e20969c.jpg',
      cor: 'from-purple-50 to-purple-100',
    },
    {
      id: 4,
      nome: 'Esferas de Vidro',
      descricao: 'Esferas de vidro de alta qualidade para aplicações de polimento delicado.',
      tamanhos: '1,5mm a 5mm',
      malhas: 'Diferentes densidades',
      image: '/manus-storage/esfera-de-vidro_1f522aff.jpeg',
      cor: 'from-amber-50 to-amber-100',
    },
  ];

  return (
    <section id="produtos" className="py-20 section-industrial relative overflow-hidden" style={{ backgroundColor: '#9D9E9F' }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden group">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
          style={{
            filter: 'brightness(0.3) contrast(1.1)',
          }}
        >
          <source src="/manus-storage/Cinematic_macro_shot_K_reso_80c026d3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 transition-all duration-500 group-hover:to-white/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block badge-industrial">
            <span className="text-white">📚 Catálogo Completo</span>
          </div>
          <h2 className="shimmer-title-white text-4xl md:text-5xl lg:text-6xl">
            Nossa Variedade
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Amplo catálogo de esferas e mídias para polimento com <span className="font-semibold text-white">mais de 270 tamanhos e malhas</span> diferentes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {produtos.map((produto, index) => (
            <div
              key={produto.id}
              className={`card-premium group hover:shadow-2xl transition-all duration-300 slide-up stagger-${(index % 4) + 1} bg-gradient-to-br ${produto.cor}`}
            >
              <div className="flex justify-center mb-4 cursor-pointer" onClick={() => setSelectedImage(produto.image)}>
                <img
                  src={produto.image}
                  alt={produto.nome}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{produto.nome}</h3>
              <p className="text-gray-700 text-sm mb-4">{produto.descricao}</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-semibold text-primary">Tamanhos:</span> {produto.tamanhos}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mb-12">
          <button
            onClick={() => scrollToSection('contato')}
            className="btn-catalog"
          >
            Solicitar catálogo completo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Feature Highlight */}
        <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/80 rounded-lg p-8 md:p-12 text-white text-center space-y-4 slide-up relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 metal-texture" />
          <div className="relative z-10">
            <p className="text-lg md:text-xl">
              Encontre o tamanho perfeito para sua aplicação específica de polimento.
            </p>
            <p className="text-primary-foreground/80">
              Mais de <span className="font-semibold">100 Variações</span> disponíveis em estoque.
            </p>
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Produto ampliado"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
              title="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
