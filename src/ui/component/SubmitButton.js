function SubmitButton(identityService, identityModel) {
  //
  const input = document.createElement('input');

  input.type = 'button';
  input.className = `send-btn`;
  input.value = '인증번호 요청';
  input.onclick = e => {

    const blankValue = identityModel.isBlank(identityService.getIdentity());
    const result = identityModel.isIncorrect(identityService.getIdentity());
    console.log('부적한 값들이 있습니다.: ', result);

    if (blankValue) {
      // alert(identityKey[blankValue] + ' 은(는) 필수값입니다.');

    } else if (result.length === 0) {
      console.log(identityService.getIdentity());

    }
  };

  return input;
}

export default SubmitButton;