import { ArrowRight, Bot, MessageSquare, Mail, Phone, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Platforms = () => {
  const platforms = [
    {
      icon: MessageSquare,
      title: "Vision Chat Omnichannel",
      description: "Centralize todas as suas conversas em uma única plataforma inteligente",
      features: [
        "WhatsApp Business API",
        "Instagram Direct",
        "Facebook Messenger",
        "Telegram",
        "SMS",
        "Chat do Website"
      ],
      badge: "Mais Popular"
    },
    {
      icon: Bot,
      title: "Vision Bot AI",
      description: "Chatbots inteligentes com IA para atendimento automatizado 24/7",
      features: [
        "Processamento de linguagem natural",
        "Integração com GPT",
        "Respostas contextuais",
        "Aprendizado contínuo",
        "Transferência para humanos",
        "Analytics avançados"
      ]
    },
    {
      icon: Mail,
      title: "Vision Email Marketing",
      description: "Campanhas de email personalizadas com automação inteligente",
      features: [
        "Templates responsivos",
        "Segmentação avançada",
        "A/B Testing",
        "Automação de fluxos",
        "Métricas detalhadas",
        "Anti-spam garantido"
      ]
    },
    {
      icon: Phone,
      title: "Vision Call Center",
      description: "Central de atendimento telefônico integrada com gravação e análise",
      features: [
        "Discador automático",
        "Gravação de chamadas",
        "Análise de sentimento",
        "Distribuição inteligente",
        "Relatórios em tempo real",
        "Integração CRM"
      ]
    },
    {
      icon: Globe,
      title: "Vision Website Chat",
      description: "Widget de chat para seu site com personalização completa",
      features: [
        "Chat ao vivo",
        "Chatbot integrado",
        "Customização visual",
        "Proativo",
        "Offline messages",
        "Relatórios de conversão"
      ]
    },
    {
      icon: Zap,
      title: "Vision Automation",
      description: "Automações inteligentes para otimizar seus processos",
      features: [
        "Workflows visuais",
        "Triggers personalizados",
        "Integrações API",
        "Condições avançadas",
        "Execução em massa",
        "Monitoramento em tempo real"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-secondary"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl animate-floating"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-secondary/20 rounded-full blur-xl animate-floating-delayed"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossas <span className="text-gradient-brand">Plataformas</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Descubra todas as ferramentas que a Vision Chat.ia oferece para revolucionar a comunicação da sua empresa
            </p>
          </div>
        </section>

        {/* Platforms Grid */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  {platform.badge && (
                    <div className="absolute top-4 right-4 bg-brand-secondary text-white text-xs px-3 py-1 rounded-full">
                      {platform.badge}
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <platform.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {platform.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="brand-outline" className="w-full group/btn">
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para começar com <span className="text-gradient-brand">Vision Chat.ia</span>?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas plataformas podem transformar a comunicação da sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" variant="brand" className="group">
                  Começar agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Falar com consultor
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Platforms;