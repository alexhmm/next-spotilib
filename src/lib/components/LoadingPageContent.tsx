import { FC } from 'react';

// UI
import { LoadingSpinner } from '../ui/LoadingSpinner';

export const LoadingPageContent: FC = () => {
  return (
    <div className="flex justify-center w-full">
      <LoadingSpinner />
    </div>
  );
};
