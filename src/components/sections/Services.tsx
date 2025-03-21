
import React from 'react';
import { Settings, Tool, Wrench, Hammer, Factory, Cog } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => (
  <div className={cn(
    "glass-card p-6 rounded-xl hover-lift opacity-0",
    `animate-fade-in ${delay}`
  )}>
    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl text-primary-700">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-secondary-900">{title}</h3>
    <p className="text-secondary-700">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Manutenção Industrial",
      description: "Manutenção preventiva e corretiva para garantir o funcionamento contínuo dos seus equipamentos.",
      delay: "animate-delay-200"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Montagem Industrial",
      description: "Montagem e instalação de equipamentos e estruturas industriais com precisão e segurança.",
      delay: "animate-delay-400"
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Soldagem Industrial",
      description: "Serviços de soldagem industrial com alta qualidade e diversos processos disponíveis.",
      delay: "animate-delay-600"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Caldeiraria",
      description: "Fabricação e reparo de estruturas metálicas, tanques e componentes industriais.",
      delay: "animate-delay-200"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Alinhamento de Máquinas",
      description: "Serviços de alinhamento e balanceamento de máquinas rotativas e equipamentos.",
      delay: "animate-delay-400"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Automação Industrial",
      description: "Implementação e manutenção de sistemas de automação e controle de processos.",
      delay: "animate-delay-600"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Oferecemos soluções completas e personalizadas para atender as necessidades da sua indústria."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
