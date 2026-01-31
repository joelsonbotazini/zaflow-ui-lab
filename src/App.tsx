import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Financeiro from "./pages/Financeiro";
import Estrategia from "./pages/Estrategia";
import Pessoas from "./pages/Pessoas";
import Qualidade from "./pages/Qualidade";
import SST from "./pages/SST";
import Operacoes from "./pages/Operacoes";
import Comercial from "./pages/Comercial";
import Projetos from "./pages/Projetos";
import PDI from "./pages/PDI";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/estrategia" element={<Estrategia />} />
          <Route path="/pessoas" element={<Pessoas />} />
          <Route path="/qualidade" element={<Qualidade />} />
          <Route path="/sst" element={<SST />} />
          <Route path="/operacoes" element={<Operacoes />} />
          <Route path="/comercial" element={<Comercial />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/pdi" element={<PDI />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
