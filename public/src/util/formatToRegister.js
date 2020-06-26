const isNumericInput = (event) => {
  const key = event.keyCode;
  return ((key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event) => {
  const key = event.keyCode;
  return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    (
      // Allow Ctrl/Command + A,C,V,X,Z
      (event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
};

const formatToRegister = (event) => {
  if(isModifierKey(event)) {return;}

  const target = event.target;
  const input = target.value.replace(/\D/g,'');
  const birthday = input.substring(0,6);
  const sex = input.substring(6,7);

  if(input.length > 5){target.value = `${birthday} - ${sex}`;}
  else if(input.length > 0){target.value = `${birthday}`;}
};

export default formatToRegister;