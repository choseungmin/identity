export const validation = {
  //
  korCheck: (value) => {
    const regexp = /([^가-힣\x20])/i;
    return regexp.test(value);
  },
  numCheck: (value) => {
    const regexp = /^[0-9]*$/;
    return !regexp.test(value);
  },
};
