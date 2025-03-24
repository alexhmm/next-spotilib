import { FC } from 'react';

// Types
import { Planet as IPlanet } from '../../types/posts.types';

// UI
import { Link } from '@/lib/ui/Link';

interface Props {
  planet: IPlanet;
}

const Planet: FC<Props> = (props) => {
  const url = props.planet.url;
  const array = url.split('/');
  const id = array[array.length - 2];

  return <Link href={`/posts/${id}`}>{props.planet.name}</Link>;
};

export default Planet;
