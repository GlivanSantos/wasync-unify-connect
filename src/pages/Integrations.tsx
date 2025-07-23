import { ExternalLink, Zap, Database, Shield, BarChart3, Code, Webhook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Integrations = () => {
  const integrationCategories = [
    {
      icon: Database,
      title: "CRM & Vendas",
      description: "Conecte com seus sistemas de relacionamento e vendas",
      integrations: [
        { name: "HubSpot", logo: "🚀", status: "Disponível" },
        { name: "Salesforce", logo: "☁️", status: "Disponível" },
        { name: "Pipedrive", logo: "🔄", status: "Disponível" },
        { name: "RD Station", logo: "📈", status: "Disponível" },
        { name: "Zoho CRM", logo: "📊", status: "Em breve" },
        { name: "ActiveCampaign", logo: "📧", status: "Disponível" }
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Integre com ferramentas de análise e business intelligence",
      integrations: [
        { name: "Google Analytics", logo: "📊", status: "Disponível" },
        { name: "Power BI", logo: "📈", status: "Disponível" },
        { name: "Tableau", logo: "📉", status: "Em breve" },
        { name: "Data Studio", logo: "📋", status: "Disponível" },
        { name: "Mixpanel", logo: "🎯", status: "Disponível" },
        { name: "Hotjar", logo: "🔥", status: "Disponível" }
      ]
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "APIs e webhooks para desenvolvedores",
      integrations: [
        { name: "REST API", logo: "🔌", status: "Disponível" },
        { name: "GraphQL", logo: "🔗", status: "Disponível" },
        { name: "Webhooks", logo: "⚡", status: "Disponível" },
        { name: "SDK JavaScript", logo: "🟨", status: "Disponível" },
        { name: "SDK Python", logo: "🐍", status: "Disponível" },
        { name: "SDK PHP", logo: "🐘", status: "Em breve" }
      ]
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Conecte com ferramentas de automação e workflow",
      integrations: [
        { name: "Zapier", logo: "⚡", status: "Disponível" },
        { name: "Make (Integromat)", logo: "🔄", status: "Disponível" },
        { name: "IFTTT", logo: "🤖", status: "Disponível" },
        { name: "Microsoft Flow", logo: "🌊", status: "Em breve" },
        { name: "Automate.io", logo: "🚀", status: "Disponível" },
        { name: "Workato", logo: "🔧", status: "Em breve" }
      ]
    },
    {
      icon: Shield,
      title: "Segurança & Compliance",
      description: "Integre com sistemas de segurança e conformidade",
      integrations: [
        { name: "OAuth 2.0", logo: "🔐", status: "Disponível" },
        { name: "SAML SSO", logo: "🛡️", status: "Disponível" },
        { name: "LDAP", logo: "📁", status: "Disponível" },
        { name: "Active Directory", logo: "🗂️", status: "Disponível" },
        { name: "Two-Factor Auth", logo: "🔒", status: "Disponível" },
        { name: "GDPR Compliance", logo: "⚖️", status: "Disponível" }
      ]
    },
    {
      icon: Webhook,
      title: "E-commerce",
      description: "Conecte com plataformas de e-commerce",
      integrations: [
        { name: "Shopify", logo: "🛍️", status: "Disponível" },
        { name: "WooCommerce", logo: "🏪", status: "Disponível" },
        { name: "Magento", logo: "🛒", status: "Em breve" },
        { name: "VTEX", logo: "🏬", status: "Disponível" },
        { name: "Mercado Livre", logo: "💼", status: "Disponível" },
        { name: "Amazon", logo: "📦", status: "Em breve" }
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
              <span className="text-gradient-brand">Integrações</span> Poderosas
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Conecte Vision Chat.ia com suas ferramentas favoritas e crie um ecossistema unificado de comunicação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="brand" size="lg">
                Ver documentação da API
              </Button>
              <Button variant="outline" size="lg">
                Solicitar integração customizada
              </Button>
            </div>
          </div>
        </section>

        {/* Integrations Categories */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {integrationCategories.map((category, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {category.integrations.map((integration, integrationIndex) => (
                      <div
                        key={integrationIndex}
                        className="flex items-center justify-between p-3 bg-background/30 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{integration.logo}</span>
                          <span className="text-sm font-medium text-foreground">
                            {integration.name}
                          </span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            integration.status === "Disponível"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {integration.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Desenvolva com nossa <span className="text-gradient-brand">API</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Nossa API RESTful robusta permite que você construa integrações personalizadas e automatize processos
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">99.9%</div>
                  <div className="text-sm text-foreground/60">Uptime SLA</div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-brand-secondary mb-2">&lt;100ms</div>
                  <div className="text-sm text-foreground/60">Latência média</div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-brand-tertiary mb-2">500+</div>
                  <div className="text-sm text-foreground/60">Endpoints</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="brand" size="lg" className="group">
                  Acessar documentação
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Obter chave da API
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Integrations;