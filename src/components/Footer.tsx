import logoFox from '@/assets/logo-fox.png';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img
              src={logoFox}
              alt="Fox Pinturas"
              className="h-14 w-auto brightness-0 invert mb-6"
            />
            <p className="text-primary-foreground/80 max-w-md leading-relaxed mb-6">
              Fox Pinturas - Especialistas em pintura eletrostática a pó há mais de 12 anos. Qualidade, compromisso e excelência em cada projeto.
            </p>
            <p className="text-accent font-semibold italic">
              "Fox pinturas, colorindo sua vida!"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-semibold text-lg mb-6">Links rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary-foreground font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Rua Albino Moresche 310<br />São José dos Pinhais - PR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:pinturafox@gmail.com" className="text-primary-foreground/80 text-sm hover:text-accent transition-colors">
                  pinturafox@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 pt-4">
                <a
                  href="https://www.facebook.com/foxpinturaapo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent"
                  aria-label="Facebook da Fox Pinturas"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/foxpintura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent"
                  aria-label="Instagram da Fox Pinturas"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Fox Pinturas. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              CNPJ: 21.533.330/0001-12
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
