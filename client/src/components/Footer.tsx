import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/emtecorp',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/emtecorpesferas/',
      color: 'hover:text-pink-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/emtecorp-esferas-e-componentes-ltda',
      color: 'hover:text-blue-700',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@emtecorpesferasecomponentes',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img 
              src="/manus-storage/ASSINATURABRANCOSEMFUNDO_7f69abee.png" 
              alt="Emtecorp Logo" 
              className="h-12 w-auto mb-2"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Mais de 70 anos de tradição em esferas para tamboreador e polimento. Qualidade garantida com certificação ISO 9001.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="text-gray-400 hover:text-primary transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+551621113666" className="text-gray-400 hover:text-primary transition-colors">
                  (16) 2111-3666
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:emtecorp@emtecorp.com.br" className="text-gray-400 hover:text-primary transition-colors">
                  emtecorp@emtecorp.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Ribeirão Preto, SP - Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg">Redes Sociais</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-sm text-gray-400 text-center md:text-left">
            <p>
              &copy; {currentYear} Emtecorp. Todos os direitos reservados. | Empresa na 3ª geração familiar
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=551621113666&text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+de+esfera+para+polimento&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-40 pulse-glow"
        title="Fale conosco no WhatsApp"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.783 1.149c-1.488.557-2.862 1.477-3.891 2.566C5.1 11.47 4.5 13.026 4.5 14.656c0 1.596.37 3.129 1.007 4.42l-1.052 3.851 3.947-1.067c1.26.736 2.786 1.148 4.333 1.148 5.537 0 10.032-4.387 10.032-9.814 0-2.646-.997-5.109-2.813-6.979-1.817-1.870-4.38-2.981-7.074-2.981" />
        </svg>
      </a>
    </footer>
  );
}
