import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', closeOnResize);

    return () => window.removeEventListener('resize', closeOnResize);
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-300 md:px-8',
        isScrolled ? 'py-3' : 'py-5',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6',
          isScrolled
            ? 'border-white/45 bg-white/70 shadow-[0_18px_45px_rgba(43,43,43,0.1)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img src="/placeholder/logo-mark.svg" alt="Andrea Parra" className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-11 sm:w-11" />
          <div className="min-w-0">
            <p className="truncate font-heading text-lg text-dark sm:text-xl">Andrea Parra</p>
            <p className="hidden text-[0.65rem] uppercase tracking-[0.3em] text-dark/55 sm:block"> Event Planner</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.28em] text-dark/70 transition-colors duration-300 hover:text-mauve"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="accent">Reserva ahora</Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-dark/10 bg-white/70 text-dark shadow-sm backdrop-blur md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/40 bg-white/85 p-4 shadow-[0_24px_60px_rgba(43,43,43,0.12)] backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.22em] text-dark/80 transition-colors hover:bg-blush hover:text-mauve"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button variant="accent" className="mt-4 w-full">
            Reserva ahora
          </Button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
