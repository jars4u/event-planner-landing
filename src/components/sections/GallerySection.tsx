import { motion } from 'framer-motion';
import SectionContainer from '../ui/section-container';

const galleryItems = [
  { src: '/placeholder/gallery-art-1.svg', alt: 'Mesa decorada para boda elegante', className: 'md:col-span-2 md:row-span-2' },
  { src: '/placeholder/gallery-art-2.svg', alt: 'Detalle floral para evento premium', className: 'md:col-span-1 md:row-span-1' },
  { src: '/placeholder/hero-art.svg', alt: 'Espacio ambientado con luces suaves', className: 'md:col-span-1 md:row-span-2' },
  { src: '/placeholder/gallery-art-2.svg', alt: 'Montaje de vajilla y cristaleria', className: 'md:col-span-2 md:row-span-1' },
  { src: '/placeholder/gallery-art-1.svg', alt: 'Celebracion privada con mesa larga', className: 'md:col-span-1 md:row-span-1' },
];

const GallerySection = () => {
  return (
    <SectionContainer
      id="galeria"
      className="bg-[radial-gradient(circle_at_top_left,rgba(243,217,201,0.55),transparent_38%),linear-gradient(180deg,#fff_0%,#fcf8f7_100%)]"
      eyebrow="Galeria"
      title="Un portafolio de atmósferas diseñadas para dejar huella"
      description="Imágenes que sugieren el nivel de detalle, la composición visual y el lenguaje de lujo que define cada una de nuestras producciones."
      contentClassName="grid auto-rows-[240px] gap-4 md:grid-cols-3 md:auto-rows-[220px]"
    >
      {galleryItems.map((item, index) => (
        <motion.article
          key={`${item.alt}-${index}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeInOut' }}
          className={`group relative overflow-hidden rounded-[2rem] ${item.className}`}
        >
          <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0.04)_0%,rgba(43,43,43,0.45)_100%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/90">Atelier Signature</p>
            <p className="mt-2 font-heading text-2xl leading-tight">{item.alt}</p>
          </div>
        </motion.article>
      ))}
    </SectionContainer>
  );
};

export default GallerySection;
