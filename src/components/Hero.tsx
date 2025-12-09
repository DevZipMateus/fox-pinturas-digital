import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-up">
            12 anos de excelência em pintura industrial
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Fox Pinturas
          </h1>

          <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Especialistas em pintura eletrostática a pó com acabamentos duráveis e de alto padrão para o setor metalmecânico. Colorindo sua vida!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-orange-dark shadow-accent hover:shadow-lg"
            >
              Solicitar orçamento
              <ArrowRight size={20} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary-foreground/20"
            >
              Conheça a empresa
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">12+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Anos de experiência</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">1000+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Projetos realizados</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Satisfação garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
