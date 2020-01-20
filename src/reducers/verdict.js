export default (state = null, { type }) => {
  switch (type) {
    case 'WIN':
      return 'WIN';
    case 'LOSE':
      return 'LOSE';
    case 'RESET':
      return null;
    default:
      return state;
  }
};
