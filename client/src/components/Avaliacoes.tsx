import { Star, Award } from 'lucide-react';

export default function Avaliacoes() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const avaliacoes = [
    {
      id: 1,
      nome: 'Carlos Silva',
      empresa: 'Indústria de Autopeças XYZ',
      rating: 5,
      texto: 'Excelente qualidade das esferas. O polimento ficou perfeito e o atendimento foi impecável. Recomendo!',
      data: 'Há 2 meses',
    },
    {
      id: 2,
      nome: 'Maria Santos',
      empresa: 'Metalúrgica Premium',
      rating: 5,
      texto: 'Entrega rápida, produto de qualidade superior. A certificação ISO 9001 dá muita segurança.',
      data: 'Há 1 mês',
    },
    {
      id: 3,
      nome: 'João Oliveira',
      empresa: 'Fábrica de Componentes',
      rating: 5,
      texto: 'Trabalho com Emtecorp há 5 anos. Consistência e qualidade incomparáveis. Parceiros de confiança.',
      data: 'Há 3 semanas',
    },
    {
      id: 4,
      nome: 'Ana Costa',
      empresa: 'Polimentos Industriais Brasil',
      rating: 5,
      texto: 'Melhor relação custo-benefício do mercado. Os descontos por volume realmente fazem diferença.',
      data: 'Há 1 semana',
    },
    {
      id: 5,
      nome: 'Roberto Mendes',
      empresa: 'Acabamentos Finos Ltda',
      rating: 5,
      texto: 'Variedade de tamanhos e malhas impressionante. Sempre encontro exatamente o que preciso.',
      data: 'Há 5 dias',
    },
    {
      id: 6,
      nome: 'Fernanda Lima',
      empresa: 'Indústria de Precisão',
      rating: 5,
      texto: 'Suporte técnico excelente. Os especialistas ajudaram a escolher o melhor produto para nossa aplicação.',
      data: 'Ontem',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-gray-50 to-white section-industrial relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block badge-industrial">
            <span>🌟 Confiança Comprovada</span>
          </div>
          <h2 className="shimmer-title text-4xl md:text-5xl lg:text-6xl">
            Mais de 270 Avaliações
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos cliente dizem sobre a qualidade e o atendimento Emtecorp.
          </p>
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9/5 no Google</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {avaliacoes.map((avaliacao, index) => (
            <div
              key={avaliacao.id}
              className={`card-premium hover:shadow-2xl transition-all duration-300 slide-up stagger-${(index % 3) + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(avaliacao.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{avaliacao.texto}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900 precision-line">{avaliacao.nome}</p>
                <p className="text-sm text-gray-600">{avaliacao.empresa}</p>
                <p className="text-xs text-gray-500 mt-1">{avaliacao.data}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Confira todas as avaliações no <span className="font-semibold text-primary">Google</span>
          </p>
          <a
            href="https://www.google.com/search?q=emtecorp+avalia%C3%A7%C3%B5es#lrd=0x94b9bfaf552eb855:0x450f93bb2cc39bec,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            Ver Todas as Avaliações
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">270+</div>
            <p className="text-sm text-gray-600">Avaliações Verificadas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
            <p className="text-sm text-gray-600">Nota Média</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">1000+</div>
            <p className="text-sm text-gray-600">Clientes Ativos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
