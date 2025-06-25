
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, ArrowRight, Zap, Users, Calendar } from "lucide-react";

const DisenoWebRestaurantes = () => {
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
            Diseño web profesional para restaurantes en Alcalá de Henares
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Aumenta las reservas de tu restaurante con una página web rápida, accesible y optimizada. 
            Especialistas en webs para hostelería en Alcalá de Henares.
          </p>
          <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 text-lg">
            <a href="#contacto">Solicita tu web para restaurante</a>
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              En el competitivo sector de la restauración en Alcalá de Henares, muchos establecimientos siguen 
              dependiendo únicamente de la ubicación física y las recomendaciones tradicionales. Sin embargo, 
              el comportamiento del consumidor ha cambiado radicalmente: el 84% de los comensales busca información 
              sobre restaurantes online antes de hacer una reserva.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Una página web profesional para restaurantes no es solo una vitrina digital, sino una herramienta 
              activa de marketing que puede multiplicar tus reservas, reducir dependencias de plataformas externas 
              y construir una relación directa con tus clientes. El diseño web para restaurantes en Alcalá de Henares 
              debe combinar atractivo visual, funcionalidad práctica y optimización técnica para convertir visitas en reservas.
            </p>
          </div>
        </section>

        {/* Why restaurants need a website */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ¿Por qué un restaurante necesita una web profesional en 2025?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary-600" />
                  Cambio en el comportamiento del comensal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Los comensales consultan Google, revisan cartas online y leen opiniones desde sus móviles antes 
                  de decidir dónde cenar. Una presencia digital sólida es fundamental para captar estos clientes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-accent-500" />
                  Visibilidad digital esencial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Aparecer en las primeras posiciones para "restaurante Alcalá de Henares" puede incrementar 
                  tus reservas significativamente. Sin web optimizada, pierdes frente a la competencia.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  Gestión moderna de reservas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Los clientes esperan poder reservar online las 24 horas. Un sistema integrado mejora la 
                  experiencia del cliente y optimiza la gestión de tu restaurante.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent-500" />
                  Reputación y confianza online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Una web profesional transmite calidad y seriedad. Los clientes confían más en restaurantes 
                  con presencia digital cuidada y información actualizada.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Web Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Beneficios de una web profesional para tu restaurante
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Más reservas sin comisiones</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reduce tu dependencia de plataformas como ElTenedor o TheFork. Con tu propia web para restaurante, 
                  generas reservas directas sin pagar comisiones, aumentando tu margen de beneficio por comensal.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Carta digital accesible y autogestionable</h3>
                <p className="text-gray-700 leading-relaxed">
                  Muestra tu carta completa con descripciones apetitosas, precios actualizados y opciones para 
                  alérgenos. Actualiza platos y precios fácilmente sin depender de terceros.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Galería visual optimizada</h3>
                <p className="text-gray-700 leading-relaxed">
                  Imágenes profesionales de tus platos, ambiente y eventos que despiertan el apetito y aumentan 
                  el deseo de visita. Optimizadas para carga rápida y correctamente etiquetadas para accesibilidad.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integración completa con Google y redes sociales</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conecta tu web con Google Maps para facilitar la localización, con Instagram para mostrar 
                  contenido visual automáticamente y con WhatsApp para atención inmediata.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Funcionalidades imprescindibles para tu web de restaurante
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Carta online completa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Carta digital con descripciones detalladas, precios actualizados, información de alérgenos 
                  y opción de descarga en PDF accesible.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sistema de reservas integrado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Formulario de reservas optimizado y accesible que permite a los clientes reservar mesa 
                  fácilmente desde cualquier dispositivo.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Galería gastronómica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Imágenes profesionales con textos alternativos descriptivos, optimizadas para velocidad 
                  de carga y diseñadas para despertar el apetito.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Localización accesible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Mapa interactivo con instrucciones claras, compatible con lectores de pantalla 
                  y optimizado para que te encuentren fácilmente en Alcalá de Henares.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Contacto directo optimizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Botón de llamada con etiqueta aria-label, chat o botón de WhatsApp con descripción 
                  funcional para consultas inmediatas.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Reseñas y testimonios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Opiniones de clientes con datos estructurados (schema.org) que mejoran tu 
                  posicionamiento y credibilidad en Google.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accessibility Focus */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Optimización de accesibilidad web (obligatoria)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estándares técnicos AA</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contraste mínimo 4.5:1 en todo el contenido</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Texto escalable, mínimo 16px, fuentes legibles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Navegación completa con teclado funcional</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Headings jerarquizados correctamente (H1 > H2 > H3)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experiencia inclusiva</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Formularios con label asociado y validación visible</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Imágenes con alt significativo, no decorativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Enlaces descriptivos ("Reservar mesa" no "aquí")</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Compatible con lectores de pantalla</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WPO Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            WPO - Web rápida, ligera y optimizada
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En el sector de la restauración, la velocidad de carga es crítica. Un retraso de 1 segundo puede 
              reducir las conversiones hasta un 20%. Nuestras webs están optimizadas para cargar en menos de 2 segundos.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimización técnica</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">Imágenes en WebP con lazy loading</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">Código limpio, estructura HTML semántica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">Uso mínimo de JavaScript innecesario</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">Diseño mobile-first para carga prioritaria</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Resultados garantizados</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-2xl font-bold text-green-600">+90</div>
                    <div className="text-sm text-gray-600">Google PageSpeed Score móvil</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600">&lt;2s</div>
                    <div className="text-sm text-gray-600">Tiempo de carga promedio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nuestro enfoque para webs de restaurantes
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-lg">1</span>
                </div>
                <CardTitle>Desarrollo personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Sin plantillas genéricas. Cada web se diseña específicamente para tu 
                  restaurante y tipo de cocina.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-lg">2</span>
                </div>
                <CardTitle>Soporte continuo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Mantenimiento técnico, actualizaciones y soporte para que te centres 
                  en lo que mejor sabes hacer: cocinar.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-lg">3</span>
                </div>
                <CardTitle>SEO local integrado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Optimización para aparecer en Google cuando busquen "restaurante 
                  Alcalá de Henares" desde el primer día.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-lg">4</span>
                </div>
                <CardTitle>Formación incluida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Te enseñamos a gestionar tu web, actualizar carta y contenido 
                  de forma autónoma y sencilla.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success Case */}
        <section className="mb-16 bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Caso de éxito: Restaurante La Alameda (Alcalá de Henares)
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El Restaurante La Alameda contactó con nosotros porque dependía completamente de plataformas 
                de reservas que les cobraban altas comisiones. Tras implementar su nueva web con sistema 
                de reservas propio, los resultados superaron todas las expectativas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xl">75%</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Incremento en reservas online</div>
                    <div className="text-gray-600 text-sm">En los primeros 4 meses</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">Top 1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">En búsquedas locales</div>
                    <div className="text-gray-600 text-sm">Para "restaurante mediterráneo Alcalá"</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-2 border-primary-200">
              <blockquote className="text-gray-700 italic mb-4">
                "Nuestra nueva web nos ha dado independencia total. Ya no pagamos comisiones y recibimos 
                más reservas que nunca. Los clientes nos encuentran fácilmente y el sistema es muy intuitivo."
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">- Ana García, Propietaria Restaurante La Alameda</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Preguntas frecuentes sobre diseño web para restaurantes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="carta">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Incluye carta digital completa?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Sí, desarrollamos una carta digital completa con descripciones detalladas, precios, información 
                  de alérgenos y categorización por tipos de platos. También incluimos la opción de descarga en 
                  PDF accesible y un panel para que puedas actualizar platos y precios fácilmente.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="reservas">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Puedo gestionar reservas desde la web?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Absolutamente. Integramos un sistema de reservas que permite a los clientes reservar mesa 
                  directamente desde tu web. Recibes notificaciones automáticas por email y puedes gestionar 
                  la disponibilidad desde un panel de control intuitivo.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="actualizar">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Cómo actualizo la carta y precios?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Tu web incluye un panel de administración muy sencillo donde puedes añadir, editar o eliminar 
                  platos, actualizar precios, cambiar descripciones y subir nuevas fotos. No necesitas conocimientos 
                  técnicos, y te proporcionamos formación completa.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="problemas">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">¿Y si ya tengo web pero no funciona bien?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Realizamos un análisis gratuito de tu web actual y te proponemos soluciones. Podemos migrar 
                  el contenido existente, mejorar el diseño, optimizar la velocidad y añadir funcionalidades 
                  como reservas online. También ofrecemos rediseño completo si es necesario.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ¿Por qué contratarnos en Alcalá de Henares?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Experiencia en hostelería</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Conocemos las necesidades específicas del sector restauración. Hemos trabajado con 
                  bares, restaurantes, gastrobares y cafeterías en Alcalá de Henares.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-600 font-bold">🍽️</span>
                </div>
                <CardTitle>Entendemos a tu cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Sabemos cómo piensa el comensal local, qué busca en una web de restaurante y cómo 
                  convertir visitas en reservas efectivas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Atención personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Soporte local directo en Alcalá de Henares. Reuniones presenciales, formación 
                  personalizada y respuesta inmediata cuando lo necesites.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contacto" className="text-center bg-gradient-to-r from-primary-600 to-primary-800 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para aumentar las reservas de tu restaurante?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Solicita tu web para restaurante en Alcalá de Henares y empieza a recibir más reservas con una 
            presencia digital que convertirá visitantes en comensales fieles.
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
                Especialistas en diseño web para restaurantes en Alcalá de Henares. 
                Webs rápidas, accesibles y optimizadas para aumentar reservas.
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

export default DisenoWebRestaurantes;
