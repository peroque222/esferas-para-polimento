import { 
  ShoppingCart, 
  TrendingDown, 
  Award, 
  Package, 
  Zap, 
  Globe, 
  History,
  CheckCircle
} from 'lucide-react';

export default function Beneficios() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const beneficios = [
    {
      id: 1,
      titulo: 'Compra Programada',
      descricao: 'Programe seus pedidos e ganhe descontos exclusivos em cada compra.',
      icon: ShoppingCart,
      cor: 'from-blue-50 to-blue-100',
      iconCor: 'text-blue-600',
    },
    {
      id: 2,
      titulo: 'Desconto no Volume',
      descricao: 'Quanto mais você compra, mais economiza. Descontos progressivos garantidos.',
      icon: TrendingDown,
      cor: 'from-green-50 to-green-100',
      iconCor: 'text-green-600',
    },
    {
      id: 3,
      titulo: 'Certificação ISO 9001',
      descricao: 'Produtos com qualidade garantida e certificação internacional de excelência.',
      icon: Award,
      cor: 'from-yellow-50 to-yellow-100',
      iconCor: 'text-yellow-600',
    },
    {
      id: 4,
      titulo: 'Amplo Estoque',
      descricao: 'Sempre pronto para atender. Estoque permanente de todos os produtos.',
      icon: Package,
      cor: 'from-purple-50 to-purple-100',
      iconCor: 'text-purple-600',
    },
    {
      id: 5,
      titulo: 'Envio em 24 Horas',
      descricao: 'Logística super rápida e eficiente. Seus pedidos saem no mesmo dia.',
      icon: Zap,
      cor: 'from-red-50 to-red-100',
      iconCor: 'text-red-600',
    },
    {
      id: 6,
      titulo: 'Atendemos o Brasil Todo',
      descricao: 'Não importa onde você esteja. Entregamos em qualquer lugar do país.',
      icon: Globe,
      cor: 'from-indigo-50 to-indigo-100',
      iconCor: 'text-indigo-600',
    },
    {
      id: 7,
      titulo: 'Tradição de 70+ Anos',
      descricao: 'Empresa na 3ª geração. Mais know-how, confiança e experiência.',
      icon: History,
      cor: 'from-orange-50 to-orange-100',
      iconCor: 'text-orange-600',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-white to-gray-50 section-industrial relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block badge-industrial">
            <span>✨ Sete Razões Poderosas</span>
          </div>
          <h2 className="shimmer-title text-4xl md:text-5xl lg:text-6xl">
            Porque Escolher Emtecorp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Razões poderosas para confiar em nós para suas necessidades de polimento industrial.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {beneficios.slice(0, 6).map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return (
              <div
                key={beneficio.id}
                className={`card-premium group hover:shadow-2xl transition-all duration-300 slide-up stagger-${(index % 3) + 1}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-primary/20`}>
                  <IconComponent className={`w-6 h-6 ${beneficio.iconCor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 precision-line">{beneficio.titulo}</h3>
                <p className="text-gray-700 leading-relaxed">{beneficio.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* Special Highlight - Tradição */}
        <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/80 rounded-lg p-8 md:p-12 text-white text-center space-y-4 slide-up relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 metal-texture" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <History className="w-8 h-8" />
              <span className="text-2xl font-bold">Tradição de 70+ Anos</span>
            </div>
            <p className="text-lg md:text-xl">
              Empresa na 3ª geração familiar. Mais de sete décadas de excelência, inovação e confiança no mercado de polimento industrial.
            </p>
            <p className="text-primary-foreground/90">
              Somos referência em qualidade, confiabilidade e atendimento excepcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
