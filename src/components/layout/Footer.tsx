import { Instagram, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const socialLinks = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Pinterest', icon: Sparkles },
];

const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-dark/8 bg-dark px-5 py-14 text-blush sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-4">
            <img src="/placeholder/logo-mark.svg" alt="Andrea Parra" className="h-14 w-14 rounded-full bg-blush/10 object-cover p-1" />
            <div>
              <p className="font-heading text-3xl">Andrea Parra</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-blush/55"> Event Planner</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-base leading-8 text-blush/70">
            Producción, diseño y dirección integral para bodas, eventos corporativos y celebraciones privadas con una estética refinada y memorable.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-champagne/80">Contacto</p>
          <ul className="mt-6 space-y-4 text-blush/75">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-champagne" />
              +1 000 000 0000
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-champagne" />
              hola@andreaparra.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-champagne" />
              Houston, TX
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80">Social</p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/15 bg-blush/6 text-blush transition-all duration-300 hover:-translate-y-1 hover:border-champagne/40 hover:text-champagne"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
