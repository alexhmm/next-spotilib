import { FC, ReactNode } from 'react';

type H2Props = {
  children: ReactNode;
};

export const H2: FC<H2Props> = (props) => {
  return <h2 className="text-2xl font-bold">{props.children}</h2>;
};
