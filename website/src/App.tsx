import { Switch, Route, Redirect, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import HoursPage from "./pages/HoursPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import ParentalGuidePage from "./pages/ParentalGuidePage";
import OurTeamPage from "./pages/OurTeamPage";
import SignupPage from "./pages/SignupPage";
import ServicesPage from "./pages/ServicesPage";
import DaycarePage from "./pages/DaycarePage";
import PlannedServicePage from "./pages/PlannedServicePage";

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
          <Route path="/services" component={ServicesPage} />
          <Route path="/daycare" component={DaycarePage} />
          <Route
            path="/private-tutoring"
            component={() => <PlannedServicePage service="private-tutoring" />}
          />
          <Route
            path="/piano-lessons"
            component={() => <PlannedServicePage service="piano-lessons" />}
          />
          <Route path="/book-tour" component={ContactPage} />
          <Route path="/location" component={LocationPage} />
          <Route path="/hours" component={HoursPage} />
          <Route path="/contact" component={() => <Redirect to="/book-tour" />} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/guide" component={ParentalGuidePage} />
          <Route path="/team" component={OurTeamPage} />
          <Route
            path="/signup/daycare"
            component={() => <SignupPage service="daycare" />}
          />
          <Route
            path="/signup/private-tutoring"
            component={() => <SignupPage service="private-tutoring" />}
          />
          <Route
            path="/signup/piano-lessons"
            component={() => <SignupPage service="piano-lessons" />}
          />
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