'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

// Components
import Planet from '../Planet/Planet';

// Queries & Mutations
import { getPlanets } from '../../page';

// Styles
import styles from './Planets.module.scss';

// Types
import { PlanetsResponse } from '../../types/posts.types';

const Planets: FC = () => {
  const { data } = useQuery<PlanetsResponse>({
    refetchOnWindowFocus: false,
    queryKey: ['planets'],
    queryFn: getPlanets,
  });

  return (
    <div className={styles['planets']}>
      {data?.results?.map((planet) => (
        <Planet key={planet.url} planet={planet} />
      ))}
    </div>
  );
};

export default Planets;
