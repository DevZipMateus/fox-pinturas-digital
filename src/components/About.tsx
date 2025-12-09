import { Target, Eye, Heart } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  const values = [
    { icon: Target, title: 'Missão', description: 'Oferecer serviços de pintura eletrostática a pó com alto desempenho, confiabilidade e precisão técnica, atendendo às necessidades de cada cliente por meio de processos seguros, eficientes e sustentáveis.' },
    { icon: Eye, title: 'Visão', description: 'Ser referência regional e nacional em soluções de pintura eletrostática a pó.' },
    { icon: Heart, title: 'Valores', description: 'Qualidade, compromisso com o cliente, inovação, responsabilidade e segurança, pontualidade e ética.' },
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-custom-lg">
              <img
                src={aboutImage}
                alt="Processo de pintura eletrostática a pó na Fox Pinturas"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent element - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-accent rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-16 md:w-24 h-16 md:h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Quem somos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Mais de 12 anos colorindo o mercado metalmecânico
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              A Fox Pinturas nasceu há 12 anos, em São José dos Pinhais, fruto da iniciativa familiar que acumulava anos de experiência no setor metalmecânico. Percebemos uma grande oportunidade na região: a necessidade crescente por serviços de pintura eletrostática a pó com qualidade superior, prazos confiáveis e atendimento especializado.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Atuamos no mercado metalmecânico com foco em artigos de aço e alumínio em geral, oferecendo acabamentos duráveis e de alto padrão que superam as expectativas dos nossos clientes.
            </p>

            {/* Mission, Vision, Values */}
            <div className="space-y-3 sm:space-y-4">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-xl shadow-custom-sm card-hover"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
