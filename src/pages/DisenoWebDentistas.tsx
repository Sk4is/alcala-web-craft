import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Star, Users, Zap, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const DisenoWebDentistas = () => {
  return (
    <>
      <Helmet>
        <title>
          Diseño Web para Dentistas en Alcalá de Henares | Páginas Web Clínicas
          Dentales
        </title>
        <meta
          name="description"
          content="Diseño web profesional para dentistas y clínicas dentales en Alcalá de Henares. Cita online, accesibilidad sanitaria y SEO local incluidos."
        />
        <meta
          name="keywords"
          content="diseño web dentistas Alcalá de Henares, páginas web clínicas dentales, cita online dental"
        />
        <link
          rel="canonical"
          href="https://disenowebalcaladehenares.es/diseno-web-dentistas-alcala-de-henares.html"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Diseño Web para{" "}
                  <span className="text-blue-600">Dentistas</span> en Alcalá de
                  Henares
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Atrae más pacientes con una web médica profesional, rápida y
                  accesible. Especialistas en páginas web para clínicas dentales
                  en Alcalá de Henares.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contacto"
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg text-center"
                  >
                    Solicita tu web dental
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center mb-6">
                    <svg
                      className="h-8 w-8 text-blue-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21C12 21 4 13.5 4 8C4 5.23858 6.23858 3 9 3C10.6569 3 12 4.34315 12 6C12 4.34315 13.3431 3 15 3C17.7614 3 20 5.23858 20 8C20 13.5 12 21 12 21Z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900">
                      Clínica Dental
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-slate-700">Nuevos pacientes</span>
                      <span className="font-bold text-blue-600">+160%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-slate-700">Citas online</span>
                      <span className="font-bold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-slate-700">Satisfacción</span>
                      <span className="font-bold text-purple-600">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          {/* Introduction */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-loose text-gray-700 mb-8">
                Destacar como clínica dental en el entorno digital de Alcalá de
                Henares es un reto que requiere una estrategia profesional. El
                78% de los pacientes buscan información sobre dentistas en
                Google antes de pedir cita, y una presencia digital deficiente
                puede significar la pérdida de pacientes potenciales que acaban
                eligiendo la competencia.
              </p>
              <p className="text-lg leading-loose text-gray-700 mb-8">
                Una web optimizada para dentistas no es solo una tarjeta de
                presentación online, sino una herramienta estratégica que genera
                confianza, facilita el contacto y posiciona tu clínica como
                referente local. El diseño web para dentistas en Alcalá de
                Henares debe transmitir profesionalidad, ser completamente
                accesible y cumplir con la normativa sanitaria digital.
              </p>
            </div>
          </section>

          {/* Why dentists need professional web */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
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
                  <p className="text-gray-700 leading-loose">
                    El SEO local es fundamental para dentistas. Aparecer en las
                    primeras posiciones cuando buscan "dentista Alcalá de
                    Henares" puede incrementar las consultas hasta un 200%.
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
                  <p className="text-gray-700 leading-loose">
                    Una web profesional transmite seriedad y competencia médica.
                    Los pacientes confían más en clínicas con presencia digital
                    cuidada y información transparente.
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
                  <p className="text-gray-700 leading-loose">
                    Tu web trabaja 24/7 captando pacientes nuevos, facilitando
                    el contacto y proporcionando información sobre tratamientos
                    y especialidades.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key features for dental clinics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Funcionalidades clave para una clínica dental
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Especialidades médicas detalladas
                  </h3>
                  <p className="text-gray-700 leading-loose">
                    Secciones específicas para endodoncia, ortodoncia,
                    implantología, estética dental, etc. Con descripciones
                    accesibles que expliquen cada tratamiento de forma clara.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Equipo médico profesional
                  </h3>
                  <p className="text-gray-700 leading-loose">
                    Presentación del equipo odontológico con fotografías
                    accesibles, formación, experiencia y especialidades. Incluye
                    textos alternativos descriptivos para todas las imágenes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sistema de citas accesible
                  </h3>
                  <p className="text-gray-700 leading-loose">
                    Formularios de cita rápida totalmente accesibles, con
                    validación clara, compatible con lectores de pantalla y
                    optimizado para dispositivos móviles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility for medical clinics */}
          <section className="mb-16 bg-blue-50 p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Accesibilidad web para clínicas (obligatorio)
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              El cumplimiento de los estándares WCAG 2.1 AA no es opcional para
              webs médicas. Es una obligación legal y ética que garantiza que
              todos los pacientes, independientemente de sus capacidades, puedan
              acceder a información sanitaria vital.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Estándares técnicos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Contraste AA mínimo 4.5:1 en todo el contenido
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Etiquetado accesible en formularios con aria-describedby
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Navegación por teclado completa y funcional
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Botones con función clara (aria-label, role)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Experiencia inclusiva
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Compatible con lectores de pantalla (NVDA, JAWS)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Headings estructurados semánticamente
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Evitamos sliders automáticos o carouseles
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Tipografía clara, sans serif, 16px mínimo
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Preguntas frecuentes sobre webs para dentistas
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="rgpd">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">
                    ¿Cumple la web con la LOPD y RGPD?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 leading-loose">
                    Absolutamente. Todas nuestras webs para clínicas dentales
                    incluyen política de privacidad específica para el sector
                    sanitario, gestión de cookies conforme a la normativa,
                    formularios seguros con cifrado SSL y cumplimiento total del
                    RGPD para datos de pacientes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tiempo">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">
                    ¿Cuánto tarda el desarrollo de la web?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 leading-loose">
                    El desarrollo completo de una web para dentistas toma entre
                    3-4 semanas, incluyendo diseño personalizado, desarrollo,
                    optimización SEO, configuración de seguridad, pruebas de
                    accesibilidad y formación para el equipo de la clínica.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="actualizacion">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">
                    ¿Podré actualizar información de tratamientos?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 leading-loose">
                    Sí, tu web incluye un panel de administración intuitivo
                    donde podrás actualizar información sobre tratamientos,
                    precios, horarios, y añadir nuevo contenido. Te
                    proporcionamos formación completa y manual de uso específico
                    para clínicas dentales.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="citas">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">
                    ¿Es fácil para los pacientes reservar cita?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 leading-loose">
                    Muy fácil. Diseñamos formularios de cita optimizados para la
                    experiencia del paciente, completamente accesibles, con
                    validación en tiempo real y confirmación automática. También
                    incluimos integración con WhatsApp para consultas urgentes.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Final CTA */}
          <section
            id="contacto"
            className="text-center bg-gradient-to-r from-primary-600 to-primary-800 text-white p-12 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8">
              ¿Listo para captar más pacientes con tu web dental?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Solicita hoy tu web para clínica dental en Alcalá de Henares y
              gana visibilidad profesional con una presencia digital que
              transmita confianza médica y cumpla todos los estándares legales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3"
              >
                <a
                  href="mailto:info@disenowebalcaladehenares.es"
                  aria-label="Solicitar presupuesto para clínica dental"
                >
                  Consulta gratuita para dentistas
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DisenoWebDentistas;
