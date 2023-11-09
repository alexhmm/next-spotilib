'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Typography } from '@mui/material';

// Queries & Mutations
import { getPost } from '../../page';

// Styles
import styles from './PlanetDetail.module.scss';

// Types
import { Planet } from '../../../types/posts.types';

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
      <Typography variant="h6">{data?.name}</Typography>
      <div>{data?.climate}</div>
    </div>
  );
};

export default PlanetDetail;
