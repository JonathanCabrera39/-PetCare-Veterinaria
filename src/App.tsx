import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ServicesGrid from './components/sections/ServicesGrid';
import LoginWidget from './components/auth/LoginWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        
        {/* Sección Login */}
        <section id="login" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Área de Clientes
              </h2>
              <p className="text-lg text-gray-600">
                Accedé a tu historial clínico y turnos online
              </p>
            </div>
            <LoginWidget/>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 PetCare Veterinaria. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;