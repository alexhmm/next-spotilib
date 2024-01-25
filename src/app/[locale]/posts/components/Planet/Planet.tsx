import { FC } from 'react';

// Types
import { Planet } from '../../types/posts.types';

// UI
import { Link } from '@/ui/Link';

interface Props {
  planet: Planet;
}

const Planet: FC<Props> = (props) => {
  const url = props.planet.url;
  const array = url.split('/');
  const id = array[array.length - 2];

  return <Link href={`/posts/${id}`}>{props.planet.name}</Link>;
};

export default Planet;
