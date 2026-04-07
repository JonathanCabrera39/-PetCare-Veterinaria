import Card from '../ui/Card';

const services = [
  {
    icon: '🏥',
    title: 'Cirugía',
    description: 'Procedimientos quirúrgicos con tecnología de vanguardia y cuidado post-operatorio.',
  },
  {
    icon: '💉',
    title: 'Vacunación',
    description: 'Calendario completo de vacunas para proteger a tu mascota de enfermedades.',
  },
  {
    icon: '✂️',
    title: 'Peluquería',
    description: 'Servicio de grooming profesional para mantener a tu mascota limpia y saludable.',
  },
  {
    icon: '🚨',
    title: 'Emergencias 24h',
    description: 'Atención urgente disponible todos los días, a cualquier hora.',
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios veterinarios para mantener 
            a tu mascota sana y feliz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} hover padding="lg" className="text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;