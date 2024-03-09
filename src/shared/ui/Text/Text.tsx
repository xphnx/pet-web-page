import { FC } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary_text_theme',
  ERROR = 'error_text_theme',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = ({ className, title, text, theme = TextTheme.PRIMARY }) => (
  <div className={classNames(classes.Text, {}, [className, classes[theme]])}>
    {title && <p className={classes.title}>{title}</p>}
    {text && <p className={classes.text}>{text}</p>}
  </div>
);
