type Mods = Record<string, string | boolean>;

const MODE_VALUE = 1;

export const classNames = (className: string, mods: Mods = {}, additional: string[] = []): string =>
  [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter((mod) => Boolean(mod[MODE_VALUE]))
      .map(([className]) => className),
  ]
    .join(' ')
    .trim();
