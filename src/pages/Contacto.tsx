import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Página de contacto — Diseño Web Alcalá de Henares
 * Formulario accesible con envío vía ElasticEmail
 * Paleta corporativa roja para coherencia con el sitio
 */

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, service, message } = formData;

    const emailBody = `
      Origen: Diseño Web Alcalá de Henares<br><br>
      <strong>Nombre:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Teléfono:</strong> ${phone || "No proporcionado"}<br>
      <strong>Servicio:</strong> ${service || "No especificado"}<br>
      <strong>Mensaje:</strong><br>${message || "Sin mensaje"}
    `;

    try {
      const response = await fetch("https://api.elasticemail.com/v2/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          apikey:
            "1E0115CB2584BC4CABE6DF8ADCF1A8B627EEF0B2E57FDECAF818E4D94873FD836D8134CE4B5F5A894284525FC3A1CECE",
          subject: "Nuevo mensaje desde el formulario web",
          from: "info@disenowebalcaladeheranes.es",
          to: "info@disenowebalcaladeheranes.es",
          bodyHtml: emailBody,
          isTransactional: "true",
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Gracias por tu consulta. Te contactaremos pronto.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        console.error(result);
        alert("Error al enviar el correo. Revisa que el remitente esté verificado.");
      }
    } catch (error) {
      console.error("Error al conectar:", error);
      alert("No se pudo conectar con el servidor de correo.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Diseño Web Alcalá de Henares - Presupuesto Gratuito</title>
        <meta
          name="description"
          content="Contacta con nuestro equipo para tu proyecto de diseño o desarrollo web en Alcalá de Henares. Presupuesto gratuito y sin compromiso. Teléfono, email y formulario de contacto."
        />
        <meta
          name="keywords"
          content="contacto diseño web Alcalá de Henares, presupuesto web, consulta gratuita"
        />
        <link rel="canonical" href="https://disenowebalcaladehenares.es/contacto-alcala-de-henares.html" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto - Diseño Web Alcalá de Henares",
            description: "Página de contacto para solicitar presupuesto de diseño web en Alcalá de Henares",
            url: "https://disenowebalcaladehenares.es/contacto.html",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <Header />

        <main>
          <section className="py-20">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Título principal */}
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Contacta con Nosotros</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  ¿Tienes un proyecto en mente? Cuéntanos qué necesitas y te prepararemos un presupuesto personalizado y
                  gratuito.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* -------- Formulario -------- */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Solicita tu presupuesto gratuito</h2>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Nombre */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                        placeholder="918 234 567"
                      />
                    </div>

                    {/* Servicio */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                        Servicio de interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="desarrollo-web">Desarrollo Web</option>
                        <option value="tienda-online">Tienda Online</option>
                        <option value="seo-local">SEO Local</option>
                        <option value="mantenimiento">Mantenimiento Web</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Cuéntanos sobre tu proyecto *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors resize-vertical"
                        placeholder="Describe tu proyecto, objetivos, funcionalidades..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-700 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                    >
                      Enviar Consulta
                    </button>
                  </form>
                </div>

                {/* -------- Información de contacto -------- */}
                <div className="space-y-8">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Información de contacto</h2>
                    <div className="space-y-6">
                      {/* Ubicación */}
                      <div className="flex items-start">
                        <span className="text-2xl mr-4" aria-hidden>📍</span>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Ubicación</h3>
                          <p className="text-slate-600">
                            Alcalá de Henares, Madrid
                            <br />Atendemos toda la Comunidad de Madrid
                          </p>
                        </div>
                      </div>
                      {/* Email */}
                      <div className="flex items-start">
                        <span className="text-2xl mr-4" aria-hidden>✉️</span>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                          <a
                            href="mailto:info@disenowebalcaladeheranes.es"
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            info@disenowebalcaladeheranes.es
                          </a>
                        </div>
                      </div>
                      {/* Teléfono */}
                      <div className="flex items-start">
                        <span className="text-2xl mr-4" aria-hidden>📞</span>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Teléfono</h3>
                          <a
                            href="tel:+34918234567"
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            918 234 567
                          </a>
                        </div>
                      </div>
                      {/* Horario */}
                      <div className="flex items-start">
                        <span className="text-2xl mr-4" aria-hidden>🕒</span>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Horario</h3>
                          <p className="text-slate-600">
                            Lunes a Viernes: 9:00 – 18:00
                            <br />Sábados: 10:00 – 14:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Razones para elegirnos */}
                  <div className="bg-red-50 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">¿Por qué elegirnos?</h3>
                    <ul className="space-y-3">
                      {[
                        "Presupuesto gratuito y sin compromiso",
                        "Entrega en 40–60 días laborables",
                        "SEO y optimización incluidos",
                        "Soporte post-lanzamiento",
                        "Especialistas en negocios locales",
                      ].map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="text-green-500 mr-3" aria-hidden>✓</span>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
