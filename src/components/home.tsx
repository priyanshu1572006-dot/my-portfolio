import { useState, useEffect } from 'react';
import Navigation from './portfolio/Navigation';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Projects from './portfolio/Projects';
import Certificates from './portfolio/Certificates';
import ResumeModal from './portfolio/ResumeModal';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';

function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Smooth scroll animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isResumeModalOpen) {
        setIsResumeModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isResumeModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isResumeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isResumeModalOpen]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen noise-bg">
      <Navigation onResumeClick={() => setIsResumeModalOpen(true)} />
      
      <main>
        <Hero
          onViewProjects={scrollToProjects}
          onResumeClick={() => setIsResumeModalOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default Home;
