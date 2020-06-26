import './style.css';
import IdentityService from './src/service/IdentityService';
import termsCodeModel from './src/model/termsCodeModel';
import Input from './src/ui/component/Input';
import SelectBox from "./src/ui/component/SelectBox";
import Button from "./src/ui/component/Button";
import {termsList} from "./src/model/termsList";
import CheckBox from "./src/ui/component/CheckBox";
import TermsCheckBox from "./src/ui/ui/TermsCheckBox";



const identityService = new IdentityService();
const div = document.querySelector('.container');
const termsCode = new termsCodeModel({title: 'title', title2: 'title2'});


const app = () => {
  //test//
  console.log('>>>',termsCode);
  termsCode.required = true;
  termsCode.title2 = 'sdfdsfsd';
  const termsCode2 = new termsCodeModel(termsCode);
  console.log('>>>2', termsCode2);
  //test//



  const carrierCode = new SelectBox('carrierCode', identityService);
  const phoneNumber = new Input('phoneNumber', identityService);
  const registerNumber = new Input('registerNumber', identityService);
  const nameInput = new Input('name', identityService);
  const sendSmsButton = new Button(identityService);




  // const checkBox = document.createElement('div');
  // const input = document.createElement('input');
  // const label = document.createElement('label');
  // input.type = 'checkbox';
  // label.htmlFor = input;
  // label.innerText = termsList[0].title;
  //
  // checkBox.appendChild(input);
  // checkBox.appendChild(label);

  const checkBoxTerm = new TermsCheckBox(identityService);




  /** render */
  div.appendChild(carrierCode);
  div.appendChild(phoneNumber);
  div.appendChild(registerNumber);
  div.appendChild(nameInput);
  div.appendChild(checkBoxTerm);

  div.appendChild(sendSmsButton);
};


app();
