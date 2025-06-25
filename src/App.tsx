
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diseno-web-gimnasios-alcala-de-henares" element={<DisenoWebGimnasios />} />
          <Route path="/diseno-web-restaurantes-alcala-de-henares" element={<DisenoWebRestaurantes />} />
          <Route path="/diseno-web-dentistas-alcala-de-henares" element={<DisenoWebDentistas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
