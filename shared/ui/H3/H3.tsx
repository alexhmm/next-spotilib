import { ReactNode } from 'react';

// Styles
import styles from './H3.module.scss';

type H3Props = {
  children: ReactNode;
};

const H3 = (props: H3Props) => {
  return <h3 className={styles['h3']}>{props.children}</h3>;
};

export default H3;
