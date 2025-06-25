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
  Calendar,
  Hotel,
  Image,
  MapPin,
  Phone,
  Mail,
  BookOpen,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const DisenoWebHoteles = () => {
  return (
    <>
      <Helmet>
        <title>
          Diseño Web para Hoteles en Alcalá de Henares | Reservas Directas sin
          Comisiones
        </title>
        <meta
          name="description"
          content="Diseño web profesional para hoteles, hostales y casas rurales en Alcalá de Henares. Optimiza tus reservas directas, reduce comisiones y mejora tu visibilidad online."
        />
        <meta
          name="keywords"
          content="diseño web hoteles Alcalá de Henares, páginas web hoteleras, reservas directas hotel, diseño web hostales, diseño web casas rurales"
        />
        <link
          rel="canonical"
          href="https://disenowebalcaladehenares.es/diseno-web-hoteles-alcala-de-henares.html"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-100 to-blue-100">
          <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Diseño Web para{" "}
                  <span className="text-indigo-600">Hoteles</span> en Alcalá de
                  Henares
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Atrae más huéspedes y aumenta tus reservas directas con una
                  web hotelera profesional, rápida, accesible y optimizada para
                  el SEO local en Alcalá de Henares. Tu presencia digital, tu
                  mayor activo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg text-center"
                  >
                    <a
                      href="#contacto"
                      aria-label="Solicitar diseño web para hoteles"
                    >
                      Solicita tu web hotelera
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Hotel
                      className="h-8 w-8 text-indigo-600 mr-3"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold text-slate-900">
                      Tu Alojamiento Digital
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-slate-700">
                        Nuevas Reservas Directas
                      </span>
                      <span className="font-bold text-indigo-600">+150%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-slate-700">Tasa de Ocupación</span>
                      <span className="font-bold text-green-600">95%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="text-slate-700">
                        Valoración en Google
                      </span>
                      <span className="font-bold text-yellow-600">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20 py-16">
          {/* Introducción */}
          <section className="mb-16 text-center">
            <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              En el competitivo sector turístico de Alcalá de Henares, tener una
              presencia online sólida no es solo una opción, es una necesidad.
              Un
              <strong className="text-indigo-700">
                {" "}
                diseño web para hoteles en Alcalá de Henares
              </strong>
              profesional marca la diferencia entre depender de intermediarios y
              potenciar tus reservas directas. Nosotros creamos el sitio web
              ideal para tu hotel, hostal o casa rural, diseñado para atraer
              huéspedes y ofrecerles una experiencia de reserva inmejorable,
              eliminando comisiones innecesarias.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Tu sitio web se convierte en tu mejor agente de ventas, disponible
              las 24 horas del día, 7 días a la semana, transmitiendo confianza,
              profesionalismo y la autonomía digital que tu negocio merece.
            </p>
          </section>

          {/* 1. ¿Por qué tu hotel necesita una web profesional en 2025? */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              ¿Por qué tu hotel necesita una web profesional en 2025?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Users
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Hábitos del viajero actual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    El 90% de los viajeros consulta todo desde su móvil: compara
                    precios, busca en Google, revisa opiniones y reserva desde
                    el sofá de su casa. Si tu hotel, hostal o casa rural en
                    Alcalá de Henares no tiene una web moderna y optimizada,
                    estás perdiendo reservas cada día.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Zap
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Independencia de intermediarios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Una web propia reduce tu dependencia de plataformas como
                    Booking y Expedia. Las comisiones de estos portales pueden
                    ser muy altas, mermando tus beneficios. Con un sitio web
                    propio, todas las reservas directas son 100% para ti.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Star
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Posicionamiento local en Google
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Estar bien posicionado en Google Maps y los resultados
                    locales es esencial. El SEO local permite que viajeros que
                    ya están buscando alojamiento en Alcalá te encuentren antes
                    que a tu competencia. Un buen{" "}
                    <strong className="text-indigo-700">
                      diseño web para hoteles en Alcalá de Henares
                    </strong>
                    es la base de tu visibilidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 2. Ventajas clave de una web optimizada para tu hotel */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Ventajas clave de una web optimizada para tu hotel
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Incremento de reservas directas:</strong> Convierte
                    visitantes en huéspedes, maximizando tus ingresos al
                    eliminar intermediarios.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Reducción drástica de comisiones:</strong> Cada
                    reserva directa significa un mayor margen de beneficio para
                    tu hotel.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>
                      Mayor control sobre la imagen de tu negocio:
                    </strong>{" "}
                    Presenta tu hotel exactamente como quieres, destacando su
                    personalidad y servicios únicos.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Integración con motor de reservas propio:</strong>{" "}
                    Facilita un proceso de reserva fluido y seguro directamente
                    desde tu web, compatible con los principales sistemas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Mejor experiencia para el huésped:</strong> Desde el
                    primer clic, tu web ofrecerá una navegación intuitiva y una
                    información clara y atractiva.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Visibilidad 24/7:</strong> Tu{" "}
                    <strong className="text-indigo-700">
                      sitio web para hoteles
                    </strong>
                    trabaja sin descanso, atrayendo potenciales huéspedes de
                    todo el mundo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Funcionalidades imprescindibles para una web hotelera */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Funcionalidades imprescindibles para tu web hotelera
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Image
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Galería de Habitaciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Presenta tus habitaciones con imágenes de alta calidad en
                    formatos optimizados (WebP), con textos alternativos (`alt`)
                    descriptivos para mejorar la accesibilidad y el SEO.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Calendar
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Calendario de Disponibilidad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Un sistema de reservas integrado o un calendario de
                    disponibilidad intuitivo, con `aria-label` para
                    accesibilidad y compatible con navegación por teclado.
                    Fundamental para cualquier
                    <strong className="text-indigo-700">
                      {" "}
                      página de reservas online
                    </strong>
                    .
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <MapPin
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Mapa Interactivo Accesible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Permite a tus huéspedes localizarte fácilmente con un mapa
                    de Google Maps integrado, con controles de zoom y pan
                    accesibles para todos.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Phone
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Contacto Directo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Botones claros para llamar o escribir vía WhatsApp, con
                    texto descriptivo para lectores de pantalla y fácil acceso.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Mail
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Formulario de Contacto Accesible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Un formulario de contacto seguro y accesible, con etiquetas
                    (`label`) asociadas a los campos y validación clara de
                    errores.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Star
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Testimonios Optimizado (Schema.org)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Muestra las opiniones de tus huéspedes felices,
                    estructuradas con datos de Schema.org (`Review`) para
                    mejorar tu visibilidad en los resultados de búsqueda de
                    Google.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <BookOpen
                    className="w-10 h-10 text-indigo-600 mb-4"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Carta de Servicios y Menú
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Si tu hotel ofrece restaurante o servicios adicionales, una
                    sección dedicada en HTML accesible es clave, evitando PDFs
                    no accesibles que dificultan la lectura y el SEO.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 4. Accesibilidad web como prioridad (obligatoria) */}
          <section className="mb-16 bg-blue-50 p-10 rounded-xl shadow-inner">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Accesibilidad web: Tu web hotelera para todos (WCAG 2.1 AA)
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Un <strong>diseño web para hoteles</strong> accesible garantiza
              que cualquier persona, independientemente de sus capacidades,
              pueda navegar y reservar en tu sitio. Cumplimos con las Pautas de
              Accesibilidad al Contenido Web (WCAG 2.1 Nivel AA) porque sabemos
              que la inclusión digital no es solo una buena práctica, es
              obligatoria y te abrirá las puertas a un público más amplio.
            </p>
            <ul className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <strong>Contraste mínimo AA:</strong> Todos los textos, botones
                y elementos interactivos cumplen con los ratios de contraste
                para asegurar legibilidad.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <strong>Estructura HTML semántica:</strong> Utilizamos etiquetas
                como `&lt;main&gt;`, `&lt;section&gt;`, `&lt;article&gt;` para
                una jerarquía clara y comprensible por lectores de pantalla.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <strong>Etiquetado adecuado en formularios:</strong> Los campos
                de reserva y contacto están correctamente etiquetados
                (`&lt;label&gt;` y `aria-label`) para una interacción fluida.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <strong>Navegación por teclado fluida:</strong> Tu web será 100%
                navegable usando solo el teclado, esencial para usuarios con
                movilidad reducida.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <strong>Compatibilidad con lectores de pantalla:</strong>{" "}
                Garantizamos que VoiceOver, NVDA, JAWS y otros asistentes
                interpretarán correctamente todo el contenido.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <strong>Textos descriptivos en botones:</strong> Evitamos "clic
                aquí" y usamos textos claros que describen la acción, como
                "Reservar habitación doble".
              </li>
            </ul>
          </section>

          {/* 5. WPO – Web ultrarrápida, ligera y mobile-first */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              WPO: Una web ultrarrápida para tu hotel y tus huéspedes
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              La velocidad es crucial para la experiencia del usuario y el SEO.
              Un sitio que carga lento pierde visitantes y reservas. Nos
              aseguramos de que tu{" "}
              <strong className="text-indigo-700">
                sitio web para alojamientos turísticos
              </strong>
              sea ligero, rápido y optimizado para móviles, garantizando un
              rendimiento superior y una mejor posición en Google.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Imágenes optimizadas:</strong> Usamos formatos
                    modernos como WebP o SVG, con `lazy loading` para cargar
                    solo cuando son visibles.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Código limpio y eficiente:</strong> HTML mínimo, CSS
                    optimizado y JavaScript reducido para una carga más rápida.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Eliminación de render-blocking:</strong> Optimizamos
                    la carga de recursos para que el contenido principal
                    aparezca de inmediato.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Tiempo de carga &lt; 2 segundos:</strong> Un
                    objetivo clave para la satisfacción del usuario y el
                    posicionamiento en buscadores.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>
                      Preparado para +90 en Google PageSpeed Insights (móvil):
                    </strong>{" "}
                    Nos enfocamos en las métricas de Core Web Vitals para un
                    rendimiento excelente.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-slate-700">
                    <strong>Diseño Mobile-First:</strong> Tu web se verá y
                    funcionará perfectamente en cualquier dispositivo,
                    especialmente en smartphones, donde se producen la mayoría
                    de las búsquedas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Cómo diseñamos tu web hotelera */}
          <section className="mb-16 bg-gray-50 p-10 rounded-xl shadow-inner">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Nuestro proceso: Cómo diseñamos tu web hotelera
            </h2>
            <ol className="list-decimal list-inside space-y-6 text-lg text-slate-700 leading-relaxed">
              <li>
                <strong>Descubrimiento y Planificación (Brief):</strong> Nos
                reunimos contigo para entender tu hotel, tus objetivos, tu
                público y tus necesidades específicas de reservas. Analizamos tu
                competencia en Alcalá de Henares.
              </li>
              <li>
                <strong>Diseño y Contenido:</strong> Creamos una propuesta de
                diseño visual que refleje la identidad de tu hotel. Redactamos
                el contenido con enfoque SEO, utilizando la palabra clave
                "diseño web para hoteles en Alcalá de Henares" y sus variaciones
                de forma natural.
              </li>
              <li>
                <strong>Desarrollo y Funcionalidades:</strong> Construimos tu
                <strong className="text-indigo-700">
                  {" "}
                  sitio web para alojamientos turísticos
                </strong>
                con HTML semántico, CSS y JavaScript optimizado. Integramos el
                motor de reservas, galerías, mapas y formularios accesibles.
              </li>
              <li>
                <strong>Optimización SEO, Accesibilidad y WPO:</strong> Durante
                todo el proceso, implementamos las mejores prácticas de SEO
                local, aseguramos el cumplimiento de WCAG 2.1 AA y garantizamos
                un rendimiento web superior.
              </li>
              <li>
                <strong>Pruebas y Control de Calidad:</strong> Realizamos
                pruebas exhaustivas en diferentes dispositivos y navegadores,
                verificamos la accesibilidad y el rendimiento con herramientas
                como Google PageSpeed Insights.
              </li>
              <li>
                <strong>Lanzamiento y Formación:</strong> Publicamos tu nueva
                web. Te ofrecemos una formación básica para que puedas gestionar
                fácilmente las reservas, actualizar precios, añadir ofertas y
                subir nuevas fotos.
              </li>
              <li>
                <strong>Soporte y Mantenimiento (Opcional):</strong> Ofrecemos
                planes de mantenimiento para asegurar que tu web siempre esté
                actualizada, segura y rindiendo al máximo.
              </li>
            </ol>
          </section>

          {/* 7. Caso de éxito ficticio: Hostal Plaza Alcalá */}
          <section className="mb-16 text-center bg-indigo-50 p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Caso de éxito ficticio: Hostal Plaza Alcalá
            </h2>
            <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
              El Hostal Plaza Alcalá, un céntrico alojamiento en Alcalá de
              Henares, luchaba con altas comisiones de OTA's y poca visibilidad
              directa. Con nuestro servicio de{" "}
              <strong className="text-indigo-700">
                diseño web para hoteles en Alcalá de Henares
              </strong>
              , diseñamos un sitio web moderno y optimizado.
            </p>
            <p className="text-lg text-slate-600 italic mb-8 max-w-3xl mx-auto">
              "Desde que tenemos nuestra nueva web, las reservas directas se han
              duplicado. Hemos reducido nuestra dependencia de Booking en un 40%
              y nuestros huéspedes nos felicitan por lo fácil que es reservar.
              ¡Es la mejor inversión que hemos hecho!" - Sofía García,
              Propietaria.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Resultados:</strong> Duplicación de reservas online
              directas en 6 meses, reducción del 40% en comisiones a
              intermediarios y un aumento del 60% en la visibilidad orgánica
              local en Google.
            </p>
          </section>

          {/* 8. Preguntas frecuentes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Preguntas frecuentes sobre diseño web para hoteles
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-4xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-indigo-600">
                  ¿Puedo conectar mi web a mi motor de reservas actual?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 text-base leading-relaxed">
                  Sí, por supuesto. Diseñamos tu{" "}
                  <strong className="text-indigo-700">
                    página de reservas online
                  </strong>
                  para que sea totalmente compatible e integramos tu motor de
                  reservas existente (ej. SiteMinder, Cloudbeds, Availpro, etc.)
                  o te recomendamos opciones si aún no dispones de uno. Nuestro
                  objetivo es que la transición sea lo más fluida posible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-indigo-600">
                  ¿La web estará en varios idiomas?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 text-base leading-relaxed">
                  Absolutamente. Entendemos la importancia del turismo
                  internacional. Tu{" "}
                  <strong className="text-indigo-700">
                    sitio web para alojamientos turísticos
                  </strong>
                  puede ser diseñado en tantos idiomas como necesites, con una
                  estructura SEO que facilita la indexación por idioma y una
                  experiencia de usuario multilingüe impecable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-indigo-600">
                  ¿Cumple con el RGPD?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 text-base leading-relaxed">
                  Sí, todas nuestras webs se construyen teniendo en cuenta las
                  normativas vigentes de protección de datos, incluyendo el
                  RGPD. Implementamos políticas de privacidad, avisos legales,
                  gestión de cookies y formularios de consentimiento que cumplen
                  con la ley.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-indigo-600">
                  ¿Puedo actualizar precios y fotos fácilmente?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 text-base leading-relaxed">
                  Sí, te proporcionamos un panel de administración intuitivo y
                  fácil de usar para que puedas actualizar la información clave
                  de tu hotel, como precios, disponibilidad, ofertas especiales
                  y fotografías de tus habitaciones o instalaciones, sin
                  necesidad de conocimientos técnicos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-indigo-600">
                  ¿Cuánto tiempo tarda el proceso de diseño y desarrollo?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 text-base leading-relaxed">
                  El tiempo de desarrollo varía según la complejidad y las
                  funcionalidades requeridas. Sin embargo, nuestro proceso
                  optimizado nos permite entregar un{" "}
                  <strong className="text-indigo-700">
                    diseño web para hoteles
                  </strong>{" "}
                  funcional y optimizado en un plazo de 4 a 8 semanas, desde la
                  aprobación del brief hasta el lanzamiento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* 9. ¿Por qué elegirnos en Alcalá de Henares? */}
          <section className="mb-16 bg-blue-50 p-10 rounded-xl shadow-inner">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              ¿Por qué elegirnos para tu diseño web hotelero en Alcalá de
              Henares?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Star
                    className="w-10 h-10 text-indigo-600 mb-4 mx-auto"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Experiencia con Alojamientos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Hemos trabajado con éxito en el sector turístico de Alcalá,
                    entendiendo las necesidades únicas de hoteles, hostales y
                    casas rurales.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Users
                    className="w-10 h-10 text-indigo-600 mb-4 mx-auto"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Soporte Local, Trato Humano
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Somos tu socio digital en Alcalá de Henares. Cercanía,
                    comunicación fluida y un equipo que te entiende.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Zap
                    className="w-10 h-10 text-indigo-600 mb-4 mx-auto"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-xl font-semibold mb-2">
                    Dominio Técnico y Estratégico
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Combinamos conocimientos avanzados en accesibilidad (WCAG
                    2.1 AA), WPO (Core Web Vitals) y SEO local para el turismo
                    digital.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Llamado a la acción final */}
          <section
            id="contacto"
            className="text-center bg-gradient-to-r from-primary-600 to-primary-800 text-white p-12 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8">
              ¿Listo para llevar tu hotel al top y disparar tus reservas?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Solicita hoy tu{" "}
              <strong className="text-accent-200">diseño web hotelero</strong>{" "}
              en Alcalá de Henares y gana autonomía digital con una presencia
              online que convierta visitantes en huéspedes fieles y reduzca tu
              dependencia de intermediarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3"
              >
                <a
                  href="mailto:info@disenowebalcaladehenares.es"
                  aria-label="Solicitar presupuesto gratuito para diseño web de hotel"
                >
                  Solicitar presupuesto gratuito
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

export default DisenoWebHoteles;
