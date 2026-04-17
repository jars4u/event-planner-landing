import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-[0.18em] uppercase transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-dark text-blush shadow-[0_14px_40px_rgba(123,45,78,0.14)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(123,45,78,0.22)]',
        secondary:
          'border border-champagne/40 bg-blush/6 text-dark backdrop-blur-sm hover:-translate-y-1 hover:bg-blush/12',
        accent:
          'bg-mauve text-dark shadow-[0_14px_35px_rgba(242,166,192,0.18)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(242,166,192,0.28)]',
      },
      size: {
        default: 'h-12 px-7',
        lg: 'h-14 px-9 text-[0.78rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
