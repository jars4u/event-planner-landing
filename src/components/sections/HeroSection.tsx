import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-8">
      <div className="absolute inset-0">
        <video
          aria-hidden="true"
          playsInline
          muted
          loop
          autoPlay
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/vecteezy_woman-decorates-an-arch-with-real-branches-and-lemons-for-an_13289015.mp4" type="video/mp4" />
        </video>
        {/* Layered overlays: soft dark gradient + maroon tint to keep brand tone and ensure contrast */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.28)_0%,rgba(123,45,78,0.16)_40%,rgba(10,10,10,0.52)_100%)]" />
        {/* Soft pale fade at bottom to blend into page using #F8E9F3 */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(248,233,243,0)_0%,rgba(248,233,243,1)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="max-w-3xl pb-4 sm:pb-8"
        >
          <div className="mb-6 inline-flex max-w-[21rem] text-gold items-center gap-2 rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] backdrop-blur-sm sm:max-w-none sm:text-xs sm:tracking-[0.28em]"
            style={{ border: '1px solid rgba(234,184,209,0.18)', background: 'rgba(248,233,243,0.06)' }}>
            <Sparkles size={14} className="text-gold" />
            Experiencias a medida para celebrar con estilo
          </div>
          <h1 className="font-heading text-[3.2rem] leading-[0.92] text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Creamos momentos inolvidables
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-7 text-white/95 drop-shadow-sm sm:mt-6 sm:text-lg sm:leading-8">
            Diseñamos eventos con sensibilidad editorial, una ejecución impecable y una atmósfera que convierte cada detalle en un recuerdo extraordinario.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Button size="lg" className="group w-full sm:w-auto">
              Reserva tu evento
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary" className="w-full text-white sm:w-auto">
              Ver portafolio
            </Button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeInOut' }}
          className="self-end rounded-[2rem] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-8"
          style={{ border: '1px solid rgba(234,184,209,0.18)', background: 'rgba(248,233,243,0.08)', color: '#7B2D4E' }}
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold/90 sm:text-xs sm:tracking-[0.35em]">Signature Planning</p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="font-heading text-white text-[1.9rem] leading-tight sm:text-3xl">Eventos que se sienten como una obra bien curada.</p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Desde bodas íntimas hasta celebraciones corporativas de alto nivel, construimos una experiencia coherente, refinada y profundamente emocional.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6 text-sm">
              <div>
                <p className="font-heading text-3xl text-white">120+</p>
                <p className="mt-2 text-white/70">producciones realizadas con dirección integral</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-white">10 años</p>
                <p className="mt-2 text-white/70">creando atmósferas memorables y sofisticadas</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroSection;
