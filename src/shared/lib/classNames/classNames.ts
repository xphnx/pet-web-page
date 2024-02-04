type Mods = Record<string, string | boolean>;

export const classNames = (className: string, mods: Mods = {}, additional: string[] = []): string =>
  [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(' ')
    .trim();
