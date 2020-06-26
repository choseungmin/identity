import {identityKey} from "../../model/identityKey";

function SubmitButton(identityService, identityModel) {
  //
  const input = document.createElement('input');

  input.type = 'button';
  input.className = `send-btn`;
  input.value = '인증번호 요청';
  input.onclick = (e) => {

    console.log('2', identityService.getIdentity());
    console.log(identityModel.isBlank(identityService.getIdentity()));

    const blankValue = identityModel.isBlank(identityService.getIdentity());
    if (blankValue) {
      alert(identityKey[blankValue] + ' 은(는) 필수값입니다.');
    }


  };


  return input;
}

export default SubmitButton;