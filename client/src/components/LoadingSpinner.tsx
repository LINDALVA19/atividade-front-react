import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]" data-testid="loading-spinner">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-purple-blue dark:bg-gradient-purple-blue-dark opacity-20 absolute"></div>
          <Loader2 className="w-16 h-16 text-primary animate-spin" />
        </div>
        <p className="text-sm text-muted-foreground font-medium" data-testid="text-loading">Carregando...</p>
      </div>
    </div>
  );
}
