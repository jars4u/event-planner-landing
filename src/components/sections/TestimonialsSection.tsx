import { motion } from 'framer-motion';
import SectionContainer from '../ui/section-container';
import { Card } from '../ui/card';

const testimonials = [
  {
    quote:
      'Todo se sintio impecable: la direccion visual, la coordinacion del dia y la calma con la que resolvieron cada detalle. Fue exactamente la experiencia que soñamos.',
    author: 'Lucia & Fernando',
    role: 'Boda de destino',
  },
  {
    quote:
      'Necesitabamos un evento corporativo con presencia y sofisticacion. El resultado fue elegante, fluido y muy alineado con nuestra marca.',
    author: 'Valentina Torres',
    role: 'Directora de Marketing',
  },
  {
    quote:
      'Lograron que una celebracion privada se sintiera exclusiva sin perder cercania. Cada invitado salio hablando de la atmosfera y el cuidado del montaje.',
    author: 'Sofia R.',
    role: 'Celebracion privada',
  },
];

const TestimonialsSection = () => {
  return (
    <SectionContainer
      eyebrow="Testimonios"
      title="La experiencia se recuerda tanto como el resultado"
      description="La confianza de nuestros clientes se construye con sensibilidad, organización y una ejecución que sostiene el nivel de principio a fin."
      contentClassName="grid gap-6 lg:grid-cols-3"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeInOut' }}
        >
          <Card className="h-full border-white/70 bg-white p-8 shadow-[0_20px_50px_rgba(43,43,43,0.08)]">
            <p className="font-heading text-5xl leading-none text-gold">“</p>
            <p className="mt-4 text-base leading-8 text-dark/75">{testimonial.quote}</p>
            <div className="mt-8 border-t border-dark/8 pt-6">
              <p className="font-heading text-2xl text-dark">{testimonial.author}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-mauve/80">{testimonial.role}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </SectionContainer>
  );
};

export default TestimonialsSection;
