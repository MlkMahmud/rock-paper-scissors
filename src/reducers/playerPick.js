export default (state = null, { type, payload }) => {
  switch (type) {
    case 'PLAYER PICK':
      return { ...payload };
    case 'RESET':
      return null;
    default:
      return state;
  }
};
