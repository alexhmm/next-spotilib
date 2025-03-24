import { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

// Utils
import { cn } from '@/lib/utils/shadcn-ui.utils';

const textVariants = cva('', {
  variants: {
    color: {
      default: '',
      error: 'text-error',
      main: 'text-main',
      muted: 'text-muted-foreground',
      secondary: 'text-secondary-foreground',
      success: 'text-success',
      warning: 'text-warning',
    },
    size: {
      default: '',
      lg: 'text-lg',
      sm: 'text-sm',
      xl: 'text-xl',
      xs: 'text-xs',
    },
    variant: {
      default: '',
      h1: 'font-semibold mb-8 text-8xl',
      h2: 'font-semibold mb-5 text-6xl',
      h3: 'font-semibold mb-4 text-5xl',
      h4: 'font-semibold mb-3 text-4xl',
      h5: 'font-semibold mb-2 text-2xl',
      h6: 'font-semibold mb-1 text-xl',
      subtitle: 'font-medium mb-1',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'default',
    variant: 'default',
  },
});

type TextProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  variant?: string;
};

export const Text: FC<TextProps & VariantProps<typeof textVariants>> = (
  props
) => {
  const { color, size, variant } = props;
  const className = clsx(
    props.className && props.className,
    cn(textVariants({ color, size, variant }))
  );
  switch (variant) {
    case 'h1':
      return <h1 className={className}>{props.children}</h1>;
    case 'h2':
      return <h2 className={className}>{props.children}</h2>;
    case 'h3':
      return <h3 className={className}>{props.children}</h3>;
    case 'h4':
      return <h4 className={className}>{props.children}</h4>;
    case 'h5':
      return <h5 className={className}>{props.children}</h5>;
    case 'h6':
      return <h6 className={className}>{props.children}</h6>;
    default:
      return <p className={className}>{props.children}</p>;
  }
};
