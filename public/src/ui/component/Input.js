import {validation} from '../../util/validation';
import {identityKey} from "../../model/identityKey";
import formatToPhone from "../../util/formatToPhone";
import formatToRegister from "../../util/formatToRegister";

function Input(key, identityService, maxLength, nextFocusTarget) {
  //
  const div = document.createElement('div');
  const spanDiv = document.createElement('div');
  const span = document.createElement('span');
  const input = document.createElement('input');
  const inputDiv = document.createElement('div');

  div.className = 'box-div';
  inputDiv.className = 'input-div';
  input.maxLength = maxLength;
  input.id = key;

  input.addEventListener('keydown', (e) => {
    //

  });

  if (key === 'phoneNumber') {
    input.addEventListener('keydown', formatToPhone);

  } else if (key === 'registerNumber') {
    input.addEventListener('keydown', formatToRegister);

  }

  input.addEventListener('focusout', (e) => {
    //
    let result;

    if (key === 'name') {
      result = validation.nameCheck(e.target.value);

    } else if (key === 'registerNumber') {
      result = validation.numCheck(e.target.value);

    } else if (key === 'phoneNumber') {
      result = validation.phoneCheck(e.target.value);

    }

    if (result) {
      inputDiv.className = `input-div ${key} invalid`;

    } else {
      inputDiv.className = `input-div ${key}`;

    }
  });

  input.addEventListener('keyup', e => {
    //
    identityService.setIdentityProps(key, e.target.value);
    const length = e.target.value.replace(/ /g,"").replace(/-/g,"").length;

    if (e.key === 'Tab' || e.key === 'Shift' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      return;
    }

    if (key === 'phoneNumber') {
      const { value } = e.target;
      input.value = value.slice(0, value.length-1) + value.slice(-1).replace(/[^0-9]/g,"");

      if (length === 11) {
        const result = validation.phoneCheck(e.target.value);

        if (!result) {
          document.getElementById(nextFocusTarget).focus();

        } else {
          inputDiv.className = `input-div ${key} invalid`;

        }
      } else if (e.key == 'Backspace' && e.target.value.slice(-1) === ' ') {
        input.value = e.target.value.slice(0, e.target.value.length-1);
      }

    } else if (key === 'registerNumber') {
      const { value } = e.target;
      input.value = value.slice(0, value.length-1) + value.slice(-1).replace(/[^0-9]/g,"");

      if (length === 7) {
        document.getElementById(nextFocusTarget).focus();

      } else if (e.key == 'Backspace' ) {
        input.value = e.target.value.replace(/[^0-9]/g,"");
      }
    }
  });

  /** render */
  span.innerHTML = identityKey[key];
  spanDiv.appendChild(span);
  inputDiv.appendChild(input);
  div.appendChild(spanDiv);
  div.appendChild(inputDiv);

  return div;
}

export default Input
