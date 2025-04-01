import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import ClassesSection from "./components/ClassesSection";
import ScheduleSection from "./components/ScheduleSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import CoursePromoSection from "./components/CoursePromoSection";
import SubscriptionSection from "./components/SubscriptionSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <AboutSection />
        <ClassesSection />
        <ScheduleSection />
        <CoursePromoSection />
        <SubscriptionSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
