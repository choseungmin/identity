import {validation} from '../../util/validation';
import {identityKey} from "../../model/identityKey";
import formatToPhone from "../../util/formatToPhone";
import formatToRegister from "../../util/formatToRegister";

// const identityService = new IdentityService();

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

  /** keydown */
  input.addEventListener('keydown', (e) => {
    //
    identityService.setIdentityProps(key, e.target.value);
  });

  if (key === 'phoneNumber') {
    input.addEventListener('keydown', formatToPhone);
  } else if (key === 'registerNumber') {
    input.addEventListener('keydown', formatToRegister);
  }


  /** focusout */
  input.addEventListener('focusout', (e) => {
    //
    let result;

    if (key === 'name') {
      result = validation.korCheck(e.target.value);
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
    const length = identityService.getIdentity()[key].length;
    if(e.key === 'Tab' || e.key === 'Shift') {
      e.preventDefault();
      return;
    }
    if (key === 'phoneNumber' && length === 10) {
      const result = validation.phoneCheck(e.target.value);
      if (!result) {

        document.getElementById(nextFocusTarget).focus();
      } else {
        inputDiv.className = `input-div ${key} invalid`;
      }

    } else if (key === 'registerNumber' && length === 6) {
      document.getElementById(nextFocusTarget).focus();
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
