import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Timer, TrendingUp, Activity } from 'lucide-react';

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Bem-vindo!</h1>
        <p className="text-lg text-muted-foreground">
          Demonstração prática de React Hooks - useState e useEffect
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 space-y-4 hover-elevate transition-all duration-300" data-testid="card-useeffect">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Timer className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">useEffect</h3>
              <p className="text-sm text-muted-foreground">Hook de efeito</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Demonstra o uso do useEffect para criar efeitos colaterais, como timers e limpeza de recursos.
          </p>
        </Card>

        <Card className="p-6 space-y-4 hover-elevate transition-all duration-300" data-testid="card-usestate">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">useState</h3>
              <p className="text-sm text-muted-foreground">Hook de estado</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Gerencia o estado do contador e outras variáveis reativas na aplicação.
          </p>
        </Card>

        <Card className="p-6 space-y-4 hover-elevate transition-all duration-300 md:col-span-2 lg:col-span-1" data-testid="card-navigation">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Componentes</h3>
              <p className="text-sm text-muted-foreground">Shadcn UI + Tailwind</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Utiliza Shadcn UI para componentes acessíveis e Tailwind para estilização moderna.
          </p>
        </Card>
      </div>

      <Card className="relative overflow-hidden" data-testid="card-counter">
        <div className="absolute inset-0 bg-gradient-purple-blue dark:bg-gradient-purple-blue-dark opacity-5"></div>
        <div className="relative p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Contador Automático</h2>
            <p className="text-muted-foreground">
              Este contador é atualizado automaticamente usando useEffect
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-purple-blue dark:bg-gradient-purple-blue-dark blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-card border-2 border-primary/20 rounded-2xl p-8 min-w-[200px]">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Valor Atual
                  </p>
                  <p
                    className="text-6xl font-mono font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent transition-transform duration-200"
                    key={counter}
                    data-testid="text-counter"
                  >
                    {counter}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Incremento a cada 500ms
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-muted-foreground">useEffect ativo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-muted-foreground">useState reativo</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
