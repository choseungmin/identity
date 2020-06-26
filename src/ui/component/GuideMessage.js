function GuideMessage () {
  //
  const div = document.createElement('div');
  const pTag = document.createElement('p');
  const hr = document.createElement('hr');
  pTag.innerText = '❔ 모든 정보가 올바르게 입력되었음에도 인증번호 요청이 되지 않는 경우 가입하신 통신사에 문의해주세요';
  pTag.className = 'guide';

  div.appendChild(pTag);
  div.appendChild(hr);

  return div;
}

export default GuideMessage;