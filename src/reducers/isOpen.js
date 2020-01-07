export default (state = false, { type }) => {
  switch (type) {
    case 'OPEN':
      return true;
    case 'CLOSE':
      return false;
    default:
      return state;
  }
}



