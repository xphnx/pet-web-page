import { FC } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames(classes.Loader, {}, [className])} />
);
