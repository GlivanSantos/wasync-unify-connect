import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background with gradient and organic shapes */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      
      {/* Organic floating shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl animate-floating"></div>
      <div className="absolute top-40 right-32 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl animate-floating-delayed"></div>
      <div className="absolute bottom-20 left-32 w-72 h-72 bg-brand-tertiary/15 rounded-full blur-3xl animate-floating"></div>
      <div className="absolute bottom-40 right-20 w-56 h-56 bg-brand-primary/15 rounded-full blur-3xl animate-floating-delayed"></div>
      
      {/* Back to home */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Voltar ao início</span>
      </Link>

      {/* Central login card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="glass-card rounded-2xl p-8 shadow-brand">
          {/* Logo and title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ff89c713-1895-46b0-9cf1-9bb938336517.png" 
                  alt="Vision Chat.ia Logo" 
                  className="w-16 h-16 rounded-full"
                />
                <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Entrar no <span className="text-gradient-brand">Vision Chat.ia</span>
            </h1>
            <p className="text-foreground/70">
              Acesse sua plataforma de comunicação
            </p>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/90">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border/30 text-foreground placeholder:text-foreground/50 focus:border-brand-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground/90">
                Senha
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 border-border/30 text-foreground placeholder:text-foreground/50 focus:border-brand-primary pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground/80 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-brand-primary bg-background/50 border-border/30 rounded focus:ring-brand-primary focus:ring-2"
                />
                <label htmlFor="remember" className="text-sm text-foreground/70">
                  Lembrar-me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-brand-primary hover:text-brand-primary/80 transition-colors"
              >
                Esqueceu-se da sua senha?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-brand-tertiary hover:bg-brand-tertiary/90 text-white font-medium py-3"
            >
              Entrar
            </Button>
          </form>

          {/* Additional links */}
          <div className="mt-6 pt-6 border-t border-border/20 text-center">
            <p className="text-foreground/70 text-sm">
              Não tem uma conta?{' '}
              <a href="#" className="text-brand-primary hover:text-brand-primary/80 transition-colors font-medium">
                Solicitar acesso
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;