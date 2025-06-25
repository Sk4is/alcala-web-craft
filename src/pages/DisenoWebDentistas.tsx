
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, Users, Zap, Calendar } from "lucide-react";

const DisenoWebDentistas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary-600">
              <a href="/" aria-label="Volver a la página principal">DiseñoWebAlcala.es</a>
            </div>
            <div className="hidden md:block">
              <Button asChild variant="default">
                <a href="/contacto">Contactar ahora</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Diseño web para dentistas en Alcalá de Henares
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Atrae más pacientes con una web médica profesional, rápida y accesible. 
            Especialistas en páginas web para clínicas dentales en Alcalá de Henares.
          </p>
          <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 text-lg">
            <a href="#contacto">Solicita tu web dental</a>
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Destacar como clínica dental en el entorno digital de Alcalá de Henares es un reto que requiere 
              una estrategia profesional. El 78% de los pacientes buscan información sobre dentistas en Google 
              antes de pedir cita, y una presencia digital deficiente puede significar la pérdida de pacientes 
              potenciales que acaban eligiendo la competencia.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Una web optimizada para dentistas no es solo una tarjeta de presentación online, sino una herramienta 
              estratégica que genera confianza, facilita el contacto y posiciona tu clínica como referente local. 
              El diseño web para dentistas en Alcalá de Henares debe transmitir profesionalidad, ser completamente 
              accesible y cumplir con la normativa sanitaria digital.
            </p>
          </div>
        </section>

        {/* Why dentists need professional web */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ¿Por qué un dentista necesita una web profesional?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary-600" />
                  Búsqueda por proximidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  El SEO local es fundamental para dentistas. Aparecer en las primeras posiciones cuando 
                  buscan "dentista Alcalá de Henares" puede incrementar las consultas hasta un 200%.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent-500" />
                  Confianza desde el primer clic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Una web profesional transmite seriedad y competencia médica. Los pacientes confían más 
                  en clínicas con presencia digital cuidada y información transparente.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  Captación continua
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Tu web trabaja 24/7 captando pacientes nuevos, facilitando el contacto y proporcionando 
                  información sobre tratamientos y especialidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key features for dental clinics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Funcionalidades clave para una clínica dental
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Especialidades médicas detalladas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Secciones específicas para endodoncia, ortodoncia, implantología, estética dental, etc. 
                  Con descripciones accesibles que expliquen cada tratamiento de forma clara.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipo médico profesional</h3>
                <p className="text-gray-700 leading-relaxed">
                  Presentación del equipo odontológico con fotografías accesibles, formación, experiencia 
                  y especialidades. Incluye textos alternativos descriptivos para todas las imágenes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sistema de citas accesible</h3>
                <p className="text-gray-700 leading-relaxed">
                  Formularios de cita rápida totalmente accesibles, con validación clara, compatible con 
                  lectores de pantalla y optimizado para dispositivos móviles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility for medical clinics */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Accesibilidad web para clínicas (obligatorio)
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            El cumplimiento de los estándares WCAG 2.1 AA no es opcional para webs médicas. Es una obligación 
            legal y ética que garantiza que todos los pacientes, independientemente de sus capacidades, 
            puedan acceder a información sanitaria vital.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estándares técnicos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contraste AA mínimo 4.5:1 en todo el contenido</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Etiquetado accesible en formularios con aria-describedby</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Navegación por teclado completa y funcional</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Botones con función clara (aria-label, role)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experiencia inclusiva</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Compatible con lectores de pantalla (NVDA, JAWS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Headings estructurados semánticamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Evitamos sliders automáticos o carouseles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tipografía clara, sans serif, 16px mínimo</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Preguntas frecuentes sobre webs para dentistas
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="rgpd">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Cumple la web con la LOPD y RGPD?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Absolutamente. Todas nuestras webs para clínicas dentales incluyen política de privacidad 
                  específica para el sector sanitario, gestión de cookies conforme a la normativa, formularios 
                  seguros con cifrado SSL y cumplimiento total del RGPD para datos de pacientes.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tiempo">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Cuánto tarda el desarrollo de la web?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  El desarrollo completo de una web para dentistas toma entre 3-4 semanas, incluyendo diseño 
                  personalizado, desarrollo, optimización SEO, configuración de seguridad, pruebas de accesibilidad 
                  y formación para el equipo de la clínica.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="actualizacion">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Podré actualizar información de tratamientos?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Sí, tu web incluye un panel de administración intuitivo donde podrás actualizar información 
                  sobre tratamientos, precios, horarios, y añadir nuevo contenido. Te proporcionamos formación 
                  completa y manual de uso específico para clínicas dentales.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="citas">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Es fácil para los pacientes reservar cita?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Muy fácil. Diseñamos formularios de cita optimizados para la experiencia del paciente, 
                  completamente accesibles, con validación en tiempo real y confirmación automática. 
                  También incluimos integración con WhatsApp para consultas urgentes.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Final CTA */}
        <section id="contacto" className="text-center bg-gradient-to-r from-primary-600 to-primary-800 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para captar más pacientes con tu web dental?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Solicita hoy tu web para clínica dental en Alcalá de Henares y gana visibilidad profesional 
            con una presencia digital que transmita confianza médica y cumpla todos los estándares legales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3">
              <a href="tel:+34918234567" aria-label="Llamar para solicitar presupuesto dental">
                Llamar ahora: 918 234 567
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3">
              <a href="mailto:info@disenowebalcaladehenares.es" aria-label="Solicitar presupuesto para clínica dental">
                Consulta gratuita para dentistas
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DiseñoWebAlcala.es</h3>
              <p className="text-gray-300">
                Especialistas en diseño web para dentistas en Alcalá de Henares. 
                Webs médicas profesionales, rápidas y accesibles.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 918 234 567</p>
                <p>✉️ info@disenowebalcaladehenares.es</p>
                <p>📍 Calle Mayor, 45 - Alcalá de Henares</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Otros servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/diseno-web-gimnasios-alcala-de-henares" className="hover:text-white">Webs para gimnasios</a></li>
                <li><a href="/diseno-web-restaurantes-alcala-de-henares" className="hover:text-white">Webs para restaurantes</a></li>
                <li><a href="/diseno-web-abogados-alcala-de-henares" className="hover:text-white">Webs para abogados</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DiseñoWebAlcala.es - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DisenoWebDentistas;
