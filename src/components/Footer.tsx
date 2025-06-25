import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16" role="contentinfo">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/logo.jpg"
                alt="Diseño Web Alcalá de Henares - Logo"
                className="h-20 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
                loading="lazy"
              />
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Especialistas en diseño web en Alcalá de Henares. Creamos páginas web
              que convierten visitantes en clientes locales.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/diseno-web-desarrollo-web-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a
                  href="/diseno-web-tiendas-online-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Tiendas Online
                </a>
              </li>
              <li>
                <a
                  href="/diseno-web-posicionamiento-seo-local-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  SEO Local
                </a>
              </li>
              <li>
                <a
                  href="/diseno-web-mantenimiento-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Mantenimiento Web
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sectores</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/diseno-web-gimnasios-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Gimnasios
                </a>
              </li>
              <li>
                <a
                  href="/diseno-web-restaurantes-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Restaurantes
                </a>
              </li>
              <li>
                <a
                  href="/diseno-web-dentistas-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Dentistas
                </a>
              </li>
              <li>
                <a
                  href="/diseno-web-hoteles-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Hoteles
                </a>
              </li>
              <li>
                <a
                  href="/diseno-web-clinicas-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Clínicas Médicas
                </a>
              </li>
              <li>
                <a
                  href="/diseno-web-abogados-alcala-de-henares.html"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Abogados
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-indigo-400 mr-2">📍</span>
                <span className="text-slate-300">Alcalá de Henares, Madrid</span>
              </div>
              <div className="flex items-center">
                <span className="text-indigo-400 mr-2">✉️</span>
                <a
                  href="mailto:info@disenowebalcaladehenares.es"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  info@disenowebalcaladehenares.es
                </a>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/contacto"
                className="text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-[#8CC63F] to-[#6B9C2E] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-300 text-sm">
              © 2025 Diseño Web Alcalá de Henares. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/politica-privacidad.html"
                className="text-slate-300 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                Política de Privacidad
              </a>
              <a
                href="/aviso-legal.html"
                className="text-slate-300 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                Aviso Legal
              </a>
              <a
                href="/cookies.html"
                className="text-slate-300 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
