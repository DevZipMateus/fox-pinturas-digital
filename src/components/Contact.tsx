import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Albino Moresche 310',
      subtitle: 'São José dos Pinhais - PR',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(41) 3283-9208',
      subtitle: 'WhatsApp disponível',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'pinturafox@gmail.com',
      subtitle: 'Resposta em até 24h',
    },
    {
      icon: Clock,
      title: 'Horário de funcionamento',
      content: 'Seg a Qui: 8h-12h / 13h-18h',
      subtitle: 'Sexta: 8h-12h / 13h-17h',
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Contato
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Solicite um orçamento ou tire suas dúvidas. Estamos prontos para atendê-lo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-foreground text-sm sm:text-base">{item.content}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary rounded-xl sm:rounded-2xl">
              <h3 className="font-semibold text-primary-foreground text-sm sm:text-base mb-3 sm:mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.facebook.com/foxpinturaapo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-primary-foreground/20"
                  aria-label="Facebook da Fox Pinturas"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/foxpintura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-primary-foreground/20"
                  aria-label="Instagram da Fox Pinturas"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-accent to-orange-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-foreground mb-3 sm:mb-4">
              Solicite seu orçamento agora
            </h3>
            <p className="text-sm sm:text-base text-accent-foreground/90 mb-6 sm:mb-8 max-w-md mx-auto">
              Entre em contato pelo WhatsApp e receba um atendimento personalizado para o seu projeto.
            </p>
            <a
              href="https://wa.me/554132839208"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300 hover:bg-navy-light shadow-lg mx-auto"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
