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
  Code,
  LayoutTemplate,
  Server,
  ShieldCheck,
  TrendingUp,
  Gauge,
  MapPin,
  Handshake,
  Star,
  Layers,
  FileText,
  Settings2,
  Terminal,
  Monitor,
  Zap,
  Cpu,
  Phone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const DisenoWebDesarrollo: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Desarrollo Web Profesional en Alcalá de Henares | Webs a Medida y Alto
          Rendimiento
        </title>
        <meta
          name="description"
          content="Agencia local de desarrollo web en Alcalá de Henares: sitios rápidos, seguros y accesibles con SEO y WPO incluidos. Código a medida para PYMES y startups."
        />
        <meta
          name="keywords"
          content="desarrollo web Alcalá de Henares, webs a medida, desarrollo profesional, agencia desarrollo web"
        />
        <link
          rel="canonical"
          href="https://disenowebalcaladehenares.es/diseno-web-desarrollo-web-alcala-de-henares.html"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 scroll-smooth">
        <Header />

        {/* ========================= HERO ========================= */}
        <section
          aria-labelledby="hero-title"
          className="pt-24 pb-16 bg-gradient-to-br from-rose-50 to-red-50"
        >
          <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto Hero */}
            <div>
              <h1
                id="hero-title"
                className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              >
                <span className="text-red-700">Desarrollo web profesional</span>{" "}
                en Alcalá de Henares
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-[50ch]">
                No basta con una web bonita: tu negocio necesita una plataforma
                sólida, rápida y accesible que convierta visitas en
                oportunidades. Con nuestro{" "}
                <strong className="text-red-800">
                  desarrollo web en Alcalá de Henares
                </strong>{" "}
                escribimos código a medida, optimizado para buscadores y
                diseñado para crecer contigo. Deja atrás plantillas genéricas y
                descubre la diferencia entre un sitio atractivo y un sistema
                digital que impulsa resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800 transition-all duration-300 shadow-lg"
                >
                  <a
                    href="#contacto"
                    aria-label="Solicitar desarrollo web profesional"
                  >
                    Solicita tu proyecto
                  </a>
                </Button>
              </div>
            </div>

            {/* Panel estadísticas */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl shadow-2xl p-8 w-full lg:w-[90%]"
                aria-label="Indicadores técnicos"
              >
                <div className="flex items-center mb-6">
                  <Code
                    className="h-8 w-8 text-red-700 mr-3"
                    aria-hidden="true"
                  />
                  <h2 className="text-xl font-bold text-slate-900">
                    Resultados Medibles
                  </h2>
                </div>
                <ul className="space-y-4" role="list">
                  <li className="flex justify-between items-center p-3 bg-rose-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <Gauge
                        className="h-5 w-5 text-red-700 mr-2"
                        aria-hidden="true"
                      />
                      PageSpeed Móvil
                    </span>
                    <span className="font-bold text-red-700">97/100</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <TrendingUp
                        className="h-5 w-5 text-red-600 mr-2"
                        aria-hidden="true"
                      />
                      Conversión
                    </span>
                    <span className="font-bold text-red-600">+50 %</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <ShieldCheck
                        className="h-5 w-5 text-yellow-600 mr-2"
                        aria-hidden="true"
                      />
                      Cumplimiento WCAG
                    </span>
                    <span className="font-bold text-yellow-600">AA</span>
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
              Introducción – Diferencia entre diseño y desarrollo web
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed">
              El <strong>desarrollo web</strong> va más allá de colores y
              tipografías: implica arquitectura de la información, bases de
              datos eficientes, seguridad, accesibilidad y un rendimiento que
              mantenga a tu audiencia. Desde nuestro estudio en Alcalá de
              Henares unimos diseño UX profesional con <em>backend</em>
              robusto, cumpliendo las pautas WCAG 2.1 AA y las mejores prácticas
              WPO. Eso se traduce en webs que cargan en menos de dos segundos y
              generan confianza desde el primer clic.
            </p>
          </section>

          {/* 1 – Por qué necesitas desarrollo profesional */}
          <section aria-labelledby="h2-razones" className="space-y-6">
            <h2 id="h2-razones" className="text-3xl font-bold">
              ¿Por qué necesitas desarrollo web profesional y no solo una web
              bonita?
            </h2>
            <p>
              Una plantilla puede verse bien, pero carece del código optimizado
              y la estrategia que tu proyecto requiere. Desarrollar a medida
              significa partir de tus objetivos de negocio: velocidad,
              posicionamiento, seguridad y adaptabilidad. El resultado: una
              plataforma preparada para crecer y competir.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Diseño visual ≠ desarrollo funcional: conectamos ambos mundos
                para lograr impacto y rendimiento.
              </li>
              <li>
                SEO, rendimiento y accesibilidad incorporados en el código, no
                añadidos después.
              </li>
              <li>
                Arquitectura modular que permite nuevas funcionalidades sin
                rehacer la web.
              </li>
            </ul>
          </section>

          {/* 2 – Servicios que ofrecemos */}
          <section aria-labelledby="h2-servicios" className="space-y-8">
            <h2 id="h2-servicios" className="text-3xl font-bold">
              Servicios de desarrollo web que ofrecemos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Corporativas */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <LayoutTemplate
                      className="mr-2 text-red-700"
                      aria-hidden="true"
                    />
                    Webs corporativas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Páginas para PYMES que necesitan transmitir profesionalidad,
                  con panel de administración sencillo.
                </CardContent>
              </Card>

              {/* Institucionales */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Layers className="mr-2 text-red-700" aria-hidden="true" />
                    Institucionales & educativas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Sitios accesibles AA, multilingües y compatibles con normativa
                  de transparencia pública.
                </CardContent>
              </Card>

              {/* Profesionales independientes */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <FileText
                      className="mr-2 text-red-700"
                      aria-hidden="true"
                    />
                    Webs para autónomos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Presencia digital minimalista pero potente: landing pages y
                  portfolios que convierten visitas en clientes.
                </CardContent>
              </Card>

              {/* A medida */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Settings2
                      className="mr-2 text-red-700"
                      aria-hidden="true"
                    />
                    Desarrollo a medida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Funcionalidades únicas: integración con APIs, dashboards,
                  reservas, e-learning, intranets.
                </CardContent>
              </Card>

              {/* Tech stacks */}
              <Card className="bg-white shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Terminal
                      className="mr-2 text-red-700"
                      aria-hidden="true"
                    />
                    Stack tecnológico flexible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  WordPress, Laravel, HTML5/CSS3, React/Next.js y Node: elegimos
                  la mejor base según tu proyecto.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 3 – Ventajas frente a webs prefabricadas */}
          <section aria-labelledby="h2-ventajas" className="space-y-6">
            <h2 id="h2-ventajas" className="text-3xl font-bold">
              Ventajas clave frente a webs “prefabricadas”
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Código optimizado, sin sobrecarga de plugins innecesarios.
              </li>
              <li>Mejor SEO técnico: estructura semántica y microdatos.</li>
              <li>Seguridad reforzada con hardening y backups diarios.</li>
              <li>Escalabilidad: módulos ampliables sin rehacer la base.</li>
            </ul>
          </section>

          {/* 4 – Accesibilidad */}
          <section aria-labelledby="h2-a11y" className="space-y-6">
            <h2 id="h2-a11y" className="text-3xl font-bold">
              Accesibilidad web como estándar, no como extra
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                HTML semántico (<code>&lt;main&gt;</code>,{" "}
                <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>…).
              </li>
              <li>Contraste de color AA mínimo con paleta roja.</li>
              <li>Navegación por teclado y roles ARIA descriptivos.</li>
              <li>
                Formularios con <code>&lt;label&gt;</code>,{" "}
                <code>aria-required</code> y mensajes claros.
              </li>
              <li>
                Compatibilidad con VoiceOver, NVDA y JAWS, validación WAVE y
                AXE.
              </li>
            </ul>
          </section>

          {/* 5 – WPO */}
          <section aria-labelledby="h2-wpo" className="space-y-6">
            <h2 id="h2-wpo" className="text-3xl font-bold">
              WPO – Webs desarrolladas para rendir al máximo
            </h2>
            <p>
              Optimizamos Core Web Vitals: LCP &lt;2.5&nbsp;s, CLS &lt;0.1 y INP
              &lt;200&nbsp;ms gracias a CSS crítico, carga diferida, compresión
              Brotli y lazy load en imágenes.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>CSS/JS minificados y ordenados por prioridad.</li>
              <li>Recursos solo cuando el usuario los necesita.</li>
              <li>Servidores configurados con HTTP/2 y caché avanzada.</li>
            </ul>
          </section>

          {/* 6 – Proceso personalizado */}
          <section aria-labelledby="h2-proceso" className="space-y-6">
            <h2 id="h2-proceso" className="text-3xl font-bold">
              Desarrollo personalizado, paso a paso
            </h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Análisis de negocio y definición de objetivos.</li>
              <li>Arquitectura de información y bocetos accesibles.</li>
              <li>Maquetación responsive con HTML5/CSS Grid y Flexbox.</li>
              <li>Backend funcional con PHP/Laravel o Node según proyecto.</li>
              <li>Pruebas de rendimiento, seguridad y accesibilidad.</li>
              <li>Formación y entrega de documentación.</li>
            </ol>
          </section>

          {/* 7 – Caso de éxito ficticio */}
          <section
            aria-labelledby="h2-caso"
            className="space-y-8 bg-rose-50 p-8 rounded-lg shadow-sm"
          >
            <h2 id="h2-caso" className="text-3xl font-bold text-center">
              Caso de éxito: migrar de Wix a desarrollo a medida
            </h2>
            <p className="text-center max-w-3xl mx-auto">
              Una pyme de La Garena sustituyó su web Wix por nuestro desarrollo
              Laravel&nbsp;+&nbsp;React. Resultado: tiempo de carga de
              5,8&nbsp;s a 1,4&nbsp;s, Core Web Vitals en verde y +50&nbsp;% en
              conversiones de formulario.
            </p>
          </section>

          {/* 8 – FAQ */}
          <section aria-labelledby="h2-faq" className="space-y-6">
            <h2 id="h2-faq" className="text-3xl font-bold">
              Preguntas frecuentes sobre desarrollo web
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              aria-label="Preguntas frecuentes"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Desarrolláis webs en WordPress o desde cero?
                </AccordionTrigger>
                <AccordionContent>
                  Ambos. Elegimos WordPress cuando prima la autogestión rápida y
                  un framework desde cero cuando necesitas lógica compleja o
                  alto rendimiento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Incluye SEO técnico?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, entregamos la web con estructura semántica, sitemap XML,
                  Schema.org y optimización de rendimiento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Podré gestionar contenido yo mismo?
                </AccordionTrigger>
                <AccordionContent>
                  Instalamos un CMS fácil de usar y te damos formación en vídeo
                  y PDF para editar textos e imágenes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Ofrecéis mantenimiento continuo?
                </AccordionTrigger>
                <AccordionContent>
                  Sí. Planes mensuales que cubren actualizaciones, copias de
                  seguridad, mejoras WPO y soporte prioritario.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* 9 – Por qué elegirnos */}
          <section aria-labelledby="h2-why" className="space-y-6">
            <h2 id="h2-why" className="text-3xl font-bold">
              ¿Por qué elegirnos si estás en Alcalá de Henares?
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <MapPin
                  className="inline-block h-5 w-5 text-red-700 mr-2"
                  aria-hidden="true"
                />
                Atención local y soporte humano.
              </li>
              <li>
                <Handshake
                  className="inline-block h-5 w-5 text-red-700 mr-2"
                  aria-hidden="true"
                />
                Experiencia con PYMES, startups e instituciones alcalaínas.
              </li>
              <li>
                <Gauge
                  className="inline-block h-5 w-5 text-red-700 mr-2"
                  aria-hidden="true"
                />
                Proyectos entregados con SEO, accesibilidad y rendimiento
                garantizados.
              </li>
            </ul>
          </section>
        </main>

        {/* 10 – CTA Final */}
        <section
          id="contacto"
          aria-labelledby="cta-title"
          className="text-center bg-gradient-to-r from-red-700 to-red-900 text-white p-12 rounded-lg max-w-[1250px] mx-auto mb-16"
        >
          <h2 id="cta-title" className="text-3xl font-bold mb-6">
            Solicita tu desarrollo web profesional y empieza a destacar online
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Convierte tu idea en un proyecto sólido y escalable. Nuestro equipo
            desarrolla, optimiza y acompaña tu web para que lideres el mercado
            digital alcalaíno.
          </p>
          <Button
            size="lg"
            className="bg-white text-red-700 hover:bg-red-100 px-8 py-4 rounded-xl font-semibold"
          >
            <a
              href="mailto:info@disenowebalcaladehenares.es"
              aria-label="Solicitar presupuesto desarrollo web"
            >
              Contactar ahora
            </a>
          </Button>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DisenoWebDesarrollo;
