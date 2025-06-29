import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" role="banner">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center py-2">
            <a
              href="/"
              aria-label="Diseño Web Alcalá de Henares – Inicio"
              className="inline-block focus:outline-none focus:ring-0"
            >
              <img
                src="/images/logo.png"
                alt="Diseño Web Alcalá de Henares – Logo"
                className="h-14 w-auto max-h-16 object-contain transition-opacity duration-300 hover:opacity-90"
                loading="lazy"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            role="navigation"
            aria-label="Navegación principal"
          >
            <a
              href="/"
              className="text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Inicio
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Servicios
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ${
                  servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                role="menu"
                aria-label="Servicios"
              >
                <div className="py-1">
                  <a
                    href="/diseno-web-desarrollo-web-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Desarrollo Web
                  </a>
                  <a
                    href="/diseno-web-tiendas-online-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Tiendas Online
                  </a>
                  <a
                    href="/diseno-web-posicionamiento-seo-local-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    SEO Local
                  </a>
                  <a
                    href="/diseno-web-mantenimiento-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Mantenimiento Web
                  </a>
                </div>
              </div>
            </div>

            {/* Sectors Dropdown */}
            <div className="relative group">
              <button
                className="text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onMouseEnter={() => setSectorsOpen(true)}
                onMouseLeave={() => setSectorsOpen(false)}
                aria-expanded={sectorsOpen}
                aria-haspopup="true"
              >
                Para Negocios
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ${
                  sectorsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setSectorsOpen(true)}
                onMouseLeave={() => setSectorsOpen(false)}
                role="menu"
                aria-label="Para Negocios"
              >
                <div className="py-1">
                  <a
                    href="/diseno-web-gimnasios-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Gimnasios
                  </a>
                  <a
                    href="/diseno-web-restaurantes-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Restaurantes
                  </a>
                  <a
                    href="/diseno-web-dentistas-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Dentistas
                  </a>
                  <a
                    href="/diseno-web-hoteles-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Hoteles
                  </a>
                  <a
                    href="/diseno-web-clinicas-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Clínicas Médicas
                  </a>
                  <a
                    href="/diseno-web-abogados-alcala-de-henares.html"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    role="menuitem"
                  >
                    Abogados
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/contacto-alcala-de-henares.html"
              className="text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <a
              href="/contacto-alcala-de-henares.html"
              className="text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:ring-offset-2"
            >
              Presupuesto Gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* ------------------- NAV MOBILE ------------------- */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
            <a
              href="/"
              className="block px-3 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md text-base font-medium transition-colors duration-200"
            >
              Inicio
            </a>
            {/* ------- Servicios ------- */}
            <div className="px-3 py-2 text-slate-500 text-sm font-medium">Servicios:</div>
            {[
              ["/diseno-web-desarrollo-web-alcala-de-henares.html", "Desarrollo Web"],
              ["/diseno-web-tiendas-online-alcala-de-henares.html", "Tiendas Online"],
              ["/diseno-web-posicionamiento-seo-local-alcala-de-henares.html", "SEO Local"],
              ["/diseno-web-mantenimiento-alcala-de-henares.html", "Mantenimiento Web"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="block px-6 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md text-sm transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            {/* ------- Sectores ------- */}
            <div className="px-3 py-2 text-slate-500 text-sm font-medium">Para Negocios:</div>
            {[
              ["/diseno-web-gimnasios-alcala-de-henares.html", "Gimnasios"],
              ["/diseno-web-restaurantes-alcala-de-henares.html", "Restaurantes"],
              ["/diseno-web-dentistas-alcala-de-henares.html", "Dentistas"],
              ["/diseno-web-hoteles-alcala-de-henares.html", "Hoteles"],
              ["/diseno-web-clinicas-alcala-de-henares.html", "Clínicas Médicas"],
              ["/diseno-web-abogados-alcala-de-henares.html", "Abogados"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="block px-6 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md text-sm transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <a
              href="/contacto-alcala-de-henares.html"
              className="block px-3 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md text-base font-medium transition-colors duration-200"
            >
              Contacto
            </a>
            <div className="px-3 py-4">
              <a
                href="/contacto-alcala-de-henares.html"
                className="block w-full text-center bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
              >
                Presupuesto Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
