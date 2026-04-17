import * as React from 'react';
import { cn } from '../../lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-[2rem] border border-champagne/50 bg-blush/90 text-dark shadow-[0_20px_60px_rgba(123,45,78,0.06)] backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';

export { Card };
