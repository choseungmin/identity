import CheckBox from "../component/CheckBox";
import {termsList} from "../../model/termsList";
import CheckboxAll from "../component/CheckBoxAll";

function TermsCheckBox(identityService) {
  //
  const termsDiv = document.createElement('div');
  const checkboxList = [];
  const checkBoxAll = new CheckboxAll(identityService, checkboxList);

  termsList.map(term => {
    //
    const checkBox = new CheckBox(identityService, term, checkBoxAll);
    checkboxList.push(checkBox);
    termsDiv.appendChild(checkBox);
  });



  termsDiv.appendChild(checkBoxAll);
  return termsDiv;

}

export default TermsCheckBox;