
import React from 'react';
import { ArrowDown } from 'lucide-react';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden tech-pattern"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-64 h-64 bg-primary-100 rounded-full opacity-40 absolute -top-20 -left-20 animate-pulse-slow"></div>
        <div className="w-96 h-96 bg-primary-200 rounded-full opacity-30 absolute -bottom-32 -right-32 animate-pulse-slow"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary-100 text-primary-700 text-sm font-medium animate-fade-in">
            Montagem e Manutenção Industrial
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6 animate-fade-in animate-delay-200">
            LM <span className="text-gradient">Ramirez</span> Industrial
          </h1>
          
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto mb-8 text-balance animate-fade-in animate-delay-400">
            Soluções completas em montagem e manutenção industrial com excelência, 
            segurança e alta performance para sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animate-delay-600">
            <a 
              href="#servicos" 
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Nossos Serviços
            </a>
            <a 
              href="#contato" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-primary-700 font-medium rounded-lg border border-primary-200 transition-colors duration-300"
            >
              Entre em Contato
            </a>
          </div>
          
          <a 
            href="#servicos" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in animate-delay-800"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-5 h-5 text-primary-700" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
