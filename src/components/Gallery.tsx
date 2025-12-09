import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import service1 from '@/assets/service-1.jpg';
import service2 from '@/assets/service-2.jpg';

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: 'Grades metálicas com pintura eletrostática - Fox Pinturas',
      title: 'Grades metálicas',
    },
    {
      src: service1,
      alt: 'Chapas de aço com pintura vermelho bombeiro - Fox Pinturas',
      title: 'Chapas vermelho bombeiro',
    },
    {
      src: gallery2,
      alt: 'Guarda-corpos pintados na cor preta - Fox Pinturas',
      title: 'Guarda-corpos preto',
    },
    {
      src: gallery3,
      alt: 'Longarinas pintadas na cor laranja RAL - Fox Pinturas',
      title: 'Longarinas laranja RAL',
    },
    {
      src: service2,
      alt: 'Portões pintados na cor branco 9003 - Fox Pinturas',
      title: 'Portões branco 9003',
    },
  ];

  return (
    <section id="galeria" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Conheça nossos trabalhos
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja alguns dos projetos que realizamos com excelência e qualidade
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-custom-md card-hover aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-primary-foreground font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/554132839208"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-dark shadow-accent"
          >
            Solicite seu orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
