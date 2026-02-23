import EraPage from "./pages/EraPage";
import AlbumPage from "@/pages/AlbumPage";
import MixtapePage from "@/pages/MixtapePage";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingPlayer from "@/components/FloatingPlayer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/eras/:slug" element={<EraPage />} />
            <Route path="/albums/:slug" element={<AlbumPage />} />
            <Route path="/mixtapes/:slug" element={<MixtapePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingPlayer />

          {/* Global Player */}
          <FloatingPlayer />
        </>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;