
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, ArrowRight, Zap, Users, Calendar } from "lucide-react";

const DisenoWebGimnasios = () => {
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

      {/* Header Section */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Diseño web profesional para gimnasios en Alcalá de Henares
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Atrae más socios con una página web rápida, accesible y optimizada para reservas online. 
            Especialistas en webs para centros de fitness en Alcalá de Henares.
          </p>
          <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 text-lg">
            <a href="#contacto">Solicita tu web para gimnasio</a>
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              En la era digital actual, los gimnasios y centros de fitness en Alcalá de Henares enfrentan un reto común: 
              destacar entre la competencia y atraer nuevos socios. Muchos centros deportivos locales siguen dependiendo 
              únicamente del boca a boca o la publicidad tradicional, perdiendo oportunidades valiosas de captación online.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Una web profesional para gimnasios no es solo una tarjeta de presentación digital, sino una herramienta 
              activa de marketing que trabaja 24/7 para tu negocio. Con el diseño web adecuado, tu gimnasio en Alcalá 
              de Henares puede captar clientes potenciales mientras duermes, gestionar reservas automáticamente y 
              construir una reputación sólida online.
            </p>
          </div>
        </section>

        {/* Why a gym needs a website */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ¿Por qué un gimnasio necesita una página web hoy?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary-600" />
                  Cambios en hábitos digitales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  El 89% de las personas buscan gimnasios en Google antes de tomar una decisión. Los usuarios 
                  quieren ver horarios, tarifas, instalaciones y opiniones desde su móvil antes de visitarte físicamente.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-accent-500" />
                  SEO local = más clientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Aparecer en las primeras posiciones cuando alguien busca "gimnasio Alcalá de Henares" puede 
                  incrementar tus consultas hasta un 300%. El SEO local es fundamental para centros fitness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  Reservas online 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Permite que tus socios reserven clases dirigidas, sesiones de entrenamiento personal o uso 
                  de instalaciones las 24 horas, mejorando la experiencia del usuario y optimizando tu gestión.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent-500" />
                  Confianza y credibilidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Una web profesional transmite seriedad y profesionalidad. Los clientes potenciales confían 
                  más en gymnasios con presencia digital sólida y testimonios verificables online.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Beneficios clave de una web para gimnasios
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sistema de reservas automatizado</h3>
                <p className="text-gray-700 leading-relaxed">
                  Integra un sistema de reservas que permita a tus socios programar clases, entrenamientos personales 
                  y uso de instalaciones especiales. Reduce la carga administrativa y mejora la experiencia del usuario.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diseño responsive optimizado</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tu web se verá perfecta en móviles, tablets y ordenadores. Con más del 60% de búsquedas desde móvil, 
                  es esencial que tu sitio web de gimnasio funcione fluidamente en todos los dispositivos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integración total con redes sociales</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conecta tu web con Instagram para mostrar automáticamente fotos de entrenamientos, con WhatsApp 
                  para consultas rápidas y con Google Maps para facilitar que te encuentren en Alcalá de Henares.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mejor reputación y captación</h3>
                <p className="text-gray-700 leading-relaxed">
                  Muestra testimonios verificados, galerías de instalaciones y logros de tus socios. Una presencia 
                  digital sólida aumenta la confianza y facilita la decisión de nuevos miembros potenciales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Funcionalidades imprescindibles para tu web de gimnasio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Equipo de entrenadores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Presenta a tu equipo con fotos profesionales, especialidades y certificaciones. 
                  Incluye texto alternativo accesible para todas las imágenes.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tarifas y horarios claros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Tablas accesibles con precios transparentes y horarios actualizados. 
                  Información clara que facilite la toma de decisiones.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Formularios accesibles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Formularios de contacto y registro optimizados para todos los usuarios, 
                  incluyendo personas con discapacidades visuales o motoras.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Opiniones estructuradas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Testimonios con datos estructurados (schema.org) que mejoran tu 
                  posicionamiento y credibilidad en Google.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Galería optimizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Imágenes de instalaciones y actividades con textos alternativos 
                  descriptivos y carga optimizada para velocidad.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Integración WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Botón de contacto directo con WhatsApp para consultas inmediatas 
                  y atención personalizada a clientes potenciales.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accessibility Focus */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Enfoque en accesibilidad web (obligatorio)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estándares técnicos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contraste AA mínimo 4.5:1 en todos los elementos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tipografía legible mínimo 16px, fuentes sans-serif</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Navegación completa por teclado (Tab, Enter, Espacio)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">HTML semántico: main, nav, section, article</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experiencia inclusiva</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Formularios con etiquetas label asociadas correctamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Elementos con aria-label, role y foco visual claro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Botones descriptivos ("Reservar clase" no "clic aquí")</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Compatible con lectores de pantalla (NVDA, JAWS)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WPO Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            WPO - Optimización de rendimiento web
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Una web rápida es esencial para el éxito de tu gimnasio online. Los usuarios abandonan sitios que tardan 
              más de 3 segundos en cargar, y Google penaliza las webs lentas en sus resultados de búsqueda.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimizaciones técnicas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">Imágenes en formato WebP con lazy loading</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">HTML estructurado que minimiza el DOM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">Fuentes del sistema para carga instantánea</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">Evitamos carouseles y animaciones innecesarias</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Resultados medibles</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-2xl font-bold text-green-600">+90</div>
                    <div className="text-sm text-gray-600">Google PageSpeed Score</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600">&lt;2s</div>
                    <div className="text-sm text-gray-600">Tiempo de carga en móvil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nuestro proceso de diseño web para gimnasios
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-lg">1</span>
                </div>
                <CardTitle>Investigación y análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Estudiamos tu gimnasio, competencia local en Alcalá de Henares y 
                  objetivos específicos para crear una estrategia personalizada.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-lg">2</span>
                </div>
                <CardTitle>Diseño UX accesible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Creamos una experiencia de usuario intuitiva, accesible y optimizada 
                  para conversión, pensada específicamente para centros fitness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-lg">3</span>
                </div>
                <CardTitle>Desarrollo y optimización</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Implementamos la web con las mejores prácticas de SEO, accesibilidad 
                  y rendimiento desde el primer día de desarrollo.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success Case */}
        <section className="mb-16 bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Caso de éxito: CrossFit Alcalá
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                CrossFit Alcalá llegó a nosotros con una web obsoleta que no generaba leads. Tras implementar 
                nuestra solución integral de diseño web para gimnasios, los resultados fueron espectaculares.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xl">60%</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Aumento en reservas</div>
                    <div className="text-gray-600 text-sm">En los primeros 3 meses</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">Top 3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Posición en Google</div>
                    <div className="text-gray-600 text-sm">Para "CrossFit Alcalá de Henares"</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-2 border-primary-200">
              <blockquote className="text-gray-700 italic mb-4">
                "La nueva web ha transformado nuestro negocio. Ahora recibimos consultas todos los días 
                y nuestros socios pueden reservar clases fácilmente desde cualquier dispositivo."
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">- Carlos M., Propietario CrossFit Alcalá</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Preguntas frecuentes sobre diseño web para gimnasios
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="precio">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Cuánto cuesta una web para gimnasio?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Nuestras webs para gimnasios en Alcalá de Henares tienen un coste desde 1.200€, incluyendo 
                  diseño personalizado, sistema de reservas, optimización SEO y un año de mantenimiento. 
                  El precio final depende de las funcionalidades específicas que necesites.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="gestion">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Puedo gestionar la web yo mismo?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Absolutamente. Desarrollamos tu web con un panel de administración intuitivo donde podrás 
                  actualizar horarios, tarifas, fotos y contenido fácilmente. Además, te proporcionamos 
                  formación completa y soporte técnico continuo.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="responsive">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Está preparada para móviles y es accesible?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Sí, todas nuestras webs son responsive y cumplen los estándares WCAG 2.1 AA de accesibilidad. 
                  Esto significa que funcionan perfectamente en móviles, tablets y ordenadores, y son accesibles 
                  para personas con discapacidades. También garantizamos tiempos de carga ultrarrápidos.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="seo">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Incluye SEO local para aparecer en Google?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Por supuesto. Todas nuestras webs incluyen optimización SEO local específica para Alcalá de Henares. 
                  Configuramos Google My Business, implementamos schema markup, optimizamos contenido para palabras 
                  clave locales y te ayudamos a posicionarte en las primeras posiciones de Google.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ¿Por qué elegirnos para tu gimnasio en Alcalá de Henares?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Experiencia fitness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Llevamos más de 5 años creando webs específicamente para gimnasios y centros deportivos. 
                  Conocemos las necesidades únicas del sector fitness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-600 font-bold">📍</span>
                </div>
                <CardTitle>Soporte local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Estamos en Alcalá de Henares. Ofrecemos atención personalizada, reuniones presenciales 
                  y soporte técnico inmediato cuando lo necesites.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Resultados garantizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nuestras webs para gimnasios generan más leads, mejoran el posicionamiento y aumentan 
                  las reservas. Te acompañamos hasta conseguir tus objetivos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contacto" className="text-center bg-gradient-to-r from-primary-600 to-primary-800 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para llevar tu gimnasio al siguiente nivel?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Solicita tu diseño web para gimnasio en Alcalá de Henares y empieza a atraer más socios con una 
            presencia digital profesional, rápida y accesible que trabaje por ti las 24 horas del día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3">
              <a href="tel:+34918234567" aria-label="Llamar para solicitar presupuesto">
                Llamar ahora: 918 234 567
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3">
              <a href="mailto:info@disenowebalcaladehenares.es" aria-label="Enviar email para consulta">
                Solicitar presupuesto gratuito
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
                Especialistas en diseño web para gimnasios en Alcalá de Henares. 
                Webs rápidas, accesibles y optimizadas para atraer más socios.
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
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/diseno-web-restaurantes-alcala-de-henares" className="hover:text-white">Webs para restaurantes</a></li>
                <li><a href="/diseno-web-dentistas-alcala-de-henares" className="hover:text-white">Webs para dentistas</a></li>
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

export default DisenoWebGimnasios;
