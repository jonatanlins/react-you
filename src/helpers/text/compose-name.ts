export const composeName = (...pieces: string[]): string => {
  const [prefix, ...rest] = pieces;

  if (rest.length === 0) return prefix;

  return `${prefix}-${composeName(...rest)}`;
};
