import {termsList} from "../../model/termsList";

function CheckBox(identityService, term) {
  //
  const checkDiv = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.id = 'term_'+term.termsId;
  input.type = 'checkbox';
  input.checked = identityService.getIdentity().termsCode[term.termsId];

  checkDiv.className = 'terms-div';
  input.className = 'checkbox-div';
  label.className = 'checkbox-label';

  label.htmlFor = 'term_'+term.termsId;
  label.innerText = term.title;

  input.onclick = e => {
    console.log(e);
    console.log(identityService.getIdentity().termsCode);
    // identityService.setIdentityProps('termsCode', [...identityService.getIdentity().termsCode, term.termsId]);
    identityService.setIdentityTerms(term.termsId);
  };



  checkDiv.appendChild(input);
  checkDiv.appendChild(label);


  return checkDiv;
}

export default CheckBox;