import { 
  Zap, 
  Shield, 
  BarChart3, 
  Bot, 
  Globe, 
  Users, 
  Clock, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Features = () => {
  const featureCategories = [
    {
      title: "Comunicação Unificada",
      features: [
        {
          icon: Globe,
          title: "Omnichannel",
          description: "Centralize WhatsApp, Instagram, Facebook, Telegram e mais em uma única interface"
        },
        {
          icon: Users,
          title: "Colaboração em Equipe",
          description: "Trabalhe em equipe com atribuição automática, notas internas e transferências"
        },
        {
          icon: Clock,
          title: "Atendimento 24/7",
          description: "Chatbots inteligentes para atendimento contínuo, mesmo fora do horário comercial"
        }
      ]
    },
    {
      title: "Inteligência Artificial",
      features: [
        {
          icon: Bot,
          title: "Chatbots Avançados",
          description: "IA conversacional com processamento de linguagem natural e aprendizado contínuo"
        },
        {
          icon: BarChart3,
          title: "Analytics Inteligentes",
          description: "Análise de sentimento, insights automáticos e relatórios preditivos"
        },
        {
          icon: Zap,
          title: "Automação Inteligente",
          description: "Fluxos automatizados que se adaptam ao comportamento do cliente"
        }
      ]
    },
    {
      title: "Segurança & Compliance",
      features: [
        {
          icon: Shield,
          title: "Segurança Avançada",
          description: "Criptografia end-to-end, autenticação multifator e conformidade LGPD"
        },
        {
          icon: Headphones,
          title: "Suporte Especializado",
          description: "Suporte técnico 24/7 com SLA garantido e onboarding personalizado"
        }
      ]
    }
  ];

  const benefits = [
    "Redução de 60% no tempo de resposta",
    "Aumento de 40% na satisfação do cliente",
    "Economia de 50% em custos operacionais",
    "ROI positivo em até 3 meses",
    "99.9% de uptime garantido",
    "Conformidade total com LGPD"
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
              <span className="text-gradient-brand">Recursos</span> Avançados
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Descubra todas as funcionalidades que fazem da Vision Chat.ia a plataforma de comunicação mais completa do mercado
            </p>
          </div>
        </section>

        {/* Features by Category */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            {featureCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12 text-gradient-brand">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Resultados <span className="text-gradient-brand">Comprovados</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 glass-card rounded-lg p-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg text-foreground/80 mb-8">
                  Junte-se a mais de 10.000 empresas que já transformaram sua comunicação com Vision Chat.ia
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/login">
                    <Button size="lg" variant="brand" className="group">
                      Começar teste gratuito
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Agendar demonstração
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlight */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Dashboards <span className="text-gradient-brand">Inteligentes</span>
                  </h2>
                  <p className="text-lg text-foreground/80 mb-6">
                    Monitore todas as suas métricas de comunicação em tempo real com nossos dashboards personalizáveis e relatórios automáticos.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary" />
                      <span>Métricas em tempo real</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary" />
                      <span>Relatórios automáticos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary" />
                      <span>Análise preditiva</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary" />
                      <span>Alertas inteligentes</span>
                    </li>
                  </ul>
                  <Button variant="brand-outline">
                    Ver demonstração
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="glass-card rounded-2xl p-8 relative">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-brand-primary/20 rounded-lg p-4">
                          <div className="text-2xl font-bold text-brand-primary">1.2K</div>
                          <div className="text-sm text-foreground/60">Conversas/dia</div>
                        </div>
                        <div className="bg-brand-secondary/20 rounded-lg p-4">
                          <div className="text-2xl font-bold text-brand-secondary">98%</div>
                          <div className="text-sm text-foreground/60">Satisfação</div>
                        </div>
                        <div className="bg-brand-tertiary/20 rounded-lg p-4">
                          <div className="text-2xl font-bold text-brand-tertiary">45s</div>
                          <div className="text-sm text-foreground/60">Tempo médio</div>
                        </div>
                        <div className="bg-green-500/20 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-400">24/7</div>
                          <div className="text-sm text-foreground/60">Disponível</div>
                        </div>
                      </div>
                      
                      <div className="h-24 bg-gradient-brand/10 rounded-lg flex items-center justify-center">
                        <span className="text-foreground/50">📊 Gráfico de Performance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;