import { useState } from 'react';
import { Mail, Phone, User, Send, CheckCircle, Building } from 'lucide-react';

declare global {
  interface Window {
    RD_Station?: {
      conversion: (data: Record<string, unknown>) => void;
    };
  }
}

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    cnpj: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.nome.trim()) {
      setError('Nome é obrigatório');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Email válido é obrigatório');
      return false;
    }
    if (!formData.whatsapp.trim() || !/^\d{10,}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      setError('WhatsApp válido é obrigatório (mínimo 10 dígitos)');
      return false;
    }
    if (!formData.cnpj.trim() || formData.cnpj.replace(/\D/g, '').length !== 14) {
      setError('CNPJ válido é obrigatório (14 dígitos)');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Enviar para RD Station
      if (window.RD_Station) {
        window.RD_Station.conversion({
          email: formData.email,
          name: formData.nome,
          phone: formData.whatsapp,
          personal_phone: formData.whatsapp,
          cf_form_name: 'LP-de-Polimento',
          cf_cnpj: formData.cnpj,
          tags: ['LP-Polimento', 'Lead-Formulario'],
        });
      }

      // Simular envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Formulário enviado para RD Station:', formData);

      setIsSubmitted(true);
      setFormData({ nome: '', email: '', whatsapp: '', cnpj: '' });

      // Resetar após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Erro ao enviar formulário. Tente novamente.');
      console.error('Erro RD Station:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 section-industrial relative" style={{ backgroundColor: '#9D9E9F' }}>
      <div className="container">
        <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block badge-industrial">
            <span>Fale Conosco</span>
          </div>
          <h2 className="shimmer-title text-4xl md:text-5xl lg:text-6xl">
            Entre em Contato
          </h2>
          <p className="text-lg text-white">
            Preencha o formulário abaixo e nossos especialistas entrarão em contato em até 2 horas.
          </p>
        </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl flex items-start gap-4 animate-scale-in">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900">Mensagem Enviada com Sucesso!</h3>
                <p className="text-green-800 text-sm mt-1">
                  Obrigado por entrar em contato. Retornaremos em breve.
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-premium space-y-6 slide-up bg-white border-2 border-gray-200">
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Nome */}
            <div className="space-y-2">
              <label htmlFor="nome" className="block text-sm font-semibold text-gray-900">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-primary" />
                  Nome *
                </div>
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 input-focus"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email *
                </div>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@empresa.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 input-focus"
                required
              />
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-900">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  WhatsApp *
                </div>
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 input-focus"
                required
              />
            </div>

            {/* CNPJ */}
            <div className="space-y-2">
              <label htmlFor="cnpj" className="block text-sm font-semibold text-gray-900">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-4 h-4 text-primary" />
                  CNPJ *
                </div>
              </label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                placeholder="00.000.000/0000-00"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 input-focus"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </button>

            {/* Alternative Contact */}
            <div className="pt-4 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Ou entre em contato direto pelo WhatsApp:
              </p>
              <a
                href="https://wa.me/551621113666"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
              >
                <Phone className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
