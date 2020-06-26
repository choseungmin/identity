import {validation} from '../../util/validation';
import IdentityService from '../../service/IdentityService';
import {identityKey} from "../../model/identityKey";

// const identityService = new IdentityService();

function Input(key, identityService) {
  //
  const div = document.createElement('div');
  const spanDiv = document.createElement('div');
  const span = document.createElement('span');
  const input = document.createElement('input');
  const inputDiv = document.createElement('div');

  div.className = 'box-div';
  inputDiv.className = 'input-div';

  /** keydown */
  input.addEventListener('keydown', (e) => {
    //
    console.log('3', identityService.identity);
    identityService.setIdentityProps(key, e.target.value);
  });

  /** focusout */
  input.addEventListener('focusout', (e) => {
    //
    let result;

    console.log(key);

    if (key === 'name') {
      result = validation.korCheck(e.target.value);
    } else if (key === 'phoneNumber') {
      result = validation.numCheck(e.target.value);
    } else if (key === 'registerNumber') {
      result = validation.numCheck(e.target.value)
    }


    if (result) {
      console.log('>>>>', result, e.target.value);
      console.log(inputDiv);
      inputDiv.className = `input-div ${key} invalid`;
    } else {
      inputDiv.className = `input-div ${key}`;
    }
  });

  /** focus */
  input.addEventListener('focus', (e) => {
    //
    console.log('1', identityService.identity);
    console.log(identityService.validationProps(identityService.identity))
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
