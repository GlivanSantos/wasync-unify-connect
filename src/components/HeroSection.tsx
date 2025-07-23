import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-primary/20 rounded-full blur-xl animate-floating"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-brand-secondary/20 rounded-full blur-xl animate-floating-delayed"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-brand-tertiary/20 rounded-full blur-xl animate-floating"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-brand-primary/15 rounded-full blur-xl animate-floating-delayed"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Unifique todos métodos de{' '}
              <span className="text-gradient-brand">comunicação</span>{' '}
              em uma única plataforma
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-gradient-brand">
              Wasync
            </div>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Eleve a eficiência do dia a dia dos seus usuários com nossas plataformas
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              variant="brand"
              onClick={() => navigate('/login')}
              className="group"
            >
              Acessar sua plataforma
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative">
          <div className="glass-card rounded-2xl p-8 relative">
            {/* Simulated Dashboard */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Dashboard Wasync</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-brand-primary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-brand-primary">247</div>
                  <div className="text-sm text-foreground/60">Mensagens</div>
                </div>
                <div className="bg-brand-secondary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-brand-secondary">12</div>
                  <div className="text-sm text-foreground/60">Canais</div>
                </div>
                <div className="bg-brand-tertiary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-brand-tertiary">98%</div>
                  <div className="text-sm text-foreground/60">Uptime</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-primary rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">WhatsApp Business</div>
                    <div className="text-xs text-foreground/60">Conectado - 23 conversas ativas</div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-secondary rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Email Marketing</div>
                    <div className="text-xs text-foreground/60">Campanha ativa - 1.2k enviados</div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-tertiary rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Chat Website</div>
                    <div className="text-xs text-foreground/60">Online - 5 visitantes</div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl shadow-brand opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;