
import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}) => (
  <div className="flex items-start space-x-4 p-6 glass-card rounded-xl hover-scale opacity-0 animate-fade-in">
    <div className="flex-shrink-0 p-3 bg-primary-100 rounded-full text-primary-700">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg text-secondary-900 mb-1">{title}</h3>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-secondary-700">{content}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="Entre em Contato" 
          subtitle="Estamos prontos para atender às suas necessidades industriais. Entre em contato conosco."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ContactItem 
            icon={<Phone className="w-6 h-6" />} 
            title="Telefone" 
            content="(67) 99948-4969"
            link="tel:+5567999484969"
          />
          <ContactItem 
            icon={<Instagram className="w-6 h-6" />} 
            title="Instagram" 
            content="@imramirezindustrial"
            link="https://www.instagram.com/imramirezindustrial/"
          />
          <ContactItem 
            icon={<MapPin className="w-6 h-6" />} 
            title="Localização" 
            content="Naviraí, MS, Brasil"
          />
        </div>
        
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg opacity-0 animate-fade-in animate-delay-400">
          {/* Mapa do Google - Normalmente seria incorporado com um iframe */}
          <div className="bg-secondary-100 p-4 h-[400px] flex items-center justify-center">
            <div className="text-center max-w-lg mx-auto">
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Atuamos em toda região de Naviraí</h3>
              <p className="text-secondary-700 mb-6">
                Nossa equipe está pronta para atender sua empresa com soluções personalizadas em montagem e manutenção industrial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+5567999484969" 
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Ligar Agora
                </a>
                <a 
                  href="https://www.instagram.com/imramirezindustrial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-secondary-200 hover:bg-secondary-300 text-secondary-900 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Seguir no Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
