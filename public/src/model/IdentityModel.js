import {validation} from '../util/validation';

class IdentityModel {
  //
  constructor(identity) {
    //
    this.name = null;
    this.registerNumber = null;
    this.carrierCode = null;
    this.phoneNumber = null;
    this.termsCode = [];

    if(identity) {
      if (identity.name) this.name = identity.name;
      if (identity.registerNumber) this.registerNumber = identity.registerNumber;
      if (identity.carrierCode) this.carrierCode = identity.carrierCode;
      if (identity.phoneNumber) this.phoneNumber = identity.phoneNumber;
      if (identity.termsCode) this.termsCode = identity.termsCode;
    }
  }

  isBlank(identity) {
    //
    if (!identity.name) return 'name';
    if (!identity.registerNumber) return 'registerNumber';
    if (!identity.carrierCode) return 'carrierCode';
    if (!identity.phoneNumber) return 'phoneNumber';
    if (!identity.termsCode) return 'termsCode';
  }

  isIncorrect(identity) {
    //
    const inCorrectList = [];


    if (identity.name) {

      if(identity.name.length > 10 || validation.korCheck(identity.name && identity.name)) {
        inCorrectList.push('name');
      }
    }

    if (identity.registerNumber) return 'registerNumber';
    if (identity.carrierCode) return 'carrierCode';

    if (identity.phoneNumber) {
      if (validation.numCheck(identity.phoneNumber)) {
        inCorrectList.push('phoneNumber');
      }
    }

    if (identity.termsCode) {
      if(identity.termsCode.length> 0) {

      }
      // return 'termsCode';
    }

    return inCorrectList;

  }
}

export default IdentityModel;
