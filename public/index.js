import './style.css';
import IdentityService from './src/service/IdentityService';
import termsCodeModel from './src/model/termsCodeModel';
import { validation } from './src/util/validation';
import Input from './src/ui/component/Input';
import SelectBox from "./src/ui/component/SelectBox";



const identityService = new IdentityService();

const div = document.querySelector('.container');
div.innerHTML = 'Webpack Loaded !!';

const termsCode = new termsCodeModel({title: 'title', title2: 'title2'});



const app = () => {
  //test//
  console.log('>>>',termsCode);
  termsCode.required = true;
  termsCode.title2 = 'sdfdsfsd';
  const termsCode2 = new termsCodeModel(termsCode);
  console.log('>>>2', termsCode2);
  //test//






  console.log(identityService.identity);

  const carrierCode = new SelectBox('carrierCode', identityService);
  const phoneNumber = new Input('phoneNumber', identityService);
  const registerNumber = new Input('registerNumber', identityService);
  const nameInput = new Input('name', identityService);


  const sendSmsButton = document.createElement('input');
  sendSmsButton.type = 'button';
  sendSmsButton.className = 'send-btn';
  sendSmsButton.value = '인증번호 요청';
  sendSmsButton.onclick = (e) => {
    console.log(identityService.getIdentity());
  };


  /** render */
  div.appendChild(carrierCode);
  div.appendChild(phoneNumber);
  div.appendChild(registerNumber);
  div.appendChild(nameInput);
  div.appendChild(sendSmsButton);
};


app();
