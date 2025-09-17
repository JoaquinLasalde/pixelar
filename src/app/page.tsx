import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppFloat from '@/components/layout/whatsapp-float';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Statistics from '@/components/sections/statistics';
import Process from '@/components/sections/process';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}