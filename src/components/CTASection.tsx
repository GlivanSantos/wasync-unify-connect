import { ArrowRight, MessageSquare, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const platforms = [
    {
      icon: MessageSquare,
      title: 'Vision Chat Omnichannel',
      description: 'Centralize todas as conversas em um só lugar',
      features: ['WhatsApp Business', 'Instagram', 'Facebook', 'Telegram']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Campanhas automatizadas e personalizadas',
      features: ['Templates', 'Automação', 'Analytics', 'A/B Testing']
    },
    {
      icon: Globe,
      title: 'Chat Website',
      description: 'Atendimento em tempo real no seu site',
      features: ['Chat ao vivo', 'Chatbots', 'Integração CRM', 'Métricas']
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-brand-tertiary/20 rounded-full blur-xl animate-floating"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl animate-floating-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Descubra Plataformas Da{' '}
            <span className="text-gradient-brand">Vision Chat.ia</span>{' '}
            Para O Dia Dia De Sua Empresa.
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Soluções integradas para transformar a comunicação da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {platform.title}
                </h3>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white group/btn"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-brand-secondary hover:bg-brand-secondary/90 text-white text-lg px-8 py-4 group"
          >
            Começar agora gratuitamente
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;