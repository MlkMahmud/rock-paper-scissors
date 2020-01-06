export default (state = 12, { type }) => {
  switch (type) {
    case 'WIN':
      return state + 1;
    case 'LOSE':
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }   
};
