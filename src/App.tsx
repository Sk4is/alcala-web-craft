
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DisenoWebGimnasios from "./pages/DisenoWebGimnasios";
import DisenoWebRestaurantes from "./pages/DisenoWebRestaurantes";
import DisenoWebDentistas from "./pages/DisenoWebDentistas";
import DisenoWebHoteles from "./pages/DisenoWebHoteles";
import DisenoWebClinicas from "./pages/DisenoWebClinicas";
import DisenoWebAbogados from "./pages/DisenoWebAbogados";
import DisenoWebMantenimiento from "./pages/DisenoWebMantenimiento";
import DisenoWebTiendas from "./pages/DisenoWebTiendas";
import DisenoWebDesarrollo from "./pages/DisenoWebDesarrollo";
import DisenoWebSeo from "./pages/DisenoWebSeo";
import Contacto from "./pages/Contacto";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diseno-web-gimnasios-alcala-de-henares.html" element={<DisenoWebGimnasios />} />
            <Route path="/diseno-web-restaurantes-alcala-de-henares.html" element={<DisenoWebRestaurantes />} />
            <Route path="/diseno-web-dentistas-alcala-de-henares.html" element={<DisenoWebDentistas />} />
            <Route path="/diseno-web-hoteles-alcala-de-henares.html" element={<DisenoWebHoteles />} />
            <Route path="/diseno-web-clinicas-alcala-de-henares.html" element={<DisenoWebClinicas />} />
            <Route path="/diseno-web-abogados-alcala-de-henares.html" element={<DisenoWebAbogados />} />
            <Route path="/diseno-web-mantenimiento-alcala-de-henares.html" element={<DisenoWebMantenimiento />} />
            <Route path="/diseno-web-tiendas-online-alcala-de-henares.html" element={<DisenoWebTiendas />} />
            <Route path="/diseno-web-desarrollo-web-alcala-de-henares.html" element={<DisenoWebDesarrollo />} />
            <Route path="/diseno-web-posicionamiento-seo-local-alcala-de-henares.html" element={<DisenoWebSeo />} />
            <Route path="/contacto-alcala-de-henares.html" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;