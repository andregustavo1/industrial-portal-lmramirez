
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

// Normalmente aqui teríamos imagens reais de projetos
// Usando placeholders por enquanto
const projectImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Manutenção industrial",
    title: "Manutenção de Equipamentos"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Soldagem industrial",
    title: "Serviços de Soldagem"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Montagem estrutural",
    title: "Montagem Estrutural"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Automação industrial",
    title: "Projeto de Automação"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1574172097234-1c988ded512f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Manutenção preventiva",
    title: "Manutenção Preventiva"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Setor industrial",
    title: "Instalações Industriais"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Fechar modal ao pressionar Esc
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="projetos" className="py-20 bg-secondary-50">
      <Container>
        <SectionTitle 
          title="Galeria de Projetos" 
          subtitle="Conheça alguns dos nossos trabalhos realizados para diversos setores industriais."
          center={true}
        />
        
        <div className="grid-gallery">
          {projectImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative overflow-hidden rounded-xl shadow-md cursor-pointer opacity-0 animate-fade-in hover-lift`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openModal(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal para visualização ampliada */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="w-full max-w-4xl max-h-[80vh] p-2">
              {projectImages.find(img => img.id === selectedImage) && (
                <img 
                  src={projectImages.find(img => img.id === selectedImage)?.src} 
                  alt={projectImages.find(img => img.id === selectedImage)?.alt} 
                  className="w-full h-full object-contain"
                />
              )}
              <p className="text-white text-center mt-4 text-lg font-medium">
                {projectImages.find(img => img.id === selectedImage)?.title}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Gallery;
