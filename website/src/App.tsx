import { MotionConfig } from "framer-motion";
import { Switch, Route, Redirect, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { PageTransition, ScrollToTop } from "@/components/motion/Motion";

import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import HoursPage from "./pages/HoursPage";
import FAQPage from "./pages/FAQPage";
import ParentalGuidePage from "./pages/ParentalGuidePage";
import OurTeamPage from "./pages/OurTeamPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Splash from "./components/Splash";

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();

  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-background text-foreground">
      <ScrollToTop />
      <Splash />
      <Navbar />
      <main className="flex-1">
        <PageTransition routeKey={location}>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/book-tour">
              <HomePage initialStep="tour" />
            </Route>
            <Route path="/location" component={LocationPage} />
            <Route path="/hours" component={HoursPage} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/guide" component={ParentalGuidePage} />
            <Route path="/team" component={OurTeamPage} />
            <Route path="/services">
              <Redirect to="/" />
            </Route>
            <Route path="/contact">
              <Redirect to="/book-tour" />
            </Route>
            <Route path="/daycare">
              <Redirect to="/" />
            </Route>
            <Route path="/piano-lessons">
              <Redirect to="/" />
            </Route>
            <Route path="/private-tutoring">
              <Redirect to="/" />
            </Route>
            <Route path="/signup">
              <Redirect to="/" />
            </Route>
            <Route path="/signup/:rest*">
              <Redirect to="/" />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionConfig reducedMotion="user">
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </MotionConfig>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
