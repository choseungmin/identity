const isModifierKey = e => {
  //
  const key = e.keyCode;
  return (e.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    (
      // Allow Ctrl/Command + A,C,V,X,Z
      (e.ctrlKey === true || e.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
};

const formatToPhone = e => {
  if(isModifierKey(e)) { return; }

  const target = e.target;
  const input = target.value.replace(/\D/g,'');
  const zip = input.substring(0,3);
  const middle = input.substring(3,7);
  const last = input.substring(7,11);

  if(input.length > 6){target.value = `${zip} ${middle} ${last}`;}
  else if(input.length > 3){target.value = `${zip} ${middle}`;}
  else if(input.length > 0){target.value = `${zip}`;}
};

export default formatToPhone;