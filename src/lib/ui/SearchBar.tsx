import * as React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils/shadcn-ui.utils';

const SearchBar = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, type, ...props }, ref) => {
  return (
    <label className={cn('relative block', className)}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-4 w-4" />
      </span>
      <input
        className="flex h-9 w-full rounded-md border border-input bg-transparent pl-10 pr-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        ref={ref}
        type="search"
        {...props}
      />
    </label>
  );
});

export default SearchBar;
