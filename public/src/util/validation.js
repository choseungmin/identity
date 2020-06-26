export const validation = {
  //
  nameCheck: (value) => {
    //
    const regexp = /([^가-힣\x20])/i;
    console.log(value, value.length);
    if (value.length < 2 || value.length > 10) {
      return true;
    }
    return regexp.test(value);
  },
  numCheck: (value) => {
    //
    value = value.replace(/ /g,"").replace(/-/g,"");

    if (value.length === 0 ) {
      return

    } else if (value.length < 7) {
      return true;

    } else if (value.slice(6,7) > 4) {
      return true;

    }
    const regexp = /^[0-9]*$/;

    return !regexp.test(value);
  },
  phoneCheck: (value) => {
    //
    value = value.replace(/ /g,"");

    if (value.length === 0 ) {
      return

    } else if (value.length < 10) {
      return true;

    } else if (value.slice(0, 2) !== '01') {
      return true;

    }
    const regexp = /^[0-9]*$/;

    return !regexp.test(value.trim().replace(/-/, ''));
  },
};
