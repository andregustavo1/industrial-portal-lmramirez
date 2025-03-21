
import React from 'react';
import { CheckCircle, Award, Users, ShieldCheck } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const AboutFeature = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="flex-shrink-0 mt-1 text-primary-600">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-secondary-900 mb-1">{title}</h3>
      <p className="text-secondary-700">{text}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-left">
            <SectionTitle 
              title="Sobre a LM Ramirez"
              subtitle="Conheça nossa história e nossos valores"
              className="lg:mb-8"
            />
            
            <p className="text-secondary-700 mb-6">
              Há mais de 10 anos no mercado, a LM Ramirez se destaca pela excelência em montagem e manutenção industrial. 
              Atuamos em diversos segmentos industriais, oferecendo soluções completas e personalizadas para atender às 
              necessidades específicas de cada cliente.
            </p>
            
            <p className="text-secondary-700 mb-8">
              Nossa equipe é formada por profissionais altamente qualificados e comprometidos com a qualidade e 
              segurança em todos os projetos. Trabalhamos com equipamentos modernos e utilizamos as melhores 
              técnicas para garantir resultados superiores.
            </p>
            
            <AboutFeature 
              icon={<CheckCircle className="w-5 h-5" />}
              title="Qualidade Garantida"
              text="Todos os nossos serviços seguem rigorosos padrões de qualidade para garantir a satisfação total dos clientes."
            />
            
            <AboutFeature 
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Segurança em Primeiro Lugar"
              text="Seguimos todos os protocolos de segurança e treinamos constantemente nossa equipe para prevenir acidentes."
            />
            
            <AboutFeature 
              icon={<Award className="w-5 h-5" />}
              title="Experiência Comprovada"
              text="Nossa experiência nos permite oferecer soluções eficientes para os mais diversos desafios industriais."
            />
            
            <AboutFeature 
              icon={<Users className="w-5 h-5" />}
              title="Equipe Especializada"
              text="Contamos com profissionais altamente capacitados e em constante atualização técnica."
            />
          </div>
          
          <div className="relative h-full min-h-[400px] opacity-0 animate-fade-in-right animate-delay-400">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply opacity-70 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl hover-scale h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-700/20 to-primary-500/20 z-10"></div>
              <div className="bg-secondary-800 h-full">
                <div className="h-full flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">LM Ramirez Industrial</h3>
                    <p className="text-secondary-100 mb-6">
                      "Comprometidos com a excelência e a satisfação dos nossos clientes em cada projeto."
                    </p>
                    <div className="inline-block px-4 py-2 border border-white/30 rounded-lg text-white">
                      Desde 2013
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
