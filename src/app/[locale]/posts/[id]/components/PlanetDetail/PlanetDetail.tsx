'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

// Queries & Mutations
import { getPost } from '../../page';

// Styles
import styles from './PlanetDetail.module.scss';

// Types
import { Planet } from '../../../types/posts.types';

// UI
import { Text } from '@/lib/ui/Text';

interface Props {
  id: string;
}

const PlanetDetail: FC<Props> = (props) => {
  const { data } = useQuery<Planet>({
    refetchOnWindowFocus: false,
    queryKey: ['planet'],
    queryFn: () => getPost(props.id),
  });

  return (
    <div className={styles['planet-detail']}>
      <Text variant="h6">{data?.name}</Text>
      <div>{data?.climate}</div>
    </div>
  );
};

export default PlanetDetail;
