import { FC, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';

// Navigation
import { Link as NextLink } from '@/navigation';

// Utils
import { cn } from '@/utils/shadcn-ui.utils';

const linkVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: 'hover:text-main',
      'header-active': 'text-foreground text-sm hover:text-foreground/80',
      header: 'text-foreground/60 text-sm hover:text-foreground/80',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type LinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: string;
};

export const Link: FC<LinkProps & VariantProps<typeof linkVariants>> = (
  props
) => {
  const { variant } = props;
  const className = clsx(
    props.className && props.className,
    cn(linkVariants({ variant }))
  );

  return (
    <NextLink className={className} href={props.href}>
      {props.children}
    </NextLink>
  );
};
