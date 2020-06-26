class carrierCodeModel {
  //
  code;
  description;

  constructor(carrierCode) {
    //
    if(carrierCode) {
      if (carrierCode.code) this.code = carrierCode.code;
      if (carrierCode.description) this.description = carrierCode.description;
    }
  }
}

export default carrierCodeModel;
