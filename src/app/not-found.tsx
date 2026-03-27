import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-purple-600 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Página no encontrada</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-md mx-auto">
            Parece que la página que buscas no existe. Pero no te preocupes, podemos ayudarte a
            encontrar lo que necesitas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Volver al Inicio
          </Button>
          <Button href="/servicios" variant="outline" size="lg">
            Ver Servicios
          </Button>
        </div>
      </div>
    </main>
  );
}
