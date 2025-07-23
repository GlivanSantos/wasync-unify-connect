import { 
  Smartphone, 
  Settings, 
  Lightbulb, 
  Palette, 
  Briefcase, 
  Headphones, 
  Link,
  Users
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: 'Plataforma responsiva',
      description: 'Acesse de qualquer dispositivo com interface adaptável'
    },
    {
      icon: Settings,
      title: 'Interface intuitiva',
      description: 'Design pensado para facilitar o uso diário'
    },
    {
      icon: Lightbulb,
      title: 'Soluções para Eficiência',
      description: 'Automações que economizam tempo e recursos'
    },
    {
      icon: Palette,
      title: 'Flexibilidade de Customização',
      description: 'Adapte a plataforma às suas necessidades'
    },
    {
      icon: Briefcase,
      title: 'Sistema Profissional',
      description: 'Ferramentas corporativas de alta qualidade'
    },
    {
      icon: Headphones,
      title: 'Suporte Dedicado',
      description: 'Equipe especializada para te ajudar sempre'
    },
    {
      icon: Link,
      title: 'Diversas integrações',
      description: 'Conecte com suas ferramentas favoritas'
    },
    {
      icon: Users,
      title: 'Colaboração em equipe',
      description: 'Trabalhe em conjunto de forma eficiente'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-secondary"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl animate-floating"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-2xl animate-floating-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Porque escolher a{' '}
            <span className="text-gradient-brand">Wasync?</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Descubra os benefícios que tornam nossa plataforma a escolha ideal para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;