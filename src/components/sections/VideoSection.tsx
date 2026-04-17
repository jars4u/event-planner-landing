import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionContainer from '../ui/section-container';

const VideoSection = () => {
  return (
    <SectionContainer
      eyebrow="Video Showcase"
      title="Una vista previa del ritmo, la luz y la emoción de cada montaje"
      description="Dejamos preparado este bloque para evolucionar hacia una experiencia modal, sin perder la intención cinematográfica desde el primer despliegue."
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-[2.5rem]"
      >
        <video
          className="h-[420px] w-full object-cover md:h-[560px]"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video de ceremonia de boda al atardecer"
        >
          <source src="/videos/vecteezy_a-wedding-ceremony-in-the-mountains-at-sunset_52264129.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0.08)_0%,rgba(43,43,43,0.62)_100%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-white">
          <button
            type="button"
            aria-label="Reproducir video"
            className="flex h-20 w-20 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur transition-transform duration-300 hover:scale-105"
          >
            <Play className="ml-1" size={30} fill="currentColor" />
          </button>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-gold/90">Proxima experiencia inmersiva</p>
            <p className="mt-4 font-heading text-4xl leading-tight md:text-5xl">Cada evento cuenta una historia que merece ser vista y sentida.</p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default VideoSection;
