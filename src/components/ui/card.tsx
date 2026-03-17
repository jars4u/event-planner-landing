import * as React from 'react';
import { cn } from '../../lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-[2rem] border border-white/50 bg-white/80 shadow-[0_20px_60px_rgba(43,43,43,0.08)] backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';

export { Card };
