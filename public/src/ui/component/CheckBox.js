function CheckBox(identityService, term, checkBoxAll) {
  //
  const checkDiv = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.id = 'term_'+term.termsId;
  input.type = 'checkbox';
  input.checked = identityService.getIdentity().termsCode[term.termsId];
  input.value = term.termsId;

  checkDiv.className = 'terms-div';
  input.className = 'checkbox-div';
  label.className = 'checkbox-label';

  label.htmlFor = 'term_'+term.termsId;
  label.innerText = term.title;

  input.onclick = e => {
    //
    identityService.setIdentityTerms(term.termsId);
    const input = checkBoxAll.querySelector('input');

    if (identityService.getIdentity().termsCode.length === 4) {
      input.checked = true;

    } else {
      input.checked = false;

    }
  };

  /** render */
  checkDiv.appendChild(input);
  checkDiv.appendChild(label);

  return checkDiv;
}

export default CheckBox;