import { ExternalLink, Code, Book, Download, Play, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Documentation = () => {
  const docSections = [
    {
      icon: Book,
      title: "Guia de Início Rápido",
      description: "Primeiros passos com Vision Chat.ia",
      items: [
        "Configuração inicial da conta",
        "Conectando seu primeiro canal",
        "Configurando chatbots básicos",
        "Gerenciando sua equipe"
      ]
    },
    {
      icon: Code,
      title: "Referência da API",
      description: "Documentação completa da API REST",
      items: [
        "Autenticação e segurança",
        "Endpoints de mensagens",
        "Webhooks e eventos",
        "SDKs e bibliotecas"
      ]
    },
    {
      icon: FileText,
      title: "Tutoriais Avançados",
      description: "Guides detalhados para recursos específicos",
      items: [
        "Automações complexas",
        "Integrações personalizadas",
        "Analytics avançados",
        "Configurações de segurança"
      ]
    }
  ];

  const resources = [
    {
      icon: Download,
      title: "Downloads",
      description: "SDKs, plugins e ferramentas",
      link: "#downloads"
    },
    {
      icon: Play,
      title: "Vídeo Tutoriais",
      description: "Aprenda visualmente com nossos vídeos",
      link: "#videos"
    },
    {
      icon: ExternalLink,
      title: "Status da API",
      description: "Monitore a saúde dos nossos serviços",
      link: "#status"
    }
  ];

  const codeExample = `// Exemplo: Enviando uma mensagem via API
const response = await fetch('https://api.visionchat.ia/v1/messages', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    channel: 'whatsapp',
    to: '+5511999999999',
    message: {
      type: 'text',
      content: 'Olá! Como posso ajudar você hoje?'
    }
  })
});

const result = await response.json();
console.log('Mensagem enviada:', result);`;

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
            <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-6">
              <Book className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Documentação</span> Técnica
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Tudo o que você precisa para integrar, configurar e maximizar o uso da Vision Chat.ia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="brand" size="lg">
                Começar agora
              </Button>
              <Button variant="outline" size="lg">
                Ver API Reference
              </Button>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {docSections.map((section, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-6">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {section.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    {section.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                        <span className="text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="brand-outline" className="w-full">
                    Acessar seção
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Comece a <span className="text-gradient-brand">integrar</span> em minutos
              </h2>
              <p className="text-lg text-foreground/80 text-center mb-8">
                Nossa API RESTful é simples e poderosa. Veja como é fácil enviar sua primeira mensagem:
              </p>
              
              <div className="glass-card rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Exemplo de Código</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <pre className="bg-background/50 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-foreground/90 whitespace-pre">
                    {codeExample}
                  </code>
                </pre>
              </div>

              <div className="text-center">
                <Button variant="brand" size="lg" className="group">
                  Obter chave da API
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Recursos <span className="text-gradient-brand">Adicionais</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient-brand">
                Links Rápidos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Guia de autenticação",
                  "Webhooks e eventos",
                  "Códigos de erro",
                  "Rate limits",
                  "Ambientes de teste",
                  "Changelog da API",
                  "Suporte para desenvolvedores",
                  "Comunidade no Discord"
                ].map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 glass-card rounded-lg hover:bg-background/20 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground/90">{link}</span>
                    <ExternalLink className="w-4 h-4 text-brand-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de ajuda?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Nossa equipe de desenvolvedores está pronta para ajudar você a implementar suas integrações
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="brand" size="lg">
                Falar com dev support
              </Button>
              <Button variant="outline" size="lg">
                Comunidade Discord
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;