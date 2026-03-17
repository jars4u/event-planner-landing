import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type SectionContainerProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

const SectionContainer = ({
  id,
  eyebrow,
  title,
  description,
  className,
  contentClassName,
  children,
}: SectionContainerProps) => {
  return (
    <section id={id} className={cn('px-5 py-20 sm:px-8 md:py-28 lg:px-12', className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            {eyebrow && (
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-mauve/80">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-heading text-4xl leading-tight text-dark sm:text-5xl md:text-6xl">{title}</h2>
            )}
            {description && <p className="mt-5 text-base leading-8 text-dark/70 md:text-lg">{description}</p>}
          </div>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
