class termsCodeModel {
  //
  constructor(termsCode) {
    if (termsCode) {
      if (termsCode.termsId) this.termsId = termsCode.termsId;
      if (termsCode.title) this.title = termsCode.title;
      if (termsCode.required) this.required = termsCode.required;
    }
  }
}

export default termsCodeModel;
