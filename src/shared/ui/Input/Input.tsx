/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(({ className, value, onChange, placeholder, type = 'text', ...rest }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  const mods: Record<string, boolean> = {
    [classes.filled]: !!value?.length,
  };

  return (
    <label className={classNames(classes.label, {}, [className])}>
      <input
        className={classNames(classes.Input, mods, [])}
        type={type}
        onChange={onChangeHandler}
        value={value}
        {...rest}
      />
      <span className={classes.underline}>
        <span className={classes.placeholder}>{placeholder}</span>
      </span>
    </label>
  );
});
