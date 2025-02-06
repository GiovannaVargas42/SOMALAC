import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Team from './components/Team';
import Incubator from './components/Incubator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f7fbf9]">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Incubator />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;