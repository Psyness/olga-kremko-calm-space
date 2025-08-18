import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import ServicesAndPricing from '@/components/ServicesAndPricing';
import Issues from '@/components/Issues';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <ServicesAndPricing />
        <Issues />
        <TestimonialsCarousel />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;