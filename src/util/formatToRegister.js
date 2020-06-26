const isNumericInput = e => {
  //
  const key = e.keyCode;
  return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) // Allow number line || Allow number pad
  );
};

const isModifierKey = e => {
  //
  const key = e.keyCode;
  return (e.shiftKey === true || key === 35 || key === 36) ||
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    (
      // Allow Ctrl/Command + A,C,V,X,Z
      (e.ctrlKey === true || e.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
};

const formatToRegister = e => {
  //
  if(isModifierKey(e)) {
    return;
  }

  const target = e.target;
  const input = target.value.replace(/\D/g,'');
  const birthday = input.substring(0,6);
  const sex = input.substring(6,7);

  if(input.length > 5){target.value = `${birthday} - ${sex}`;}
  else if(input.length > 0){target.value = `${birthday}`;}
};

export default formatToRegister;