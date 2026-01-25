import { Toaster } from "@/Components/UI/toaster";
import { Toaster as Sonner } from "@/Components/UI/sonner";
import { TooltipProvider } from "@/Components/UI/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./Pages/Index";
import NotFound from "./Pages/NotFound";
import Catering from "./Pages/Catering";
import Corporate from "./Pages/Corporate";
import Events from "./Pages/Events";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import OurProcess from "./Pages/OurProcess";
import BookEvent from "./Pages/BookEvent";
import SpecialOccasions from "./Pages/SpecialOccasions";
import SocialEvents from "./Pages/SocialEvents";
import { useEffect, useState } from "react";
import OpeningVideo from "./Components/OpeningVideo";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showVideo ? (
          <OpeningVideo onVideoEnd={handleVideoEnd} />
        ) : (
          <>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/corporate"element={<Corporate />} />
              <Route path="/events" element={<Events />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/our-process" element={<OurProcess />} />
              <Route path="/book-event" element={<BookEvent />} />
              <Route path="/special-occasions" element={<SpecialOccasions />} />
              <Route path="/social-events" element={<SocialEvents />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
