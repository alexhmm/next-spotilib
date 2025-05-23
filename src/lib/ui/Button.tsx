import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

// Utils
import { cn } from '@/lib/utils/shadcn-ui.utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        card: 'hover:bg-card hover:text-accent-foreground',
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        error: 'bg-error text-white shadow hover:bg-error-hover',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        header: 'rounded-full',
        main: 'bg-main text-white shadow hover:bg-main-hover',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-primary shadow-sm hover:bg-secondary/80',
        success: 'bg-success text-white shadow hover:bg-success-hover',
        warning: 'bg-warning text-white shadow hover:bg-warning-hover',
      },
      size: {
        default: 'h-9 px-4 py-2',
        header: 'h-12 w-12',
        icon: 'h-9 w-9',
        lg: 'h-10 rounded-md px-8',
        sm: 'h-8 rounded-md px-3 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
