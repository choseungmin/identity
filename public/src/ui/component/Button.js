function Button(identityService) {
  //
  const input = document.createElement('input');

  input.type = 'button';
  input.className = `send-btn`;
  input.value = '인증번호 요청';
  input.onclick = (e) => {

    console.log('2', identityService.getIdentity());
  };


  return input;
}

export default Button;