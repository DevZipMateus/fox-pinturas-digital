import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Roberto Woits',
      text: 'Serviço de qualidade e rapidez.',
      rating: 5,
    },
    {
      name: 'Milton Benucci',
      text: 'Pessoal profissional... comprometidos com prazos e qualidade... SUPER RECOMENDO!!',
      rating: 5,
    },
    {
      name: 'Jean Rocha',
      text: 'Atendimento nota 10',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-secondary">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            A satisfação dos nossos clientes é o nosso maior orgulho
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-custom-md card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 sm:-top-4 left-5 sm:left-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 pt-3 sm:pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-base sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
