
import React from 'react';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">LM Ramirez</h2>
            <p className="text-secondary-300">Excelência em montagem e manutenção industrial</p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/imramirezindustrial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="tel:+5567999484969" 
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="Telefone"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
            <p className="text-secondary-400">
              &copy; {currentYear} LM Ramirez. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
