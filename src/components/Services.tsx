import { Paintbrush, Shield, Clock, Sparkles, CheckCircle } from 'lucide-react';
import serviceImage1 from '@/assets/service-1.jpg';
import serviceImage2 from '@/assets/service-2.jpg';

const Services = () => {
  const benefits = [
    { icon: Shield, title: 'Alta durabilidade', description: 'Resistência superior a impactos, corrosão e intempéries' },
    { icon: Sparkles, title: 'Acabamento premium', description: 'Superfície uniforme e esteticamente impecável' },
    { icon: Clock, title: 'Prazos cumpridos', description: 'Compromisso com a entrega dentro do prazo acordado' },
    { icon: Paintbrush, title: 'Variedade de cores', description: 'Ampla cartela de cores e texturas disponíveis' },
  ];

  const applications = [
    'Estruturas metálicas',
    'Móveis de aço',
    'Grades e portões',
    'Equipamentos industriais',
    'Peças automotivas',
    'Componentes de alumínio',
    'Artigos decorativos',
    'Eletrodomésticos',
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Nossos serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pintura eletrostática a pó de alta qualidade
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos serviços especializados de pintura eletrostática a pó com as melhores técnicas e materiais do mercado.
          </p>
        </div>

        {/* Main Service */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              O que é pintura eletrostática a pó?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A pintura eletrostática a pó é um processo de revestimento em que partículas de tinta em pó são carregadas eletricamente e atraídas para a superfície metálica. Após a aplicação, a peça é aquecida em estufa, onde o pó se funde formando uma camada uniforme, resistente e de excelente acabamento.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Este processo oferece vantagens significativas em relação à pintura líquida convencional, incluindo maior durabilidade, resistência a riscos e corrosão, além de ser uma opção mais sustentável por não utilizar solventes.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 p-4 bg-secondary rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={serviceImage1}
              alt="Peça metálica com acabamento em pintura eletrostática laranja"
              className="w-full h-64 object-cover rounded-2xl shadow-custom-md"
            />
            <img
              src={serviceImage2}
              alt="Variedade de peças industriais com pintura eletrostática"
              className="w-full h-64 object-cover rounded-2xl shadow-custom-md mt-8"
            />
          </div>
        </div>

        {/* Applications */}
        <div className="bg-primary rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Aplicações
            </h3>
            <p className="text-primary-foreground/80">
              Atendemos diversos segmentos do mercado metalmecânico
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-4 transition-all duration-300 hover:bg-primary-foreground/20"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground text-sm font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
