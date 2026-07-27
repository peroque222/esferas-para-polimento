import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary shadow-lg`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="/manus-storage/ASSINATURABRANCOSEMFUNDO_7f69abee.png" 
            alt="Emtecorp Logo" 
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <button
            onClick={() => scrollToSection('produtos')}
            className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
          >
            Produtos
          </button>
          <button
            onClick={() => scrollToSection('beneficios')}
            className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('avaliacoes')}
            className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
          >
            Avaliações
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="btn-primary"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary animate-in slide-in-from-top-2 duration-300">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-left text-white hover:text-yellow-300 transition-colors py-2 font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-left text-white hover:text-yellow-300 transition-colors py-2 font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('avaliacoes')}
              className="text-left text-white hover:text-yellow-300 transition-colors py-2 font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary w-full text-center"
            >
              Contato
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
