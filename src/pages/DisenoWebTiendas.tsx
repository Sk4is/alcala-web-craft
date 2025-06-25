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
  ShoppingCart,
  Package,
  CreditCard,
  Users,
  Gauge,
  MapPin,
  Handshake,
  Star,
  Tag,
  ShieldCheck,
  TrendingUp,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const DisenoWebTiendas: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Tiendas Online en Alcalá de Henares | Diseño y Desarrollo de Ecommerce
        </title>

        <meta
          name="description"
          content="Creación de tiendas online profesionales en Alcalá de Henares: ecommerce rápido, accesible y optimizado para SEO, con pasarelas de pago seguras y formación incluida."
        />

        <meta
          name="keywords"
          content="tiendas online Alcalá de Henares, ecommerce Alcalá, diseño tienda online, desarrollo ecommerce, pasarelas de pago seguras"
        />

        <link
          rel="canonical"
          href="https://disenowebalcaladehenares.es/diseno-web-tiendas-online-alcala-de-henares.html"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 scroll-smooth">
        <Header />

        {/* ========================= HERO ========================= */}
        <section
          aria-labelledby="hero-title"
          className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-lime-50"
        >
          <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto Hero */}
            <div>
              <h1
                id="hero-title"
                className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              >
                <span className="text-emerald-700">Tiendas online</span> en
                Alcalá de Henares: tu ecommerce profesional
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-[50ch]">
                El comercio está cambiando. Cada vez más consumidores de Alcalá
                compran desde su móvil, a cualquier hora y sin colas. Con una{" "}
                <strong className="text-emerald-800">
                  tienda online propia
                </strong>{" "}
                controlas la marca, el margen y la experiencia de compra, sin
                pagar comisiones a marketplaces. Somos expertos en crear
                <em> ecommerce locales de alto rendimiento</em> que cumplen
                normativa, cargan en menos de dos segundos y convierten
                visitantes en ventas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-800 transition-all duration-300 shadow-lg"
                >
                  <a
                    href="#contacto"
                    aria-label="Solicitar presupuesto para tienda online"
                  >
                    Solicita tu tienda online
                  </a>
                </Button>
              </div>
            </div>

            {/* Panel estadísticas */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl shadow-2xl p-8 w-full lg:w-[90%]"
                aria-label="Indicadores de rendimiento"
              >
                <div className="flex items-center mb-6">
                  <ShoppingCart
                    className="h-8 w-8 text-emerald-700 mr-3"
                    aria-hidden="true"
                  />
                  <h2 className="text-xl font-bold text-slate-900">
                    Resultados Ecommerce
                  </h2>
                </div>
                <ul className="space-y-4" role="list">
                  <li className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <TrendingUp
                        className="h-5 w-5 text-emerald-700 mr-2"
                        aria-hidden="true"
                      />
                      Tasa de Conversión
                    </span>
                    <span className="font-bold text-emerald-700">+3.5 %</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <Package
                        className="h-5 w-5 text-green-600 mr-2"
                        aria-hidden="true"
                      />
                      Pedidos Mensuales
                    </span>
                    <span className="font-bold text-green-600">+180</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-lime-50 rounded-lg">
                    <span className="flex items-center text-slate-700">
                      <Gauge
                        className="h-5 w-5 text-lime-600 mr-2"
                        aria-hidden="true"
                      />
                      PageSpeed Móvil
                    </span>
                    <span className="font-bold text-lime-600">95/100</span>
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
              Introducción – Digitaliza tu comercio
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed">
              ¿Tienes una tienda física de moda, alimentación o artesanía y
              notas que el flujo de clientes en el casco histórico ya no es el
              mismo? Con una <strong>tienda online en Alcalá de Henares</strong>{" "}
              amplías tu horario a 24/7, llegas a nuevos barrios y fidelizas
              clientes que prefieren la comodidad de comprar desde casa. A
              diferencia de vender en un marketplace genérico, una web propia te
              permite construir marca, controlar márgenes y mantener la relación
              directa con el comprador. La clave está en ofrecer velocidad,
              accesibilidad y confianza desde la primera visita.
            </p>
          </section>

          {/* 1 – Por qué crear una tienda online */}
          <section aria-labelledby="h2-por-que" className="space-y-6">
            <h2 id="h2-por-que" className="text-3xl font-bold">
              ¿Por qué crear una tienda online en Alcalá de Henares?
            </h2>
            <p>
              Los hábitos de compra han cambiado: el 72 % de los alcalaínos de
              entre 18 y 55 años ya compran online al menos una vez al mes. Un
              ecommerce elimina horarios y colas, permite retirar en tienda o
              recibir en casa y posiciona tu negocio en Google. Adaptarse al
              entorno digital no es solo vender fuera de tu barrio, es asegurar
              la supervivencia de tu comercio local.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Compras sin horario: pedidos desde móvil incluso de madrugada.
              </li>
              <li>
                Comercio local visible: Google prioriza resultados cercanos.
              </li>
              <li>Sin fronteras: envía a toda España sin abrir más locales.</li>
            </ul>
          </section>

          {/* 2 – Beneficios */}
          <section aria-labelledby="h2-beneficios" className="space-y-6">
            <h2 id="h2-beneficios" className="text-3xl font-bold">
              Beneficios de tener tu propia tienda online
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Ventas 24/7:</strong> ingresa mientras tu tienda física
                está cerrada.
              </li>
              <li>
                <strong>Automatización:</strong> pedidos, pagos y facturas
                generados al instante.
              </li>
              <li>
                <strong>Integración social:</strong> vende directamente desde
                Instagram Shopping o Facebook Shop.
              </li>
              <li>
                <strong>Escalabilidad:</strong> añade nuevos productos o
                categorías sin coste adicional.
              </li>
            </ul>
          </section>

          {/* 3 – Funcionalidades esenciales */}
          <section aria-labelledby="h2-funcionalidades" className="space-y-8">
            <h2 id="h2-funcionalidades" className="text-3xl font-bold">
              Funcionalidades esenciales de una tienda online efectiva
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Catálogo */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Package
                      className="mr-2 text-emerald-700"
                      aria-hidden="true"
                    />
                    Catálogo accesible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Categorías claras, descripciones concisas, imágenes WebP con{" "}
                  <code>alt</code> descriptivo y textos adaptados a lectura
                  fácil.
                </CardContent>
              </Card>

              {/* Buscador y filtros */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Tag className="mr-2 text-emerald-700" aria-hidden="true" />
                    Buscador y filtros accesibles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Filtros activables con teclado y lector de pantalla, roles{" "}
                  <code>aria</code> y resultados en tiempo real.
                </CardContent>
              </Card>

              {/* Carrito accesible */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <ShoppingCart
                      className="mr-2 text-emerald-700"
                      aria-hidden="true"
                    />
                    Carrito compatible con a11y
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Total actualizado con <code>live regions</code>, navegación
                  por tabulador y foco visible.
                </CardContent>
              </Card>

              {/* Pagos seguros */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <CreditCard
                      className="mr-2 text-emerald-700"
                      aria-hidden="true"
                    />
                    Pagos seguros y RGPD
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Pasarelas Stripe, PayPal y Redsys con PSD2, SSL y tokenización
                  de datos.
                </CardContent>
              </Card>

              {/* Emails transaccionales */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Mail
                      className="mr-2 text-emerald-700"
                      aria-hidden="true"
                    />
                    Emails transaccionales accesibles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Plantillas responsive, texto alternativo y cabeceras legibles
                  por screen reader.
                </CardContent>
              </Card>

              {/* Política legal */}
              <Card className="bg-white shadow border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <ShieldCheck
                      className="mr-2 text-emerald-700"
                      aria-hidden="true"
                    />
                    Política de devoluciones y legal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Aviso legal, LSSI, política de devoluciones y cookies
                  redactados por juristas y visibles en un clic.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 4 – Accesibilidad */}
          <section aria-labelledby="h2-accesibilidad" className="space-y-6">
            <h2 id="h2-accesibilidad" className="text-3xl font-bold">
              Accesibilidad web para ecommerce (obligatoria)
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                Imágenes de productos con descripción <code>alt</code> clara y
                completa.
              </li>
              <li>
                Contraste mínimo AA en textos, botones y etiquetas de precio.
              </li>
              <li>
                Formularios con <code>&lt;label&gt;</code> y{" "}
                <code>aria-label</code>.
              </li>
              <li>
                Botones con propósito claro: “Añadir al carrito”, “Finalizar
                compra”.
              </li>
              <li>Menús navegables con teclado, foco visible y roles ARIA.</li>
              <li>Validación WAVE y AXE antes de lanzar la web.</li>
            </ul>
          </section>

          {/* 5 – WPO */}
          <section aria-labelledby="h2-wpo" className="space-y-6">
            <h2 id="h2-wpo" className="text-3xl font-bold">
              WPO – Rendimiento para ecommerce: velocidad = ventas
            </h2>
            <p>
              Cada segundo extra en la carga reduce un 7 % las conversiones.
              Optimizamos Core Web Vitals para que el Largest Contentful Paint
              sea &lt;2.5 s y el Time To First Byte esté por debajo de 200 ms.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Imágenes WebP y lazy load progresivo.</li>
              <li>CSS / JS minificados y carga diferida.</li>
              <li>Prioridad a contenido principal y preload de fuentes.</li>
              <li>Cacheado de páginas y base de datos optimizada.</li>
              <li>Testing constante con PageSpeed y Lighthouse.</li>
            </ul>
          </section>

          {/* 6 – Tecnologías */}
          <section aria-labelledby="h2-tech" className="space-y-6">
            <h2 id="h2-tech" className="text-3xl font-bold">
              ¿Qué tecnologías usamos?
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>WooCommerce:</strong> flexible y familiar para
                WordPress.
              </li>
              <li>
                <strong>Shopify:</strong> rapidez de despliegue y Apps de
                marketing.
              </li>
              <li>
                <strong>PrestaShop:</strong> ideal para catálogos grandes y
                multitienda.
              </li>
              <li>
                <strong>Ecommerce a medida:</strong> cuando necesitas
                funcionalidades únicas.
              </li>
              <li>
                Pasarelas Stripe, PayPal, Redsys integradas y conformes PSD2.
              </li>
            </ul>
          </section>

          {/* 7 – Caso de éxito */}
          <section
            aria-labelledby="h2-caso"
            className="space-y-8 bg-emerald-50 p-8 rounded-lg shadow-sm"
          >
            <h2 id="h2-caso" className="text-3xl font-bold text-center">
              Caso de éxito: “Alcalá Moda Local”
            </h2>
            <p className="text-center max-w-3xl mx-auto">
              Una boutique de moda del casco histórico lanzó su tienda online y
              en cuatro meses facturó un 60 % más. Con SEO local en “tiendas
              online de ropa en Alcalá”, integraciones con Instagram Shopping y
              envíos automatizados con Correos Express, triplicó el alcance a
              nuevos clientes sin abrir un segundo local.
            </p>
          </section>

          {/* 8 – FAQ */}
          <section aria-labelledby="h2-faq" className="space-y-6">
            <h2 id="h2-faq" className="text-3xl font-bold">
              Preguntas frecuentes sobre ecommerce
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              aria-label="Preguntas frecuentes"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Puedo gestionar yo mismo la tienda?
                </AccordionTrigger>
                <AccordionContent>
                  Sí. Incluimos formación en vídeo y manual PDF para alta de
                  productos, gestión de pedidos y campañas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Es segura para cobrar con tarjeta?
                </AccordionTrigger>
                <AccordionContent>
                  Usamos SSL, pasarelas certificadas PCI DSS y autenticación
                  PSD2 para máxima seguridad.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Incluye SEO?
                </AccordionTrigger>
                <AccordionContent>
                  Arquitectura optimizada, rich snippets de producto,
                  meta‑etiquetas y sitemap automático.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Cumple con la normativa legal?
                </AccordionTrigger>
                <AccordionContent>
                  Sí. Integramos aviso legal, política de cookies, condiciones
                  de venta y RGPD.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* 9 – Por qué elegirnos */}
          <section aria-labelledby="h2-why-us" className="space-y-6">
            <h2 id="h2-why-us" className="text-3xl font-bold">
              ¿Por qué elegirnos si estás en Alcalá de Henares?
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <MapPin
                  className="inline-block h-5 w-5 text-emerald-700 mr-2"
                  aria-hidden="true"
                />
                Conocimiento del consumidor local y logística de proximidad.
              </li>
              <li>
                <Handshake
                  className="inline-block h-5 w-5 text-emerald-700 mr-2"
                  aria-hidden="true"
                />
                Soporte técnico y formación personalizada post‑lanzamiento.
              </li>
              <li>
                <Gauge
                  className="inline-block h-5 w-5 text-emerald-700 mr-2"
                  aria-hidden="true"
                />
                Diseño, rendimiento y accesibilidad enfocados a ventas.
              </li>
            </ul>
          </section>
        </main>

        {/* 10 – CTA Final */}
        <section
          id="contacto"
          aria-labelledby="cta-title"
          className="text-center bg-gradient-to-r from-emerald-700 to-emerald-900 text-white p-12 rounded-lg max-w-[1250px] mx-auto mb-16"
        >
          <h2 id="cta-title" className="text-3xl font-bold mb-6">
            Solicita tu tienda online y empieza a vender sin límites
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Digitaliza tu negocio y llega a nuevos clientes con un ecommerce
            rápido, accesible y optimizado para Google.
          </p>
          <Button
            size="lg"
            className="bg-white text-emerald-700 hover:bg-emerald-100 px-8 py-4 rounded-xl font-semibold"
          >
            <a
              href="mailto:info@disenowebalcaladehenares.es"
              aria-label="Solicitar presupuesto tienda online"
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

export default DisenoWebTiendas;
