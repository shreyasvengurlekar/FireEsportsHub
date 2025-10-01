import React from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Tournaments from "@/pages/tournaments";
import Events from "@/pages/events";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import Highlights from "@/pages/highlights";
import Navigation from "@/components/navigation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/tournaments" component={Tournaments} />
      <Route path="/events" component={Events} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
  <Route path="/highlights" component={Highlights} />
  <Route component={NotFound} />
    </Switch>
  );
}


function App() {
  // Scroll to top on route change
  const [location] = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <Router />
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
