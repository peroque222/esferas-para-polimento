import { useAuth } from '@/_core/hooks/useAuth';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Formulario from '@/components/Formulario';
import Produtos from '@/components/Produtos';
import Video from '@/components/Video';
import CTA from '@/components/CTA';
import Beneficios from '@/components/Beneficios';
import Avaliacoes from '@/components/Avaliacoes';
import Footer from '@/components/Footer';

/**
 * Landing Page Emtecorp
 * 
 * Design Philosophy: Industrial Sophistication
 * - Premium Industrial Minimalism com efeitos modernos
 * - Shimmer titles para destaque visual
 * - Animações suaves e responsivas
 * - Foco em conversão e confiança
 * 
 * Paleta de Cores:
 * - Primary: #105618 (Deep Forest Green)
 * - Accent: #D4AF37 (Metallic Gold)
 * - Secondary: #3B5998 (Steel Blue)
 * - Background: White/Gray 50
 */
export default function Home() {
  // The useAuth hook provides authentication state.
  // To implement login/logout, call logout(), or start login from an event
  // handler: onClick={() => startLogin()} (imported from "@/const"). Never call
  // startLogin() during render (no href={startLogin()}) — it mints a one-time
  // nonce cookie and must run only at the moment of navigation.
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Formulario />
        <Produtos />
        <Video />
        <CTA />
        <Beneficios />
        <Avaliacoes />
      </main>
      <Footer />
    </div>
  );
}
