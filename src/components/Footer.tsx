import logoFox from '@/assets/logo-fox.png';
import { MapPin, Mail, Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2">
            <img
              src={logoFox}
              alt="Fox Pinturas"
              className="h-10 sm:h-14 w-auto brightness-0 invert mb-4 sm:mb-6"
            />
            <p className="text-primary-foreground/80 text-sm sm:text-base max-w-md leading-relaxed mb-4 sm:mb-6">
              Fox Pinturas - Especialistas em pintura eletrostática a pó há mais de 12 anos. Qualidade, compromisso e excelência em cada projeto.
            </p>
            <p className="text-accent font-semibold italic text-sm sm:text-base">
              "Fox pinturas, colorindo sua vida!"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-semibold text-base sm:text-lg mb-4 sm:mb-6">Links rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary-foreground font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contato</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-xs sm:text-sm">
                  Rua Albino Moresche 310<br />São José dos Pinhais - PR
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <a href="https://wa.me/554132839208" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 text-xs sm:text-sm hover:text-accent transition-colors">
                  (41) 3283-9208
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <a href="mailto:pinturafox@gmail.com" className="text-primary-foreground/80 text-xs sm:text-sm hover:text-accent transition-colors break-all">
                  pinturafox@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-4">
                <a
                  href="https://www.facebook.com/foxpinturaapo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent"
                  aria-label="Facebook da Fox Pinturas"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/foxpintura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent"
                  aria-label="Instagram da Fox Pinturas"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              © {currentYear} Fox Pinturas. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              CNPJ: 21.533.330/0001-12
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
