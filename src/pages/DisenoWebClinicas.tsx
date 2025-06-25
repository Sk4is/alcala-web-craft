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
  CalendarCheck,
  Stethoscope,
  ClipboardList,
  User2,
  MapPin,
  MessageSquare,
  Clock,
  Euro,
  AlertCircle,
  Handshake,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DisenoWebClinicas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Diseño Web para <span className="text-blue-600">Clínicas</span>{" "}
                en Alcalá de Henares
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Atrae más pacientes y fortalece la confianza con una{" "}
                <strong className="text-blue-700">
                  web médica profesional
                </strong>
                , rápida, accesible y que cumpla con toda la normativa legal.
                Especialistas en{" "}
                <strong className="text-blue-700">
                  páginas web para centros sanitarios en Alcalá de Henares
                </strong>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg text-center"
                >
                  <a
                    href="#contacto"
                    aria-label="Solicitar diseño web para clínicas"
                  >
                    Solicita tu web clínica
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <Stethoscope
                    className="h-8 w-8 text-blue-600 mr-3"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-slate-900">
                    Tu Consultorio Digital
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                    <span className="text-slate-700">Nuevos Pacientes</span>
                    <span className="font-bold text-blue-600">+120%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-slate-700">Citas Online</span>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="text-slate-700">Opiniones Positivas</span>
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
            En la era digital, la primera consulta de un paciente a menudo no es
            en tu clínica, sino en Google. La competitividad en el sector
            sanitario de Alcalá de Henares exige una presencia online impecable.
            Un{" "}
            <strong className="text-blue-700">
              diseño web para clínicas en Alcalá de Henares
            </strong>{" "}
            profesional, que sea accesible, rápido y que transmita confianza
            médica, es fundamental para atraer y retener pacientes. Nosotros
            creamos{" "}
            <strong className="text-blue-700">
              páginas web para centros sanitarios
            </strong>
            (clínicas privadas, consultas médicas, fisioterapia, podología,
            psicología, etc.) que no solo cumplen con los estándares estéticos,
            sino también con las rigurosas exigencias legales y técnicas del
            sector.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Tu sitio web se convertirá en la tarjeta de presentación digital de
            tu clínica, disponible las 24 horas, mostrando tu profesionalidad,
            tus especialidades y facilitando el contacto a futuros pacientes.
            Una web bien diseñada es la base para tu éxito digital y el
            crecimiento de tu consulta.
          </p>
        </section>

        {/* 1. ¿Por qué tu clínica necesita una web profesional en 2025? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            ¿Por qué tu clínica necesita una web profesional en 2025?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  El paciente busca en Google antes de pedir cita
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Hoy en día, la mayoría de los pacientes investiga online antes
                  de elegir un profesional de la salud. Si tu clínica, ya sea de
                  fisioterapia, podología o psicología en Alcalá de Henares, no
                  aparece de forma destacada, estás perdiendo potenciales
                  pacientes cada día. Una{" "}
                  <strong className="text-blue-700">
                    página web para clínicas médicas
                  </strong>
                  es tu primer contacto.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Star
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Reputación, localización, servicios: todo en la web
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Tu sitio web es el escaparate digital de tu reputación. Un
                  diseño profesional permite mostrar tus credenciales, las
                  opiniones de tus pacientes, tu ubicación exacta y todos los
                  servicios que ofreces, generando confianza antes de la visita.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Zap
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Aumentar visibilidad y confianza
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Un sitio web optimizado no solo atrae, sino que también
                  convence. Al cumplir con los estándares de accesibilidad y
                  mostrar transparencia, tu{" "}
                  <strong className="text-blue-700">
                    web profesional para centro sanitario
                  </strong>{" "}
                  construye una relación de confianza desde el primer clic, lo
                  que se traduce en más citas y pacientes leales.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 2. Funcionalidades esenciales para una web médica moderna */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Funcionalidades esenciales para una web médica moderna
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <ClipboardList
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Especialidades con descripciones accesibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Detalla cada servicio o especialidad (psicología, podología,
                  fisioterapia, etc.) con textos claros, semánticamente
                  estructurados y adaptados para lectores de pantalla.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <User2
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Perfil de profesionales con imágenes y texto alternativo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Presenta a tu equipo médico con biografías, especialidades y
                  fotos de calidad, siempre con `alt text` descriptivo para
                  accesibilidad y SEO.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CalendarCheck
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Formularios de cita accesibles y protegidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Un sistema de solicitud de cita intuitivo, seguro, con campos
                  correctamente etiquetados (<code>&lt;label&gt;</code>,{" "}
                  <code>aria-describedby</code>) y validación de errores
                  visible.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <MapPin
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Integración con Google Maps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Facilita la localización de tu clínica con un mapa interactivo
                  integrado, accesible y optimizado para el SEO local en Alcalá.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <MessageSquare
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Contacto Directo y Reseñas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Botones claros para llamar o contactar por WhatsApp, e
                  integración de reseñas verificadas para reforzar la confianza.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Clock
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Información clara sobre horarios y precios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Horarios de consulta, precios de servicios (si aplica) y datos
                  de contacto para urgencias, presentados de forma accesible y
                  fácil de encontrar.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3. Accesibilidad web para centros médicos (obligatorio) */}
        <section className="mb-16 bg-blue-50 p-10 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Accesibilidad web para centros médicos (WCAG 2.1 AA)
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            La accesibilidad digital no es una opción, sino una obligación legal
            y un compromiso ético. En el sector sanitario, garantizar que tu{" "}
            <strong className="text-blue-700">web para clínica</strong> sea
            usable por todos, incluyendo personas con discapacidad, es crucial.
            Nos aseguramos de que tu sitio cumpla con las Pautas de
            Accesibilidad al Contenido Web (WCAG 2.1 Nivel AA).
          </p>
          <ul className="space-y-4 text-slate-700 text-lg leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>Contraste de color AA mínimo:</strong> Todos los elementos
              visuales cumplen con los ratios de contraste para una legibilidad
              óptima.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>Navegación por teclado fluida:</strong> Permite a los
              usuarios navegar por toda la web usando solo el teclado, esencial
              para personas con movilidad reducida.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>
                Lectura por screen readers de toda la información clave:
              </strong>
              Aseguramos que lectores de pantalla como NVDA, JAWS o VoiceOver
              interpreten correctamente el contenido y la estructura.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>
                Formularios con <code>&lt;label&gt;</code>,{" "}
                <code>aria-describedby</code> y validación visible:
              </strong>
              Facilitamos el rellenado de formularios de contacto y cita para
              todos los usuarios.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>Textos en botones descriptivos:</strong> Evitamos "clic
              aquí" y usamos textos claros como "Pedir cita online" o "Contactar
              con la clínica".
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>Encabezados ordenados semánticamente:</strong> Estructura
              HTML lógica (H1 {">"} H2 {">"} H3) para una comprensión clara del
              contenido.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>Evitar sliders automáticos y carouseles:</strong>{" "}
              Minimizamos elementos que puedan dificultar la usabilidad para
              algunos usuarios, priorizando la claridad.
            </li>
          </ul>
        </section>

        {/* 4. WPO – Web médica optimizada para carga rápida */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            WPO: Tu web médica optimizada para carga rápida
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Una{" "}
            <strong className="text-blue-700">
              página web para clínicas médicas
            </strong>
            lenta es una clínica que pierde pacientes. Los usuarios y Google
            premian la velocidad de carga. Nos enfocamos en el WPO (Web
            Performance Optimization) para que tu sitio sea ultrarrápido,
            garantizando una excelente experiencia de usuario y un mejor
            posicionamiento SEO.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-lg text-slate-700">
                  <strong>Imágenes optimizadas (WebP, SVG):</strong> Comprimimos
                  y utilizamos formatos de imagen modernos con `lazy loading`
                  para una carga eficiente.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-lg text-slate-700">
                  <strong>CSS y JS minificados:</strong> Reducimos el tamaño de
                  los archivos de estilo y script para acelerar la descarga y el
                  renderizado.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-lg text-slate-700">
                  <strong>Eliminación de contenido innecesario:</strong>{" "}
                  Limpiamos el código de elementos que no aportan valor y
                  ralentizan la carga.
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
                  <strong>
                    Mobile-first para usuarios que buscan desde el móvil:
                  </strong>
                  Diseñamos pensando primero en la experiencia móvil, donde se
                  generan la mayoría de las búsquedas de clínicas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-lg text-slate-700">
                  <strong>
                    Rendimiento apuntando a +90 en Google PageSpeed Insights
                    (móvil):
                  </strong>
                  Nuestra meta es que tu web logre las mejores puntuaciones en
                  las métricas de rendimiento de Google.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-lg text-slate-700">
                  <strong>Fuentes del sistema o cargadas localmente:</strong>{" "}
                  Para evitar dependencias externas y asegurar una carga de
                  texto más rápida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Diseño legal y técnico conforme a normativa */}
        <section className="mb-16 bg-cyan-50 p-10 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Diseño legal y técnico conforme a normativa
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            En el ámbito de la salud, la legalidad es tan importante como la
            funcionalidad. Tu{" "}
            <strong className="text-blue-700">diseño web para clínicas</strong>
            debe cumplir con las leyes de protección de datos (RGPD, LOPDGDD) y
            garantizar la seguridad de la información de tus pacientes.
          </p>
          <ul className="space-y-4 text-slate-700 text-lg leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>
                RGPD: Política de privacidad, cookies y consentimiento:
              </strong>
              Implementamos los avisos legales necesarios y sistemas de gestión
              de consentimiento de cookies que cumplen con la normativa europea.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>Textos legales accesibles y visibles:</strong> Las
              secciones de Aviso Legal, Política de Privacidad y Política de
              Cookies son fáciles de encontrar y leer para todos los usuarios.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>
                Formularios seguros (captcha accesible, cifrado SSL):
              </strong>
              Toda la comunicación de datos sensibles a través de tu web está
              protegida con cifrado SSL y medidas anti-spam accesibles.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <strong>Hosting en servidores seguros con backup:</strong> Tu
              información y la de tus pacientes estará alojada en entornos
              seguros con copias de seguridad regulares.
            </li>
          </ul>
        </section>

        {/* 6. Nuestro enfoque al crear webs para clínicas */}
        <section className="mb-16 bg-gray-50 p-10 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Nuestro enfoque al crear webs para clínicas
          </h2>
          <ol className="list-decimal list-inside space-y-6 text-lg text-slate-700 leading-relaxed">
            <li>
              <strong>
                Entrevista inicial, diseño UX y contenido sanitario validado:
              </strong>
              Comenzamos conociendo a fondo tu clínica, tus especialidades
              (fisioterapia, podología, psicología, etc.) y tus objetivos.
              Diseñamos la experiencia de usuario y redactamos contenido
              relevante y médicamente preciso.
            </li>
            <li>
              <strong>Optimización desde el día 1 para SEO local:</strong> Desde
              el primer borrador, tu{" "}
              <strong className="text-blue-700">
                página web para clínicas
              </strong>
              está pensada para posicionarse en Alcalá de Henares, usando
              palabras clave relevantes como "diseño web para psicólogos en
              Alcalá" o "web para fisioterapia privada".
            </li>
            <li>
              <strong>Desarrollo técnico y funcional:</strong> Construimos tu
              web con las últimas tecnologías, implementando todas las
              funcionalidades esenciales y asegurando la accesibilidad y el
              rendimiento.
            </li>
            <li>
              <strong>
                Formación para que el personal gestione contenidos:
              </strong>{" "}
              Te capacitamos para que puedas actualizar fácilmente tus
              servicios, horarios o noticias de la clínica sin necesidad de
              programadores.
            </li>
            <li>
              <strong>Lanzamiento y seguimiento:</strong> Ponemos tu web en
              marcha y realizamos un seguimiento inicial para asegurar que todo
              funciona a la perfección.
            </li>
          </ol>
        </section>

        {/* 7. Caso de éxito ficticio: Clínica Salud Henares */}
        <section className="mb-16 text-center bg-blue-50 p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Caso de éxito ficticio: Clínica Salud Henares
          </h2>
          <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
            La Clínica Salud Henares, un centro multidisciplinar en Alcalá de
            Henares, necesitaba una renovación de su presencia digital que
            transmitiera su profesionalidad y facilitara las citas online. Con
            nuestro servicio de{" "}
            <strong className="text-blue-700">
              diseño web para clínicas en Alcalá de Henares
            </strong>
            , transformamos su antigua web en una plataforma moderna y
            eficiente.
          </p>
          <p className="text-lg text-slate-600 italic mb-8 max-w-3xl mx-auto">
            "Nuestra nueva web ha sido un antes y un después. Los pacientes nos
            encuentran más fácilmente, las citas online se han disparado y la
            imagen de la clínica se ha modernizado por completo. ¡Un trabajo
            excelente y muy profesional!" - Dr. Carlos Soto, Director de Clínica
            Salud Henares.
          </p>
          <p className="text-lg text-slate-700">
            <strong>Resultados:</strong> Aumento del 70% en citas solicitadas a
            través de la web, mejora del posicionamiento orgánico en un 85% para
            búsquedas locales y un incremento del 40% en llamadas directas a la
            clínica.
          </p>
        </section>

        {/* 8. Preguntas frecuentes (con H3) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Preguntas frecuentes sobre diseño web para clínicas
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-4xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-600">
                ¿Cumple la web con la ley de protección de datos (RGPD)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 text-base leading-relaxed">
                Sí, absolutamente. Todas nuestras{" "}
                <strong className="text-blue-700">
                  páginas web para clínicas médicas
                </strong>{" "}
                se desarrollan siguiendo estrictamente el Reglamento General de
                Protección de Datos (RGPD) y la Ley Orgánica de Protección de
                Datos Personales y garantía de los derechos digitales (LOPDGDD).
                Incluimos política de privacidad, política de cookies, aviso
                legal y mecanismos de consentimiento explícito.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-600">
                ¿Cómo actualizo mis tratamientos o profesionales?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 text-base leading-relaxed">
                Te proporcionamos un panel de administración intuitivo y fácil
                de usar. Podrás añadir, editar o eliminar tratamientos,
                especialidades, perfiles de profesionales, horarios y noticias
                de tu clínica sin necesidad de conocimientos técnicos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-600">
                ¿Qué pasa si necesito soporte técnico?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 text-base leading-relaxed">
                Ofrecemos planes de soporte y mantenimiento personalizados para
                garantizar que tu{" "}
                <strong className="text-blue-700">
                  web profesional para centro sanitario
                </strong>{" "}
                siempre esté actualizada, segura y funcione a la perfección.
                Nuestro equipo está disponible para ayudarte con cualquier duda
                o incidencia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-600">
                ¿Incluye cita online o formulario de contacto?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 text-base leading-relaxed">
                Sí, ambas opciones son funcionalidades esenciales que
                integramos. Podemos conectar tu web con tu sistema de citas
                online existente o implementar un formulario de contacto
                accesible y seguro para que tus pacientes puedan solicitar
                información o pedir cita directamente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* 9. ¿Por qué elegirnos en Alcalá de Henares? */}
        <section className="mb-16 bg-blue-50 p-10 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            ¿Por qué elegirnos para tu diseño web de clínica en Alcalá de
            Henares?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Stethoscope
                  className="w-10 h-10 text-blue-600 mb-4 mx-auto"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Experiencia con el sector sanitario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Conocemos las particularidades y necesidades específicas de
                  clínicas médicas, fisioterapia, podología, psicología y otros
                  centros de salud.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Handshake
                  className="w-10 h-10 text-blue-600 mb-4 mx-auto"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Atención personalizada y local
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Somos tu agencia de diseño web en Alcalá de Henares. Te
                  ofrecemos un trato cercano y soluciones a medida, adaptadas a
                  tu clínica.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Lightbulb
                  className="w-10 h-10 text-blue-600 mb-4 mx-auto"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  Tecnología de vanguardia y resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Empleamos las últimas tecnologías para asegurar una web
                  rápida, segura, accesible y optimizada para Google,
                  garantizando resultados medibles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Final CTA */}
      <section
        id="contacto"
        className="text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white p-12 rounded-lg mx-auto max-w-[1250px] mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">
          ¿Listo para impulsar tu clínica con una web de éxito?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Solicita tu diseño web para clínica en Alcalá de Henares y empieza a
          atraer más pacientes con una presencia digital profesional, que
          transmita confianza y cumpla con todas las normativas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3"
          >
            <a
              href="mailto:info@disenowebalcaladehenares.es"
              aria-label="Solicitar presupuesto gratuito para clínicas"
            >
              Solicitar presupuesto gratuito
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisenoWebClinicas;
