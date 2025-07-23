const Footer = () => {
  const footerLinks = [
    { label: 'Wasync Omnichannel', href: '#omnichannel' },
    { label: 'Integrações', href: '#integrations' },
    { label: 'Recursos', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/ff89c713-1895-46b0-9cf1-9bb938336517.png" 
              alt="Wasync Logo" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-xl font-bold text-gradient-brand">Wasync</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-foreground/60 text-sm">
            © 2024 Wasync. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;