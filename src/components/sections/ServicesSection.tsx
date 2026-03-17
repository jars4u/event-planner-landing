import { BriefcaseBusiness, GlassWater, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionContainer from '../ui/section-container';
import { Card } from '../ui/card';

const services = [
  {
    title: 'Bodas',
    description:
      'Conceptualizamos bodas sensibles, refinadas y profundamente personales para que la historia de cada pareja se sienta en cada escena.',
    icon: HeartHandshake,
  },
  {
    title: 'Eventos corporativos',
    description:
      'Creamos experiencias de marca con dirección estética, logística precisa y una narrativa pensada para impresionar sin esfuerzo.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Celebraciones privadas',
    description:
      'Cumpleaños, aniversarios y encuentros exclusivos convertidos en celebraciones íntimas con carácter, ritmo y elegancia.',
    icon: GlassWater,
  },
];

const ServicesSection = () => {
  return (
    <SectionContainer
      id="servicios"
      className="bg-blush/55"
      eyebrow="Servicios"
      title="Diseñamos eventos con una mirada estética y una ejecución impecable"
      description="Cada celebración se construye desde una dirección creativa clara, una planeación minuciosa y una experiencia que se siente cuidada de principio a fin."
      contentClassName="grid gap-6 md:grid-cols-3"
    >
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeInOut' }}
          >
            <Card className="group h-full overflow-hidden border-white/70 bg-white/85 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(43,43,43,0.12)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-champagne text-mauve shadow-[0_12px_30px_rgba(162,103,105,0.14)] transition-transform duration-300 group-hover:scale-105">
                <Icon size={24} />
              </div>
              <h3 className="mt-8 font-heading text-3xl text-dark">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-dark/70">{service.description}</p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/60 to-transparent" />
            </Card>
          </motion.div>
        );
      })}
    </SectionContainer>
  );
};

export default ServicesSection;
