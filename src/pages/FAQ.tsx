import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Geral",
      questions: [
        {
          question: "O que é Vision Chat.ia?",
          answer: "Vision Chat.ia é uma plataforma completa de comunicação empresarial que unifica todos os canais de atendimento (WhatsApp, Instagram, Facebook, email, telefone) em uma única interface inteligente, potencializada por IA."
        },
        {
          question: "Como funciona o período de teste gratuito?",
          answer: "Oferecemos 14 dias de teste gratuito com acesso completo a todas as funcionalidades. Não é necessário cartão de crédito para começar. Após o período, você pode escolher o plano que melhor se adequa às suas necessidades."
        },
        {
          question: "Quais canais de comunicação são suportados?",
          answer: "Suportamos WhatsApp Business, Instagram Direct, Facebook Messenger, Telegram, SMS, email, chat do website, telefone e muito mais. Estamos constantemente adicionando novos canais baseados na demanda dos nossos clientes."
        },
        {
          question: "A plataforma é segura?",
          answer: "Sim, utilizamos criptografia end-to-end, autenticação multifator, backups automáticos e somos totalmente conformes com a LGPD. Seus dados e os de seus clientes estão completamente protegidos."
        }
      ]
    },
    {
      title: "Técnico",
      questions: [
        {
          question: "Como configurar o WhatsApp Business?",
          answer: "A configuração é simples: 1) Conecte seu número do WhatsApp Business, 2) Verificamos sua conta, 3) Configure suas mensagens automáticas, 4) Pronto! Todo o processo leva menos de 10 minutos com nosso assistente."
        },
        {
          question: "Posso integrar com meu CRM atual?",
          answer: "Sim! Temos integrações nativas com os principais CRMs (HubSpot, Salesforce, Pipedrive, RD Station) e uma API robusta para integrações customizadas. Nossa equipe técnica pode ajudar na implementação."
        },
        {
          question: "Como funcionam os chatbots com IA?",
          answer: "Nossos chatbots utilizam processamento de linguagem natural avançado para entender o contexto das conversas. Eles aprendem continuamente com as interações e podem ser treinados com informações específicas da sua empresa."
        },
        {
          question: "Há limite de mensagens?",
          answer: "Não há limite de mensagens nos nossos planos. Você paga apenas pelo número de usuários ativos e canais conectados. Oferecemos escalabilidade completa para empresas de todos os tamanhos."
        }
      ]
    },
    {
      title: "Planos e Preços",
      questions: [
        {
          question: "Quais são os planos disponíveis?",
          answer: "Oferecemos planos Starter (até 2 usuários), Professional (até 10 usuários), Business (até 50 usuários) e Enterprise (usuários ilimitados). Cada plano inclui diferentes funcionalidades e níveis de suporte."
        },
        {
          question: "Posso mudar de plano a qualquer momento?",
          answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de cobrança, e você receberá crédito proporcional se necessário."
        },
        {
          question: "Há desconto para pagamento anual?",
          answer: "Sim, oferecemos 20% de desconto para pagamentos anuais e 10% para pagamentos semestrais. Também temos descontos especiais para ONGs e startups."
        },
        {
          question: "Posso cancelar minha assinatura?",
          answer: "Sim, você pode cancelar sua assinatura a qualquer momento. Não há taxas de cancelamento e você continuará tendo acesso até o final do período pago."
        }
      ]
    },
    {
      title: "Suporte",
      questions: [
        {
          question: "Que tipo de suporte vocês oferecem?",
          answer: "Oferecemos suporte por chat, email e telefone. Planos Professional e acima incluem suporte prioritário 24/7. Também temos uma base de conhecimento completa e treinamentos online."
        },
        {
          question: "Vocês oferecem treinamento?",
          answer: "Sim! Todos os planos incluem onboarding personalizado. Oferecemos também treinamentos avançados, webinars regulares e certificações para sua equipe."
        },
        {
          question: "Como migrar dados de outra plataforma?",
          answer: "Nossa equipe de migração ajuda a transferir todos os seus dados (conversas, contatos, histórico) de forma segura e sem perda de informações. O processo é gratuito para todos os planos."
        },
        {
          question: "Há SLA de uptime?",
          answer: "Sim, garantimos 99.9% de uptime com SLA formal para todos os planos pagos. Em caso de indisponibilidade, oferecemos créditos proporcionais como compensação."
        }
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
            <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Perguntas <span className="text-gradient-brand">Frequentes</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Encontre respostas para as dúvidas mais comuns sobre Vision Chat.ia
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gradient-brand">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div
                        key={itemIndex}
                        className="glass-card rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background/20 transition-colors"
                        >
                          <span className="font-semibold text-foreground pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="pt-2 border-t border-border/20">
                              <p className="text-foreground/80 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não encontrou sua resposta?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida específica sobre Vision Chat.ia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="brand" size="lg">
                Falar com suporte
              </Button>
              <Button variant="outline" size="lg">
                Agendar demonstração
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold mb-2">Chat ao vivo</h3>
                <p className="text-sm text-foreground/70">Resposta em poucos minutos</p>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-foreground/70">Resposta em até 4 horas</p>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-sm text-foreground/70">Suporte 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;