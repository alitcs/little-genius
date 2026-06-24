import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import HoursPage from "./pages/HoursPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/location" component={LocationPage} />
          <Route path="/hours" component={HoursPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FAQPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;