import './style.css';
import IdentityService from './service/IdentityService';
import Input from './ui/component/Input';
import SelectBox from "./ui/component/SelectBox";
import SubmitButton from "./ui/component/SubmitButton";
import TermsCheckBox from "./ui/ui/TermsCheckBox";
import IdentityModel from "./model/IdentityModel";
import GuideMessage from "./ui/component/GuideMessage";


const app = () => {

  const identityService = new IdentityService();
  const identityModel = new IdentityModel();
  const div = document.querySelector('.container');

  const carrierCode = new SelectBox('carrierCode', identityService, 'phoneNumber');
  const phoneNumber = new Input('phoneNumber', identityService, 13, 'registerNumber');
  const registerNumber = new Input('registerNumber', identityService, 10, 'name');
  const nameInput = new Input('name', identityService, 10);
  const sendSmsButton = new SubmitButton(identityService, identityModel);
  const guideMessage = new GuideMessage();

  const checkBoxTerm = new TermsCheckBox(identityService);


  /** render */
  div.appendChild(carrierCode);
  div.appendChild(phoneNumber);
  div.appendChild(registerNumber);
  div.appendChild(nameInput);
  div.appendChild(guideMessage);
  div.appendChild(checkBoxTerm);

  div.appendChild(sendSmsButton);
  document.getElementById('phoneNumber').focus();


};

app();
