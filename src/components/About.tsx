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
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-custom-lg">
              <img
                src={aboutImage}
                alt="Processo de pintura eletrostática a pó na Fox Pinturas"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Quem somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mais de 12 anos colorindo o mercado metalmecânico
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Fox Pinturas nasceu há 12 anos, em São José dos Pinhais, fruto da iniciativa familiar que acumulava anos de experiência no setor metalmecânico. Percebemos uma grande oportunidade na região: a necessidade crescente por serviços de pintura eletrostática a pó com qualidade superior, prazos confiáveis e atendimento especializado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Atuamos no mercado metalmecânico com foco em artigos de aço e alumínio em geral, oferecendo acabamentos duráveis e de alto padrão que superam as expectativas dos nossos clientes.
            </p>

            {/* Mission, Vision, Values */}
            <div className="space-y-4">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-background rounded-xl shadow-custom-sm card-hover"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
