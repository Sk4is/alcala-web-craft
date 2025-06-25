import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Scale,
  Briefcase,
  Gavel,
  Users,
  ShieldCheck,
  Gauge,
  MapPin,
  Handshake,
  Star,
  FileText,
  Phone,
  Clock,
  Monitor,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const DisenoWebAbogados: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Diseño Web para Abogados en Alcalá de Henares | Páginas Web Despachos
          Legales
        </title>
        <meta
          name="description"
          content="Diseño web especializado para abogados y despachos en Alcalá de Henares. Captación de clientes, RGPD, velocidad y SEO jurídico local."
        />
        <meta
          name="keywords"
          content="diseño web abogados Alcalá de Henares, páginas web despachos legales, SEO jurídico local"
        />
        <link
          rel="canonical"
          href="https://disenowebalcaladehenares.es/diseno-web-abogados-alcala-de-henares.html"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
        <Header />

        {/* ========================= HERO ========================= */}
        <section
          aria-labelledby="hero-title"
          className="pt-24 pb-16 bg-gradient-to-br from-amber-50 to-yellow-50"
        >
          <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto Hero */}
            <div>
              <h1
                id="hero-title"
                className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Diseño web para <span className="text-amber-700">Abogados</span>{" "}
                en Alcalá de Henares
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-[50ch]">
                En el mundo jurídico digitalizado de 2025, la primera impresión
                de tu despacho nace en la pantalla. Una
                <strong className="text-amber-800">
                  {" "}
                  web legal profesional
                </strong>{" "}
                debe ser impecable, accesible y cumplir con el RGPD para
                reflejar tu autoridad ante potenciales clientes. Como
                especialistas en{" "}
                <em>diseño web para abogados en Alcalá de Henares</em>, creamos
                sitios rápidos, sobrios y orientados a la captación de
                consultas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg"
                >
                  <a
                    href="#contacto"
                    aria-label="Solicitar diseño web legal profesional"
                  >
                    Solicita tu web legal
                  </a>
                </Button>
              </div>
            </div>

            {/* Panel estadísticas */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl shadow-2xl p-8 w-full lg:w-[90%]"
                aria-label="Indicadores de confianza"
              >
                <div className="flex items-center mb-6">
                  <Scale
                    className="h-8 w-8 text-amber-700 mr-3"
                    aria-hidden="true"
                  />
                  <h2 className="text-xl font-bold text-slate-900">
                    Confianza Medible
                  </h2>
                </div>
                <ul className="space-y-4" role="list">
                  <li className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <Briefcase
                        className="h-5 w-5 text-amber-700 mr-2"
                        aria-hidden="true"
                      />
                      Nuevas Consultas
                    </span>
                    <span className="font-bold text-amber-700">+150%</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <Phone
                        className="h-5 w-5 text-green-600 mr-2"
                        aria-hidden="true"
                      />
                      Llamadas Directas
                    </span>
                    <span className="font-bold text-green-600">75%</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <Star
                        className="h-5 w-5 text-yellow-600 mr-2"
                        aria-hidden="true"
                      />
                      Valoración Media
                    </span>
                    <span className="font-bold text-yellow-600">4.9/5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= MAIN ========================= */}
        <main
          className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-20"
          id="contenido-principal"
        >
          {/* Introducción */}
          <section
            aria-labelledby="intro-title"
            className="max-w-3xl mx-auto text-center"
          >
            <h2 id="intro-title" className="sr-only">
              Introducción – Autoridad jurídica online
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed">
              Cuando un potencial cliente busca un abogado en Alcalá de Henares,
              su primer filtro es la percepción digital: ¿la web transmite
              seriedad y dominio legal? ¿Cumple con la normativa vigente? Un
              diseño web especializado para abogados no es un lujo, es la llave
              que abre la puerta a tu reputación profesional en Internet.
              Nuestra misión es posicionarte en el{" "}
              <strong>top&nbsp;1 de Google</strong> y convertir visitantes en
              casos ganados.
            </p>
          </section>

          {/* 1 – Por qué necesita una web profesional */}
          <section aria-labelledby="h2-necesidad" className="space-y-6">
            <h2 id="h2-necesidad" className="text-3xl font-bold">
              ¿Por qué un abogado necesita una web profesional en 2025?
            </h2>
            <p>
              Las consultas legales comienzan en Google. Un estudio de mercado
              local muestra que el 83 % de usuarios comparan al menos tres
              despachos antes de llamar. Sin una web optimizada, tu bufete
              desaparece de ese proceso. Con un{" "}
              <em>diseño web para abogados en Alcalá de Henares</em> adaptado a
              SEO local y accesibilidad, generas confianza en menos de tres
              segundos.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Búsquedas legales se han duplicado en móviles; responsive es
                imprescindible.
              </li>
              <li>
                Primera impresión y reputación digital determinan la llamada.
              </li>
              <li>
                SEO local ofrece ventaja sobre despachos de gran tamaño en
                Madrid capital.
              </li>
            </ul>
          </section>

          {/* 2 – Beneficios */}
          <section aria-labelledby="h2-beneficios" className="space-y-6">
            <h2 id="h2-beneficios" className="text-3xl font-bold">
              Beneficios de tener una web optimizada legalmente
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Captación de clientes:</strong> páginas de servicio
                locales para cada especialidad impulsan las llamadas.
              </li>
              <li>
                <strong>Comunicación clara:</strong> describimos tus áreas de
                práctica con lenguaje comprensible.
              </li>
              <li>
                <strong>Contacto inmediato:</strong> botones de llamada,
                formulario accesible y WhatsApp Business.
              </li>
              <li>
                <strong>Imagen profesional:</strong> tipografía sobria, paleta
                marrón neutra y fotografía corporativa optimizada.
              </li>
            </ul>
          </section>

          {/* 3 – Funcionalidades clave */}
          <section aria-labelledby="h2-funcionalidades" className="space-y-8">
            <h2 id="h2-funcionalidades" className="text-3xl font-bold">
              Funcionalidades clave en una web para abogados
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Especialidades */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Gavel className="mr-2 text-amber-700" aria-hidden="true" />
                    Especialidades legales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Páginas optimizadas para laboral, penal, civil y mercantil con
                  marcado <code>schema.org</code>.
                </CardContent>
              </Card>

              {/* Equipo */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Users className="mr-2 text-amber-700" aria-hidden="true" />
                    Perfil del equipo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Fotografías con texto alternativo, experiencia detallada y
                  enlaces a LinkedIn.
                </CardContent>
              </Card>

              {/* Formulario accesible */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <FileText
                      className="mr-2 text-amber-700"
                      aria-hidden="true"
                    />
                    Formularios accesibles y seguros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Campos con <code>aria-label</code>, validación RGPD y cifrado
                  SSL.
                </CardContent>
              </Card>

              {/* Opiniones */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Star className="mr-2 text-amber-700" aria-hidden="true" />
                    Opiniones estructuradas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Reseñas con datos estructurados y widget de Google Reviews
                  integrado.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 4 – Accesibilidad */}
          <section aria-labelledby="h2-accesibilidad" className="space-y-6">
            <h2 id="h2-accesibilidad" className="text-3xl font-bold">
              Accesibilidad digital como requisito obligatorio
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Contraste mínimo AA garantizado en botones y textos.</li>
              <li>Tipografía clara con tamaño base 16&nbsp;px.</li>
              <li>Navegación por teclado y enfoque visible permanente.</li>
              <li>
                Formularios con etiquetas y <code>aria-describedby</code>.
              </li>
              <li>Encabezados jerárquicos y botones descriptivos.</li>
              <li>Compatibilidad probada con NVDA y JAWS.</li>
            </ul>
          </section>

          {/* 5 – WPO */}
          <section aria-labelledby="h2-wpo" className="space-y-6">
            <h2 id="h2-wpo" className="text-3xl font-bold">
              WPO – Rendimiento técnico para abogados
            </h2>
            <p>
              Optimizamos imágenes en WebP, minimizamos CSS/JS y garantizamos
              cargas en menos de dos segundos para obtener más de 90 puntos en
              PageSpeed móvil.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Lazy load de fotografías corporativas.</li>
              <li>CSS crítico inline y resto asíncrono.</li>
              <li>Eliminación de scripts innecesarios y uso de HTTP/2.</li>
              <li>Hosting optimizado y PHP 8.3.</li>
            </ul>
          </section>

          {/* 6 – Proceso de desarrollo */}
          <section aria-labelledby="h2-proceso" className="space-y-6">
            <h2 id="h2-proceso" className="text-3xl font-bold">
              Nuestro proceso de desarrollo web legal
            </h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Reunión inicial:</strong> definimos objetivos, público y
                especialidades.
              </li>
              <li>
                <strong>Diseño UX:</strong> wireframes sobrios y jerarquía de
                información clara.
              </li>
              <li>
                <strong>SEO, seguridad y RGPD:</strong> integrados desde el
                primer día.
              </li>
              <li>
                <strong>Formación:</strong> vídeo-tutorial para autogestión de
                contenidos.
              </li>
            </ol>
          </section>

          {/* 7 – Caso de éxito */}
          <section
            aria-labelledby="h2-caso"
            className="space-y-8 bg-amber-50 p-8 rounded-lg shadow-sm"
          >
            <h2 id="h2-caso" className="text-3xl font-bold text-center">
              Caso de éxito: Bufete Legal Henares
            </h2>
            <p className="text-center max-w-3xl mx-auto">
              Este despacho pasó de recibir 10 consultas mensuales a 35 en
              90&nbsp;días tras lanzar su nueva web. El tráfico orgánico subió
              un 220 % y la tasa de conversión alcanzó el 5,7 %. El secreto:
              estructura clara, páginas optimizadas por especialidad y llamada a
              la acción accesible en cada fase del recorrido de usuario.
            </p>
          </section>

          {/* 8 – FAQ */}
          <section aria-labelledby="h2-faq" className="space-y-6">
            <h2 id="h2-faq" className="text-3xl font-bold">
              Preguntas frecuentes sobre diseño web legal
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              aria-label="Preguntas frecuentes"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Cumple la web con las obligaciones legales?
                </AccordionTrigger>
                <AccordionContent>
                  Sí. Incluimos aviso legal, política de privacidad, banner de
                  cookies conforme RGPD y cláusulas de consentimiento explícito
                  en todos los formularios.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Qué diferencia hay frente a una web genérica?
                </AccordionTrigger>
                <AccordionContent>
                  Estructura jurídica específica, lenguaje claro, marcado de
                  datos legales y optimización SEO para consultas locales de
                  alto valor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Puedo añadir nuevas especialidades después?
                </AccordionTrigger>
                <AccordionContent>
                  Por supuesto. Diseñamos una arquitectura escalable para que
                  agregues páginas de práctica sin perder posicionamiento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Qué incluye el mantenimiento?
                </AccordionTrigger>
                <AccordionContent>
                  Actualizaciones de CMS, copias de seguridad diarias,
                  monitorización 24/7 y soporte técnico local.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* 9 – Por qué contratarnos */}
          <section aria-labelledby="h2-por-que" className="space-y-6">
            <h2 id="h2-por-que" className="text-3xl font-bold">
              ¿Por qué contratarnos en Alcalá de Henares?
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <MapPin
                  className="inline-block h-5 w-5 text-amber-700 mr-2"
                  aria-hidden="true"
                />
                Equipo local que conoce el tejido legal alcalaíno.
              </li>
              <li>
                <Handshake
                  className="inline-block h-5 w-5 text-amber-700 mr-2"
                  aria-hidden="true"
                />
                Trato profesional, informes claros y soporte real.
              </li>
              <li>
                <Gauge
                  className="inline-block h-5 w-5 text-amber-700 mr-2"
                  aria-hidden="true"
                />
                Dominio de SEO jurídico y accesibilidad AA.
              </li>
              <li>
                <ShieldCheck
                  className="inline-block h-5 w-5 text-amber-700 mr-2"
                  aria-hidden="true"
                />
                Compromiso con la seguridad y el RGPD desde el minuto uno.
              </li>
              <li>
                <Lightbulb
                  className="inline-block h-5 w-5 text-amber-700 mr-2"
                  aria-hidden="true"
                />
                Soluciones creativas pero siempre sobrias, alineadas con la
                imagen legal.
              </li>
            </ul>
          </section>
        </main>

        {/* CTA Final */}
        <section
          id="contacto"
          aria-labelledby="cta-title"
          className="text-center bg-gradient-to-r from-amber-700 to-amber-900 text-white p-12 rounded-lg max-w-[1250px] mx-auto mb-16"
        >
          <h2 id="cta-title" className="text-3xl font-bold mb-6">
            Solicita tu web legal profesional y comienza a captar nuevos
            clientes hoy
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Da el siguiente paso hacia la excelencia digital. Nuestro equipo
            transformará tu presencia online en un generador continuo de
            consultas legales.
          </p>
          <Button
            size="lg"
            className="bg-white text-amber-700 hover:bg-amber-100 px-8 py-4 rounded-xl font-semibold"
          >
            <a
              href="mailto:info@disenowebalcaladehenares.es"
              aria-label="Solicitar presupuesto diseño web para abogados"
            >
              Contactar ahora
            </a>
          </Button>
        </section>

        {/* PIE DE PÁGINA */}
        <Footer />
      </div>
    </>
  );
};

export default DisenoWebAbogados;
