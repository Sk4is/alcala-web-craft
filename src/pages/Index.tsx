import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNegociosOpen, setIsNegociosOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        setIsNegociosOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* ---------- HEAD SEO / WPO ---------- */}
      <Helmet>
        <html lang="es" />
        <title>Diseño web Alcalá de Henares - Agencia local profesional</title>
        <meta
          name="description"
          content="Agencia local de diseño web en Alcalá de Henares: webs rápidas, accesibles y optimizadas para SEO que impulsan tu negocio."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://disenowebalcaladehenares.es/" />

        {/* Favicon & preconnect */}
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link
          rel="preconnect"
          href="https://cdn.tailwindcss.com"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.tailwindcss.com"
          crossOrigin="anonymous"
        />

        {/* Open Graph / Twitter */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Diseño web Alcalá de Henares – Agencia local"
        />
        <meta
          property="og:description"
          content="Webs profesionales, veloces y con SEO local incluido. Presupuesto gratuito."
        />
        <meta
          property="og:url"
          content="https://disenowebalcaladehenares.es/"
        />
        <meta
          property="og:image"
          content="https://disenowebalcaladehenares.es/og-image.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD resumido (Organization + FAQ) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Diseño Web Alcalá de Henares",
            url: "https://disenowebalcaladehenares.es",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Alcalá de Henares",
              addressRegion: "Madrid",
            },
            telephone: "+34 918234567",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white font-inter">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Diseño web{" "}
                    <span className="text-primary-600">Alcalá de Henares</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Creamos páginas web profesionales, rápidas y optimizadas
                    para SEO que hacen crecer tu negocio local. Especialistas en
                    diseño web para empresas en Alcalá de Henares con más de 5
                    años de experiencia.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contacto-alcala-de-henares.html"
                      className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 hover:shadow-xl focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center justify-center"
                      aria-label="Solicitar presupuesto gratuito para diseño web"
                    >
                      Presupuesto Gratuito
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                  <div className="mt-8 flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Consulta gratuita
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Sin permanencia
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Soporte local
                    </div>
                  </div>
                </div>

                <div className="relative animate-slide-up">
                  <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-sm text-gray-500">
                          disenowebalcaladehenares.es
                        </div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded mb-4"></div>
                      <div className="space-y-3">
                        <div className="h-4 bg-primary-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary-500 to-blue-500 h-32 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beneficios principales */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  ¿Por qué elegir nuestro diseño web en Alcalá de Henares?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ofrecemos soluciones de diseño web completas, optimizadas para
                  el mercado local y adaptadas a las necesidades específicas de
                  tu negocio.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-scale-in">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Carga Ultrarrápida
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Páginas web optimizadas para carga en menos de 2 segundos.
                    Google premia la velocidad y nosotros lo sabemos.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-scale-in">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    SEO Local Garantizado
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aparece en los primeros resultados cuando busquen tu tipo de
                    negocio en Alcalá de Henares. SEO local incluido.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-scale-in">
                  <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Soporte 24/7
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Atención técnica rápida y profesional. Estamos aquí para
                    resolver cualquier problema o duda que tengas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios Section */}
          <section id="servicios" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Nuestros Servicios de Diseño Web
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ofrecemos soluciones completas de diseño web profesional,
                  desde páginas corporativas hasta tiendas online avanzadas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-desarrollo-web-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Desarrollo Web
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Páginas web a medida, rápidas y optimizadas para SEO.
                    Desarrollo profesional con código limpio.
                  </p>
                  <a
                    href="/diseno-web-desarrollo-web-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Más información <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-tiendas-online-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Tiendas Online
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Ecommerce profesional para vender online. Gestión de
                    productos, pagos seguros y envíos automatizados.
                  </p>
                  <a
                    href="/diseno-web-tiendas-online-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Más información <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="bg-accent-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-accent-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-posicionamiento-seo-local-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      SEO Local
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Posicionamiento en Google para aparecer cuando busquen tu
                    negocio en Alcalá de Henares.
                  </p>
                  <a
                    href="/diseno-web-posicionamiento-seo-local-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Más información <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-mantenimiento-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Mantenimiento Web
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Mantén tu web actualizada, segura y funcionando
                    perfectamente con nuestro servicio de mantenimiento.
                  </p>
                  <a
                    href="/diseno-web-mantenimiento-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Más información <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Para Negocios Section */}
          <section id="para-negocios" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Diseño Web Especializado por Sectores
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Conocemos las necesidades específicas de cada tipo de negocio.
                  Creamos páginas web adaptadas a tu sector profesional.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-gimnasios-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Gimnasios y Fitness
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Webs con sistema de reservas, horarios de clases, perfiles
                    de entrenadores y galería de instalaciones.
                  </p>
                  <a
                    href="/diseno-web-gimnasios-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Ver más <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-restaurantes-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Restaurantes y Bares
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Carta digital, sistema de reservas, galería de platos y
                    integración con redes sociales y delivery.
                  </p>
                  <a
                    href="/diseno-web-restaurantes-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Ver más <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-dentistas-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Clínicas Dentales
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Webs médicas con cita online, información de tratamientos,
                    equipo profesional y cumplimiento RGPD.
                  </p>
                  <a
                    href="/diseno-web-dentistas-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Ver más <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-hoteles-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Hoteles y Turismo
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Motor de reservas, galería de habitaciones, servicios del
                    hotel y integración con booking engines.
                  </p>
                  <a
                    href="/diseno-web-hoteles-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Ver más <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-clinicas-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Clínicas Médicas
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Webs sanitarias con cita previa, especialidades médicas,
                    equipo profesional y cumplimiento normativo.
                  </p>
                  <a
                    href="/diseno-web-clinicas-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Ver más <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href="/diseno-web-abogados-alcala-de-henares.html"
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      Despachos de Abogados
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Webs jurídicas con áreas de práctica, equipo legal,
                    formulario de consulta y cumplimiento LOPD.
                  </p>
                  <a
                    href="/diseno-web-abogados-alcala-de-henares.html"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center"
                  >
                    Ver más <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Proceso de trabajo */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Nuestro Proceso de Trabajo
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Un proceso claro y transparente para garantizar el éxito de tu
                  proyecto web desde el primer día.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Consulta Inicial
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Analizamos tu negocio, objetivos y competencia para crear la
                    estrategia perfecta.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Diseño y Desarrollo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Creamos tu web con diseño moderno, funcionalidad avanzada y
                    optimización completa.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Pruebas y Revisión
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Testeos exhaustivos de velocidad, accesibilidad y
                    funcionamiento en todos los dispositivos.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Lanzamiento
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Publicamos tu web y te formamos para que puedas gestionarla
                    de forma autónoma.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Por qué elegir diseño web local */}
          <section className="py-16 bg-primary-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  ¿Por qué elegir diseño web en Alcalá de Henares?
                </h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  Ventajas de trabajar con una agencia local que conoce tu
                  mercado y tu competencia.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Conocimiento Local
                  </h3>
                  <p className="text-primary-100 text-sm">
                    Conocemos el mercado de Alcalá de Henares y sabemos qué
                    buscan tus clientes locales.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Soporte Presencial
                  </h3>
                  <p className="text-primary-100 text-sm">
                    Reuniones presenciales, soporte técnico rápido y atención
                    personalizada cuando la necesites.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    SEO Local Especializado
                  </h3>
                  <p className="text-primary-100 text-sm">
                    Optimización específica para aparecer en búsquedas locales y
                    Google Maps de la zona.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Compromiso Real
                  </h3>
                  <p className="text-primary-100 text-sm">
                    Tu éxito es nuestro éxito. Nos importa que tu negocio crezca
                    y triunfe en internet.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Preguntas Frecuentes
                </h2>
                <p className="text-xl text-gray-600">
                  Resolvemos las dudas más comunes sobre nuestros servicios de
                  diseño web.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Cuánto tiempo tardan en hacer mi página web?
                  </h3>
                  <p className="text-gray-600">
                    El tiempo de desarrollo depende de la complejidad del
                    proyecto. Una web corporativa básica puede estar lista en
                    2-3 semanas, mientras que una tienda online o web más
                    compleja puede tardar 4-6 semanas. Te daremos un cronograma
                    detallado antes de empezar.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Las páginas web son responsive y se ven bien en móviles?
                  </h3>
                  <p className="text-gray-600">
                    Absolutamente. Todas nuestras páginas web están diseñadas
                    con enfoque mobile-first, lo que significa que se ven y
                    funcionan perfectamente en todos los dispositivos: móviles,
                    tablets y ordenadores.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Incluyen posicionamiento SEO en Google?
                  </h3>
                  <p className="text-gray-600">
                    Sí, incluimos SEO básico en todos nuestros proyectos:
                    optimización técnica, velocidad de carga, estructura
                    semántica y SEO local para que aparezcas en búsquedas de
                    Alcalá de Henares. También ofrecemos servicios avanzados de
                    SEO por separado.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Puedo actualizar el contenido yo mismo?
                  </h3>
                  <p className="text-gray-600">
                    Por supuesto. Utilizamos gestores de contenido fáciles de
                    usar como WordPress, y te proporcionamos formación completa
                    para que puedas añadir contenido, imágenes y hacer cambios
                    básicos de forma autónoma.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Qué pasa si tengo problemas técnicos después del
                    lanzamiento?
                  </h3>
                  <p className="text-gray-600">
                    Ofrecemos soporte técnico continuo. Los primeros 30 días
                    posteriores al lanzamiento incluyen soporte gratuito para
                    resolver cualquier incidencia. Después, puedes contratar
                    nuestro servicio de mantenimiento web.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 bg-gradient-to-r from-primary-600 to-blue-700">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                ¿Listo para impulsar tu negocio online?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Contacta con nosotros hoy mismo y descubre cómo una página web
                profesional puede transformar tu negocio en Alcalá de Henares.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto-alcala-de-henares.html"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:shadow-xl inline-flex items-center justify-center"
                  aria-label="Solicitar presupuesto gratuito sin compromiso"
                >
                  Solicitar Presupuesto Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <p className="mt-6 text-primary-100 text-sm">
                Consulta gratuita sin compromiso • Atención personalizada •
                Soporte local en Alcalá de Henares
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
