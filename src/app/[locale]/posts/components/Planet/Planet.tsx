import { FC } from 'react';
import Link from 'next/link';

// Types
import { Planet } from '../../types/posts.types';

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
