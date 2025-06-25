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
  CheckCircle,
  Star,
  Users,
  Zap,
  ShieldCheck,
  RefreshCcw,
  HardDrive,
  Monitor,
  Headphones,
  Code,
  Accessibility,
  Gauge,
  Server,
  FileText,
  Lightbulb,
  Handshake,
  MapPin,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const DisenoWebMantenimiento: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Mantenimiento Web en Alcalá de Henares | Seguridad, Actualizaciones y
          WPO
        </title>

        <meta
          name="description"
          content="Servicio de mantenimiento web profesional en Alcalá de Henares: monitorización 24/7, actualizaciones, copias de seguridad, seguridad anti-hackeo y optimización de velocidad para WordPress, PrestaShop y webs a medida."
        />

        <meta
          name="keywords"
          content="mantenimiento web Alcalá de Henares, soporte técnico web, seguridad web, mantenimiento WordPress, copias de seguridad web, optimización WPO"
        />

        <link
          rel="canonical"
          href="https://disenowebalcaladehenares.es/diseno-web-mantenimiento-alcala-de-henares.html"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
        {/* ENCABEZADO GLOBAL */}
        <Header />

        {/* ========================= HERO SECTION ========================= */}
        <section
          aria-labelledby="hero-title"
          className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50"
        >
          <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna de texto */}
            <div>
              <h1
                id="hero-title"
                className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Servicio de{" "}
                <span className="text-purple-700">mantenimiento web</span> en
                Alcalá de Henares
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-[50ch]">
                ¿Tu página se ha quedado atrás, carga lenta o está expuesta a
                amenazas? Nuestro{" "}
                <strong>mantenimiento web en Alcalá de Henares</strong> reúne
                actualizaciones técnicas, seguridad 24/7 y optimización de
                rendimiento para que tu sitio funcione como un reloj y siga
                generando negocio. Somos tu aliado local — disponible,
                transparente y centrado en resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-800 transition-all duration-300 shadow-lg text-center"
                >
                  <a
                    href="#contacto"
                    aria-label="Solicitar presupuesto de mantenimiento web"
                  >
                    Solicita tu Presupuesto Gratuito
                  </a>
                </Button>
              </div>
            </div>

            {/* Columna de estadísticas (Panel) */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl shadow-2xl p-8 w-full lg:w-[90%]"
                aria-label="Estadísticas de rendimiento"
              >
                <div className="flex items-center mb-6">
                  <Gauge
                    className="h-8 w-8 text-purple-700 mr-3"
                    aria-hidden="true"
                  />
                  <h2 className="text-xl font-bold text-slate-900">
                    Resultados Tangibles
                  </h2>
                </div>
                <ul className="space-y-4" role="list">
                  <li className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <Monitor
                        className="h-5 w-5 text-purple-600 mr-2"
                        aria-hidden="true"
                      />
                      Uptime Garantizado
                    </span>
                    <span className="font-bold text-purple-700">99.9%</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <Clock
                        className="h-5 w-5 text-green-600 mr-2"
                        aria-hidden="true"
                      />
                      Tiempo de Respuesta
                    </span>
                    <span className="font-bold text-green-600">
                      &lt;1&nbsp;h
                    </span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <ShieldCheck
                        className="h-5 w-5 text-blue-600 mr-2"
                        aria-hidden="true"
                      />
                      Webs Protegidas
                    </span>
                    <span className="font-bold text-blue-600">200+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= MAIN CONTENT ========================= */}
        <main
          className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-20"
          id="contenido-principal"
        >
          {/* ========================= INTRODUCCIÓN ========================= */}
          <section
            aria-labelledby="intro-title"
            className="max-w-3xl mx-auto text-center"
          >
            <h2 id="intro-title" className="sr-only">
              Introducción – Problema y solución
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed">
              En pleno 2025, todavía vemos webs empresariales con{" "}
              <strong>software obsoleto</strong>, tiempos de carga superiores a
              cinco segundos y puertas abiertas a los ciberataques. Como negocio
              local en Alcalá de Henares no puedes permitirte perder ni un
              cliente por una página caída o lenta. Nuestro servicio de{" "}
              <em>mantenimiento web en Alcalá de Henares</em> soluciona ese
              dolor de cabeza: monitorizamos, actualizamos y optimizamos tu
              sitio las 24&nbsp;horas para que tú te concentres en hacer crecer
              tu empresa con tranquilidad.
            </p>
          </section>

          {/* ========================= SECCIÓN 1 ========================= */}
          <section aria-labelledby="h2-por-que" className="space-y-6">
            <h2 id="h2-por-que" className="text-3xl font-bold">
              ¿Por qué contratar mantenimiento web en 2025?
            </h2>
            <p>
              Cada año aumenta la sofisticación de los ataques y los requisitos
              de Google. Sin un <strong>soporte web técnico</strong> continuo,
              tu página se vuelve vulnerable y pierde posiciones. Estas son las
              razones clave:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <ShieldCheck
                  className="inline-block h-5 w-5 text-purple-700 mr-2"
                  aria-hidden="true"
                />
                <strong>Seguridad frente a ciberataques:</strong> aplicamos
                parches de seguridad y firewall para cerrar cualquier brecha
                antes de que sea explotada.
              </li>
              <li>
                <RefreshCcw
                  className="inline-block h-5 w-5 text-purple-700 mr-2"
                  aria-hidden="true"
                />
                <strong>Actualizaciones constantes:</strong> WordPress, Joomla,
                PHP… todo evoluciona. Mantener cada componente al día evita
                incompatibilidades y cuelgues.
              </li>
              <li>
                <Zap
                  className="inline-block h-5 w-5 text-purple-700 mr-2"
                  aria-hidden="true"
                />
                <strong>Evitar caídas y pérdida de posicionamiento:</strong> un
                sitio lento o offline genera rebote alto y penalización SEO. Con
                monitoreo y WPO lo prevenimos.
              </li>
            </ul>
          </section>

          {/* ========================= SECCIÓN 2 ========================= */}
          <section
            aria-labelledby="h2-servicios-incluidos"
            className="space-y-8"
          >
            <h2 id="h2-servicios-incluidos" className="text-3xl font-bold">
              Servicios incluidos en nuestro mantenimiento web
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* CMS Updates */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <RefreshCcw
                      className="mr-2 text-purple-700"
                      aria-hidden="true"
                    />
                    Actualización de CMS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Mantenemos tu núcleo de WordPress, Joomla, PrestaShop y sus
                  extensiones siempre al día con versiones estables, evitando
                  vulnerabilidades y ganando nuevas funciones.
                </CardContent>
              </Card>

              {/* Backups */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <HardDrive
                      className="mr-2 text-purple-700"
                      aria-hidden="true"
                    />
                    Copias de seguridad automáticas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Backups diarios externos y cifrados con restauración en
                  minutos. Tu información, siempre a salvo.
                </CardContent>
              </Card>

              {/* Error fixing */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Lightbulb
                      className="mr-2 text-purple-700"
                      aria-hidden="true"
                    />
                    Reparación de errores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Diagnosticamos y resolvemos cualquier fallo o caída imprevista
                  con prioridad alta.
                </CardContent>
              </Card>

              {/* Monitoring */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Monitor
                      className="mr-2 text-purple-700"
                      aria-hidden="true"
                    />
                    Monitorización 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Alertas en tiempo real y actuación preventiva para preservar
                  rendimiento y disponibilidad.
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Headphones
                      className="mr-2 text-purple-700"
                      aria-hidden="true"
                    />
                    Soporte técnico personalizado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Equipo local que responde por correo, teléfono o chat sin
                  intermediarios.
                </CardContent>
              </Card>

              {/* Content Updates */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <FileText
                      className="mr-2 text-purple-700"
                      aria-hidden="true"
                    />
                    Actualización de contenido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Cambios de texto e imágenes incluidos para mantener tu web al
                  día y acorde a tu negocio.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ========================= SECCIÓN 3 ========================= */}
          <section aria-labelledby="h2-beneficios" className="space-y-6">
            <h2 id="h2-beneficios" className="text-3xl font-bold">
              Beneficios de nuestro servicio
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <CheckCircle
                  className="inline-block h-5 w-5 text-green-600 mr-2"
                  aria-hidden="true"
                />
                <strong>Tranquilidad total:</strong> nosotros nos ocupamos de la
                parte técnica, tú de tu negocio.
              </li>
              <li>
                <CheckCircle
                  className="inline-block h-5 w-5 text-green-600 mr-2"
                  aria-hidden="true"
                />
                Mejora continua de <strong>SEO técnico</strong> gracias a un
                sitio rápido, seguro y accesible.
              </li>
              <li>
                <CheckCircle
                  className="inline-block h-5 w-5 text-green-600 mr-2"
                  aria-hidden="true"
                />
                Evita <strong>costes de urgencia</strong> por errores críticos o
                hackeos, ahorrando tiempo y dinero.
              </li>
              <li>
                <CheckCircle
                  className="inline-block h-5 w-5 text-green-600 mr-2"
                  aria-hidden="true"
                />
                Soporte <strong>directo en Alcalá de Henares</strong>: respuesta
                rápida y comunicación humana.
              </li>
            </ul>
          </section>

          {/* ========================= SECCIÓN 4 ========================= */}
          <section aria-labelledby="h2-accesibilidad" className="space-y-6">
            <h2 id="h2-accesibilidad" className="text-3xl font-bold">
              Accesibilidad web continua (obligatoria)
            </h2>
            <p>
              Cumplimos las directrices WCAG&nbsp;2.1&nbsp;AA para que tu web
              sea usable por todas las personas y evites sanciones.
            </p>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                Revisión de formularios, botones, menús y teclabilidad tras cada
                cambio.
              </li>
              <li>
                Validación con WAVE y AXE, corrigiendo errores antes de
                publicar.
              </li>
              <li>
                Estructura HTML semántica correcta (<code>&lt;header&gt;</code>,{" "}
                <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,{" "}
                <code>&lt;footer&gt;</code>).
              </li>
              <li>
                Contrastes mínimos AA y etiquetas <code>alt</code> descriptivas
                en imágenes.
              </li>
              <li>Roles ARIA y navegación por teclado garantizados.</li>
            </ul>
          </section>

          {/* ========================= SECCIÓN 5 ========================= */}
          <section aria-labelledby="h2-wpo" className="space-y-6">
            <h2 id="h2-wpo" className="text-3xl font-bold">
              WPO – Optimización continua del rendimiento
            </h2>
            <p>
              Cada segundo cuenta. Revisamos velocidad y Core Web Vitals cada
              mes, con el objetivo de mantener el tiempo de carga por debajo de
              dos segundos.
            </p>
            <ul className="space-y-3 list-disc list-inside">
              <li>Limpieza de base de datos y eliminación de scripts rotos.</li>
              <li>
                Lazy loading de imágenes y vídeos, compresión GZIP y cacheado
                avanzado.
              </li>
              <li>
                Monitoreo de TTFB, CLS, FCP, LCP y recomendaciones proactivas.
              </li>
              <li>Hosting y PHP siempre en su versión más rápida y segura.</li>
              <li>Integración de CDN para proyectos con tráfico elevado.</li>
            </ul>
          </section>

          {/* ========================= SECCIÓN 6 ========================= */}
          <section aria-labelledby="h2-tipos-web" className="space-y-6">
            <h2 id="h2-tipos-web" className="text-3xl font-bold">
              ¿Qué tipo de páginas web mantenemos?
            </h2>
            <p>Nuestra experiencia cubre toda la gama de tecnologías web:</p>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>CMS populares:</strong> WordPress, Joomla, PrestaShop,
                Shopify…
              </li>
              <li>
                Sitios desarrollados a medida en HTML, CSS, JavaScript o
                frameworks modernos.
              </li>
              <li>
                Tiendas online (<strong>eCommerce</strong>) con pasarelas de
                pago seguras.
              </li>
              <li>
                Webs corporativas de clínicas, abogados, hoteles, gimnasios,
                restaurantes y más.
              </li>
              <li>Migraciones y optimización de webs creadas por terceros.</li>
            </ul>
          </section>

          {/* ========================= SECCIÓN 7 ========================= */}
          <section
            aria-labelledby="h2-casos"
            className="space-y-8 bg-purple-50 p-8 rounded-lg shadow-sm"
          >
            <h2 id="h2-casos" className="text-3xl font-bold text-center">
              Casos reales (simulados): recuperación y mejora
            </h2>
            <div className="space-y-8">
              {/* Caso 1 */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Star className="mr-2 text-yellow-600" aria-hidden="true" />
                    Clínica Henares – De 7&nbsp;s a 1.9&nbsp;s
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Redujimos el tiempo de carga móvil de 7 segundos a solo
                  1.9&nbsp;s y aumentamos las consultas web un 35%.
                </CardContent>
              </Card>
              {/* Caso 2 */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Star className="mr-2 text-yellow-600" aria-hidden="true" />
                    Gimnasio CentroFit – Caída resuelta en 2&nbsp;h
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Detectamos un conflicto de plugin, restauramos la web en menos
                  de dos horas y salvamos una campaña de captación.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ========================= SECCIÓN 8 ========================= */}
          <section aria-labelledby="h2-planes" className="space-y-8">
            <h2 id="h2-planes" className="text-3xl font-bold">
              Planes de mantenimiento flexibles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Plan básico */}
              <Card
                className="bg-white shadow-lg border border-gray-200 text-center"
                aria-label="Plan Básico"
              >
                <CardHeader className="bg-gray-50 py-4 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    Plan Básico
                  </CardTitle>
                  <p className="text-lg text-slate-600">
                    Ideal para sitios informativos
                  </p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-4xl font-bold text-purple-700">XX€/mes</p>
                  <ul className="text-left space-y-2 list-disc list-inside">
                    <li>Actualizaciones de seguridad</li>
                    <li>Copias de seguridad semanales</li>
                    <li>Monitorización 24/7</li>
                    <li>Soporte por email</li>
                    <li>Informes mensuales</li>
                  </ul>
                  <Button className="bg-purple-600 text-white w-full hover:bg-purple-700">
                    <a href="#contacto" aria-label="Contratar plan básico">
                      Solicitar
                    </a>
                  </Button>
                </CardContent>
              </Card>
              {/* Plan pro */}
              <Card
                className="bg-purple-700 text-white shadow-xl border border-purple-800 text-center"
                aria-label="Plan PRO"
              >
                <CardHeader className="bg-purple-800 py-4 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold">Plan PRO</CardTitle>
                  <p className="text-lg opacity-90">El más popular</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-4xl font-bold">YY€/mes</p>
                  <ul className="text-left space-y-2 list-disc list-inside">
                    <li>Todo lo del Básico</li>
                    <li>WPO y Core Web Vitals</li>
                    <li>Copias de seguridad diarias</li>
                    <li>Soporte prioritario</li>
                    <li>Cambios de contenido mensuales</li>
                  </ul>
                  <Button className="bg-white text-purple-700 w-full hover:bg-purple-100">
                    <a href="#contacto" aria-label="Contratar plan pro">
                      Solicitar
                    </a>
                  </Button>
                </CardContent>
              </Card>
              {/* Plan personalizado */}
              <Card
                className="bg-white shadow-lg border border-gray-200 text-center"
                aria-label="Plan Personalizado"
              >
                <CardHeader className="bg-gray-50 py-4 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    Plan Personalizado
                  </CardTitle>
                  <p className="text-lg text-slate-600">
                    Para requisitos específicos
                  </p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-4xl font-bold text-purple-700">A medida</p>
                  <ul className="text-left space-y-2 list-disc list-inside">
                    <li>Servicios a medida</li>
                    <li>Grandes eCommerce o apps</li>
                    <li>Consultoría técnica continua</li>
                    <li>SLA ajustado</li>
                    <li>Gestión de servidores dedicados</li>
                  </ul>
                  <Button className="bg-purple-600 text-white w-full hover:bg-purple-700">
                    <a
                      href="#contacto"
                      aria-label="Solicitar presupuesto personalizado"
                    >
                      Solicitar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ========================= SECCIÓN 9 – FAQ ========================= */}
          <section aria-labelledby="h2-faq" className="space-y-6">
            <h2 id="h2-faq" className="text-3xl font-bold">
              Preguntas frecuentes sobre el mantenimiento web
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              aria-label="Preguntas frecuentes"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Qué pasa si ya tengo una web antigua o desactualizada?
                </AccordionTrigger>
                <AccordionContent>
                  Realizamos una auditoría inicial, identificamos riesgos y
                  actualizamos el sitio sin afectar su operativa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Podéis mantener una web que no desarrollasteis vosotros?
                </AccordionTrigger>
                <AccordionContent>
                  Sí. Trabajamos con código de terceros y asumimos la gestión
                  completa tras un análisis de compatibilidad.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Qué tiempos de respuesta garantizáis?
                </AccordionTrigger>
                <AccordionContent>
                  Incidencias críticas: respuesta &lt;1&nbsp;h. Problemas
                  menores: en el mismo día laboral.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Tengo acceso al hosting y copias de seguridad?
                </AccordionTrigger>
                <AccordionContent>
                  La propiedad siempre es tuya. Te facilitamos credenciales y
                  backups cuando los necesites.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* ========================= SECCIÓN 10 ========================= */}
          <section aria-labelledby="h2-por-que-nosotros" className="space-y-6">
            <h2 id="h2-por-que-nosotros" className="text-3xl font-bold">
              ¿Por qué elegirnos en Alcalá de Henares?
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <MapPin
                  className="inline-block h-5 w-5 text-purple-700 mr-2"
                  aria-hidden="true"
                />
                Proximidad y atención humana local
              </li>
              <li>
                <Handshake
                  className="inline-block h-5 w-5 text-purple-700 mr-2"
                  aria-hidden="true"
                />
                Soporte técnico real, sin robots
              </li>
              <li>
                <Star
                  className="inline-block h-5 w-5 text-purple-700 mr-2"
                  aria-hidden="true"
                />
                Experiencia probada y conocimiento del mercado
              </li>
              <li>
                <ShieldCheck
                  className="inline-block h-5 w-5 text-purple-700 mr-2"
                  aria-hidden="true"
                />
                Compromiso con la seguridad y accesibilidad
              </li>
              <li>
                <Gauge
                  className="inline-block h-5 w-5 text-purple-700 mr-2"
                  aria-hidden="true"
                />
                Enfoque en rendimiento y SEO local
              </li>
            </ul>
          </section>
        </main>

        {/* ========================= CTA FINAL ========================= */}
        <section
          id="contacto"
          aria-labelledby="cta-title"
          className="text-center bg-gradient-to-r from-purple-700 to-purple-900 text-white p-12 rounded-lg mx-auto mb-16"
        >
          <h2 id="cta-title" className="text-3xl font-bold mb-6">
            ¡Contrata mantenimiento web profesional y protege tu negocio
            digital!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Mejora tu posicionamiento, aumenta la confianza de tus clientes y
            duerme tranquilo sabiendo que tu página está en manos de expertos
            locales.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-100 px-8 py-4 rounded-xl font-semibold"
          >
            <a
              href="mailto:info@disenowebalcaladehenares.es"
              aria-label="Solicitar plan de mantenimiento web"
            >
              Solicitar información ahora
            </a>
          </Button>
        </section>

        {/* PIE DE PÁGINA */}
        <Footer />
      </div>
    </>
  );
};

export default DisenoWebMantenimiento;
