import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Zap, CheckCircle } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Auto-redirect para login após 10 segundos se o usuário não interagir
    const timer = setTimeout(() => {
      window.location.href = "/login";
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl lg:text-7xl font-montserrat font-bold leading-tight">
              <span className="premium-gradient bg-clip-text text-transparent">
                PFD System
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Pagamento Fracionado Dinâmico com controle total de contratos, entregas por etapa e liberação segura de valores
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="premium-gradient hover:scale-105 transition-transform text-lg px-8 py-6"
                onClick={() => window.location.href = "/login"}
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Redirecionamento automático em 10 segundos...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Controle Completo do Seu Projeto
          </h2>
          <p className="text-xl text-muted-foreground">
            Duas funções, um sistema. Máxima segurança e transparência.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contratante */}
          <Card className="p-8 card-gradient hover:shadow-lg transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-montserrat font-semibold">Para Contratantes</h3>
              
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Crie contratos com etapas personalizadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Aprove entregas com controle total</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Simule liberação de pagamentos por etapa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Histórico completo de todas as transações</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Contratado */}
          <Card className="p-8 card-gradient hover:shadow-lg transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-montserrat font-semibold">Para Contratados</h3>
              
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Visualize todos os contratos atribuídos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Envie entregas com upload de arquivos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Assinatura digital simples e segura</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Acompanhe o status de cada etapa</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-montserrat font-semibold">Pagamento Fracionado</h4>
            <p className="text-muted-foreground">
              Libere valores apenas quando cada etapa for aprovada, garantindo segurança total
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-montserrat font-semibold">Controle Digital</h4>
            <p className="text-muted-foreground">
              Assinaturas digitais e histórico completo de todas as interações do projeto
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-montserrat font-semibold">Transparência Total</h4>
            <p className="text-muted-foreground">
              Ambas as partes acompanham o progresso em tempo real com máxima transparência
            </p>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-secondary/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-montserrat font-bold mb-4">
            Pronto para revolucionar seus contratos?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se ao futuro dos pagamentos fracionados dinâmicos
          </p>
          <Button 
            size="lg" 
            className="premium-gradient hover:scale-105 transition-transform text-lg px-12 py-6"
            onClick={() => window.location.href = "/login"}
          >
            Entrar no Sistema
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
