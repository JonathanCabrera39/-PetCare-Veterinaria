import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cuidamos a tu mascota como{' '}
              <span className="text-primary">familia</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Servicios veterinarios profesionales las 24 horas. 
              Tu mejor amigo merece la mejor atención.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg">
                Ver Servicios
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-500">Años de experiencia</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">5000+</p>
                <p className="text-sm text-gray-500">Pacientes felices</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-500">Emergencias</p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
              <span className="text-9xl">🐕</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;