import CheckBox from "../component/CheckBox";
import {termsList} from "../../model/termsList";

function TermsCheckBox(identityService) {
  //
  const termsDiv = document.createElement('div');
  const checkboxList = [];


  termsList.map(term => {
    //
    const checkBox = new CheckBox(identityService, term);
    checkboxList.push(checkBox);
    termsDiv.appendChild(checkBox);
  });

  const checkDiv = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.id = 'term_all';
  input.type = 'checkbox';

  label.htmlFor = 'term_all';
  label.innerText = '전체 동의하기';

  checkDiv.className = 'terms-div check-all';
  input.className = 'checkbox-div';
  label.className = 'checkbox-label';

  input.onclick = e => {
    //
    const { identity } = identityService;
    if (identity && identity.termsCode.length === termsList.length) {
      identityService.setIdentityProps('termsCode', []);
      checkboxList.map((div, index) => {
        const checkbox = div.querySelector('input');
        checkbox.checked = false;
        input.checked = false;
      })
    } else {
      identityService.setIdentityProps('termsCode', checkboxList.map((div, index) => (index)));
      checkboxList.map((div, index) => {
        const checkbox = div.querySelector('input');
        checkbox.checked = true;
        input.checked = true;
      })
    }

  };

  checkDiv.appendChild(input);
  checkDiv.appendChild(label);

  termsDiv.appendChild(checkDiv);


  return termsDiv;

}

export default TermsCheckBox;