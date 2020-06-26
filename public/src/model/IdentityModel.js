import { termsList } from "./termsList";
import { validation } from "../util/validation";

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
    if (!identity.carrierCode) return 'carrierCode';
    if (!identity.phoneNumber) return 'phoneNumber';
    if (!identity.registerNumber) return 'registerNumber';
    if (!identity.name) return 'name';

    const requilredList = termsList.filter(terms => terms.required);
    const count = requilredList.filter(required => identity.termsCode.includes(required.termsId) );
    if(requilredList.length !== count.length) return 'termsCode';
  }

  isIncorrect(identity) {
    //
    const inCorrectList = [];

    const { name, registerNumber, carrierCode, phoneNumber, termsCode } = identity;

    if (name) {
      if (name.length < 2 || name.length > 10 || validation.nameCheck(name)) {
        inCorrectList.push('name');
        
      }
    } else {
      inCorrectList.push('name');
    }

    if (registerNumber) {
      if (registerNumber.length < 7 || validation.numCheck(registerNumber)) {
        inCorrectList.push('registerNumber');
        
      }
    } else {
      inCorrectList.push('registerNumber');
    }
    
    if (!carrierCode) {
      inCorrectList.push('inCorrectList');
      
    }

    if (phoneNumber) {
      if (![10, 11].includes(phoneNumber.length) || validation.phoneCheck(phoneNumber)) {
        inCorrectList.push('phoneNumber');
      }
    } else {
      inCorrectList.push('phoneNumber');
    }

    if (termsCode) {
      const requilredList = termsList.filter(terms => terms.required);
      const count = requilredList.filter(required => termsCode.includes(required.termsId) );
      if(requilredList.length !== count.length) {
        inCorrectList.push('termsCode');
      };
    } else {
      inCorrectList.push('termsCode');
    }

    return inCorrectList;

  }
}

export default IdentityModel;
