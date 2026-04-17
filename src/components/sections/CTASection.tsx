import { motion } from 'framer-motion';
import SectionContainer from '../ui/section-container';
import { Button } from '../ui/button';

const CTASection = () => {
  return (
    <SectionContainer className="pb-10 pt-0 md:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: 'easeInOut' }}
        className="overflow-hidden rounded-[2.5rem] px-6 py-14 text-center shadow-[0_28px_80px_rgba(123,45,78,0.12)] sm:px-10 md:px-14 md:py-20"
        style={{ background: 'linear-gradient(135deg, var(--color-pale) 0%, var(--color-soft) 100%)' }}
      >
        <p className="text-xs uppercase tracking-[0.34em] text-mauve/80">Reserva tu fecha</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-heading text-4xl leading-tight text-dark sm:text-5xl md:text-6xl">
          Haz de tu evento algo inolvidable con una producción pensada para emocionar y permanecer.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-dark/70 md:text-lg">
          Agenda una conversación inicial y descubre cómo podemos transformar tu idea en una experiencia visualmente extraordinaria y perfectamente coordinada.
        </p>
        <div className="mt-10 flex justify-center">
          <Button size="lg" variant="primary">
            Reserva tu evento
          </Button>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default CTASection;
