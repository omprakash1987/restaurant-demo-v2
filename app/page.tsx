import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { MenuSection } from '@/components/menu-section';
import { AboutSection } from '@/components/about-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
