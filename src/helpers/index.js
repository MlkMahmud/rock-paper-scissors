export const selectRandom = (list = []) => {
  const randomInt = Math.floor(Math.random() * list.length);
  return list[randomInt];
};

export const filterCharacterList = (characters = [], character = {}) => (
  characters.filter(({ name }) => name !== character.name)
);
