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
  MapPin,
  Search,
  TrendingUp,
  Gauge,
  Users,
  Star,
  Globe,
  CheckCircle,
  Smartphone,
  Link as LinkIcon,
  Activity,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Página: posicionamiento SEO local en Alcalá de Henares
 * Keyword principal: posicionamiento SEO en Alcalá de Henares
 * Paleta celeste (sky/cyan) | >1 600 palabras – SEO local, a11y, WPO.
 */

const DisenoWebSeo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 scroll-smooth">
      <Header />

      {/* ========================= HERO ========================= */}
      <section
        aria-labelledby="hero-title"
        className="pt-24 pb-16 bg-gradient-to-br from-sky-50 to-cyan-50"
      >
        <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto Hero */}
          <div>
            <h1
              id="hero-title"
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Posicionamiento SEO en <span className="text-sky-700">Alcalá de Henares</span>: tu negocio visible en Google
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-[50ch]">
              Más del 80&nbsp;% de los consumidores buscan primero en Google antes de acercarse a un comercio físico.
              Con nuestro <strong className="text-sky-800">SEO local en Alcalá</strong> te colocamos donde te necesitan:
              en el top&nbsp;3 del mapa y en los primeros resultados orgánicos cuando alguien escribe “dentista cerca de
              mí” o “gimnasio en Alcalá de Henares”. La visibilidad se ha convertido en la nueva vitrina de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-800 transition-all duration-300 shadow-lg"
              >
                <a href="#contacto" aria-label="Solicitar auditoría SEO gratuita">
                  Solicita auditoría SEO
                </a>
              </Button>
            </div>
          </div>

          {/* Panel estadísticas */}
          <div className="relative">
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 w-full lg:w-[90%]"
              aria-label="Indicadores de SEO local"
            >
              <div className="flex items-center mb-6">
                <Search className="h-8 w-8 text-sky-700 mr-3" aria-hidden="true" />
                <h2 className="text-xl font-bold text-slate-900">Resultados Típicos</h2>
              </div>
              <ul className="space-y-4" role="list">
                <li className="flex justify-between items-center p-3 bg-sky-50 rounded-lg">
                  <span className="flex items-center text-slate-700">
                    <TrendingUp className="h-5 w-5 text-sky-700 mr-2" aria-hidden="true" />Clics desde Google
                  </span>
                  <span className="font-bold text-sky-700">+210&nbsp;%</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                  <span className="flex items-center text-slate-700">
                    <Users className="h-5 w-5 text-cyan-600 mr-2" aria-hidden="true" />Llamadas
                  </span>
                  <span className="font-bold text-cyan-600">+85&nbsp;%</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <span className="flex items-center text-slate-700">
                    <Star className="h-5 w-5 text-emerald-600 mr-2" aria-hidden="true" />Valoraciones
                  </span>
                  <span className="font-bold text-emerald-600">4.8&nbsp;/&nbsp;5</span>
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
        <section aria-labelledby="intro-title" className="max-w-3xl mx-auto text-center">
          <h2 id="intro-title" className="sr-only">
            Introducción – Qué es SEO local y por qué importa
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            El <strong>SEO local</strong> es la disciplina que coloca tu negocio en las primeras posiciones de Google y
            Google&nbsp;Maps cuando un usuario busca productos o servicios cerca de su ubicación. Ejemplos cotidianos: “
            <em>restaurante en Alcalá de Henares</em>”, “<em>dentista cerca de mí</em>”, o “<em>tienda de bicicletas en
            Alcalá</em>”. Para comercios y profesionales de proximidad, aparecer arriba significa más visitas, más
            reservas y, en definitiva, más ingresos. La visibilidad digital es la nueva vitrina física.
          </p>
        </section>

        {/* 1 – Qué es el SEO local */}
        <section aria-labelledby="h2-quees" className="space-y-6">
          <h2 id="h2-quees" className="text-3xl font-bold">
            ¿Qué es el posicionamiento SEO local?
          </h2>
          <p>
            A diferencia del SEO tradicional, que compite en todo un país o idioma, el SEO local se centra en un área
            geográfica concreta. Google muestra resultados diferentes para “agencia de marketing” si la búsqueda se hace
            en Valencia o en Alcalá de Henares. Además del listado orgánico, interviene el <strong>Local Pack</strong> o
            mapa con negocios cercanos. Optimizar tu ficha de <strong>Google Business Profile</strong> y los factores de
            relevancia locales es esencial para dominar estas posiciones.
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>SEO general: compite a nivel nacional o global, prioriza autoridad de dominio.</li>
            <li>SEO local: combina relevancia, cercanía y popularidad en Google Maps.</li>
            <li>Google Maps y Local Pack concentran +40 % de los clics en búsquedas con intención local.</li>
          </ul>
        </section>

        {/* 2 – Beneficios */}
        <section aria-labelledby="h2-beneficios" className="space-y-6">
          <h2 id="h2-beneficios" className="text-3xl font-bold">
            ¿Qué beneficios tiene para tu negocio?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Más visibilidad</strong> en búsquedas geolocalizadas: te encuentran primero.</li>
            <li><strong>Aumento directo</strong> de llamadas, clics, reservas y visitas al local.</li>
            <li><strong>Reseñas positivas</strong> que generan confianza y mejor CTR.</li>
            <li><strong>Tráfico sostenido</strong> y autoridad frente a la competencia.</li>
          </ul>
        </section>

        {/* 3 – Cómo trabajamos */}
        <section aria-labelledby="h2-metodo" className="space-y-8">
          <h2 id="h2-metodo" className="text-3xl font-bold">
            ¿Cómo trabajamos el SEO local?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Globe className="mr-2 text-sky-700" aria-hidden="true" />Optimización on‑page
                </CardTitle>
              </CardHeader>
              <CardContent>
                Títulos, URLs y contenidos enfocados en intención de búsqueda local.
              </CardContent>
            </Card>
            <Card className="bg-white shadow border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <MapPin className="mr-2 text-sky-700" aria-hidden="true" />Google Business Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                Ficha optimizada: categorías, descripción, fotos, horario y preguntas frecuentes.
              </CardContent>
            </Card>
            <Card className="bg-white shadow border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <LinkIcon className="mr-2 text-sky-700" aria-hidden="true" />Enlaces y autoridad
                </CardTitle>
              </CardHeader>
              <CardContent>
                Citaciones locales, notas de prensa y enlaces de calidad que refuerzan relevancia.
              </CardContent>
            </Card>
            <Card className="bg-white shadow border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Star className="mr-2 text-sky-700" aria-hidden="true" />Gestión de reseñas
                </CardTitle>
              </CardHeader>
              <CardContent>
                Sistema para solicitar opiniones, responder y mostrar estrellas en Search.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 4 – Accesibilidad y SEO */}
        <section aria-labelledby="h2-a11y" className="space-y-6">
          <h2 id="h2-a11y" className="text-3xl font-bold">
            Accesibilidad y SEO: van de la mano
          </h2>
          <p>
            Google prefiere sitios accesibles porque ofrecen mejor experiencia de usuario. Nuestros proyectos cumplen
            WCAG 2.1 AA: encabezados jerárquicos, roles ARIA, textos <code>alt</code> y navegación por teclado. Un sitio
            que carga rápido y puede leerse con screen readers obtiene mejor ranking y retiene al visitante.
          </p>
        </section>

        {/* 5 – WPO */}
        <section aria-labelledby="h2-wpo" className="space-y-6">
          <h2 id="h2-wpo" className="text-3xl font-bold">
            WPO: velocidad y rendimiento como factor de posicionamiento
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Imágenes en WebP y lazy loading automático.</li>
            <li>CSS crítico inline y resto en carga diferida.</li>
            <li>Minificación de JS/CSS y compresión Brotli.</li>
            <li>Core Web Vitals optimizados: LCP &lt;2.5 s, CLS &lt;0.1, INP &lt;200 ms.</li>
          </ul>
        </section>

        {/* 6 – Sectores */}
        <section aria-labelledby="h2-sectores" className="space-y-6">
          <h2 id="h2-sectores" className="text-3xl font-bold">
            Sectores en los que aplicamos SEO local
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li><a href="/diseno-web-gimnasios-alcala-de-henares.html" className="text-sky-600 underline">SEO para gimnasios en Alcalá de Henares</a></li>
            <li><a href="/diseno-web-restaurantes-alcala-de-henares.html" className="text-sky-600 underline">SEO para restaurantes</a></li>
            <li><a href="/diseno-web-dentistas-alcala-de-henares.html" className="text-sky-600 underline">SEO para clínicas dentales</a></li>
            <li><a href="/diseno-web-abogados-alcala-de-henares.html" className="text-sky-600 underline">SEO para abogados</a></li>
            <li><a href="/diseno-web-tiendas-online-alcala-de-henares.html" className="text-sky-600 underline">SEO para tiendas online</a></li>
          </ul>
        </section>

        {/* 7 – Casos de éxito */}
        <section aria-labelledby="h2-casos" className="space-y-8 bg-sky-50 p-8 rounded-lg shadow-sm">
          <h2 id="h2-casos" className="text-3xl font-bold text-center">
            Casos de éxito SEO local en Alcalá
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Activity className="mr-2 text-sky-700" aria-hidden="true" />Restaurante "Sabores Complutenses"
                </CardTitle>
              </CardHeader>
              <CardContent>
                Pasó del puesto 17 al top 3 en "restaurante en Alcalá" en 90 días, aumento del 120 % en reservas online y
                +300 llamadas al mes.
              </CardContent>
            </Card>
            <Card className="bg-white shadow border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Activity className="mr-2 text-sky-700" aria-hidden="true" />Clínica Dental Smile
                </CardTitle>
              </CardHeader>
              <CardContent>
                De 0 a 300 visitas mensuales por búsquedas “dentista en Alcalá” y “implantes cerca de mí”, +60 % en
                solicitudes de cita.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 8 – FAQ */}
        <section aria-labelledby="h2-faq" className="space-y-6">
          <h2 id="h2-faq" className="text-3xl font-bold">
            Preguntas frecuentes sobre SEO local
          </h2>
          <Accordion type="single" collapsible className="w-full" aria-label="Preguntas frecuentes">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">¿Cuánto tiempo tarda en posicionar?</AccordionTrigger>
              <AccordionContent>Vemos primeros avances en 8–12 semanas; resultados sólidos a partir de 4–6 meses.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">¿Funciona para negocios pequeños?</AccordionTrigger>
              <AccordionContent>Sí, incluso más: menor competencia local permite subir rápido con optimización correcta.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">¿Necesito una web para hacer SEO?</AccordionTrigger>
              <AccordionContent>La ficha de Google ayuda, pero web propia + contenido local multiplica resultados y control.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">¿Qué pasa si tengo varias sedes?</AccordionTrigger>
              <AccordionContent>Crearemos landing y fichas por ubicación para posicionar cada sede de forma individual.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* 9 – Por qué contratarnos */}
        <section aria-labelledby="h2-why" className="space-y-6">
          <h2 id="h2-why" className="text-3xl font-bold">
            ¿Por qué contratarnos si estás en Alcalá de Henares?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Experiencia real posicionando negocios locales en sectores competitivos.</li>
            <li>Auditoría inicial gratuita y reporte de acciones mensuales.</li>
            <li>Soporte cercano y lenguaje claro, sin tecnicismos innecesarios.</li>
          </ul>
        </section>
      </main>

      {/* 10 – CTA Final */}
      <section
        id="contacto"
        aria-labelledby="cta-title"
        className="text-center bg-gradient-to-r from-sky-700 to-sky-900 text-white p-12 rounded-lg max-w-[1250px] mx-auto mb-16"
      >
        <h2 id="cta-title" className="text-3xl font-bold mb-6">
          Solicita una auditoría SEO gratuita y empieza a ganar visibilidad local
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Descubre qué falla en tu presencia online y cómo podemos llevarte al top&nbsp;1 de Google Maps. Te enviaremos un
          informe claro y un plan de acción personalizado.
        </p>
        <Button
          size="lg"
          className="bg-white text-sky-700 hover:bg-sky-100 px-8 py-4 rounded-xl font-semibold"
        >
          <a href="mailto:info@disenowebalcaladehenares.es" aria-label="Solicitar auditoría SEO gratuita">
            Quiero mi auditoría
          </a>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default DisenoWebSeo;
