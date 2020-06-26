import './style.css';
import IdentityService from './src/service/IdentityService';
import termsCodeModel from './src/model/termsCodeModel';
import Input from './src/ui/component/Input';
import SelectBox from "./src/ui/component/SelectBox";
import SubmitButton from "./src/ui/component/SubmitButton";
import TermsCheckBox from "./src/ui/ui/TermsCheckBox";
import IdentityModel from "./src/model/IdentityModel";



const identityService = new IdentityService();
const identityModel = new IdentityModel();
const div = document.querySelector('.container');
const termsCode = new termsCodeModel({title: 'title', title2: 'title2'});


const app = () => {

  const carrierCode = new SelectBox('carrierCode', identityService, 'phoneNumber');
  const phoneNumber = new Input('phoneNumber', identityService, 13, 'registerNumber');
  const registerNumber = new Input('registerNumber', identityService, 10, 'name');
  const nameInput = new Input('name', identityService, 10);
  const sendSmsButton = new SubmitButton(identityService, identityModel);



  const checkBoxTerm = new TermsCheckBox(identityService);


  /** render */
  div.appendChild(carrierCode);
  div.appendChild(phoneNumber);
  div.appendChild(registerNumber);
  div.appendChild(nameInput);
  div.appendChild(checkBoxTerm);

  div.appendChild(sendSmsButton);
  document.getElementById('phoneNumber').focus();


};


app();
