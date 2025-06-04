
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import QuoteForm from "./pages/QuoteForm";
import Proposal from "./pages/Proposal";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

// Import test utilities for development
if (process.env.NODE_ENV === 'development') {
  import('./tests/test-runner').then(({ executeHealthFlowTests }) => {
    (window as any).executeHealthFlowTests = executeHealthFlowTests;
    console.log('🧪 Health Flow Tests loaded! Run executeHealthFlowTests() in console to test.');
  });
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/quote/:type" element={<QuoteForm />} />
            <Route path="/proposal" element={<Proposal />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
