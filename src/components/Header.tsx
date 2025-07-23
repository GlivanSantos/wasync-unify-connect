import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Plataformas', href: '#platforms' },
    { label: 'Integrações', href: '#integrations' },
    { label: 'Recursos', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Documentação', href: '#docs' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <img 
                src="/lovable-uploads/ff89c713-1895-46b0-9cf1-9bb938336517.png" 
                alt="Wasync Logo" 
                className="w-10 h-10 rounded-full"
              />
              <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
            </div>
            <span className="text-2xl font-bold text-gradient-brand">Wasync</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex space-x-3">
            <Button variant="outline" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="brand">
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border/20">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <Button variant="outline" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button variant="brand">
                  Contato
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;