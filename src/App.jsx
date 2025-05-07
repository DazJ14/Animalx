import FooterLayout from "./components/sections/FooterLayout";
import background from "./assets/noise-bg.png"
import { useState, useEffect } from "react";
import DesktopFloatingNavigation from "./components/navigation/DesktopFloatingNavigation";
import MobileNavigation from "./components/navigation/MobileNavigation";
import { Route, Switch } from "wouter";
import { ROUTES } from "./routes";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import DesktopNavigation from "./components/navigation/DesktopNavigation";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import AdoptionPage from "./pages/AdoptionPage";

function App() {
  const [{ y: scrollY }] = useWindowScroll()
  const { width: clientWindowWidth } = useWindowSize()
  const [isMobile, setIsMobile] = useState(clientWindowWidth < 1024);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [floatingNavigationDown, setFloatingNavigationDown] = useState(false);                                     

  useEffect(() => {
    setIsMobile(clientWindowWidth < 1024)
  }, [clientWindowWidth])

  useEffect(() => {
    if(!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile, isMobileMenuOpen])

  useEffect(() => {
    const htmlTag = document.documentElement.style
    htmlTag.overflow = isMobileMenuOpen ? "hidden" : ""
  }, [isMobileMenuOpen])

  useEffect(() => {
    setFloatingNavigationDown(scrollY > 1060)
  }, [scrollY])

  return (
    <div id="app" className="w-full h-full relative">

      { isMobile && <MobileNavigation toggleMenu={() => setIsMobileMenuOpen(isOpen => !isOpen)} isMenuOpen={isMobileMenuOpen}/>}
      
      <div className="bg-[rgb(35,35,35)] xl:p-5 pb-0 w-full h-auto relative">
        <DesktopNavigation />
        { !isMobile && <DesktopFloatingNavigation navigationActive={floatingNavigationDown}/> }
        <main className="min-h-[calc(100vh-20px)] bg-[hsl(44,52%,96%)] rounded-b-[32px] xl:rounded-t-[32px] relative z-20 overflow-hidden pb-20">
          <Switch>
            <Route path={ROUTES.home.path} component={HomePage} />
            <Route path={ROUTES.sobreAnimalx.routes[0].path} component={AboutPage} />
            <Route path={ROUTES.sobreAnimalx.routes[1].path} component={ServicesPage} />
            <Route path={ROUTES.sobreAnimalx.routes[2].path} component={AdoptionPage} />
            <Route path={ROUTES.blog.path} component={BlogPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <FooterLayout />
        <div className="w-full h-full absolute top-0 left-0 bg-auto bg-top-left bg-repeat opacity-15" style={{ backgroundImage: `url('${background}')`}} />
      </div>
    </div>
  );
}

export default App;
